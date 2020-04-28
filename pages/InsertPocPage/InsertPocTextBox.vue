<template>
<div :class="divclass">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="labelfor" :data-cy="data_cy_label">{{labeltext}}</label>
    <ValidationProvider tag="div" :rules="rules" :name="validname" :data-cy="data_cy_label" v-slot="{ errors }">
        <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :name="name" :type="type" :data-cy="data_cy_field" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        <span>{{ errors[0] }}</span>
    </ValidationProvider>
</div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
    name: "InsertPocTextBox",
    props: ["name", "rules", "value", "type", "labelfor", "labeltext", "labelname", "data_cy_label", "data_cy_validation", "data_cy_field", "validname", "divclass"],
    components: {
        ValidationProvider
    }
};
</script>
