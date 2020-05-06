<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" data-cy="form-title">
      <slot></slot>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "BaseForm",
  methods: {
    onSubmit() {
      this.$emit("form-submit");
    }
  }
};
</script>
