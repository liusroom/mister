$(function(){
			$("nav a").each(function(){
			if(window.location.href.indexOf($(this).attr("href"))!=-1){
				$(this).addClass("here");
				}
			})
		})
		$(function(){
			$("section").css("display","none");
			$("article a").click(function(){
				$("article ul").animate({left:"60%"},500);
				$("article img").animate({"opacity":"0"},500);
			})
			var at=document.getElementsByTagName("article");
			var a=at[0].getElementsByTagName("a");
			for(var i=0;i<a.length;i++){
				a[0].onclick=function(){
					$(this).addClass("this");
					$(this).parent().siblings().children().removeClass("this");
					$("section:eq(0)").siblings().hide(500);
					$("section:eq(0)").show(500)
					}
				a[1].onclick=function(){
					$(this).addClass("this");
					$(this).parent().siblings().children().removeClass("this");
					$("section:eq(1)").siblings().hide(500);
					$("section:eq(1)").show(500)
					}
				a[2].onclick=function(){
					$(this).addClass("this");
					$(this).parent().siblings().children().removeClass("this");
					$("section:eq(2)").siblings().hide(500);
					$("section:eq(2)").show(500)
					}
				a[3].onclick=function(){
					$(this).addClass("this");
					$(this).parent().siblings().children().removeClass("this");
					$("section:eq(3)").siblings().hide(500);
					$("section:eq(3)").show(500)
					}
				a[4].onclick=function(){
					$(this).addClass("this");
					$(this).parent().siblings().children().removeClass("this");
					$("section:eq(4)").siblings().hide(500);
					$("section:eq(4)").show(500)
					}
			}
		})