import axios from 'axios'

const address = 'http://localhost:3000/api/'

const apiClient = axios.create({
  baseURL: address,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  insertPoc(fname, lname, email, message) {
    return apiClient.post(`insertpoc`, null, {
      params: { fname, lname, email, message }
    })
  },

  getPocs() {
    return apiClient.get('allpocs')
  }
}
