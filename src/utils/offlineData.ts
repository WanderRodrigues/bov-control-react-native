import AsyncStorage from '@react-native-async-storage/async-storage'
import { ForecastResponse } from '../@types/forecast'
import { WeatherResponse } from '../@types/weather'

type HandleOfflineDataArgs = [WeatherResponse, ForecastResponse]

export const setOfflineData = async (
  responseArray: HandleOfflineDataArgs
): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      'CachedWeather',
      JSON.stringify(responseArray[0])
    )
    await AsyncStorage.setItem(
      'CachedForecast',
      JSON.stringify(responseArray[1])
    )
  } catch (error) {
    console.log('ERROR STORING CACHED DATA')
    console.error(error)
  }
}
