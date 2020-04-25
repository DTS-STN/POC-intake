<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        
        <div v-if="this.$i18n.locale === 'en'" class="text-sm lg:flex-grow">
          <a alt="government of canada site link" href="https://www.canada.ca/home.html">  
          <img alt="government of canada logo" width="25%" src="~/assets/img/canada_header.svg" /> </a>
        </div>
        <div v-else class="text-sm lg:flex-grow" >
            <a alt="lien vers le site du gouvernement du canada" href="https://www.canada.ca/home.html">
            <img alt="logo du gouvernement du canada" width="25%" src="~/assets/img/canadaFr.svg" />
          </a>
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
    
    <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Canada</span>
      </div>
      <ul>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="https://www.canada.ca/en/social.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text- mr-4"
            >Social media</a>
            <a
              href="https://www.canada.ca/en/mobile.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text-black mr-4"
            >Mobile applications</a>
            <a
              href="https://www.canada.ca/en/government/about.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text-black mr-4"
            >About Canada.ca</a>
            <a
              href="https://www.canada.ca/en/transparency/terms.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text-black mr-4"
            >Terms and conditions</a>
            <a
              href="https://home.dts-stn.com/index.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text-black mr-4"
            >Privacy</a>
            <a
              href="https://www.canada.ca/en/transparency/terms.html"
              class="block mt-4 lg:inline-block lg:mt-0 text-darkblue-200 hover:text-black mr-4"
            >Digital technology soulutions</a>
          </div>
        </div>
      </ul>

      <img width="50%" src="~/assets/img/canada_footer_logo.svg" />

      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img width="50%" src="~/assets/img/canada_footer_logo.svg" />
      </div>

    </nav>
  </div>
</template>

<script>

export default {
  computed:
   {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
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
