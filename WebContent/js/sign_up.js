/**
 * 
 */
$(function(){
	$("#password1").blur(function() {
		if($("#password1").val() != ""){
			if($("#password1").val().length < 6){
				alert("비밀번호는 6자 이상이여야 합니다.")
			}else {
				return;
			}
		}else{
			return;
		}
	});
	$("#password2").blur(function() {
		    if( $("#password1").val() != $("#password2").val() ) {
		      alert("비밀번호가 일치 하지 않습니다");
		      /*return false;*/
		    } else {
		      /*alert("비밀번호가 일치합니다");*/
		     /* return true;*/
		    	return;
		    }
	});
});