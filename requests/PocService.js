import axios from axios;

const url = 'http://localhost:3000/api/';

class PocService{
  static getAllPocs() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + 'pocs');
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (err){
        reject(err);
      }
    })
  }

  static insertPoc(text){
    return axios.post(url + 'insertpoc', { text });
  }
}
export default PocService;
