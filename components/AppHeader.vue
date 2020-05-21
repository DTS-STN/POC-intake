<template>
  <nav id="nav-top-page">
        
      <div id="header-lang">
        <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link>
      </div>

      <div>
        <div v-if="this.$i18n.locale === 'en'">
          <a :alt=" $t('header.linkAlt') " :href=" $t('header.link') ">  
            <img class="header-cnd-img" :alt=" $t('header.logoAlt') " width="25%" src="~/assets/img/canada_header.svg" />
          </a>
        </div>
        <div v-else>
          <a :alt=" $t('header.linkAlt') " :href=" $t('header.link') ">
            <img class="header-cnd-img" :alt=" $t('header.logoAlt') " width="25%" src="~/assets/img/canadaFr.svg" /> 
          </a>
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
#nav-top-page{
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto ;
}
#header-lang a{
  float: right;
}
.header-cnd-img{
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-top: 10px;
  width: auto;
  
}
@media (min-width:  768px) { #nav-top-page { width:  750px; } }
@media (min-width:  992px) { #nav-top-page { width:  970px; } }
@media (min-width: 1200px) { #nav-top-page { width: 1170px; } }
</style>