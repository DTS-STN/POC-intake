<template>
<div :class="divclass">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="name" :data-cy="name + '-title'">{{labeltext}}</label>
    <ValidationProvider tag="div" :rules="rules" :name="name + '-val'" :data-cy="name +'-error'" v-slot="{ errors }">
        <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :name="name" :type="type" :data-cy="name + '-text-entry'" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        <span>{{ errors[0] }}</span>
    </ValidationProvider>
</div>
</template>

<script>
export default {
    name: "InsertPocTextBox",
    props: ["name", "rules", "value", "type", "labeltext", "divclass"]
};
</script>
