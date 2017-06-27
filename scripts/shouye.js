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
		$(function(){
			$("article ul a").mouseover(function(){
				$(this).css({"fontSize":"1.6em","color":"red"});
			}).mouseout(function(){
				$(this).css({"fontSize":"1.5em","color":"blue"})
			})
		})
		$(function(){
			$("article a:eq(0)").mouseover(function(){
				$("article img").stop().animate({left:"-225px"})
			});
			$("article a:eq(1)").mouseover(function(){
				$("article img").stop().animate({left:"-500px"})
			});
			$("article a:eq(2)").mouseover(function(){
				$("article img").stop().animate({left:"-750px"})
			});
			$("article a:eq(3)").mouseover(function(){
				$("article img").stop().animate({left:"-1000px"})
			});
		})
 