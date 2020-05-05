import Vue from "vue";
import AppButton from "@/components/AppButton";
import AppTitles from "@/components/AppTitles";
import { ValidationProvider, ValidationObserver } from "vee-validate";

Vue.component("AppButton", AppButton);
Vue.component("AppTitles", AppTitles);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
