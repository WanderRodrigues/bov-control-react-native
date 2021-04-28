import React from 'react'
import styled from 'styled-components/native'

import clear from '../../../assets/images/clear.png'
import clouds from '../../../assets/images/clouds.png'
import snow from '../../../assets/images/snow.png'
import thunderstorm from '../../../assets/images/thunderstorm.png'
import { WeatherTypes } from '../../utils/handleWeatherCode'

const StyledImage = styled.Image<ImageProps>`
  height: ${({ height }) => height}px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`
const BackgroundFilter = styled.View<FilterProps>`
  background-color: rgba(39, 39, 39, ${({ filter }) => filter});
  position: absolute;
  width: 100%;
  height: ${({ height }) => height}px;
  top: 0;
  left: 0;
  z-index: -9;
`

interface BackgroundProps {
  weather: WeatherTypes
  height: number
}

interface ImageProps {
  height: number
}

interface FilterProps {
  filter: number
  height: number
}

const Background: React.FC<BackgroundProps> = ({ weather, height }) => {
  const images = {
    clear,
    clouds,
    snow,
    thunderstorm,
    drizzle: clouds,
    rain: clouds
  }
  const alpha = {
    clear: 0.3,
    clouds: 0.5,
    snow: 0.3,
    thunderstorm: 0.5,
    drizzle: 0.5,
    rain: 0.5
  }

  return (
    <>
      <StyledImage height={height} source={images[weather]} />
      <BackgroundFilter height={height} filter={alpha[weather]} />
    </>
  )
}

export default Background
