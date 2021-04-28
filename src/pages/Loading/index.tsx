import React from 'react'
import styled from 'styled-components/native'
import Spinner from 'react-native-spinkit'
import colors from '../../styles/colors'
import Text from '../../components/Text'
import sizes from '../../styles/sizes'

const LoadingContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner type="Bounce" size={100} color={colors.light} />
      <Text variant="Light" size={sizes.text.heading2}>
        Retrieving weather data
      </Text>
    </LoadingContainer>
  )
}

export default Loading
