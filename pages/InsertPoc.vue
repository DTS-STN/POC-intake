<template>
<div>
  <Form />
</div>
</template>

<script>
import Form from "~/components/Form.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    Logo,
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    fname: "",
    lname: "",
    email: "",
    message: ""
  }),
  methods: {
    onSubmit() {
      console.log(this.$data);
      this.$router.push("success");
    }
  }
};
</script>
