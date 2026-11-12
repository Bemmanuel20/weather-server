import { Router } from "express";
import { weatherController } from "../controller/weather-controller";

export const weatherRouter = Router();

weatherRouter.get("/", weatherController);
