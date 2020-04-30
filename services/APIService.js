import axios from '~/plugins/axios';

class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs() { return axios.get(`allpocs`); }
}
export default APIService;
