import { getweather } from "../service/weather-service";
import { Request, Response } from "express";

export async function weatherController(req: Request, res: Response) {
  try {
    const result = await getweather();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch weather data" });
  }
}
