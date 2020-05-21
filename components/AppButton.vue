<template>
  <button class="appButtonStyle" :data-cy="data_cy">
    <slot></slot>
  </button>
</template>

<script>
export default { name: 'AppButton', props: ['data_cy'] }
</script>

<style >
.appButtonStyle {
  @apply shadow;
  @apply bg-teal-400;
  @apply text-white;
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
.appButtonStyle:hover {
  @apply bg-teal-400;
}

.appButtonStyle:focus {
  @apply shadow-outline;
}
.appButtonStyle:focus {
  @apply outline-none;
}
</style>
