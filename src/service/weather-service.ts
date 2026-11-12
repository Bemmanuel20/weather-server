import { config } from "../config/weather-config";
import "dotenv/config";
import { RealtimeResponse } from "../types/weather.type";

export async function getweather() {
  // validate the api key
  const apiKey = config.apiKey;
  if (!apiKey) {
    throw new Error("api key is not configured");
  }
  const location = config.location;
  if (!location) {
    throw new Error("location was not configured");
  }
  const weather = config.weatherBaseUrl;
  if (!weather) {
    throw new Error("weather base url was not configured");
  }
  // set the search parameters to match the same key & location
  const weatherApi = new URL(`${weather}`);
  weatherApi.searchParams.set("apikey", apiKey);
  weatherApi.searchParams.set("location", location);

  const response = await fetch(weatherApi, {
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    throw new Error(
      `An error occured whilst fetching data, ${response.status},${response.statusText}`,
    );
  }

  const result = (await response.json()) as RealtimeResponse;
  return result;
}
