<template>
	<div class="life auto-1400">
		<div class="data  auto-1400">
			<waterfall :col="col" :data="dataList">
			      <!--  @loadmore="loadmore"
			          @scroll="scroll" -->
			      <template>
					  <div v-for="(item, index) in dataList">
						  <a @click="changeImgLsInde(index)" :data-index="index"  :href="item.videoList[0].url" data-type="iframe" :data-fancybox="'group'+index" class="isVideo cell-item fancybox"  v-if="item.showVideo == true">
						      <div class="pic-wrap">
						    	  <img :lazy-src="item.imgSrc" alt="加载错误" class="pic" />
						      </div>
						    	<div class="txt">
						    		<time class="time dot">{{item.time}}</time>
						    		<h3 class="tit dot2">{{item.title}}</h3>
						    	</div>
						    </a>
						  <a @click="changeImgLsInde(index)" :data-index="index" :href="item.imgSrc" data-type="image" :data-fancybox="'group'+index" class="cell-item fancybox"  v-else>
						    <div class="pic-wrap">
						  	  <img :lazy-src="item.imgSrc" alt="加载错误" class="pic" />
						    </div>
						  	<div class="txt">
						  		<time class="time dot">{{item.time}}</time>
						  		<h3 class="tit dot2">{{item.title}}</h3>
						  	</div>
						  </a>
					  </div>
			      </template>
			    </waterfall>
		</div>
			<div class="imgLs" >
				<a class="fancybox" data-type="iframe" :href="item.url":data-fancybox="'group'+imgLsIndex" v-for="(item,index) in dataList[imgLsIndex].videoList" v-if="dataList[imgLsIndex].showVideo && index>0"></a>
				<a class="fancybox" data-type="image" :href="item.url":data-fancybox="'group'+imgLsIndex" v-for="(item,index) in dataList[imgLsIndex].imgList"></a>
			</div>
	</div>
</template>

<script>
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import fancybox from "@fancyapps/fancybox";
	export default{
		name:"Lifes",
		data(){
			return{
				col:5,
				imgLsIndex:0,
				 dataList: [
				        {
				          imgSrc: "life/Moment.jpg",
				          time:"2020-05-20",
				          title: "原来是只傻猫...",
						  imgList:[
							  {
							  	url:"life/view.jpg"
							  },
							  {
							  	url:"life/Moment.jpg"
							  }
						  ],
						  showVideo:true,
						  videoList:[
							  {
							  	url:"life/Moment.mp4"
							  }
						  ]
				        },
						{

						  imgSrc: "life/view.jpg",
						  time:"2020-05-20",
						  title: "A test item!",
						  imgList:[
							  {
							  	url:"life/Moment.jpg"
							  }
						  ],
						  showVideo:false,
						  videoList:[
						  ]
						}
				
				      ]
			}
		},
		methods:{
			changeImgLsInde(index){
				this.imgLsIndex = index;
			}
		},
		mounted(){
			let that = this;
			this.$nextTick(function(){
				$(window).resize(function(){
					if($(window).width() >=1024){
						that.col = 5;
					}
					else if($(window).width() >1000){
						that.col = 4;
					}
					else if($(window).width() >480){
						that.col = 3;
					}
					else if($(window).width() <=480){
						that.col = 2;
					}
				}).trigger("resize");
				
				
				$('.fancybox').fancybox();
			})
			
		},
		watch:{
			col(newVal,oldVal){
				this.$waterfall.forceUpdate()
			}
		}
	}
</script>

<style lang="scss">
	.life{
		padding: 4% 0%;
		overflow: hidden;
		.data{
			margin: 0 -10px;
		}
		.vue-waterfall{
			.pic-wrap{
				overflow: hidden;
				position: relative;
			}
			.isVideo .pic-wrap::after{
				content:"";
				display: block;
				position: absolute;
				width:100%;
				height:100%;
				top:0;
				left: 0;
				background: url(../assets/img/play.png) no-repeat center center rgba(0,0,0,0.2);
			}
			.pic{
				border-radius: 6px 6px 0 0;
				width: 100%;
				height: auto;
				display: block;
				@extend .transition;
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
		}
		.cell-item {
			display: block;
		  width: 100%;
		  margin-bottom: 6px;
		  background: #ffffff;
		  overflow: hidden;
		  &:hover{
			  .pic{
				  @extend .scale;
			  }
			  .txt{
				  color:$main-hover-color;
			  }
		  }
		 
		}
		.imgLs{
			position: absolute;
			left: 0;
			top: 0;
			display: inline-block;
			height: 0;
			width: 0;
			overflow: hidden;
			z-index: -1;
		}
		
	}
	.fancybox-slide--iframe .fancybox-content{
		height: 100%!important;
	}
	
	.vue-waterfall .vue-waterfall-column{
		padding: 0 10px;
		
	}
	@media (max-width: 480px) {
	 // .vue-waterfall .vue-waterfall-column{width: 50%!important;}
	 .life .vue-waterfall .tit{font-size: 16px;line-height: 22px;max-height: 44px;}
	 .life .vue-waterfall .isVideo .pic-wrap::after{
		 background-size: 40px;
	 }
	}
	
	
</style>
