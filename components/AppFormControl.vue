<template>
  <div :class="divclass">
    <label class="formControlStyle" :for="name" :data-cy="name + '-title'">{{labeltext}}</label>
    <ValidationProvider
      tag="div"
      :rules="rules"
      :name="name"
      :data-cy="name +'-error'"
      v-slot="{ errors }"
    >
      <slot></slot>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: 'AppFormControl',
  props: ['name', 'rules', 'divclass', 'labeltext']
}
</script>

<style >
.formControlStyle {
  @apply block;
  @apply uppercase;
  @apply tracking-wide;
  @apply text-gray-700;
  @apply text-xs;
  @apply font-bold;
  @apply mb-2;
}
</style>