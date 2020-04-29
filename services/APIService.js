import axios from 'axios';

//using default if there's no ENV var injected.
//const api=`${process.env.VUE_APP_API_URL}` == undefined ? "http://localhost:3000/api/" : `${process.env.VUE_APP_API_URL}`;
//Temporary hardcode of API
const api = "http://localhost:3000/api/";
console.log(`using API: ${api}`);

class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message}});
  }
}
export default APIService;
