<template>
  <div>
    <h2 class="subtitle">{{ $t('list.title') }}</h2>

    <PocData
      v-for="(poc, index) in pocs"
      :key="index"
      :poc="poc"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PocData from './PocData.vue'

export default {
  components: {
    PocData
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch('pocs/fetchPocs')
    } catch (e) {
      // error({
      //   statusCode: 503,
      //   message: 'Unable to fetch events at this time. Please try again.'
      // })
      console.log(e)
    }
  },

  computed: mapState({
    pocs: state => state.pocs.pocs
  }),

  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
