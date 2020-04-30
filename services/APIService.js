import axios from 'axios';

const api = `${process.env.VUE_APP_API_URL}`;
console.log(`using api: ${api}`);

class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs() { return axios.get(`${api}allpocs`); }
}
export default APIService;


class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs() { return axios.get(`${api}allpocs`); }
}
export default APIService;
