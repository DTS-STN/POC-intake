<template>
  <BasePage :title="$t('form.inputpage')" :subtitle="'nothing yet!'">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" data-cy="form-title">
        <div class="flex flex-wrap -mx-3 mb-6">
          <AppFormControl
            name="fname"
            rules="fname"
            divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
            :labeltext="$t('form.firstname')"
          >
            <AppTextBox name="fn" v-model="poc.fname" type="text" />
          </AppFormControl>

          <AppFormControl
            name="lname"
            rules="lname"
            divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
            :labeltext="$t('form.lastname')"
          >
            <AppTextBox name="ln" v-model="poc.lname" type="text" />
          </AppFormControl>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <AppFormControl
            name="email"
            rules="required|email"
            divclass="w-full px-3"
            :labeltext="$t('form.email')"
          >
            <AppTextBox name="email" v-model="poc.email" type="text" />
          </AppFormControl>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <AppFormControl
            name="message"
            rules="message"
            divclass="w-full px-3"
            :labeltext="$t('form.message')"
          >
            <AppTextArea name="message" v-model="poc.message" type="text" />
          </AppFormControl>
        </div>
        <div class="w-full px-3">
          <AppButton text="submit" data-_cy="submit-button" />
        </div>
      </form>
    </ValidationObserver>
  </BasePage>
</template>

<script>
import APIService from "@/services/APIService";
export default {
  name: "InsertPocPage",
  data: () => ({
    poc: [],
    err: "",
    servererrors: null,
    resSub: null
  }),
  methods: {
    async onSubmit() {
      let confirm = await APIService.insertPoc(
        this.poc.fname,
        this.poc.lname,
        this.poc.email,
        this.poc.message
      )
        .then(response => {
          //looks for server side validation errors
          if (response.data.errors) {
            var sserrs = response.data.errors;
            this.$refs.form.setErrors({
              fname: [sserrs.fname ? sserrs.fname.message : ""],
              lname: [sserrs.lname ? sserrs.lname.message : ""],
              email: [sserrs.email ? sserrs.email.message : ""],
              message: [sserrs.message.message ? sserrs.message.message : ""]
            });
            return;
          }
          this.$router.push("success");
        })
        .catch(err => {
          this.$router.push("error");
        });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
