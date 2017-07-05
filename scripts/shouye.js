$(function(){
			$("nav a").each(function(){
			if(window.location.href.indexOf($(this).attr("href"))!=-1){
				$(this).addClass("here");
				}
			})
		})
		$(function opacity(){
			var $h1=$("article h1");
			$h1.animate({opacity:"0.1"},1000);
			$h1.animate({opacity:"1"},1000);
			setTimeout(opacity,4000);
		})
		$(function(){
			var $ul=$("article ul");
			$ul.css("display","none");
			$ul.show(1000);
		})
			$("article ul a").mouseover(function(){
				$(this).css({"fontSize":"1.6em","color":"red"});
			}).mouseout(function(){
				$(this).css({"fontSize":"1.5vw","color":"blue"})
			})
		$("article ul li").mouseover(function(){
			var id=$(this).index();
			$("article div.container img").stop().eq(id).fadeIn()
				.siblings().fadeOut();
		})
		
 