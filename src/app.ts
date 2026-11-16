import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { weatherRouter } from "./routes/weather-route";
import { httpStatus } from "./utils/httpStatus";

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/weather", weatherRouter);

app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({ error: "Route not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ error: "Internal Server Error" });
});
