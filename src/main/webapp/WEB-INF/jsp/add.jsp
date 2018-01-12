<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="${pageContext.request.contextPath}/addOne" method="post">
<div>姓名：<input type="text" name="studentname"></div>
<div>性别：<input type="radio" name="gender" value="男">男<input type="radio" name="gender" value="女">女</div>
<div>专业：<input type="text" name="profession"></div>
<div>方向：<select name="direction">
	<option value="Java开发">Java开发</option>
	<option value="大数据">大数据</option>
	<option value="软件测试">软件测试</option>
	<option value="WEB前端">WEB前端</option>
</select></div>
<div>技术：<input type="text" name="technology" class="technology" placeholder="请输入数字"></div>
<div>能力：<input type="text" name="ability" class="ability" placeholder="请输入数字"></div>
<div><input type="submit" class="sub" value="提交"><input type="button" onclick="window.location.href='${pageContext.request.contextPath}/home'" value="返回"></div>
</form>
</body>
</html>