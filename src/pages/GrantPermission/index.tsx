import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Text from '../../components/Text'
import { strings } from '../../utils/constants'
import {
  requestPermission,
  PermissionString
} from '../../utils/locationPermissions'

const PermissionContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
interface GrantPermissionProps {
  setter: React.Dispatch<React.SetStateAction<PermissionString>>
}

const GrantPermission: React.FC<GrantPermissionProps> = ({ setter }) => {
  const handlePermission = async (): Promise<void> => {
    const perm = await requestPermission()
    console.log(perm)
    setter(perm)
  }

  return (
    <PermissionContainer>
      <Text>{strings.ask_for_permissions}</Text>
      <TouchableOpacity onPress={handlePermission}>
        <Text variant="SemiBold">Grant permission</Text>
      </TouchableOpacity>
    </PermissionContainer>
  )
}

export default GrantPermission
