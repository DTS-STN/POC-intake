import axios from 'axios';

class APIService{
  static insertPoc(api, fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getAllPocs(api) {
    console.log(`${api}`);
    return axios.get(`${api}allpocs`);
   }
}
export default APIService;
