export type WeatherTypes =
  | 'thunderstorm'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'clear'
  | 'clouds'

export const WeatherCodeToString = (code: number): WeatherTypes => {
  const codeGroup = Number(String(code).split('')[0])
  switch (codeGroup) {
    case 2:
      return 'thunderstorm'
    case 3:
      return 'drizzle'
    case 5:
      return 'rain'
    case 6:
      return 'snow'
    case 8:
      return code === 800 ? 'clear' : 'clouds'
    default:
      return 'clear'
  }
}
