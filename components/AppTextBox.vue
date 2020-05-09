<template>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :type="type"
    :data-cy="name + '-text-entry'"
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  />
</template>

<script>
export default {
  name: "AppTextBox",
  props: ["name", "value", "type"]
};
</script>
