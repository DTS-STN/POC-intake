<template>
  <div class ="w-full text-center">
    <!-- <h1> {{ error.statusCode }} </h1>
    <p>  {{ error.message }} </P> -->
  </div>
</template>
<script>
export default {
  props: {
    error: String
  }
}
</script>
<style scoped>




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
.container { width: 1170px; max-width: 1280px; } 
.container::after { clear: both; }

/**************************/
/*    Grid Rules rules    */
/**************************/

#wb-info .brandxxxx {
  background: #f8f8f8;
  line-height: 30px;
}
#wb-info nav {
  padding-bottom: 2em;
  padding-top: 2em;
  position: relative;
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}
#wb-info .ftr-urlt-lnk ul {
  margin: 0;
  padding: 0;
}
#wb-info .ftr-urlt-lnk li {
  display: inline-block;
  float: left;
  margin-right: .7em;
}
#wb-info nav li {
  margin-bottom: .75em;
}
#wb-info .ftr-urlt-lnk li::before {
	content: "•";
	margin-right: .7em;
}
#wb-info .tofpg {
  line-height: 90px;
}
#wb-info .tofpg a {
  color: #000;
}
#wb-info a {
  font-size: .875em;
  text-decoration: none;
}
#wb-info .tofpg a span {
  margin-left: 25px; 
}
#wb-info .tofpg a:hover {
  text-decoration: none; 
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#wb-info {
  background: #e1e4e7;
  position: relative;
  z-index: 5;
}
#wb-info .landscape {
  background: #26374a url(../assets/img/landscape.png) no-repeat right bottom;
  height: 180.5px;
}
#wb-info nav {
  padding-bottom: 2em;
  padding-top: 2em;
  position: relative;
}
[class*="colcount-"].list-unstyled {
  list-style: none outside none;
  padding-left: 0;
}
.colcount-md-3 {
  -webkit-column-count: 3;
  column-count: 3;
}
.colcount-sm-2 {
  -webkit-column-count: 2;
  column-count: 2;
}
[class*="colcount-"] {
  list-style-position: outside;
  padding-left: 1.3em;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
ul, ol {
  margin-top: 0;
  margin-bottom: 11.5px;
}
#wb-info nav li {
  margin-bottom: .75em;
}
[class*="colcount-"].list-unstyled li {
  margin-left: 0;
}
#wb-info .landscape a {
  color: #fff;
}
#wb-info a {
  font-size: .875em;
  text-decoration: none;
}




</style>