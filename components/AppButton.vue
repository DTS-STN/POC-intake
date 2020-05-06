<template>
  <button
    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    :data-cy="data_cy"
  >{{text}}</button>
</template>

<script>
export default { name: "AppButton", props: ["text", "data_cy"] };
</script>
