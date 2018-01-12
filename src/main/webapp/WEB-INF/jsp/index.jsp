<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

table#stutable {
	font-family: verdana, arial, sans-serif;
	font-size: 11px;
	color: #333333;
	border-width: 1px;
	border-color: #666666;
	border-collapse: collapse;
}

table#stutable th {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #dedede;
}

table#stutable td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #ffffff;
}

ul {
	list-style: none;
}

li {
	display: inline;
	margin: 5px;
	cursor: pointer;
}
</style>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<ul id="d">
		<li>方向：</li>
		<li class="findAll">全部</li>
		<li class="Direction" value="Java开发">Java开发</li>
		<li class="Direction" value="大数据">大数据</li>
		<li class="Direction" value="软件测试">软件测试</li>
		<li class="Direction" value="WEB前端">WEB前端</li>
	</ul>
	<ul id="g">
		<li>性别：</li>
		<li class="findAll">全部</li>
		<li class="Gender" value="男">男</li>
		<li class="Gender" value="女">女</li>
	</ul>
	<table id="stutable">
	</table>
	<a href="${pageContext.request.contextPath}/add">新增学生</a>
</body>
</html>