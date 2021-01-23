import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  logoUrl:require("../assets/img/sitelogo.jpg"),
	  homeBanner:[
		"https://cn.bing.com//th?id=OHR.FichtelbergWinter_ZH-CN9274877146_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.PailonDelDiablo_ZH-CN9146230830_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.GlassIgloos_ZH-CN8927574757_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.ChateauBeynac_ZH-CN8777586167_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
		"https://cn.bing.com//th?id=OHR.BrightonSnow_ZH-CN0309526170_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
	  ]
	  
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
