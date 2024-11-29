import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const STEP_PROMPTS = {
  1: `You are writing the Executive Summary and About Us sections of a business proposal. Create a compelling introduction that includes:
- A brief, engaging overview of the proposed solution
- Why we're the right choice for this project
- Key benefits and expected outcomes

Use the following information:`,

  2: `You are writing the Project Details section of a business proposal. Based on the provided Statement of Work and Instructions, create a detailed breakdown that includes:
- Clear understanding of requirements
- Proposed methodology and approach
- Specific deliverables and milestones
- Technical specifications where relevant

Use the following information:`,

  3: `You are writing the Evaluation Response section of a business proposal. Create a point-by-point response that:
- Directly addresses each evaluation criterion
- Provides specific evidence of our qualifications
- Highlights our competitive advantages
- Includes relevant metrics and past successes

Use the following information:`,

  4: `You are writing the Qualifications section of a business proposal. Create a compelling narrative that:
- Showcases relevant experience and expertise
- Highlights key team members and capabilities
- Includes specific examples of similar projects
- Emphasizes unique value propositions

Use the following information:`
};

function getExpectedSchema(step: number) {
  switch (step) {
    case 1:
      return {
        executiveSummary: {
          overview: "string",
          valueProposition: "string",
          keyBenefits: ["string"]
        },
        aboutUs: {
          companyIntroduction: "string",
          whyChooseUs: ["string"],
          expectedOutcomes: ["string"]
        }
      };
    case 2:
      return {
        projectDetails: {
          understanding: "string",
          methodology: {
            approach: "string",
            phases: [
              {
                name: "string",
                description: "string",
                duration: "string"
              }
            ]
          },
          deliverables: [
            {
              name: "string",
              description: "string",
              timeline: "string"
            }
          ],
          technicalSpecs: {
            technologies: ["string"],
            requirements: ["string"],
            standards: ["string"]
          }
        }
      };
    // Add cases for steps 3 and 4 as needed
    case 3:  
      return {
        "evaluationResponse": {
    "criteria": [
      {
        "criterion": "string",
        "response": "string",
        "evidence": ["string"],
        "metrics": {
          "description": "string",
                value: "string"
              }
            }
          ],
          competitiveAdvantages: ["string"],
          successMetrics: [
            {
              metric: "string",
              value: "string",
              context: "string"
            }
          ]
        }
      };
    case 4:
      return {
        "qualifications": {
    "expertise": {
      "summary": "string",
      "specializations": ["string"]
    },
    "teamMembers": [
      {
        "name": "string",
        "role": "string",
        "expertise": "string",
        "relevantExperience": "string"
      }
    ],
    "similarProjects": [
      {
        "name": "string",
        "description": "string",
        "outcomes": ["string"],
        "relevance": "string"
            }
          ],
          uniqueValueProps: ["string"]
        }
      };
    default:
      return {};
  }
}

export async function POST(req: Request) {
  try {
    const { step, formData } = await req.json();
    
    const basePrompt = STEP_PROMPTS[step as keyof typeof STEP_PROMPTS];
    if (!basePrompt) {
      return NextResponse.json({ error: 'Invalid step' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: `You are an expert business proposal writer. 
          Output in a strict JSON format following this structure for step ${step}: 
          ${JSON.stringify(getExpectedSchema(step), null, 2)}`
        },
        {
          role: "user",
          content: `${basePrompt}\n\n${JSON.stringify(formData, null, 2)}`
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    return NextResponse.json({ 
      content: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error generating proposal step:', error);
    return NextResponse.json(
      { error: 'Failed to generate proposal step' },
      { status: 500 }
    );
  }
} 