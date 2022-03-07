/**
 * 
 */
function subChange() {
	var total = ["옵션1", "옵션1", "옵션1", "옵션1"];
	var cloud = ["옵션2", "옵션2"];
	
	var selectedOne = $("#product_category").val();
	
	var changeOne;
	
	if(selectedOne == "전체 솔루션"){
		changeOne = total;
	} else if(selectedOne == "클라우드") {
		changeOne = cloud;
	}
	
	$("#product_category_sub").empty();
	
	for(var i=0; i<changeOne.size(); i++){
		var option = $("<option>" + changeOne[i] + "</option>");
		$("#product_category_sub").append(option);
	}
}
