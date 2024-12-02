import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const STEP_PROMPTS = {
  1: (formData: any) => `Based on the company information provided, create an executive summary that:
- Opens with a powerful introduction of the company
- Highlights the company's experience (${formData.yearsInOperation} years) and industry expertise
- Incorporates the company's mission into the value proposition
- Presents the company's current success ($${formData.annualRevenue} annual revenue) professionally
- Identifies 3-4 key benefits of working with the company

Keep the tone professional yet engaging, and ensure all numerical data is contextualized effectively.`,
  2: "Create a detailed project breakdown including methodology, deliverables, and technical specifications based on the provided requirements.",
  3: "Develop a response addressing each evaluation criterion with specific evidence and metrics that demonstrate our qualifications.",
  4: "Craft a qualifications section that showcases our team's expertise, similar projects, and unique value propositions."
};

function getExpectedSchema(step: number) {
  switch (step) {
    case 1:
      case 1:
      return {
        executiveSummary: {
          overview: "string", // Company introduction and market position
          valueProposition: "string", // Unique value and mission-aligned benefits
          keyBenefits: ["string"] // 3-4 compelling reasons to choose this company
        },
        aboutUs: {
          companyIntroduction: "string", // Detailed company background
          whyChooseUs: ["string"], // Specific differentiators
          expectedOutcomes: ["string"] // What clients can expect
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