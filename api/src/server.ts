import express from "express";
import dotenv from "dotenv";
import gigRouter from "./routes/gig.routes.ts";
import authRouter from "./routes/auth.routes.ts";
import errorMiddleware from "./middleware/errorHandler.ts";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./lib/db.ts";
dotenv.config();

connectDB();

const app = express();

// middleware'ler
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/gigs", gigRouter);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`🎾 Server ${process.env.PORT}. portunu dinlemeye başladı`);
});
