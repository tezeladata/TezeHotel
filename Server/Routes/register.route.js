import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "../Databases/all-users.json");

export const registerRouter = express.Router();

registerRouter.post("/register", async (req, res) => {
    const { fullname, age, email, password } = req.body;

    try {
        const data = await fs.readFile(filePath, "utf8");
        const users = JSON.parse(data);

        // Check if user already exists
        if (users.some((user) => user.email === email)) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        // Add new user
        users.push({ fullname, age, email, password });

        // Save updated users list
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});