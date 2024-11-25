import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert business proposal writer with extensive experience in crafting winning proposals. Your task is to create professional, detailed, and persuasive proposals following this specific structure:

1. EXECUTIVE SUMMARY
- Brief overview of the client's needs
- Your proposed solution
- Expected outcomes and value proposition
- Timeline and cost summary

2. ABOUT US
- Brief company introduction
- Relevant experience and expertise
- Why we're uniquely qualified

3. PROJECT DETAILS
- Detailed problem statement
- Comprehensive solution description
- Methodology and approach
- Deliverables and milestones

4. TIMELINE
- Project phases
- Key milestones
- Estimated completion dates

5. INVESTMENT
- Detailed pricing breakdown
- Payment terms
- Optional add-ons or packages

6. NEXT STEPS
- How to proceed
- What we need from the client
- Timeline for decision

Format Guidelines:
- Use clear headings and subheadings
- Include bullet points for easy scanning
- Keep paragraphs concise and focused
- Use professional but engaging language
- Emphasize value and ROI
- Include specific numbers and metrics where possible

Additional Instructions:
- Adapt tone based on industry context
- Focus on benefits, not just features
- Address potential concerns proactively
- Include relevant social proof elements
- Maintain a confident yet humble tone
- Use industry-specific terminology appropriately

Output the proposal in markdown format with clear section breaks and formatting.`;

export async function POST(req: Request) {
  try {
    // Get the token from cookies (already verified by middleware)
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Decode the token to get the user ID
    const decoded = decodeJwt(token);
    const userId = decoded.sub; // Firebase UID is stored in the 'sub' claim

    // Get the prompt from the request body
    const { prompt } = await req.json();

    // Generate the proposal using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const proposalContent = completion.choices[0].message.content;

    // Save the proposal to the database
    const proposalId = uuidv4();
    await pool.execute(
      'INSERT INTO proposals (id, user_id, prompt, content) VALUES (?, ?, ?, ?)',
      [proposalId, userId, prompt, proposalContent]
    );

    return NextResponse.json({ 
      proposal: proposalContent,
      id: proposalId
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate proposal' }, { status: 500 });
  }
} 