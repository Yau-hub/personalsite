<template>
	<div class="head">
		<div class="auto-1400 clearfix">
		<router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
		    <a :href="href" @click="navigate" class="logo" :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"><img :src="logoUrl" alt=""></a>
		</router-link>
			
			<ul class="ul site-nav clearfix">
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="/about">关于</router-link></li>
				<li><router-link to="/work">工作</router-link></li>
				<li><router-link to="/lifes">生活</router-link></li>
				<li><router-link to="/other">其他</router-link></li>
			</ul>
			<div class="nav-btn"><i></i></div>
			
		
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"SiteHead",
		data(){
			return{
				logoUrl: this.$store.state.logoUrl,
				
			}
		},
		mounted(){
			this.$nextTick(function(){
				$(".nav-btn").click(function(){
					$(this).toggleClass("open");
					$(".site-nav").slideToggle();
				
				})
				
				$(window).resize(function(){
					$(".head .site-nav li").unbind("click");
					$(".site-nav").hide();
					if($(window).width() <= 1000){
						$(".head .site-nav li").click(function(e){
							$(".nav-btn").removeClass("open")
							$(".site-nav").slideUp();
							if ( e && e.stopPropagation ) e.stopPropagation();
							else window.event.cancelBubble = true;
						})
					}else{
						$(".nav-btn").removeClass("open")
						$(".site-nav").show();
					}
				}).trigger("resize");
			})
		}
		
	}
	
</script>

<style lang="scss">
	.head{
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		top:0;
		margin: auto;
		background-color: #fff;
		box-shadow: 0 0 5px 5px #f4f4f4;
		z-index:500;
		.auto-1400{
			position: relative;
		}
		.logo{
			position: absolute;
			left: 0;
			top:50%;
			transform: translateY(-50%);
			img{
				max-height: 70px;
			}
			
		}
		
		
		.site-nav{
			float: right;
			padding: 1.2% 0;
			li{
				float: left;
				padding:0 50px;
				position: relative;
				&:before{
					content:"";
					display: block;
					width: 1px;
					height: 15px;
					position: absolute;
					right: 0;
					top:0;
					bottom:0;
					margin: auto;
					background-color: $main-color;
					transform: rotate(15deg);
				}
				&:last-child:before{
					display:none;
				}
				
			}
			a{
				font-size: 18px;
				display: block;
				padding: 10px 0;
				position: relative;
		
				&.router-link-exact-active{
					color: $main-hover-color;
				}
				&.router-link-exact-active::after{
					content:"";
					display: blick;
					width: 100%;
					height: 2px;
					background-color: $main-hover-color;
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
				
				
			}
		}
		.nav-btn{
			float: right;
			width: 40px;
			height: 40px;
			position: relative;
			margin:5px 0 5px 10px;
			display: none;
			@extend .transition;
		
			&::before,&::after{
				content:"";
			}
			i,&::before,&::after{
				position: absolute;
				display: block;
				background-color: $main-color;
				width: 80%;
				height: 1px;
				left: 0;
				right: 0;
				margin: auto;
			}
			i{
				top:0;
				bottom:0;
			}
			&::before{
				top: 20%;
			}
			&::after{
				bottom: 20%;
			}
			&.open{transform: rotate(45deg);-ms-transform: rotate(45deg);-webkit-transform: rotate(45deg);}
			&.open i{display: none;}
			&.open::after,&.open::before{
				top:0;bottom: 0;
			}
			&.open::before{
				width: 80%;
				height: 1px;
			}
			&.open::after{
				width: 1px;
				height: 80%;
			}
			
			
		}
		@media (max-width:1400px) {
			.logo{left: 2%;}
		}
		@media  (max-width:1000px){
			.site-nav{
				display: none;
				position: absolute;
				width:100%;
				padding: 5% 0;
				left:0;
				right:0;
				top:100%;background-color: #fff;
				box-shadow: 0 2px 2px 1px #eee;
				li{
					width: 100%;
					margin: 0;
					padding: 0 2%;
					text-align: center;
					&::before{display: none;}
				}
			}
			.logo img{
				max-height: 40px;
			}
			.nav-btn{display: block;}
			
		}
	}
</style>
