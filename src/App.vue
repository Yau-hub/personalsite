<template>
  <div id="app">
	  <site-head></site-head>
	 
  
     <router-view/>
  </div>
</template>

<script>
	import SiteHead from '@/components/SiteHead.vue'
	export default{
		name: 'Main',
		components:{
			SiteHead
		}
	}
</script>

<style lang="scss">
* {outline: 0;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box}
html {font: normal 16px "Microsoft YaHei";-webkit-text-size-adjust: 100%;}
body {padding: 0;margin: 0 auto;font-size: 16px; color: #333;background-color: #fff;font-family: "Arial","Microsoft YaHei";min-width: 320px;
    -webkit-text-size-adjust: none;
    /*取出点击出现半透明的灰色背景*/
    -webkit-tap-highlight: rgba(0,0,0,0);
    /*控制内容的可选择性*/
   
    word-wrap: break-word;
}
@media  (max-width: 640px){
    body{ font-size: 14px;}
}
input[type="button"],
input[type="submit"],
input[type="reset"] {-webkit-appearance: none;}
ul,
li,
form,
dl,
dt,
dd,
div,
ol,
figure,
aside{padding: 0;margin: 0;word-wrap: break-word;}
.ul,
.ul li {list-style: none;}
table {border-collapse: collapse;border-spacing: 0}
table td {border-collapse: collapse;font-size: 1px;word-wrap: break-word;}
select, input, textarea {font-size: 14px;color: #333;border-radius: 0;-webkit-border-radius: 0;font-family: "Microsoft YaHei";}
button{ margin: 0; padding: 0;word-wrap: break-word; outline: none !important;}
.slick-arrow{outline: none;}
img{border: none;max-width: 100%;vertical-align: middle;}
a {color: #333;text-decoration: none; -webkit-tap-highlight-color:rgba(0,0,0,0);word-wrap: break-word;/* 去掉链接触摸高亮 */}
a:hover {color: #111e90;text-decoration: none;}
a:focus {color: #333;outline: none;-moz-outline: none;}
a:active {color: #333;}
pre{
    white-space:pre-wrap;
    white-space:-moz-pre-wrap;
    white-space:-o-pre-wrap;
    word-wrap:break-word;
    margin:0;
    font-family: "Microsoft YaHei";
    text-align:justify;
    text-justify:inter-ideograph;word-wrap: break-word;
}
img, object {
    border: none;
    max-width: 100%;
    border: 0;
    overflow: hidden;
    vertical-align: middle;
}
p{word-wrap: break-word;}
.clear {clear:both;height: 0px;overflow: hidden;zoom: 0;}
.clearfix {*zoom:1;}/*IE/7/6*/
.clearfix:after { content:''; display:block; height:0; clear:both; }

.dot{display: block;white-space: nowrap; text-overflow: ellipsis;overflow: hidden;}
/*2行文本省略号*/
.dot2 {display: -webkit-box;display: box;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
/*3行文本省略号*/
.dot3 {display: -webkit-box;display: box;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;-webkit-box-orient: vertical;-webkit-line-clamp: 3;}

.ytable{ display:table; width:100%; table-layout: fixed;}
.ytable-cell{ display:table-cell; vertical-align:middle;}

a {
    color: #585858;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 去掉链接触摸高亮 */
a:focus {
    outline: none;
    -moz-outline: none;
}

.hide {
    display: none;
}

.bg-cover{ background-repeat: no-repeat; background-position: center; background-size: cover;}
.bg-contain{ background-repeat: no-repeat; background-position: center; background-size: contain;}

.fl{ float: left;}
.fr{ float: right;}

.auto-1400{max-width: 1400px;margin: auto;}
@media  (max-width: 1440px){
    auto-1400{padding: 0 2%;}
}

body{
	position: relative;
	padding-top: 72px;
}



</style>
