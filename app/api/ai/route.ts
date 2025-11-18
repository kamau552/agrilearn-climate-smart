import { Groq } from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b",  // ⭐ using GPT-OSS-20B
      messages: [
        {
          role: "system",
          content:
            "You are an agricultural assistant helping Kenyan smallholder farmers. Give simple, practical, and friendly advice.",
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
