import React from 'react'
import { format } from 'date-fns'
import { Hourly } from '../../@types/forecast'
import Text from '../Text'
import { HourForecast, HourlyForecastContainer } from './styles'
import { Image } from 'react-native'

interface HourlyForecastProps {
  forecastData: Hourly[]
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecastData }) => {
  const filteredForecast = forecastData
    .map((data) => ({
      temp: Math.round(data.temp),
      time: data.dt,
      iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }))
    .filter((_, index) => index < 24)

  return (
    <HourlyForecastContainer horizontal>
      {filteredForecast.map((forecast) => (
        <HourForecast key={forecast.time}>
          <Text>{forecast.temp}°</Text>
          <Image
            source={{ uri: forecast.iconUrl }}
            style={{ width: 35, height: 35 }}
            resizeMode="cover"
          />
          <Text>{format(new Date(forecast.time * 1000), 'kk')}:00</Text>
        </HourForecast>
      ))}
    </HourlyForecastContainer>
  )
}

export default HourlyForecast
