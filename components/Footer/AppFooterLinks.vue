<template>
  <div class="brand">
      <div class="container-links">
        <div class="row" >

          <nav class="col-md-10 ftr-urlt-lnk" > 

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

          <div class="col-xs-6 visible-sm visible-xs tofpg   hidden  md:visible " style="line-height: 90px;">
            <a href="#nav-top-page"> {{ $t('footer.top') }} <span class="glyphicon glyphicon-chevron-up"></span></a>
          </div>

          <div class="col-xs-6 col-md-2 text-right">
            <img src="~/assets/img/canada_footer_logo.svg" :alt=" $t('footer.symbol') " :title=" $t('footer.symbol') " />
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

.container-links { 
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
} 
.container-links::after { clear: both; }
.container-links::before, .container-links::after {
  display: table;
  content: " ";
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.row::before, .row::after {
  display: table;
  content: " ";
}
.row::after {
  clear: both;
}
.col-md-10, .col-xs-6, .col-md-2 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; 
}
.col-xs-6 { float: left; width: 50%; }

@media (min-width: 992px) {
  .col-md-2  { float: left; width: 16.6666666667%; }
  .col-md-10 { float: left; width: 83.3333333333%; }
  
}
#wb-info .brand {
  background: #f8f8f8;
  line-height: 30px;
}
#wb-info .brand img {
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  width: auto;
}
#wb-info nav {
  padding: 2em auto 0 auto;
  position: relative;
}
#wb-info .ftr-urlt-lnk li::before {
	content: "•";
	margin-right: .7em;
}
#fLinks {
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 0;
  margin-bottom: 11.5px;
  font-size: 14px;
  color: #333;
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
.glyphicon-chevron-up:before {
  content: "^"; 
}

@media   (max-width: 479px) {
  #wb-info .ftr-urlt-lnk #fLinks {
    -webkit-column-count: 1;
    column-count: 1;
    
  }
  #wb-info .ftr-urlt-lnk li {
    display: block;
    float: none;
    margin-bottom: .2em;
  }
  #wb-info .brand object, #wb-info .brand img {
    height: 25px;
    margin-top: 15px;
    max-width: 100%;
    padding-right: 10px; 
  }
  #wb-info .tofpg {
    line-height: 60px; }
}
@media (min-width: 480px) and (max-width: 1025px) {
  #wb-info .ftr-urlt-lnk #fLinks {
    -webkit-column-count: 2 !important;
    column-count: 2 !important;
  }
  #wb-info .ftr-urlt-lnk li {
    display: block;
    float: none;
    margin-bottom: .2em; 
  }  
} 

@media (max-width: 768px) {
  .visible-xs { display: block !important; }
}
@media  (max-width: 991px) {
  .visible-xs { display: block !important; }
  #wb-info .brand img { float: right; }
} 

@media screen and (min-width: 1025px) {
  /* #wb-info .ftr-urlt-lnk li {
    display: inline-block;
    margin-right: 0.7em; 
  }
  #wb-info .ftr-urlt-lnk li:first-child:before {
    content: none; 
  }
  [dir=rtl] #wb-info .ftr-urlt-lnk li {
    float: right; 
  } */
  #fLinks{
   display: flex;
   align-content: flex-start;
   justify-content: space-evenly;   
  }
  #wb-info nav {
    padding: 0 !important;
  }
  li::before{
    content: none !important;
  }
}

@media (min-width:  768px) { .container-links { width:  750px; } }
@media (min-width:  992px) { .container-links { width:  970px; } }
@media (min-width: 1200px) { .container-links { width: 1170px; } }

</style>