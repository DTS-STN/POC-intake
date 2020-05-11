<template>
  <textarea
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :type="type"
    :data-cy="name + '-text-entry'"
    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
  />
</template>

<script>
export default {
  name: "AppTextArea",
  props: ["name", "value", "type"]
};
</script>