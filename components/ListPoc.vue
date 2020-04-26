<template>
  <div>

    <h2 class="subtitle">List of all POC</h2>
    
    <div class="container">
      <div v-for="poc in allPOC" v-bind:key="poc._id" >

        <div class="datagrid">
          <div class="dataCell">
            <div class="celldiv">
              {{ poc.fname }} 
            </div>
            <div class="celldiv">
              {{ poc.lname }}
            </div>
          </div>
          <div class="dataCell">
              {{ poc.email }}
          </div>
          <div class="dataCell description">
              {{ poc.message }}
          </div>
        </div>

      </div>
    </div>

  </div>
</template>


<script>

  import axios from 'axios';
  const api=`${process.env.VUE_APP_API_URL}`;

  export default {
    name: "ListPoc",

    data() {
      return {
        allPOC : null
      }
    },

    methods: {
      fetchPoc () {
        axios.get ( `${api}` ) 
          .then( response => {
            (this.allPOC = response.data)
          })
          .catch( error => {
            console.log(error)
          })
      }
    },
    created() {
      this.fetchPoc()
    }
  }
</script>


<style>
.subtitle {
  word-spacing: 5px;
  @apply font-normal text-3xl mt-4 mb-4 text-center text-gray-600;
}
.container {
  @apply font-sans mt-2 flex-auto justify-center items-center text-blue-600 mx-auto w-11/12 min-w-0 h-auto min-h-0;
}
.datagrid {
  @apply border-solid border border-blue-600 text-center w-full min-w-full h-auto min-h-0 p-1 mb-2;
}
.dataCell {
  @apply flex flex-wrap  mt-2 mb-2 ;
}
.celldiv {
  @apply flex mr-1 w-5/12 min-w-0 ;
}
.description {
  @apply font-normal mb-1;
}
</style>