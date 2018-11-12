<%@ page language="java" import="java.util.*,java.sql.*"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:forEach items="${requestScope.list}" var="news" varStatus="i">
	<li>${news.ntitle}<span>
			作者：${news.nauthor}&#160;&#160;&#160;&#160; <a href='#'>修改</a>
			&#160;&#160;&#160;&#160; <a href='javascript:;'
			onclick='return clickdel(${news.nid})'>删除</a>
	</span>
	</li>
	<c:if test="${i.count % 5 == 0}">
		<li class='space'></li>
	</c:if>
</c:forEach>
