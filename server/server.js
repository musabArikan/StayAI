import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebHooks.js";
connectDB();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://stayai-frontend.onrender.com", // frontend prod
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebHooks);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
