import { getweather } from "../service/weather-service";
import { Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";

export async function weatherController(req: Request, res: Response) {
  try {
    const result = await getweather();
    return res.status(httpStatus.OK).json(result);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch weather data" });
  }
}
