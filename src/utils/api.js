import axios from 'axios'
import { baseURL, api_key } from '../config'

const instance = axios.create({
  baseURL,
  params: { api_key }
})

export default (path, params = {}) => instance.get(path, { params })
