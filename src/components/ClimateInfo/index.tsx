import React from 'react'
import { format } from 'date-fns'
import sizes from '../../styles/sizes'
import Text from '../Text'
import { ClimateContainer, ClimateItem } from './styles'

interface ClimateInfoProps {
  clouds: number
  wind: number
}

const index: React.FC<ClimateInfoProps> = ({ clouds, wind }) => {
  return (
    <ClimateContainer>
      <ClimateItem>
        <Text size={sizes.text.small}>Time</Text>
        <Text size={sizes.text.small}>{format(new Date(), 'h:mm aa')}</Text>
      </ClimateItem>
      <ClimateItem>
        <Text size={sizes.text.small}>Clouds</Text>
        <Text size={sizes.text.small}>{clouds}%</Text>
      </ClimateItem>
      <ClimateItem>
        <Text size={sizes.text.small}>Wind</Text>
        <Text size={sizes.text.small}>{wind} mt/s</Text>
      </ClimateItem>
    </ClimateContainer>
  )
}

export default index
