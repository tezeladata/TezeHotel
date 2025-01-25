import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(bodyParser.json());
app.use(cors());

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

app.get("/analytics/pie", (req, res) => {
    readAndSendData("./Databases/customers.json", res);
});
app.get("/analytics/bar", (req, res) => {
    readAndSendData("./Databases/months.json", res);
});
app.get("/analytics/line", (req, res) => {
    readAndSendData("./Databases/years.json", res);
});

app.listen(3000, () => {
    console.log("Server started on https://localhost:3000");
});