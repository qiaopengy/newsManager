$(function() {
	function initNews() {
	/*	$.ajax({
			"url" : "../util/news",
			"type" : "GET",
			"data" : "opr=listHTML",
			"dataType" : "html",
			"success" : processNewsList
		});*/
		
		//$.getJSON("../util/news","opr=list",processNewsList);
		$("#showNews").load("../util/news","opr=listHTML");
		
	}

/*	function processNewsList(data) {
		var $newslist = $("#showNews");
		
		$newslist.html(data);
		for (var i = 0; i < data.length;) {
			$newslist.append("<li>" + data[i].ntitle + "<span> 作者：" +
				data[i].nauthor + " &#160;&#160;&#160;&#160; " +
				"<a href='#'>修改</a> &#160;&#160;&#160;&#160;" +
				"<a href='#' onclick='return clickdel()'>删除</a>" +
				"</span> </li>");
			if ((++i) % 5 == 0) {
				$newslist.append("<li class='space'> </li>")
			}
		}
		
	}*/
	initNews();
	
	
	var $leftLinks = $("#opt_list a");
	$leftLinks.eq(1).click(initNews())
});