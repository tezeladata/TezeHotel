import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { analyticsRouter } from "./Routes/analytics.route.js";
import { registerRouter } from "./Routes/register.route.js";
import {LoginRouter} from "./Routes/login.route.js";
import {BookingsRouter} from "./Routes/bookings.route.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// for analytics page
app.use(analyticsRouter)

// for registration
app.use(registerRouter)

// for login
app.use(LoginRouter)

// for bookings
app.use(BookingsRouter)

app.listen(3000, () => {
    console.log("Server started on https://localhost:3000");
});