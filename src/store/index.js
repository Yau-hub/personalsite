import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  logoUrl:require("../assets/img/sitelogo.png"),
	  homeBanner:[
		"https://cn.bing.com//th?id=OHR.FichtelbergWinter_ZH-CN9274877146_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.PailonDelDiablo_ZH-CN9146230830_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.GlassIgloos_ZH-CN8927574757_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.ChateauBeynac_ZH-CN8777586167_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.BrightonSnow_ZH-CN0309526170_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
	  ],
	  aboutR:require("../assets/img/abou-r.jpg"),
	  aboutTxt:`<h2 class="tit">关于本站</h2>
			<p>
				本站主要用于管理展示工作及生活中用到的一些文件和图片视频
			</p>
			<p>
				工作栏目存放了前端开发中常用的css、js、插件和参考博客或是api文档的链接，<br>方便工作时查阅资料<br>
			</p>
			<p>
				生活栏目则存放了生活中一些值得保留纪念的图片和视频 <br>
				（文件较大，用了比较不成熟的瀑布流组件，网站又搭建在vercle上所以访问速度异常慢，<br>
				不过本栏目多在本地访问也就无所谓了）
			</p>
			<p>
				其余栏目暂时只是摆设
			</p>
			<p>
				ps：本站中一些素材来源于网络如有侵权请及时到github上fork <br>
				项目地址：<a href="https://github.com/Yau-hub/personalsite" target="_blank">https://github.com/Yau-hub/personalsite</a><br>
				或者直接电联：<a href="tel:17817863715">17817863715</a> <br>	
			</p>`
	  
  },
  getters:{
      getStoreCount:function(state){
              return state.logoUrl;
       }
  },
  mutations: {
	
  },
  actions: {
  },
  modules: {
  }
})
