<template>
<div class="container">
    <div>
        <!-- AppTitles component -->
        <AppTitles :maintitle="$t('form.successpage')" subtitle="" data_cy="form-title" />
        <div class="content">
            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" data-cy="fn-title">{{ $t('form.firstname') }}</label>
                            <ValidationProvider tag="div" rules="fname" name="firstName" data-cy="fn-error" v-slot="{ errors }">
                                <input name="fname" v-model="poc.fname" type="text" data-cy="fn-text-entry" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name" data-cy="ln-title">{{ $t('form.lastname') }}</label>
                            <ValidationProvider tag="div" rules="lname" name="lastName" data-cy="ln-error" v-slot="{ errors }">
                                <input name="lname" v-model="poc.lname" type="text" data-cy="ln-text-entry" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email" data-cy="email-title">{{ $t('form.email') }}</label>
                            <ValidationProvider tag="div" rules="required|email" name="E-mail" data-cy="email-error" v-slot="{ errors }">
                                <input v-model="poc.email" type="text" data-cy="email-entry" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message" data-cy="message-title">{{ $t('form.message') }}</label>
                            <ValidationProvider tag="div" name="Message" rules="required" data-cy="message-error" v-slot="{ errors }">
                                <textarea v-model="poc.message" type="text" data-cy="message-entry" class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                <!-- AppButton component -->
                                <AppButton text="Submit: TODO Translate" />
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
import APIService from "~/services/APIService";
export default {
    name: "InsertPocForm",
    components: {
        ValidationProvider,
        ValidationObserver,
        AppTitles,
        AppButton
    },
    data: () => ({
        poc: [],
        err: ""
    }),
    methods: {
        async onSubmit() {
            let confirm = await APIService.insertPoc(
                this.poc.fname,
                this.poc.lname,
                this.poc.email,
                this.poc.message
            );
            console.log(this.$data);
            this.$router.push("success");
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
