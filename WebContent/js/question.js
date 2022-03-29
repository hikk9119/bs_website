function question_list() {
	document.write("<table>");
	document.write("<colgroup><col width='10%'><col width='60%'><col width='15%'><col width='15%'></colgroup>");
	document.write("<tr><td>번호</td><td>제목</td><td>작성자</td><td>날짜</td></tr>");
	for(var i=1; i<11; i++){
		document.write('<tr>');
		document.write('<td>'+ i +'</td>');
		document.write('<td>게시물' + i +'</td>');
		document.write('<td>이름'+ i +'</td>');
		document.write('<td>날짜'+ i +'</td>');
		document.write('</tr>');
	}
	document.write("</table>");
}
question_list()