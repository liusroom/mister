$(function(){
			$("nav a").each(function(){
			if(window.location.href.indexOf($(this).attr("href"))!=-1){
				$(this).addClass("here");
				}
			})
		})
		$(function(){
			$("<p>提示：*为必填项目，请正确填写</p>").appendTo($("form"))
			$("article form :input").each(function(){
				if($(this).attr("required")){
					$("<span>*</span>").insertAfter($(this));
				}
			})
		})
		function check(){
			var i=0;
			$("article form :input[required]").each(function(){
				if($(this).val()==""){
					i++;
				}
			});
			if(i>0){
				alert("请完成必填项目");
			}
			var em=$("article form input.email").val()
			if(em.indexOf("@")==-1){
				alert("请输入正确的邮箱地址");
				return false;
			}else{
				$("article").empty().load("thanks.html")
			}
			
		}
		