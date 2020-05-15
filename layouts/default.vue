<template>
  <div>
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


    <nuxt />


    <hr class='clearfix' />
    <AppFooter />
   
  </div>
</template>

<script>

import moment from 'moment'
import AppFooter from '../components/AppFooter'
export default {
  components:{
    AppFooter
  },
  computed:
   {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
    timestamp: function() {
  return moment().format('YYYY-MM-DD');
}
  },


};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.clearfix {
  margin-top: 4rem;
  margin-bottom: 2rem;
  overflow: auto;
}

</style>
