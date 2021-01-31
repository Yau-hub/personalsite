<template>
	<div class="auto-1400 work-main clearfix">
		<div class="aside wow fadeInUp">
			<ul class="ul clearfix nav">
				<li v-for="(item,i) in content" >
					<a href="javascript:void(0);" :data-id="item.id">{{item.text}}</a>
					<i class="nav-btn"></i>
					<dl>
						<dd v-for="(items,index) in item.data" ><a href="javascript:void(0);" :data-id="index" :data-ctg="item.id">{{items.title}}</a></dd>
					</dl>
				
				</li>
			
			</ul>
		</div>
		<div class="content wow fadeInUp">
			<section class="sec" :id="content[0].id">
				<h3 class="title wow fadeInUp">{{content[0].text}}</h3>
				<ul class="cont ul clearfix">
					<li v-for="(item,index) in content[0].data" class="wow fadeInUp">
						<h4 class="tit" :id="content[0].id+ index">{{item.title}}</h4>
						<div class="info clearfix">
							<code>
								{{item.detail}}
							</code>
							<button class="copy-btn">复制代码</button>
						</div>
					</li>
				</ul>
				
		
			</section>
			
			<section class="sec" :id="content[1].id">
				<h3 class="title wow fadeInUp">{{content[1].text}}</h3>
				<ul class="cont ul clearfix ">
					<li v-for="(item,index) in content[1].data" :id="content[1].id+ index" class="wow fadeInUp">
						<h4 class="tit">{{item.title}}</h4>
						<div class="info clearfix">
							<code>
								{{item.detail}}
							</code>
							<button class="copy-btn">复制代码</button>
						</div>
					</li>
				</ul>
			</section>
		
			<section class="sec" :id="content[2].id">
				<h3 class="title wow fadeInUp">{{content[2].text}}</h3>
				
				<ul class="links ul clearfix">
					<li v-for="(item,index) in content[2].data" :id="content[2].id+ index" class="wow fadeInUp">
						<a :href="item.href" target="_blank" :title="item.title">{{item.title}}</a>
						</li>
				</ul>
				
			</section>
		
			<section class="sec" :id="content[3].id">
				<h3 class="title wow fadeInUp">{{content[3].text}}</h3>
				<ul class="links ul clearfix">
				<li v-for="(item,index) in content[3].data" :id="content[3].id+ index" class="wow fadeInUp">
					<a :href="item.href" target="_blank" download :title="item.title">{{item.title}}</a>
					</li>
					</ul>
			</section>
	
			
		</div>
	</div>
	
	
	
</template>

