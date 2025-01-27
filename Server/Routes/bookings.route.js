import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "../Databases/all-users.json");

export const BookingsRouter = express.Router();

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

// Get bookings for a user
BookingsRouter.get("/:email/bookings", async (req, res) => {
  const { email } = req.params;
  try {
    const users = await readDatabase();
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.bookings || []);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

// Create a new booking for a user
BookingsRouter.post("/:email/bookings", async (req, res) => {
  const { email } = req.params;
  const { room, view, startDate, endDate } = req.body;

  try {
    const users = await readDatabase();
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.bookings) {
      user.bookings = [];
    }

    const newBooking = {
      id: user.bookings.length + 1, room, view, startDate, endDate
    };

    user.bookings.push(newBooking);

    await writeDatabase(users);

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking" });
  }
});

// Update an existing booking
BookingsRouter.put("/:email/bookings/:bookingId", async (req, res) => {
  const { email, bookingId } = req.params;
  const { room, view, startDate, endDate } = req.body;

  try {
    const users = await readDatabase();
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const bookingIndex = user.bookings.findIndex((booking) => booking.id == bookingId);

    if (bookingIndex === -1) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const updatedBooking = { ...user.bookings[bookingIndex], room, view, startDate, endDate };
    user.bookings[bookingIndex] = updatedBooking;

    await writeDatabase(users);

    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: "Error updating booking" });
  }
});

// Delete a booking
BookingsRouter.delete("/:email/bookings/:bookingId", async (req, res) => {
  const { email, bookingId } = req.params;

  try {
    const users = await readDatabase();
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const bookingIndex = user.bookings.findIndex((booking) => booking.id == bookingId);

    if (bookingIndex === -1) {
      return res.status(404).json({ message: "Booking not found" });
    }

    user.bookings.splice(bookingIndex, 1);

    await writeDatabase(users);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
});

// logout
BookingsRouter.get("/:email/bookings/logout", async (req, res) => {
  const { email } = req.params;

  try {
    const users = await readDatabase();
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isLoggedIn = false;

    await writeDatabase(users);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error logging out" });
  }
});