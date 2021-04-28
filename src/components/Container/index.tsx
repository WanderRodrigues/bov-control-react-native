import React, { useState } from 'react'
import { Dimensions, NativeModules, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { WeatherTypes } from '../../utils/handleWeatherCode'
import Background from '../Background'

const screenHeight = Dimensions.get('screen').height
const statusBarHeight = Math.floor(NativeModules.StatusBarManager.HEIGHT)
export const BgContext = React.createContext({
  image: 'clear',
  setImage: (arg: string) => {}
})

const StyledContainer = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  height: ${screenHeight}px;
  background-color: #333;
`

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [bgImage, setBgImage] = useState<WeatherTypes>('clear')
  const value = {
    image: bgImage,
    setImage: setBgImage as (arg: string) => void
  }

  return (
    <BgContext.Provider value={value}>
      <StyledContainer>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar
            translucent={true}
            barStyle="light-content"
            backgroundColor="transparent"
          />
          {children}
        </ScrollView>
        <Background height={screenHeight} weather={bgImage} />
      </StyledContainer>
    </BgContext.Provider>
  )
}

export default Container
