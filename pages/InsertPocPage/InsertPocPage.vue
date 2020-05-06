<template>
  <BasePage :title="$t('form.successpage')" :subtitle="'nothing yet!'">
    <BaseForm @form-submit="onSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <AppTextBox
          name="fn"
          rules="fname"
          v-model="poc.fname"
          type="text"
          :labeltext="$t('form.firstname')"
          divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
        />
        <AppTextBox
          name="ln"
          rules="lname"
          v-model="poc.lname"
          type="text"
          :labeltext="$t('form.lastname')"
          divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
        />
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <AppTextBox
          name="email"
          rules="required|email"
          v-model="poc.email"
          type="text"
          :labeltext="$t('form.email')"
          divclass="w-full px-3"
        />
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <AppTextArea
          name="message"
          rules="required"
          v-model="poc.message"
          type="text"
          :labeltext="$t('form.message')"
          divclass="flex flex-wrap -mx-3 mb-6"
        />
      </div>
      <div class="w-full px-3">
        <AppButton text="submit" data-_cy="submit-button" />
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
