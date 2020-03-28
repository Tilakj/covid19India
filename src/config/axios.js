import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://api.covid19india.org/'
})

export default axios;