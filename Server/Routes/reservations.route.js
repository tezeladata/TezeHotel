import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "../Databases/all-users.json");

export const ReservationsRouter = express.Router();

const readDatabase = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading the database:", error);
        throw new Error("Unable to read database");
    }
};

const writeDatabase = async (data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing to the database:", error);
        throw new Error("Unable to write to database");
    }
};

ReservationsRouter.get("/reservations", async (req, res) => {
    try {
        const users = await readDatabase();

        const fullInfo = users.map((user) => {
            const name = user.fullname;
            const mail = user.email;
            const bookings = user.bookings
                ? user.bookings.map((reservation) => ({
                      room: reservation.room,
                      view: reservation.view,
                      startDate: reservation.startDate,
                      endDate: reservation.endDate,
                  }))
                : [];

            return { name, mail, bookings };
        });

        res.json(fullInfo);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: "Error fetching reservations" });
    }
});

ReservationsRouter.get("/:email/reservations/logout", async (req, res) => {
    try {
        const { email } = req.params;
        const users = await readDatabase();

        const userIndex = users.findIndex((user) => user.email === email);
        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        users[userIndex].isLoggedIn = false;

        await writeDatabase(users);

        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error occurred during logout:", error);
        res.status(500).json({ message: "Error during logout" });
    }
});