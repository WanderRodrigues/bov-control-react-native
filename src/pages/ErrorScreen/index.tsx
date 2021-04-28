import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from '../../components/Text'
import sizes from '../../styles/sizes'
import colors from '../../styles/colors'

const ErrorContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

interface ErrorScreenProps {
  error: string
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error }) => {
  return (
    <ErrorContainer>
      <Ionicons name="warning-outline" size={50} color={colors.light} />
      <Text size={sizes.text.heading3}>{error}</Text>
    </ErrorContainer>
  )
}

export default ErrorScreen
