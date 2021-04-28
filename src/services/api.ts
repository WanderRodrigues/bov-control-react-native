import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: '2f08cd588bc7a36b45fd0862d5a306b0'
  }
})

export default api
