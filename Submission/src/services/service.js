import axios from 'axios'

const header = {
  "X-Api-Key": "198d54a187e0403baab585c94a255b79"
}
const _axios = axios.create({ baseURL: 'https://newsapi.org/v2/', headers: header })
const api = {
  search: function (q) {
    return _axios.get(`everything?q=${q}`)
  },
  trending: function () {
    return _axios.get('top-headlines?country=id')
  }
}

export default api