<template>
  <div class="about">
    <div class="auto-1400 clearfix">
		<figure class="pic about-r bg-cover" :style="'background-image: url('+this.$store.state.aboutR+');'"></figure>
		
		<span class="txt">
			<h2 class="tit">关于本站</h2>
			
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			<p>本站简介本站简介本站简介本站简介本站简介本站简介</p>
			本站简介本站简介本站简介本站简介本站简介本站简介本站简介
			本站简介本站简介本站简介本站简介本站简介本站简介本站简介
			本站简介本站简介本站简介本站简介本站简介本站简介本站简介
			本站简介本站简介本站简介本站简介本站简介本站简介本站简介
			本站简介本站简介
			
		</span>
	
	</div>
  </div>
</template>
<script>
	export default{
		 name: 'About'
	}
</script>
<style lang="scss">
	.about{
		padding: 4% 0;
		.about-r{
			width: 45%;
			margin-left: 5%;
			margin-bottom: 2%;
			float:right;
			padding-bottom: 30%;
			margin-top: 30px;
		}
		.txt{
			line-height: 1.5;
			.tit{
				margin: 0 0 20px;
			}
		}
		
		@media (max-width:768px) {
			.about-r{
				float: none;
				margin: 0 auto 30px;
				width: 100%;
			}
		}
	}
</style>
