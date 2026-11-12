import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

export const config = {
  apiKey: required("API_KEY"),
  location: required("LOCATION"),
  weatherBaseUrl: required("WEATHER_BASE_URL"),
};
