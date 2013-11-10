$(":button").click(function(){
	var isbn = this.id;
	var request =  $.ajax({
		type: 'put',
		url: "http://localhost:8001/library/v1/books/"+ isbn +"?status=lost",
		contentType:'application/json',
		complete: UpadteStatus(isbn)
	});
});

function UpadteStatus(isbn){
	var tempStatus = "#"+isbn+"_status";
	var tempButton = "#"+isbn;
	$(tempStatus).html("lost");
	alert("Status updated succesfully");
	$(tempButton).attr("disabled", "disabled");

}

