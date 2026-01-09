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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` API running on port ${PORT}`);
});