<script>
	export default{
		name: 'Work',
		data(){
			return {
				content:[
					{
						id:"css",
						text:"常用css",
						data:[
							{
								title:"bshare微信分享样式",
								detail:`.bsTop{width: 100% !important;}
								.bsFrameDiv,.bsFrameDiv div{height: auto!important;}
								.bsFrameDiv img{margin: 15px!important;}
								.bsTop,.bsFrameDiv, #bsMorePanel{width: 100%!important;}
								#bsMorePanel{height: auto!important;}
								.bFind-wrapper-top{height: 25px!important;}
								a.bsSiteLink,.bsFooterDiv{height: 18px!important;;line-height: 18px!important;}
								`			
							},
							{
								title:"百度地图图标",
								detail:`#dituContent .BMap_Marker div{background: url("../images/RighInfo002275-map_icon.png") no-repeat center center; background-size: 100% 100%;}
								#dituContent .BMap_cpyCtrl ,#dituContent .anchorBL{display: none}
								.BMap_Marker .BMapLabel{display: none!important;}`
							},
							{
								title:"select样式清除，隐藏下拉箭头",
								detail:`select::-ms-expand { display: none; }
								select {
								   width: 100%;
								   height: 34px;
								   border: solid 1px #0086EA;
								   /*为下拉小箭头留出一点位置，避免被文字覆盖*/
								   padding-right:34px;
								   padding-left: 10px;
								   /*将默认的select选择框样式清除*/
								   appearance:none;
								   -moz-appearance:none;
								   -webkit-appearance:none;
								   background: url("/assets/img/caret.png") no-repeat scroll right center transparent;
								}`
							},
							{
								title:'隐藏滚动条',
								detail:`.container {-ms-overflow-style: none;scrollbar-width: none; overflow: -moz-scrollbars-none;
									scrollbar-base-color: #f0f0f0;
									scrollbar-3dlight-color: #f0f0f0;
									scrollbar-highlight-color: #f0f0f0;
									scrollbar-track-color: #f0f0f0;
									scrollbar-arrow-color: #f0f0f0;
									scrollbar-shadow-color: #f0f0f0;
									scrollbar-dark-shadow-color: #f0f0f0;
								}
								.container::-webkit-scrollbar {display: none; }`
							},
							{
								title:"文字描边兼容ie9",
								detail:`-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
									-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
									text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
									*filter: Glow(Color=#000, Strength=1);`
							},
							{
								title:"hover兼容苹果",
								detail:`1、js代码document.body.addEventListener('touchstart',function(){});
									2、html里或者body直接加<body ontouchstart>`
							},
							{
								title:"图片黑白",
								detail:`-webkit-filter: grayscale(100%);
									-moz-filter: grayscale(100%);
									-ms-filter: grayscale(100%);
									-o-filter: grayscale(100%);
									filter: grayscale(100%);
									filter: gray;


								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="position: absolute;visibility: hidden;">
									<filter id="grayscale">
										<feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/>
									</filter>
								</svg>

								<img src="./mm1.jpg" />
								<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="192">
									<image xlink:href="./mm1.jpg" x="0" y="0" width="256" height="192" filter="url('#grayscale')"></image>
								</svg>`
							},
							{
								title:"网站页面全部用黑白色",
								detail:`html { filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); }
								使用方法：这段代码可以变网页为黑白，将代码加到CSS最顶端就可以实现素装
								有一些站长的网站可能使用这个css 不能生效，是因为网站没有使用最新的网页标准协议
								http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
								http://www.w3.org/1999/xhtml">`
							},
							{
								title:"文字竖排",
								detail:`writing-mode: tb-rl;
									writing-mode: vertical-lr;`
							},
							{
								title:"字体渐变",
								detail:`@media  screen and (-webkit-min-device-pixel-ratio:0) {
									h1#gradient {
									background: linear-gradient(to top, #0078af, #afe6ff);
								   -webkit-background-clip: text;
									color: transparent;
									}
								}
								兼容ie:
								<svg>
									<defs>
										<linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
											<stop offset="0%" style="stop-color:#06ccb4; stop-opacity:1" />
											<stop offset="100%" style="stop-color:#346ff4; stop-opacity:1" />
										</linearGradient>
									</defs>
									<text x="0" y="48" fill="url(#grad)" style="font-size:.48rem">2021</text>
								</svg>

								
								   $(window).resize(function () {
									   setTimeout(function () {
										   $("svg").each(function () {
											   var tH = parseInt($(this).find('text')[0].getBoundingClientRect().height);
											   var tW = parseInt($(this).find('text')[0].getBoundingClientRect().width);
											   $(this).css({'height':tH,'width':tW});
											   $(this).find('text').attr('y',tH*0.78);
										   })
									   },300)
								   }).trigger("resize")`
								
							}
							
						]
					},
					{
						id:"code",
						text:"常用代码块",
						data:[
							{
								title:"owl-carousel:",
								detail:`var owl = $('.index_banner .banner.owl-carousel');
									owl.owlCarousel({
										items:1,
										loop:true,
										margin:0,
										autoplay:true,
									autoplayHoverPause:true, //鼠标悬停
										autoplayTimeout:3000,
										autoplayHoverPause:true
									});
								owl响应式：
										$('.staff .part2 .owl-carousel').owlCarousel({
											items:4,
											margin:20,
											loop: true,
											autoplay:true,
											autoplayTimeout:3000,
											pagination: false,
											nav:false,
											navigation:false,
											responsiveClass:true,
											responsive:{
												320:{
													items:2,
												},
												720:{
													items:2,

												},
												1000:{
													items:4,
												}
											}
										});
								owl销毁重用：
								 owl.trigger('destroy.owl.carousel');
										$('.pro_detail .owl-carousel').owlCarousel({
											items:1,
											loop:true,
											margin:0,
											dots:false,
											autoplay:false,
											nav:true,
										});`
							},
							{
								title:"多列",
								detail:`$('.index_job .data.owl-carousel >a').each(function (i,t) {
									if(i%3 == 0){
										console.log(i);
										var obgs = $(t);
										var obg1s = $(t).next("a");
										var obg2s = $(t).next("a").next("a");
										
										$(this).parents(".data").append('<li class="clearfix"></li>');
										obgs.appendTo($(this).parents(".data").find("li:last-child"));
										if(obg1s.length>0){
											obg1s.appendTo($(this).parents(".data").find("li:last-child"));
										}
							
										if(obg2s.length>0){
											obg2s.appendTo($(this).parents(".data").find("li:last-child"));
										}
										
									}
								});`
							},
							{
								title:"移动端视频层级",
								detail:`<video src="" controls="controls" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" x5-video-orientation="portraint"></video>`
							},
							{
								title:"阻止浏览器的默认行为",
								detail:` 
									function stopDefault( e ) { 
									 //阻止默认浏览器动作(W3C) 
									 if ( e && e.preventDefault ) 
									  e.preventDefault(); 
									//IE中阻止函数器默认动作的方式 
									 else 
									 window.event.returnValue = false; 
									 return false; 
									}`
							},
							{
								title:"阻止浏览器冒泡",
								detail:`function stopBubble(e) { 
									//如果提供了事件对象，则这是一个非IE浏览器 
									if ( e && e.stopPropagation ) 
										//因此它支持W3C的stopPropagation()方法 
										e.stopPropagation(); 
									else 
										//否则，我们需要使用IE的方式来取消事件冒泡 
										window.event.cancelBubble = true; 
									}`
							},
							{
								title:"js跳转到指定指定元素位置",
								detail:`scrollTo("#map_wrap");
									/**
									 * js跳转到指定指定元素位置
									 * @param ele 元素
									 * @param speed 速度
									 * @param offset 偏移量,优化位置
									 */
									function scrollTo(ele, speed, offset) {
										speed = speed || 300;
										offset = offset || 0;
										if (!ele) {
											$("html,body").animate({
												scrollTop: 0
											}, speed);
										} else {
											$("html,body").animate({
												scrollTop: ($(ele).offset().top - offset)
											}, speed);
										}
										return false;
									}`
							},
							{
								title:"滚动到指定元素位置",
								detail:`$('html , body').animate({scrollTop: ($(this).offset().top - 95) +"px"}, 0);`
							},
							{
								title:"IEVersion",
								detail:` function IEVersion() {
									var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
									var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
									var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
									var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
									if (isIE) {
										var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
										reIE.test(userAgent);
										var fIEVersion = parseFloat(RegExp["$1"]);
										if (fIEVersion == 7) {
											return 1;
										} else if (fIEVersion == 8) {
											return 1;
										} else if (fIEVersion == 9) {
											return 1;
										} else if (fIEVersion == 10) {
											return 1;
										} else {
											return 1;//IE版本<=7
										}
									} else if (isEdge) {
										return 1;//edge
									} else if (isIE11) {
										return 1; //IE11
									} else {
										return -1;//不是ie浏览器
									}
								}`
							},
							{
								title:"获取地址栏参数",
								detail:` function GetQueryString(name)
									{
										var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
										var r = window.location.search.substr(1).match(reg);
										if(r!=null)return  unescape(r[2]); return null;
									}
									console.log(GetQueryString("scid"));`
							},
							{
								title:"屏幕滚动高度",
								detail:`$(window).scroll(function() {
									//为了保证兼容性，这里取两个值，哪个有值取哪一个
									//scrollTop就是触发滚轮事件时滚轮的高度
									var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
									console.log("滚动距离" + scrollTop);
								})`
							},
							{
								title:"获取字符串长度",
								detail:`function getStringLength(str){
										var slength=0;
										for(i=0;i<str.length;i++){
											if ((str.charCodeAt(i)>=0) && (str.charCodeAt(i)<=255))
												slength=slength+1;
											else
												slength=slength+2;
										}
										return slength;
									};`
							},
							{
								title:"a标签qq会话",
								detail:`<a href="http://wpa.qq.com/msgrd?v=3&uin=********&site=qq&menu=yes"></a>
								  <a class="more" href="tencent://message/?uin={$Qq}&Menu=yes">立即咨询</a>
								uin=""处写入你的qq号码，根据提示点击的时候就可以跳出聊天窗口啦。`
							},
							{
								title:"监听内容变化",
								detail:`var title = $('.filelist');
									title.bind('DOMNodeInserted', function(e) {
									});`
							},
							{
								title:"视频播放结束：loop无效",
								detail:`var videos = document.getElementById('videos')
									videos.addEventListener('ended',function(){
							 //
									},false);`
							},
							{
								title:"留后缀",
								detail:`$(".list-downloads li").each(function(){
									var file=$(this).find(".name").text()
									var filename=file.replace(/.*(\/|\\)/, "");//filename得到文件名
									var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';//fileExt得到后缀名
									$(this).find(".name").text(fileExt)
									});`
							},
							{
								title:"radio状态控制",
								detail:`$(this).find("input").attr("checked",false);
									$(this).find("input").prop('checked',false);
									$(this).find("input").prop('checked',true);
									$(this).find("input").attr("checked","checked");`
							},
							{
								title:"滚动到底部220px",
								detail:`(window).scroll(function(){
									// scroll at bottom
									if ($(window).scrollTop() + $(window).height() >= $(document).height()- 220 && onLoad == false) {
										// load data
													 
									}
								});`
							},
							{
								title:"视频时长",
								detail:`<video src="uploadfiles/video/video1.mp4" oncanplaythrough="showTime(this)"></video>
								 function showTime(ele) {
										console.log(ele.duration);
										var hour = parseInt((ele.duration)/3600);
										var minute = parseInt((ele.duration%3600)/60);
										var second = Math.floor(ele.duration%60);
										//console.log(Math.floor(ele.duration));
										//document.write("这段视频的时长为："+hour+"小时，"+minute+"分，"+second+"秒");
										console.log("这段视频的时长为："+hour+"小时，"+minute+"分，"+second+"秒");
									}`
							},
							{
								title:"百度地图https,只能使用v2版",
								detail:`https://api.map.baidu.com/api?v=2.0&ak=密钥&s=1`
							},
							{
								title:"ie9兼容placeholder",
								detail:`(function($) {
									$.fn.placeholder = function(options) {
										var opts = $.extend({}, $.fn.placeholder.defaults, options);
										var isIE = document.all ? true : false;
										return this.each(function() {
											var _this = this,
												placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
											if (isIE) {
												_this.setAttribute("value", placeholderValue);
												_this.onfocus = function() {
													$.trim(_this.value) == placeholderValue ? _this.value = "" : '';
												};
												_this.onblur = function() {
													$.trim(_this.value) == "" ? _this.value = placeholderValue : '';
												};
										$(_this).focus().blur();
											}
										});
									};
								})(jQuery);
							
								$(function () {
									$("[placeholder]").placeholder();
								})`
							},
							{
								title:"置顶",
								detail:`onclick="$('body,html').animate({scrollTop:0},500);"`
							},
							{
								title:"首次进入网站",
								detail:`if(window.name==""){
							
									}else if(window.name == "onload"){
										
									}
									window.name="onload";
									if(history.length <=2){}`
							},
							{
								title:"地址栏图标",
								detail:`<link rel="icon" href="{$uploadpath}{$image}" type="image/x-icon"> `
							},
							{
								title:"手机号变*",
								detail:`var tel = 18810399133;
								tel = "" + tel;
								var tel1 =tel.replace(tel.substring(3,7), "****")`
							},
							{
								title:"中间文字变*",
								detail:`$(".comment_msg .name").each(function () {
										var str = $(this).text();
										 for (var i =0;i<Math.floor(str.length / 2);i++){
										 str = str.replace(str.substring(Math.floor((str.length-Math.floor(str.length / 2)/2))- Math.floor(str.length / 2)+i,Math.floor((str.length-Math.floor(str.length / 2)/2))- Math.floor(str.length / 2)+1+i), "*")
										 }
										$(this).text(str);
									})`
							},
							{
								title:"鼠标滚动事件",
								detail:` var scrollFunc = function (e) {
										e = e || window.event;
										if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
											if (e.wheelDelta > 0) { //当滑轮向上滚动时
												// alert("滑轮向上滚动");
											 e.preventDefault && e.preventDefault();
											}
											if (e.wheelDelta < 0) { //当滑轮向下滚动时
												// alert("滑轮向下滚动");
											}
							
										} else if (e.detail) {  //Firefox滑轮事件
											console.log("Firefox");
											if (e.detail> 0) { //当滑轮向上滚动时
												// alert("滑轮向上滚动");
							
											}
											if (e.detail< 0) { //当滑轮向下滚动时
												// alert("滑轮向下滚动");
							
											}
										}
									}
									//给页面绑定滑轮滚动事件
									if (document.addEventListener) {//firefox
										document.addEventListener('DOMMouseScroll', scrollFunc, false);
									}
									//滚动滑轮触发scrollFunc方法  //ie 谷歌
									window.addEventListener('mousewheel', scrollFunc, { passive: false });`
							},
							{
								title:"网页内容加载完成后执行",
								detail:`window.onload = function(){}`
							},
							{
								title:"禁止键盘事件",
								detail:`document.onkeydown = function(){
									//禁止ctrl+u
									if (event.ctrlKey && window.event.keyCode==85){
									return false;
									}
									//禁止 F12
									if (window.event && window.event.keyCode == 123) {
									event.keyCode = 0;
									event.returnValue = false;
									}
									}
									//网站禁止右键
									document.body.oncontextmenu = function() {
									self.event.returnValue=false
								};`
							},
							{
								title:"fullpage跳页面",
								detail:`$.fn.fullpage.moveTo(3);`
							},
							{
								title:"处理 embed 显示不支持该插件",
								detail:` $(function () {
							   $("embed").each(function () {
								   playAudio(this)
							   })
						   });
							function playAudio(el) {
								if (!!window.ActiveXObject || "ActiveXObject" in window){

								}else{

									$(el).after('<iframe " src="'+ $(el).attr('src') + '"height= "'+ $(el).attr('height') +  '"width= "'+ $(el).attr('width') + '" ></iframe>')
									$(el).remove();
								}
							}`
							},
							{
								title:"rem",
								detail:` ;(function(designWidth, maxWidth) {
											var doc = document,
												win = window,
												docEl = doc.documentElement,
												remStyle = document.createElement("style"),
												tid;

											function refreshRem() {
												var width = docEl.getBoundingClientRect().width;
												maxWidth = maxWidth || 540;
												width>maxWidth && (width=maxWidth);
												var rem = width * 100 / designWidth;
												remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
											}

											if (docEl.firstElementChild) {
												docEl.firstElementChild.appendChild(remStyle);
											} else {
												var wrap = doc.createElement("div");
												wrap.appendChild(remStyle);
												doc.write(wrap.innerHTML);
												wrap = null;
											}
											//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
											refreshRem();

											win.addEventListener("resize", function() {
												clearTimeout(tid); //防止执行两次
												tid = setTimeout(refreshRem, 300);
											}, false);

											win.addEventListener("pageshow", function(e) {
												if (e.persisted) { // 浏览器后退的时候重新计算
													clearTimeout(tid);
													tid = setTimeout(refreshRem, 300);
												}
											}, false);

											if (doc.readyState === "complete") {
												doc.body.style.fontSize = "16px";
											} else {
												doc.addEventListener("DOMContentLoaded", function(e) {
													doc.body.style.fontSize = "16px";
												}, false);
											}
										})(750, 768);`
							},
							{
								title:"webstorm 配置sass",
								detail:`Name:
									SCSS-compact
									
									Program:
									D:\Ruby25-x64\bin\sass
									
									Arguments:
									$FileName$:$FileNameWithoutExtension$.css--no-cache --update --sourcemap --watch $FileName$:$FileNameWithoutExtension$.css --trace --style compact
									
									Output paths to refresh:
									$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map`
							},
							{
								title:"mimetype",
								detail:`<remove fileExtension=".json"/>
								 <remove fileExtension=".mp4"/>
								 <remove fileExtension=".eot"/>
								 <remove fileExtension=".svg"/>
								 <remove fileExtension=".otf"/>
								 <remove fileExtension=".woff"/>
								 <remove fileExtension=".woff2"/>
								 <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
								 <mimeMap fileExtension=".json" mimeType="application/json" />
								 <mimeMap fileExtension=".eot" mimeType="application/vnd.ms-fontobject" />
								 <mimeMap fileExtension=".svg" mimeType="application/x-font-ttf" />
								 <mimeMap fileExtension=".otf" mimeType="application/x-font-opentype" />
								 <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
								 <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />`
							},
							{
								title:"国外网站&分享",
								detail:`社交类
								Facebook-脸书，超级社交网站：http://www.facebook.com
								Twitter-推特，新浪老爹：http://www.twitter.com
								Instagram-逼格最高的图片社交网站：http://www.instagram.com/
								Snapchat-阅后即焚”照片分享功能App鼻祖：http://snapchat.com/
								Tumblr-汤博乐-轻博客（据说有很多小视频）：https://www.tumblr.com/
								Pinterest-the world's catalog of ideas,创意图片分享网站：https://www.pinterest.com/

								视频类
								Youtube-世界上最大的视频网站：https://www.youtube.com/
								Vimeo-高清视频播客网站，里面的视频都很棒：https://vimeo.com/
								Vine-急速六秒视频，类似于秒拍和美拍：Vine
								Hulu-正版影视作品和电视节目视频网站：TV Shows and Movies

								
								var LocalHref=encodeURIComponent(window.location.href);
								//分享Facebook
								$(".AddShare .Facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+LocalHref);
								//分享Twitter
								$(".AddShare .Twitter").attr("href","https://twitter.com/intent/tweet?url="+LocalHref+"&text=Some%20text%20to%20share&original_referer="+LocalHref);
								//分享Google+
								$(".AddShare .Google").attr("href","https://plus.google.com/share?url="+LocalHref);
								//分享Linkedin
								$(".AddShare .Linkedin").attr("href","https://www.linkedin.com/shareArticle?mini=true&url="+LocalHref);
								//分享Pinterest
								$(".AddShare .Pinterest").attr("href","https://pinterest.com/pin/create/bookmarklet/?&url="+LocalHref+"&description=Some%20text%20to%20share");
								`
							}
						]
					},
					{
						id:"link",
						text:"参考链接",
						data:[
							{
								title:"https://github.com/kenwheeler/slick/",
								href:"https://github.com/kenwheeler/slick/"
							},
							{
								title:"高德地图后台",
								href:"https://console.amap.com/dev/key/app"
							},
							{
								title:"高德地图窗体",
								href:"https://lbs.amap.com/api/jsapi-v2/example/infowindow/custom-style-infowindow"
							},
							{
								title:"高德地图语言",
								href:"https://lbs.amap.com/api/javascript-api/example/map/map-english/"
							},
							{
								title:"bxslider",
								href:"http://www.jq22.com/demo/slider-141113224352/"
							},
							{
								title:"自定义滚动条：mCustomScrollbar",
								href:"http://www.wufangbo.com/mcustomscrollbar/?ykbqzw=syblz"
							},
							{
								title:"webstorm 配置sass",
								href:"https://blog.csdn.net/fengmin_w/article/details/80930286"
							}
						]
					},
					{
						id:"plug",
						text:"插件",
						data:[
							
							{
								title:"web模板",
								href:"files/web.zip"
							},
							{
								title:"fancybox",
								href:"files/fancybox.zip"
							},
							{
								title:"aos",
								href:"files/aos.zip"
							},
							{
								title:"counter",
								href:"files/counter.zip"
							},
							{
								title:"html看书翻页",
								href:"files/html看书翻页.zip"
							},
							{
								title:"scrollbar",
								href:"files/scrollbar.zip"
							},
							{
								title:"wow-循环出现",
								href:"files/wow-循环出现.zip"
							}
						]
					},
				]
			}
		},
		mounted(){
			var that = this;
			this.$nextTick(function(){
				$(".work-main .aside li").each(function(){
					if($(this).find("dd").length>0){
						$(this).addClass("has-sub");
						$(this).find(".nav-btn").click(function(){
							$(this).toggleClass("open");
							$(this).siblings("dl").slideToggle();
							
							$(this).parents('li').siblings("li").find(".nav-btn").removeClass("open");
							$(this).parents('li').siblings("li").find("dl").slideUp();
						})
					}
				})
				
				$('.aside li >a').click(function(e){
					var id = e.currentTarget.dataset.id;
					$('html , body').animate({scrollTop: ($('#'+id).offset().top - 100) +"px"}, 0);
					$(this).addClass("on").siblings().removeClass("on");
				})
				$('.aside li dd >a').click(function(e){
					var id = e.currentTarget.dataset.id;
					var ctg = e.currentTarget.dataset.ctg;
					$('html , body').animate({scrollTop: ($('#'+ctg+id).offset().top - 100) +"px"}, 0);
					$('.aside li,.aside li dd >a').removeClass("on")
					// $(this).addClass("on");
					$(this).parents("li").addClass("on")
					
				})
				
				var disTop = $(".head").height() + ($(window).width()*0.04);
				var subDisTop = $(window).height()*0.8;
				that.content.map(function(item,i){
					var index = i+1;
					$(window).scroll(function(){
						var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
						if($('#'+item.id).offset() && scrollTop >= ($('#'+item.id).offset().top - disTop)){
						 $('.aside li:nth-child('+ index +')').addClass("on").siblings().removeClass("on");
						}
						
						
					})
					
					
				})
				
				$(window).scroll(function(){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					if(scrollTop >= 50){
						$(".aside").addClass("fixed");
					}else{
						$(".aside").removeClass("fixed");
					}
							
				}).trigger("scroll");
				$(window).resize(function(){
					$(".work-main .aside .nav-btn").removeClass("open");
					$(".work-main .aside dl").slideUp();
				})
				$(".copy-btn").click(function(){
				   var code = $(this).prev("code");
					code.after('<input style="position:absolute;opacity:0;"/>')
					code.next('input').val(code.text()).select();
					document.execCommand("Copy");
					code.next('input').remove();
			
					code.click(function(e){
						var e = e || event;
						
						var tag = e.target || e.srcElement;
						window.getSelection().selectAllChildren(tag);
					}).trigger("click");
					code.unbind("click");
					
				})
				if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
					new WOW().init();
				};
				$(".work-main .aside").addClass("animated");
				if($(window).width() <=1000){
					$(".wow").addClass("animated");
				}
			})
			
			
		}
	}
	
	
	
