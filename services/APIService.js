import axios from "axios";

class APIService {
  static insertPoc(fname, lname, email, message) {
    return axios.post(`/api/insertpoc`, null, {
      params: { fname: fname, lname: lname, email: email, message: message }
    });
  }

  static getAllPocs() {
    return axios.get(`/api/allpocs`);
  }

  static buildError(error) {}
}
export default APIService;
