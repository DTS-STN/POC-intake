<template>
  <div id="brand">
        <div id="container-links">
          <div id="row" >
   
            <nav id="footer-nav"> 
  
              <!-- <h2 class="wb-inv" style="background-color: gray; clip: rect(1px,1px,1px,1px); height: 1px; margin: 0; overflow: hidden; position: absolute; width: 1px;"> {{ $t('footer.site') }}</h2> -->
  
              <ul id="fLinks">
                <li><a href="https://www.canada.ca/en/social.html"> {{ $t('footer.social') }} </a></li>
                <li><a href="https://www.canada.ca/en/mobile.html"> {{ $t('footer.mobile') }} </a></li>
                <li><a href="https://www.canada.ca/en/government/about.html"> {{ $t('footer.about') }} </a></li>
                <li><a href="https://www.canada.ca/en/transparency/terms.html"> {{ $t('footer.terms') }} </a></li>
                <li><a href="https://www.canada.ca/en/transparency/privacy.html"> {{ $t('footer.privacy') }} </a></li>
                <li><a href="https://home.dts-stn.com/start.html"> {{ $t('footer.dts') }} </a></li>
              </ul>
            </nav>
            
            <div id="footer-top-page">
              <a href="#nav-top-page">{{ $t('footer.top') }}<span class="glyphicon glyphicon-chevron-up"></span></a>
            </div>
  
            <div id="footer-img">
              <img id="cnd-img" src="~/assets/img/canada_footer_logo.svg" :alt=" $t('footer.symbol') " :title=" $t('footer.symbol') " />
            </div>
  
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:'AppFooterLinks'
}
</script>

<style>
#container-links { 
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
} 

#brand {
  background: #f8f8f8;
  line-height: 30px;
}

#row {
  display: flex;
  flex-wrap: wrap;
  padding-right: 15px;
  padding-left: 15px;
}

#footer-nav {
  padding-top: 2em;
  padding-bottom: 2em;
  position: relative;
  width: 100%;
}

#footer-top-page{
  width: 50%;
}

#footer-img{
  width: 50%;
}

#cnd-img {
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  width: auto;
  float: right;
}

#fLinks {
  display: grid;
  grid-template-columns: auto;
  column-gap: 2em;
  margin-top: 0;
  margin-bottom: 11.5px;
  font-size: 14px;
  color: #333;
  padding: 0;
  list-style-type: none;
}

#fLinks li::before {
	content: "•";
  margin-right: .7em;
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 800;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-chevron-up::before {
  content: "^"; 
}

@media (min-width: 350px) {
  #fLinks{
    grid-template-columns: auto auto;
  }
}

@media (min-width: 1200px) {
  #footer-top-page{ display: none; }
  #footer-img { width: 16.6666666667%; }
  #footer-nav { width: 83.3333333333%; }
  #fLinks{ 
    display: flex;
    align-content: flex-start;
    justify-content: space-evenly;   
  }
  #fLinks li:first-child:before{
    content: " ";
  }
  
}

@media (min-width:  768px) { #container-links { width:  750px; } }
@media (min-width:  992px) { #container-links { width:  970px; } }
@media (min-width: 1200px) { #container-links { width: 1170px; } }
</style>