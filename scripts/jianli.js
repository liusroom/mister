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
		