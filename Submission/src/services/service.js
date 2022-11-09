import axios from 'axios'

const header = {
  "X-Api-Key": "198d54a187e0403baab585c94a255b79"
}
const _axios = axios.create({ baseURL: 'https://newsapi.org/v2/', headers: header })
const api = {
  search: function (q) {
    return _axios.get(`everything?q=${q}`)
  },
  //   trending: _axios.get('trending/anime'),
  //   airing: _axios.get('anime?filter[status]=current&sort=-userCount'),
  //   upcoming: _axios.get('anime?filter[status]=upcoming&sort=-userCount'),
  //   best: _axios.get('anime?sort=-averageRating'),
  //   popular: _axios.get('anime?sort=-userCount')
}

export default api