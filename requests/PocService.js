import axios from 'axios';

class PocService{
////To make calls for all PoCs

//   static getAllPocs() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const res = await axios.get(url + 'pocs');
//         const data = res.data;
//         resolve(
//           data.map(poc => ({
//             ...poc,
//             createdAt: new Date(poc.createdAt)
//           }))
//         );
//       } catch (err){
//         reject(err);
//       }
//     })
//   }

  static insertPoc(fname, lname, email, message){
    return axios.post('http://localhost:3000/api/insertpoc', null, { params: {fname: fname, lname: lname, email: email, message: message}});
  }
}
export default PocService;
