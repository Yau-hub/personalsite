<template>
  <div class="about">
    <div class="auto-1400 clearfix">
		<figure class="pic about-r bg-cover" :style="'background-image: url('+this.$store.state.aboutR+');'"></figure>
		
		<span class="txt">
			{{this.$store.state.aboutTxt}}

		</span>
	
	</div>
  </div>
</template>
<script>
	export default{
		 name: 'About',
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
		 mounted(){
			 let that = this;
			 this.$nextTick(function(){
				 $(".about .txt").html(that.htmlDecode($(".about .txt").html()))
			 })
		 }
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
			.txt{
				br{display: none;}
			}
		}
	}
</style>
