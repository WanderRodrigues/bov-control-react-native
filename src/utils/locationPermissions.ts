import { PermissionsAndroid } from 'react-native'

export type PermissionString = 'granted' | 'denied' | 'never_ask_again' | null

export const checkPermission = async (): Promise<boolean> => {
  try {
    const permission = await PermissionsAndroid.check(
      'android.permission.ACCESS_FINE_LOCATION'
    )
    return !!permission
  } catch {
    return false
  }
}

export const requestPermission = async (): Promise<PermissionString> => {
  try {
    const permission = await PermissionsAndroid.request(
      'android.permission.ACCESS_FINE_LOCATION'
    )
    return permission
  } catch {
    return null
  }
}
