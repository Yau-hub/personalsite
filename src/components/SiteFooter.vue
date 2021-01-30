<template>
	<div class="bottom">
		<a href="javascript:void(0);"   class="getTop"></a>
	</div>
</template>

<script>
	export default{
		name:"SiteHead",
		mounted(){
			this.$nextTick(function(){
				$(".getTop").click(function(){
					$('body,html').animate({scrollTop:0},500);
				});
				 $(window).scroll(function() {	
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;	
					if(scrollTop >= 1000){
						$(".getTop").fadeIn();
					}else{
						$(".getTop").fadeOut();
					}
				}).trigger("scroll");
			})
		}
	}
</script>

<style lang="scss">
	.getTop{
		position: fixed;
		z-index: 50;
		right: 2%;
		bottom: 20%;
		width: 40px;
		height: 40px;
		display: none;
		opacity: 0.8;
		background: url(../assets/img/get-top.png) no-repeat center center;
		background-size: 100% 100%;
	}
</style>
