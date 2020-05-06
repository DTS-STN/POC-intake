<template>
  <BasePage :title="$t('form.successpage')" :subtitle="'nothing yet!'">
    <BaseForm @form-submit="onSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <AppFormControl
          name="fn"
          rules="fname"
          divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
          :labeltext="$t('form.firstname')"
        >
          <AppTextBox name="fn" v-model="poc.fname" type="text" />
        </AppFormControl>

        <AppFormControl
          name="ln"
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
        <AppButton text="submit" data_cy="submit-button" />
      </div>
    </BaseForm>
  </BasePage>
</template>

<script>
import APIService from "@/services/APIService";
export default {
  name: "InsertPocPage",
  data: () => ({
    poc: [],
    err: "",
    resSub: null
  }),
  methods: {
    async onSubmit() {
      let confirm = await APIService.insertPoc(
        `${this.$env.VUE_APP_API_URL}`,
        this.poc.fname,
        this.poc.lname,
        this.poc.email,
        this.poc.message
      )
        .then(() => {
          this.$router.push("success");
        })
        .catch(error => {
          console.log(error);
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
