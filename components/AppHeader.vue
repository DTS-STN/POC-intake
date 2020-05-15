<template>
  <nav id="nav-top-page" class="flex items-center justify-between flex-wrap bg-white-500 p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        
        <div v-if="this.$i18n.locale === 'en'" class="text-sm lg:flex-grow">
          <a :alt=" $t('header.linkAlt') " :href=" $t('header.link') ">  
          <img :alt=" $t('header.logoAlt') " width="25%" src="~/assets/img/canada_header.svg" /> </a>
        </div>
        <div v-else class="text-sm lg:flex-grow" >
            <a :alt=" $t('header.linkAlt') " :href=" $t('header.link') ">
            <img :alt=" $t('header.logoAlt') " width="25%" src="~/assets/img/canadaFr.svg" />  </a>
        </div>
        
        <div>
          <h1 class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"></h1>
          <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    computed:{
        availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
        }
    }
}
</script>

<style>

</style>