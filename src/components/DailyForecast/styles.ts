import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const DailyForecastContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${colors.light};
`

export const DailyContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

export const ForecastItem = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`
