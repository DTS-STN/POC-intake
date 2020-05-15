<template>


  <footer id="wb-info" class="block">

    <div class="landscape">
    <!-- 
      <nav className="container wb-navcurr">
        <h2 className="wb-inv"><Trans>About government</Trans></h2>
        <ul className="list-unstyled colcount-sm-2 colcount-md-3">
          <li><a href="https://www.canada.ca/en/contact.html"><Trans>Contact us</Trans></a></li>
          <li><a href="https://www.canada.ca/en/government/dept.html"><Trans>Departments and agencies</Trans></a></li>
          <li><a href="https://www.canada.ca/en/government/publicservice.html"><Trans>Public service and military</Trans></a></li>
          <li><a href="https://www.canada.ca/en/news.html"><Trans>News</Trans></a></li>
          <li><a href="https://www.canada.ca/en/government/system/laws.html"><Trans>Treaties, laws and regulations</Trans></a></li>
          <li><a href="https://www.canada.ca/en/transparency/reporting.html"><Trans>Government-wide reporting</Trans></a></li>
          <li><a href="http://pm.gc.ca/eng"><Trans>Prime Minister</Trans></a></li>
          <li><a href="https://www.canada.ca/en/government/system.html"><Trans>About government</Trans></a></li>
          <li><a href="http://open.canada.ca/en"><Trans>Open government</Trans></a></li>
        </ul> 
      </nav>
    -->
    </div> 

    <div class="brand">
      <div class="container">
        <div class="row">

          <nav class="col-md-10 ftr-urlt-lnk" > 

            <h2 class="wb-inv" style="clip: rect(1px,1px,1px,1px); height: 1px; margin: 0; overflow: hidden; position: absolute; width: 1px;"> {{ $t('footer.site') }} </h2>

            <ul>
              <li><a href="https://www.canada.ca/en/social.html"> {{ $t('footer.social') }} </a></li>
              <li><a href="https://www.canada.ca/en/mobile.html"> {{ $t('footer.mobile') }} </a></li>
              <li><a href="https://www.canada.ca/en/government/about.html"> {{ $t('footer.about') }} </a></li>
              <li><a href="https://www.canada.ca/en/transparency/terms.html"> {{ $t('footer.terms') }} </a></li>
              <li><a href="https://www.canada.ca/en/transparency/privacy.html"> {{ $t('footer.privacy') }} </a></li>
              <li><a href="https://home.dts-stn.com/start.html"> {{ $t('footer.dts') }} </a></li>
            </ul>
          </nav>

          <div class="col-xs-6 visible-sm visible-xs tofpg   hidden  md:visible " style=" line-height: 90px;">
            <a href="#nav-top-page"> {{ $t('footer.top') }} <span class="glyphicon glyphicon-chevron-up"></span></a>
          </div>

          <div class="col-xs-6 col-md-2 text-right">
            <img src="~/assets/img/canada_footer_logo.svg" :alt=" $t('footer.symbol') " :title=" $t('footer.symbol') " />
          </div>

        </div>
      </div>
    </div>

  </footer>


</template>

<script>
  export default {
    name: "Footer",

  }
</script>

<style>
#wb-info .landscape {
  background: #26374a url(../assets/img/landscape.png) no-repeat right bottom;
  height: 180.5px;
}

.container { 
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-height: 0 !important;
} 
.container::after { clear: both; }
.container::before, .container::after {
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
.ftr-urlt-lnk {
  box-sizing: border-box; 
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
  padding-bottom: 1em;
  padding-top: 2em;
  position: relative;
}
#wb-info .ftr-urlt-lnk li::before {
	content: "•";
	margin-right: .7em;
}
ul {
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
  #wb-info .ftr-urlt-lnk ul {
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
  #wb-info .ftr-urlt-lnk ul {
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
  #wb-info .ftr-urlt-lnk li {
    display: inline-block;
    margin-right: 0.7em; 
  }
  #wb-info .ftr-urlt-lnk li:first-child:before {
    content: none; 
  }
  [dir=rtl] #wb-info .ftr-urlt-lnk li {
    float: right; 
  }
}

@media (min-width:  768px) { .container { width:  750px; } }
@media (min-width:  992px) { .container { width:  970px; } }
@media (min-width: 1200px) { .container { width: 1170px; } }

</style>
