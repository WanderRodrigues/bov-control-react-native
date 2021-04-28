import React from 'react'
import { View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Main, Weather } from '../../@types/weather'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import Text from '../Text'
import {
  MinMaxContainer,
  TemperatureContainer,
  WeatherContainer,
  MinMax
} from './styles'

interface WeatherMainInfoProps {
  tempData: Main
  weatherData: Weather[]
}

const WeatherMainInfo: React.FC<WeatherMainInfoProps> = ({
  tempData,
  weatherData
}) => {
  const weatherDescription = weatherData
    .map(({ description }) => description)
    .join(',')

  return (
    <WeatherContainer>
      <TemperatureContainer>
        <Text size={90}>{Math.ceil(tempData.temp)}°</Text>
        <MinMaxContainer>
          <MinMax>
            <Text>{Math.ceil(tempData.temp_max)}°</Text>
            <EvilIcons
              name="chevron-up"
              size={sizes.text.heading1}
              color={colors.secondary}
            />
          </MinMax>
          <MinMax>
            <Text size={sizes.text.regular}>
              {Math.floor(tempData.temp_min)}°
            </Text>
            <EvilIcons
              size={sizes.text.heading1}
              name="chevron-down"
              color={colors.secondary}
            />
          </MinMax>
        </MinMaxContainer>
      </TemperatureContainer>
      <View>
        <Text size={20}>{weatherDescription}</Text>
      </View>
    </WeatherContainer>
  )
}

export default WeatherMainInfo
