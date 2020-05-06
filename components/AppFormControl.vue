<template>
  <div :class="divclass">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      :for="name"
      :data-cy="name + '-title'"
    >{{labeltext}}</label>
    <ValidationProvider
      tag="div"
      :rules="rules"
      :name="name + '-val'"
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
  name: "AppFormControl",
  props: ["name", "rules", "divclass", "labeltext"]
};
</script>
