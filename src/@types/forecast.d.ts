import { Weather } from './weather'

export interface FeelsLike {
  day: number
  eve: number
  morn: number
  night: number
}

export interface Temp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface Current {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  weather: Weather[]
  wind_deg: number
  wind_speed: number
}

export interface Daily {
  clouds: number
  dew_point: number
  dt: number
  feels_like: FeelsLike[]
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  rain: number
  sunrise: number
  sunset: number
  temp: Temp
  uvi: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface Hourly {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pop: number
  pressure: number
  temp: number
  uvi: number
  visibility: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface ForecastResponse {
  current: Current
  daily: Daily[]
  hourly: Hourly[]
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
}
