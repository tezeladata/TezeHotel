import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "../Databases/all-users.json");

export const LoginRouter = express.Router();

LoginRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = await fs.readFile(filePath, "utf8");
        const users = JSON.parse(data);

        const user = users.find((user) => user.email === email);

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        user.isLoggedIn = true;
        await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf8");

        return res.status(200).json({ message: "Logged in successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
});

// for navbar functionality
LoginRouter.get("/login/getInfo", async (req, res) => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const users = JSON.parse(data);

        // Find the logged-in user
        const loggedInUser = users.find((user) => user.isLoggedIn === true);

        if (loggedInUser) {
            return res.status(200).json({
                isLoggedIn: loggedInUser.isLoggedIn,
                isAdmin: loggedInUser.isAdmin,
                email: loggedInUser.email
            });
        } else {
            return res.status(200).json({
                isLoggedIn: false,
                message: "No user is currently logged in",
            });
        }
    } catch (error) {
        console.error("Error reading users:", error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
        });
    }
});