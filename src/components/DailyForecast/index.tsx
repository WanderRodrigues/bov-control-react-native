import { format } from 'date-fns'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Daily } from '../../@types/forecast'
import colors from '../../styles/colors'
import Text from '../Text'
import { DailyForecastContainer, DailyContainer, ForecastItem } from './styles'

interface HourlyForecastProps {
  forecastData: Daily[]
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecastData }) => {
  return (
    <DailyForecastContainer>
      <Text color={colors.black} variant="SemiBold">
        Next 7 days
      </Text>
      <DailyContainer>
        <ScrollView horizontal>
          {forecastData.map((forecast) => (
            <ForecastItem key={forecast.dt}>
              <Text color={colors.black}>
                {format(new Date(forecast.dt * 1000), 'ccc')}
              </Text>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`
                }}
                style={{ width: 35, height: 35 }}
                resizeMode="cover"
              />
              <Text color={colors.black}>
                {Math.round((forecast.temp.min + forecast.temp.max) / 2)}°
              </Text>
            </ForecastItem>
          ))}
        </ScrollView>
      </DailyContainer>
    </DailyForecastContainer>
  )
}

export default HourlyForecast
