import axios from 'axios'
import { baseURL, api_key } from '../config'

export default (path, params) =>
  axios.get(`${baseURL}${path}?`, {
    params: {
      api_key,
      ...params
    }
  })
