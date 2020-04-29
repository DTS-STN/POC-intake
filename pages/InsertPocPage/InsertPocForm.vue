<template>
<div class="container">
    <div>
        <AppTitles :maintitle="$t('form.successpage')" subtitle="" data_cy="form-title" />
        <div class="content">
            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <InsertPocTextBox name="fname" rules="fname" v-model="poc.fname" type="text" labelfor="grid-first-name" :labeltext="$t('form.firstname')" validname="firstName" data_cy_label="fn-title" data_cy_validation="fn-error" data_cy_field="fn-text-entry" divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"/>
                        <InsertPocTextBox name="lname" rules="lname" v-model="poc.name" type="text" labelfor="grid-last-name" :labeltext="$t('form.lastname')" validname="lastName" data_cy_label="ln-title" data_cy_validation="ln-error" data_cy_field="ln-text-entry" divclass="w-full md:w-1/2 px-3 mb-6 md:mb-0"/>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <InsertPocTextBox name="email" rules="required|email" v-model="poc.email" type="text" labelfor="grid-email" :labeltext="$t('form.email')" validname="E-mail" data_cy_label="email-title" data_cy_validation="email-error" data_cy_field="email-entry" divclass="w-full px-3"/>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message" data-cy="message-title">{{ $t('form.message') }}</label>
                            <ValidationProvider tag="div" name="Message" rules="required" data-cy="message-error" v-slot="{ errors }">
                                <textarea v-model="poc.message" type="text" data-cy="message-entry" class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                <AppButton text='submit' data_cy="submit-button" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import AppTitles from "~/components/AppTitles";
import AppButton from "~/components/AppButton";
import InsertPocTextBox from "./InsertPocTextBox";
import APIService from "~/services/APIService";
export default {
    name: "InsertPocForm",
    components: {
        ValidationProvider,
        ValidationObserver,
        AppTitles,
        AppButton,
        InsertPocTextBox
    },
    data: () => ({
        poc: [],
        err: "",
        resSub: null

    }),
    methods: {
        async onSubmit() {
            let confirm = await APIService.insertPoc(
                this.poc.fname,
                this.poc.lname,
                this.poc.email,
                this.poc.message
            ).then(() => {this.$router.push("success");}).catch( error => {console.log(error); this.$router.push("error"); });
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
