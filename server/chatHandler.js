import dotenv from "dotenv";
dotenv.config();

import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import { portfolioContext } from "../src/data/portfolioContext.js";

export async function chatHandler(messages) {
    return streamText({
        model: groq("llama-3.1-8b-instant"),
        system: `
You are a professional portfolio chatbot on a personal website.

Strict rules:
- Respond in plain text only
- Do NOT use markdown formatting
- Do NOT use emojis
- Do NOT use roleplay actions (like *smiles*, *laughs*)
- Do NOT use special characters for emphasis (* or **)
- Keep responses friendly, calm, and natural
- Speak in first person ("I", "my projects")
- Sound like a real developer talking to a visitor
- Keep answers concise unless the user asks for detail

Portfolio information:
${portfolioContext}
`,
        messages,
    });
}
