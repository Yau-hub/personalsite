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
				<li><router-link to="/about">生活</router-link></li>
				<li><router-link to="/about">其他</router-link></li>
			</ul>
			
		
			
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
		@media (max-width:1400px) {
			.logo{left: 2%;}
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
	}
</style>
