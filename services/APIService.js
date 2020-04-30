import axios from 'axios';
;
const api = process.env.NODE_ENV=='production' ? "https://poc-intake.dev.dts-stn.com/api/" : "http://localhost:3000/api/";
console.log( process.env.NODE_ENV );
console.log(`using api: ${api}`);

class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs() { return axios.get(`${api}allpocs`); }
}
export default APIService;
