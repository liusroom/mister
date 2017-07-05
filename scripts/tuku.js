$(function(){
			$("nav a").each(function(){
			if(window.location.href.indexOf($(this).attr("href"))!=-1){
				$(this).addClass("here");
				}
			})
		})
$(function(){
	var page=1;
	$("input.next").click(function(){
		var len=$("article li").length;
		var pageCount=Math.ceil(len/5);
		var wd=$("body").width();
		if(!$("article div.contentList").is(":animated")){
		if(page==pageCount){
			$("article div.contentList").animate({left:"0"},"slow");
			page=1;
		}else{
			$("article div.contentList").animate({left:"-="+wd},"slow");
			page++;
			}
		$("article span").eq((page-1)).addClass("current").siblings().removeClass("current");
		}
	});
	$("input.pre").click(function(){
		var len=$("article li").length;
		var pageCount=Math.ceil(len/5);
		var wd=$("body").width();
		if(!$("article div.contentList").is(":animated")){
			if(page==1){
				$("article div.contentList").animate({left:"-="+(pageCount-1)*wd},"slow");
				page=pageCount;
			}else{
				$("article div.contentList").animate({left:"+="+wd},"slow");
				page--;
			}
			$("article span").eq((page-1)).addClass("current").siblings().removeClass("current");
		}
	})
})
$(function(){
	$("article li a").click(function(){
		$(this).addClass("border").parent().siblings().children().removeClass("border")
		var src=$(this).children().attr("src");
		var alt=$(this).children().attr("alt");
		var tt=$(this).children().attr("title");
		$("article div.show img").attr("src",src).attr("alt",alt).attr("title",tt);
		return false;
	})
})
