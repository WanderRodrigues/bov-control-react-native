import React, { useEffect, useState, useContext, Fragment } from 'react'
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service'
import api from '../../services/api'
import { WeatherResponse } from '../../@types/weather'
import { BgContext } from '../../components/Container'
import Location from '../../components/Location'
import { MainContainer } from './styles'
import WeatherMainInfo from '../../components/WeatherMainInfo'
import ClimateInfo from '../../components/ClimateInfo'
import { ForecastResponse } from '../../@types/forecast'
import HourlyForecast from '../../components/HourlyForecast'
import DailyForecast from '../../components/DailyForecast'
import { WeatherCodeToString } from '../../utils/handleWeatherCode'
import { setOfflineData } from '../../utils/offlineData'
import { errors } from '../../utils/constants'
import Loading from '../Loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ErrorScreen from '../ErrorScreen'

const Main: React.FC = () => {
  const [userCoords, setUserCoords] = useState<GeoCoordinates | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherResponse>()
  const [forecastData, setForecastData] = useState<ForecastResponse>()
  const [connectionError, setConnectionError] = useState<string | null>(null)
  const { setImage } = useContext(BgContext)

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (location) => setUserCoords(location.coords),
      (err) => console.error(err),
      {
        maximumAge: 0,
        enableHighAccuracy: true,
        showLocationDialog: true
      }
    )
  }, [])

  useEffect(() => {
    if (!userCoords) return

    const fetchWeather = async (): Promise<void> => {
      try {
        const weatherResponse = await api.get('weather', {
          params: {
            lat: userCoords.latitude,
            lon: userCoords.longitude,
            units: 'metric'
          }
        })

        const forecastResponse = await api.get('onecall', {
          params: {
            lat: userCoords.latitude,
            lon: userCoords.longitude,
            exclude: 'minutely,alerts',
            units: 'metric'
          }
        })

        const weather: WeatherResponse = weatherResponse.data
        const forecast: ForecastResponse = forecastResponse.data
        setWeatherData(weather)
        setForecastData(forecast)

        setImage(WeatherCodeToString(weather.weather[0].id))
        setOfflineData([weather, forecast])
      } catch {
        try {
          const cachedWeather = await AsyncStorage.getItem('CachedWeather')
          const cachedForecast = await AsyncStorage.getItem('CachedForecast')

          if (!cachedWeather || !cachedForecast) {
            throw new Error(errors.no_cached_data)
          }

          setImage(WeatherCodeToString(JSON.parse(cachedWeather).weather[0].id))
          setWeatherData(JSON.parse(cachedWeather))
          setForecastData(JSON.parse(cachedForecast))
          return
        } catch (e) {
          return setConnectionError(e.message)
        }
      }
    }

    fetchWeather()
  }, [userCoords])

  return (
    <MainContainer>
      {weatherData && forecastData ? (
        <Fragment>
          <Location city={weatherData.name} />
          <WeatherMainInfo
            tempData={weatherData.main}
            weatherData={weatherData.weather}
          />
          <ClimateInfo
            clouds={weatherData.clouds.all}
            wind={weatherData.wind.speed}
          />
          <HourlyForecast forecastData={forecastData.hourly} />
          <DailyForecast forecastData={forecastData.daily} />
        </Fragment>
      ) : connectionError ? (
        <ErrorScreen error={connectionError} />
      ) : (
        <Loading />
      )}
    </MainContainer>
  )
}

export default Main
