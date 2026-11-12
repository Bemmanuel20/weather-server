import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { weatherRouter } from "./routes/weather-route";

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/weather", weatherRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});
