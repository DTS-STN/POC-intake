<template>
  <div>
    <h2 class="subtitle">{{ $t('list.title') }}</h2>

    <PocData v-for="(poc, index) in pocs" :key="index" :poc="poc" :data-index="index" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PocData from './PocData.vue'

export default {
  components: {
    PocData
  },
  
  async created(){
    this.$store.dispatch('pocs/fetchPocs')
  },

  computed: {
    ...mapState('pocs', ['pocs'])
  },

  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
