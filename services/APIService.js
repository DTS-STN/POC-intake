import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api/`,
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