</script>

<style lang="scss">
	body{
		background-color: #f4f4f4;
	}
	.work-main{
		padding: 4% 0;
		@media (max-width:1400px) {
			&{padding: 4% 2%;}
		}
		.wow.animated{
			visibility: visible!important;
			animation-name: fadeInUp!important;
			}
		.aside{
			float: left;
			width: 250px;
			background-color: #fff;
			padding: 20px 25px;
			&.animated{
				visibility: visible!important;
				animation-name: fadeInUp!important;
				}
			a{
				display: block;
				padding:10px 5px;
				font-size: 18px;
				
			}
			li{
				position: relative;
				&.on >a{
				color:$main-hover-color;
				}
				&.on .nav-btn::after,&.on .nav-btn::before{
					background-color: $main-hover-color;
				}
				&.has-sub{
					.nav-btn{display: block;}
				}
			}
			
			.nav-btn{
				display: none;
				width:20px;
				height: 20px;
				position: absolute;
				top:13px;
				right:0;
				cursor: pointer;
				&::after,&::before{
					content:'';
					display: block;
					background-color: $main-color;
					position: absolute;
					top:0;
					right:0;
					bottom:0;
					left:0;
					margin: auto;
					
				}
				&::after{width: 80%;height: 1px;}
				&::before{height: 80%;width: 1px;}
				&.open::before{display: none;}
			}
			dl{ 
				display: none;
				a{
					display: block;
					padding:5px 5px 5px 15px;
					font-size: 14px;
					color: #666;
					&:hover,&.on{
						color:$main-hover-color;
					}
			}
			}
			
			&.fixed{
				position: fixed;
				top: 82px;
				overflow: auto;
				max-height: calc(100% - 120px);
			}
			&.fixed{-ms-overflow-style: none;scrollbar-width: none; overflow: -moz-scrollbars-none;
			scrollbar-base-color: transparent;
			scrollbar-3dlight-color: transparent;
			scrollbar-highlight-color: transparent;
			scrollbar-track-color: transparent;
			scrollbar-arrow-color: transparent;
			scrollbar-shadow-color: transparent;
			scrollbar-dark-shadow-color: transparent;
			}
			&.fixed::-webkit-scrollbar {display: none; }
			
		}
		
		.content{
			float: right;
			width: calc(100% - 280px);
			background-color: #fff;
			padding: 30px;
			
			.title{
				margin: 0 0 2%;
				font-size: 20px;
				color:$main-hover-color;
			}
			.links{
				a{
					display: inline-block;
					padding: 5px 0;
					text-decoration: underline;
				}
			}
			
			.sec{
				padding-bottom: 6%;
				&:last-child{
					padding-bottom: 0;
				}
				.tit{
					margin: 4% 0 1%;
				}
				.copy-btn{
					display: block;
					margin: 1% 1% 0 auto;
					cursor: pointer;
				}
				.info{
					code{
						white-space: pre-line;
						padding: 1% 2%;
						background: #333;
						line-height: 1.5;
						color: #fff;
						display: block;
					}
				}
			}
			
		}
		@media (max-width:1000px) {
			.aside{
				position: relative!important;
				width: 100%;
				float: none;
				margin-bottom: 5%;
				top: auto!important;
			}
			.content{
				width: 100%;
				float: none;
			}
		}
	}
</style>
