$(function() {
	var $fromArea = $("ul.classlist").eq(2);
	var $commentInputs = $fromArea.find(":input");
	var $commentArea = $fromArea.prev("ul").children();


	$("#commentSubmit").click(function() {
		var paramArray = $commentInputs.serializeArray();
		var queryString = $.param(paramArray);

		$.post("util/news?opr=addComment", queryString, afterComment, "json");
		function afterComment(data) {
			if (data[0].result == "success") {
				var $newComment = $("<tr><td> 留言人： </td>"
					+ "<td>cauthor</td>"
					+ "<td> IP： </td><td>cip</td>"
					+ "<td> 留言时间： </td>"
					+ "<td>cdate</td></tr><tr>"
					+ "<td colspan=\"6\">ccontent</td>"
					+ "</tr><tr><td colspan=\"6\"><hr /></td></tr>");
				$(paramArray).each(function() {
					$newComment.find("td:contains('" + this.name + "')").text(this.value);
				});
				$newComment.find("td:contains('cdate')").text(data[0].cdate);
				$commentArea.prepend($newComment);
			} else {
				alert(data[0].result);
			}
		}

	});


})