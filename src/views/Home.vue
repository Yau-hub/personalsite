<template>
  <div class="home">
    <div class="home-bn">
		<ul class="ul slick-box">
			<li v-for="item in banner">
				<figure class="pic bg-cover" :style="'background-image: url('+item+');'"></figure>
			</li>
			
		</ul>
	</div>
	
	
	
	<div class="home-about bg-cover" :style="'background-image: url('+this.$store.state.homeAboutBg+');'">
		<div class="auto-1400 txt">
			{{this.$store.state.aboutTxt}}	
		</div>
	</div>
	
	<div class="index-lifes auto-1400">
		<h2 class="home-tit">~&nbsp; 生活 &nbsp;~</h2>
		<ul class="clearfix ul slick-box">
			<li v-for="(item,index) in this.$store.state.lifesDate">
				<a :href="item.imgSrc" class="fancybox">
					<div class="pic"><figure class="bg-cover transition" :style="'background-image: url('+item.imgSrc+');'"></figure></div>
					<div class="txt">
						<time class="time">{{item.time}}</time>
						<h3 class="tit">{{item.title}}</h3>
					</div>
					
				</a>
			</li>
		</ul>
		
		<router-link to="lifes" class="more">查看更多</router-link>
	</div>
	
	
	
	
	
	
	
	
	
	
	
	
	
	<audio src="life/audio.mp3" autoplay loop class="bg-audio"></audio>
	<button class="audio-btn"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import fancybox from "@fancyapps/fancybox";
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
  methods:{
	  htmlDecode(text){
	          var temp = document.createElement("div");
	          //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
	          temp.innerHTML = text;
	          //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
	          var output = temp.innerText || temp.textContent;
	          temp = null;
	          return output;
	      }
  },
  beforeCreate(){
	   
		
  },
  mounted() {
	  let that = this;
  	this.$nextTick(function(){
		$(".home-bn .slick-box").slick({
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
		$(".home-about .txt").html(that.htmlDecode($(".home-about .txt").html()))
		$(".index-lifes .slick-box").slick({
			arrows:true,
			slidesToShow:5,
			dots:false,
			autoplay: true,
			autoplaySpeed: 3000,
			 responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 641,
			      settings: {
			        slidesToShow: 2,
			
			      }
			    }
			  ]
		});
		$('.fancybox').fancybox();
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
		
		.home-tit{
			text-align: center;
			margin: 0 auto 3%;
			font-size: 24px;
		}
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
			position: fixed;
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
		
		.home-about{
			margin-top: 3%;
			padding: 5% 0;
			position: relative;
			min-height: 600px;
			color: #fff;
			a{color: #fff;}
			a:hover{
				text-decoration: underline;
			}
			.txt{
				text-align: center;
			}
		}
		
		.index-lifes{
			margin: 5% auto 5%;
			overflow: hidden;
			.slick-box{
				margin: 0 -20px 0 -20px;
				a{
					display: block;
					&:hover{
						.pic figure{
							@extend .scale;
						}
					}
				}
				li{
					padding: 0 20px;
				}
				.pic{
					overflow: hidden;
					position: relative;
					padding-bottom: 130%;
					figure{
						position: absolute;
						left: 0;
						right:0;
						top:0;bottom:0;
						margin: auto;
						width: 100%;
						height: 100%;
					}
				}
				.txt{
					border: 2px solid #f0f0f0;
					border-radius: 0 0 6px 6px;
					padding: 5%;
				}
				.tit{
					font-size: 18px;
					line-height: 24px;
					max-height: 48px;
					margin: 10px 0 0;
				}
				
				.slick-arrow{
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					-ms-transform: translateY(-50%);
					-webkit-transform: translateY(-50%);
					display: inline-block;
					width: 40px;
					height: 40px;
					z-index: 5;
					background:transparent;
					border:2px solid #fff;
					outline: none;
					color: transparent;
					cursor: pointer;
					border-radius: 50%;
					margin-top: -38px;
					@extend .transition;
					&:hover{
						border-color: $main-hover-color;
						background-color: $main-hover-color;
					}
				}
				.slick-arrow::after{
					content:"";
					display: block;
					@extend .absolute;
					height: 30%;
					width: 30%;
					border: 2px solid #fff;
					transform:rotate(45deg);
					-ms-transform:rotate(45deg);
					-webkit-transform:rotate(45deg);
				}
				.slick-prev{
					left: 2%;
					&::after{
						border-right-color: transparent;
						border-top-color: transparent;
						transform: translateX(25%) rotate(45deg);
						-ms-transform: translateX(25%) rotate(45deg);
						-webkit-transform: translateX(25%) rotate(45deg);
					}
				}
				.slick-next{
					right: 2%;
					&::after{
						border-left-color: transparent;
						border-bottom-color: transparent;
						transform: translateX(-25%) rotate(45deg);
						-ms-transform: translateX(-25%) rotate(45deg);
						-webkit-transform: translateX(-25%) rotate(45deg);
					}
				}
				
			}
			.more{
				display: block;
				width: 120px;
				padding: 5px;
				margin: 3% auto 0;
				text-align: center;
				&:hover{
					color: $main-hover-color;
					text-decoration:underline;
				}
			}
		}
		
		
		
		@media (max-width:1000px) {
			.home-bn{
				.pic{padding-bottom: 50%;}
				.slick-dots{
					li{
						height: 10px;
						width:10px;
						border-width:1px;
						}
				}
			}
		
			.home-about .txt br{display: none;}
			.home-about{min-height: 460px;}
		}
		
		@media (max-width:640px) {
			.index-lifes .slick-box li{padding: 0 10px;}
			.index-lifes .slick-box{margin: 0 -10px;}
			.index-lifes .slick-box .slick-arrow{height: 30px;width:30px;}
			.index-lifes .slick-box .slick-prev{left:20px;}
			.index-lifes .slick-box .slick-next{right:20px;}
		}
	}
</style>
