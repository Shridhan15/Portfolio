import express from "express";
import cors from "cors";
import { chatHandler } from "./chatHandler.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;

    const result = await chatHandler(messages);

    res.setHeader("Content-Type", "text/plain");

    for await (const chunk of result.textStream) {
        const cleanChunk = chunk
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/_/g, "");
        res.write(cleanChunk    );
    }

    res.end();
});

app.listen(3000, () => {
    console.log("✅ Local API running on http://localhost:3000");
});
