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
            <AppTextBox name="fname" v-model="poc.fname" type="text" />
          </AppFormControl>

<<<<<<< HEAD
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
        <AppButton data_cy="submit-button">submit</AppButton>
      </div>
    </BaseForm>
=======
          <AppFormControl
            name="lname"
            rules="lname"
            divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"
            :labeltext="$t('form.lastname')"
          >
            <AppTextBox name="lname" v-model="poc.lname" type="text" />
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
          <AppButton text="submit" data-cy="submit-button" />
        </div>
      </form>
    </ValidationObserver>
>>>>>>> master
  </BasePage>
</template>

<script>
import APIService from '@/services/APIService'
export default {
  name: 'InsertPocPage',
  data: () => ({
<<<<<<< HEAD
    poc: [],
    err: '',
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
        .then(() => {
          this.$router.push('success')
        })
        .catch(error => {
          console.log(error)
          this.$router.push('error')
        })
=======
    poc: [{ fname: null }, { lname: null }, { email: null }, { message: null }]
  }),
  methods: {
    async onSubmit() {
      let confirm = await APIService.insertPoc(this.poc)
        .then(response => {
          //looks for server side validation errors
          if (response.data.errors) {
            var sserrs = response.data.errors;
            this.$refs.form.setErrors({
              fname: [
                sserrs.fname ? this.$t("server_validation_messages.fname") : ""
              ],
              lname: [
                sserrs.lname ? this.$t("server_validation_messages.lname") : ""
              ],
              email: [
                sserrs.email ? this.$t("server_validation_messages.email") : ""
              ],
              message: [
                sserrs.message
                  ? this.$t("server_validation_messages.message")
                  : ""
              ]
            });
            return;
          }
          this.$router.push("success");
        })
        .catch(err => {
          this.$router.push("error");
        });
>>>>>>> master
    }
  }
}
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
