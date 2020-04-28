<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="labelfor" :data-cy="data_cy_label">{{labeltext}}}</label>
      <ValidationProvider tag="div" :rules="rules" :name="labelname" :data-cy="data_cy_label" v-slot="{ errors }">
          <input :name="name" :v-model="v_model" :type="type" :data-cy="data_cy_field" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          <span>{{ errors[0] }}</span>
      </ValidationProvider>
  </div>
</template>

<script>
export default {
    name: "PocInsertTextBox",
    props: [ type, labelfor, data_cy_label, data_cy_validation, data_cy_field, labeltext, labelname, rules, name, v_model ]
};
</script>
