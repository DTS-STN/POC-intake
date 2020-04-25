<template>
  <div class="container">
    <div class="shadowborder">

      <div class="items-center checkmark">
        <img src="/success.png" width="250" height="250" alt="checkmark" title="checkmark" />
      </div>

      <h1 class="title">{{ $t('success.success') }}</h1>
      <h2 class="subtitle">{{ $t('success.title') }}</h2>

      <p class="description">{{ $t('success.subTitle') }}</p>

      <div class="flex items-center text-center">
        <button
          class="shadow button focus:shadow-outline focus:outline-none font-bold p-4 rounded"
          type="button" v-on:click="backHome"
        >{{ $t('success.back') }}</button>
      </div> 

    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      backHome() {
        this.$router.push('/en/index')
      }
    }
  };
</script>

<style>

.container {
  @apply font-sans mt-8 flex justify-center items-center text-center mx-auto;
}
.shadowborder {
  @apply shadow-2xl w-1/2 min-w-0 h-auto min-h-0;
}
.checkmark {
  @apply flex justify-center h-56 min-h-0;
}
.title {
  @apply font-normal text-blue-400 text-5xl mt-10 mb-12 tracking-wide;
}
.subtitle {
  word-spacing: 5px;
  @apply font-normal text-3xl mb-12 text-gray-600;
}
.description {
  word-spacing: 2px;
  @apply font-normal text-2xl mb-12 text-gray-600;
}
.button {
  @apply w-64 min-w-0 text-2xl m-auto bg-gray-700 text-white rounded-full py-2 px-4 mb-16;
}
.button:hover {
  @apply bg-gray-800 text-white;
}
</style>
