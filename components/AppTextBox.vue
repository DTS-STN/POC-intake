<template>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :type="type"
    :data-cy="name + '-text-entry'"
    class="inputTextBox"
  />
</template>

<script>
export default {
  name: 'AppTextBox',
  props: ['name', 'value', 'type']
}
</script>

<style >
.inputTextBox {
  @apply appearance-none;
  @apply block;
  @apply w-full;
  @apply bg-gray-200;
  @apply text-gray-700;
  @apply border;
  @apply border-gray-200;
  @apply rounded;
  @apply py-3;
  @apply px-4;
  @apply mb-3;
  @apply leading-tight;
}
.inputTextBox:focus {
  @apply outline-none;
}
.inputTextBox:focus {
  @apply bg-white;
}
</style>