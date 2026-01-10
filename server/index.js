import express from "express";
import cors from "cors";
import { chatHandler } from "./chatHandler.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// 1. Configure __dirname for ES Modules (since you are using "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 2. Serve Static Files from the "dist" folder (located one level up)
app.use(express.static(path.join(__dirname, "../dist")));

// API Route
app.post("/api/chat", async (req, res) => {
    try {
        const { messages } = req.body;
        const result = await chatHandler(messages);

        res.setHeader("Content-Type", "text/plain");

        for await (const chunk of result.textStream) {
            const cleanChunk = chunk
                .replace(/\*\*/g, "")
                .replace(/\*/g, "")
                .replace(/_/g, "");
            res.write(cleanChunk);
        }
        res.end();
    } catch (error) {
        console.error("Chat Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 3. The "Catch-All" Route
// This ensures that if a user goes to /about or refreshes the page,
// the server sends index.html so React Router can take over.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});