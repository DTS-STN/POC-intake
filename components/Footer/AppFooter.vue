<template>


  <footer id="wb-info" class="block">

    <AppLandscape />

    <AppFooterLinks />

  </footer>


</template>

<script>
 import AppLandscape from './AppLandscape'
 import AppFooterLinks from './AppFooterLinks'
  export default {
    name: "AppFooter",
    components:{
        AppLandscape,
        AppFooterLinks
    }

  }
</script>

<style>

</style>
