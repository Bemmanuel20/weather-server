export interface ForecastItem {
  time: string;
  values: {
    humidity: number;
    temperature: number;
  };
}

export interface RealtimeResponse {
  data: {
    time: string;
    values: { temperature?: number; humidity?: number };
  };
}
