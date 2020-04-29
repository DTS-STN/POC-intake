import axios from 'axios';

const api ="http://localhost:3000/api/";
console.log(`using API: ${api}`);

class APIService{
  static insertPoc(fname, lname, email, message){
    return axios.post(`${api}insertpoc`, null, { params: {fname: fname, lname: lname, email: email, message: message} });
  }

  static getPocs() {
    var something;
    axios.get(`${api}`).then(response => {something=response;});
  return something;
  }


}
export default APIService;
