<template>
  <div class="home">
    <div class="home-bn">
		<ul class="ul slick-box">
			<li v-for="item in banner">
				<figure class="pic bg-cover" :style="'background-image: url('+item+');'"></figure>
			</li>
			
		</ul>
	</div>
	
	<audio src="life/audio.mp3" autoplay loop class="bg-audio"></audio>
	<button class="audio-btn"></button>
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
			dots:true,
			autoplay: true,
			autoplaySpeed: 3000,
		});
		
		$(".audio-btn").click(function(){
			if($(".bg-audio")[0].paused){
				$(this).removeClass("on")
				$(".bg-audio")[0].play();
				
			}else{
				$(this).addClass("on")
				$(".bg-audio")[0].pause();
			}
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
			.slick-dots{
				position: absolute;
				left:0;
				bottom: 5%;
				width: 100%;
				text-align: center;
				li{
					display: inline-block;
					border-radius: 50%;
					border:2px solid #fff;
					height: 16px;
					width: 16px;
					margin: 0 5px;
					opacity: 0.8;
					position: relative;
					cursor: pointer;
					&.slick-active{
						opacity: 1;;
						border-color: $main-hover-color;
						&::after{
							content:"";
							display: block;
							width: 50%;
							height: 50%;
							position: absolute;
							left:0;
							bottom:0;
							right:0;
							top:0;
							margin:auto;
							border-radius: 50%;
							background-color: $main-hover-color;
						}
					}
					*{display: none!important;}
				}
			}
		}
		.bg-audio{
			height: 0;
			width: 0;
			opacity: 0;
			position: absolute;
			left: 0;
			bottom:0;
			z-index: -10;
		}
		@keyframes rotate{
			0%{transform: rotate(0deg);-ms-transform: rotate(0deg);-webkit-transform: rotate(0deg);}
			100%{transform: rotate(360deg);-ms-transform: rotate(360deg);-webkit-transform: rotate(360deg);}
		}
		.audio-btn{
			position: absolute;
			right: 2%;
			bottom:10%;
			display: block;
			width: 40px;
			height: 40px;
			border: 0;
			outline: 0;
			cursor: pointer;
			z-index: 10;
			background: url(../assets/img/stop-play.png) no-repeat center center;
			background-size: 80%;
			animation: rotate 2s linear infinite;
		}
		.audio-btn.on{background-image: url(../assets/img/replay.png);}
		@media (max-width:1000px) {
			.home-bn{
				.slick-dots{
					li{
						height: 10px;
						width:10px;
						border-width:1px;
						}
				}
			}
		}
	}
</style>
