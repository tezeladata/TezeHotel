import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { analyticsRouter } from "./Routes/analytics.route.js";
import { registerRouter } from "./Routes/register.route.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// for analytics page
app.use(analyticsRouter)

// for registration
app.use(registerRouter)


app.listen(3000, () => {
    console.log("Server started on https://localhost:3000");
});