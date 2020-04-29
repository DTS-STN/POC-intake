import axios from 'axios';

class APIService{
  static insertPoc(url, fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs(url) { return axios.get(`${url}api/allpocs`); }
}
export default APIService;
