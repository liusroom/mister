$(function(){
			$("nav a").each(function(){
			if(window.location.href.indexOf($(this).attr("href"))!=-1){
				$(this).addClass("here");
				}
			})
		})
		$(function(){
			$("tr:odd").css({"backgroundColor":"#efb"});
		})
		$(function(){
			$("td").mouseover(function(){
				$(this).addClass("this")
			}).mouseout(function(){
				$(this).removeClass("this")
			})
		})