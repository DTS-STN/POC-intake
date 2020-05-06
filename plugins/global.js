import Vue from "vue";
import AppButton from "@/components/AppButton";
import AppTextBox from '@/components/AppTextBox.vue';
import AppTextArea from '@/components/AppTextArea.vue';
import BasePage from '@/components/BasePage.vue';
import BaseForm from '@/components/BaseForm.vue';
import { ValidationProvider, ValidationObserver } from "vee-validate";

Vue.component("AppButton", AppButton);
Vue.component("AppTextBox", AppTextBox);
Vue.component("AppTextArea", AppTextArea);
Vue.component("BaseForm", BaseForm);
Vue.component("BasePage", BasePage);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
