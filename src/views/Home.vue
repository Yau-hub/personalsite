<template>
  <div class="home">
    <ul class="ul slick-box">
    	<li v-for="item in banner"><img :src="item" alt=""></li>
    	
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
	  return {
		  logoUrl:require("../assets/img/sitelogo.jpg"),
		  banner:this.$store.state.homeBanner,
	  }
  },
  beforeCreate(){
	   this.$store.commit('getHomeBanner');
  },
  mounted() {
	 
  	this.$nextTick(function(){
		$(".slick-box").slick({
			arrows:false,
			slidesToShow:1,
		});
  		
  	})
  }
}
</script>
