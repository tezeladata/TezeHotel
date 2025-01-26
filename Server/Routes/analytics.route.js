import express from "express";
import fs from "fs";

export const analyticsRouter = express.Router();

const readAndSendData = (filePath, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Failed to read file" });
        }

        try {
            console.log(`${filePath} data:`, data);
            const jsonData = JSON.parse(data);
            res.send(jsonData);
        } catch (parseError) {
            res.status(500).json({ error: "Failed to parse JSON" });
        }
    });
};

analyticsRouter.get("/analytics/pie", (req, res) => {
    readAndSendData("./Databases/customers.json", res);
});
analyticsRouter.get("/analytics/bar", (req, res) => {
    readAndSendData("./Databases/months.json", res);
});
analyticsRouter.get("/analytics/line", (req, res) => {
    readAndSendData("./Databases/years.json", res);
});