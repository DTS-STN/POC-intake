import axios from 'axios';
const api=`${process.env.VUE_APP_API_URL}`;
class PocService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message}});
  }
}
export default PocService;
