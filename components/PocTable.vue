<script>
import PocService from '../requests/PocService';
export default {
  name: 'PocServiceComponent',
  data(){
    return {
      pocs: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try{
      this.pocs = await PocService.getAllPocs();
    } catch(err){this.error = err.message;}
  }
}
</script>
