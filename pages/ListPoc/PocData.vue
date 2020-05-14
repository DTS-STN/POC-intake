<template>
  <div>
    <div class="container">
      <div class="datagrid">
        <div class="dataCell">
          <div class="celldiv">
            <span class="text-black">name :&nbsp; </span> {{ poc.fname }}
          </div>
          <div class="celldiv">
            <span class="text-black">lastname :&nbsp; </span> {{ poc.lname }}
          </div>
        </div>
        <div class="dataCell">
          <span class="text-black">email :&nbsp; </span> {{ poc.email }}
        </div>
        <div class="dataCell description">
          <span class="text-black">message :&nbsp; </span> {{ poc.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPocData',

  props: {
    // eslint-disable-next-line vue/require-default-prop
    poc: Object
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
  @apply border-solid border border-blue-600 text-center w-full min-w-full h-auto min-h-0 p-1 mb-6 shadow-lg rounded;
}
.dataCell {
  @apply flex flex-wrap  mt-2 mb-2 pl-2;
}
.celldiv {
  @apply flex mr-1 w-5/12 min-w-0;
}
.description {
  @apply font-normal mb-1;
}
</style>
