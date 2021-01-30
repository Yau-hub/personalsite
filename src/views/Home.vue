<template>
  <div class="home">
    <div class="home-bn">
		<ul class="ul slick-box">
			<li v-for="item in banner">
				<figure class="pic bg-cover" :style="'background-image: url('+item+');'"></figure>
			</li>
			
		</ul>
	</div>
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
	   
		
  },
  mounted() {
  	this.$nextTick(function(){
		$(".slick-box").slick({
			arrows:false,
			slidesToShow:1,
		});
  	})
  },
  computed:{
	 
  },
  watch:{
	
  }
}
</script>
<style lang="scss">
	.home{
		.home-bn{
			.pic{
				padding-bottom: 31.25%;
			}
		}
	}
</style>
