<template>
  <textarea
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :type="type"
    :data-cy="name + '-text-entry'"
    class="textAreaStyle"
  />
</template>

<script>
export default {
  name: 'AppTextArea',
  props: ['name', 'value', 'type']
}
</script>


<style >
.textAreaStyle {
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
  @apply leading-tight;
  @apply leading-tight;
  @apply resize-none;
  @apply h-48;
}
.textAreaStyle:focus {
  @apply outline-none;
}
.textAreaStyle:focus {
  @apply bg-white;
}
.textAreaStyle:focus {
  @apply border-gray-500;
}
</style>
]