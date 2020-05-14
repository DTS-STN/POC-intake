import axios from 'axios'

class APIService {
  static insertPoc(poc) {
    return axios.post(`/api/insertpoc`, null, {
      params: {
        fname: poc.fname,
        lname: poc.lname,
        email: poc.email,
        message: poc.message
      }
    })
  }

  static getAllPocs() {
    return axios.get(`/api/allpocs`)
  }
}
export default APIService
