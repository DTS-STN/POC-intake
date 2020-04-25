<template>
  <div class="container">
    <div>
      <h1 class="title">{{ $t('form.successpage') }}</h1>
      <h2 class="subtitle"></h2>
      <div class="content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >{{ $t('form.firstname') }}</label>
                <ValidationProvider tag="div" rules="fname" name="firstName" v-slot="{ errors }">
                  <input
                    name="fname"
                    v-model="fname"
                    type="text"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >{{ $t('form.lastname') }}</label>
                <ValidationProvider tag="div" rules="lname" name="lastName" v-slot="{ errors }">
                  <input
                    name="lname"
                    v-model="lname"
                    type="text"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >{{ $t('form.email') }}</label>
                <ValidationProvider
                  tag="div"
                  rules="required|email"
                  name="E-mail"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="email"
                    type="text"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-message"
                >{{ $t('form.message') }}</label>
                <ValidationProvider tag="div" name="Message" rules="required" v-slot="{ errors }">
                  <textarea
                    v-model="message"
                    type="text"
                    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                  ></textarea>

                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>

            <button
              class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >Submit</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import PocService from "../requests/PocService";
export default {
  name: "Form",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
    },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    fname: "",
    lname: "",
    email: "",
    message: "",
    err: ''
  }),
  methods: {
    async onSubmit() {
      let confirm = await PocService.insertPoc(this.fname, this.lname, this.email, this.message);
      console.log(this.$data);
      this.$router.push("success");
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 85px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
