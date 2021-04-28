import React from 'react'
import { format } from 'date-fns'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Text from '../Text/'
import sizes from '../../styles/sizes'
import { LocationContainer } from './styles'

interface LocationProps {
  city: string
}

const Location: React.FC<LocationProps> = ({ city }) => {
  return (
    <LocationContainer>
      <Text size={sizes.text.regular}>
        <FontAwesome5 name="map-marker-alt" solid size={sizes.text.regular} />
        &nbsp;&nbsp;&nbsp;{city}
      </Text>
      <Text size={sizes.text.small}>{format(new Date(), 'iiii, MMMM do')}</Text>
    </LocationContainer>
  )
}

export default Location
