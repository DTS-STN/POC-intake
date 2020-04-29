<template>
<div>
    <h2 class="subtitle"> {{ $t('list.title') }}</h2>
    <div class="container">
        <div v-for="poc in allPOC" v-bind:key="poc._id">

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
import APIService from '../services/APIService';
export default {
    name: "ListPoc",
    data: () => ({
      allPOC: null
    }),
    created() { this.allPOC = APIService.getPocs(); }
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
