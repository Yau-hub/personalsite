import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  logoUrl:require("../assets/img/sitelogo.jpg"),
	  homeBanner:[]
	  
  },
  getters:{
      getStoreCount:function(state){
              return state.logoUrl;
       }
  },
  mutations: {
	  getHomeBanner(state){
		  if(state.homeBanner.length <= 0){
		   axios({
				  url: "/bing/HPImageArchive.aspx?format=js&idx=5&n=5&mkt=zh-CN",
				  method: "get",
				  params: {}
				}).then(res => {
				  let bnArrs = res.data.images.map(function(item){
					  return "https://cn.bing.com/"+item.url
				  })
				  state.homeBanner = bnArrs;
				  this.reload
				}).catch(function (error) {
		        console.log(error)
		      });
		}
			
	  }
  },
  actions: {
  },
  modules: {
  }
})
