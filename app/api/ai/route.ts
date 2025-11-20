import { Groq } from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b", // ⭐ using GPT-OSS-20B
      messages: [
        {
          role: "system",
          content: `
          You are AgriLearn AI — an agricultural expert for Kenyan farmers.

          FORMAT ALL RESPONSES USING MARKDOWN:
          - Use headings (##)
          - Use bullet points (-)
          - Use numbered steps (1, 2, 3…)
          - ALWAYS use clean tables like:

          | Problem | Cause | Solution |
          |---------|-------|----------|
          | ...     | ...   | ...      |

          LANGUAGE RULES:
          - If user writes in Swahili → answer in Swahili.
          - If user writes in English → answer in English.
          - Keep answers simple, friendly, and practical.
          - Never output code blocks unless asked.
           `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error);
    return Response.json({ reply: "Unable to answer your question right now." });
  }
}
