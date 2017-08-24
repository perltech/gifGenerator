$( document ).ready(function() {

var topics = ["Erykah Badu", "Man or Astroman", "Pink Floyd", "Jurassic 5"];

function renderButtons() {
	$("#button-generator").html("<div></div>");

	$.each(topics, function(index, topic) {

		var btn = $("<button>");
		btn.append(topic);
		btn.attr("gif-name", topic);
		$("#button-generator").append(btn);
		
	});

};

$("#gif-button").click( function(event) {
	event.preventDefault();
	
	var userInput = $("#gif-text").val();
	topics.push(userInput);
	console.log(topics);

	renderButtons();

});

renderButtons();


$("#gif-button").click(function(){

});




}); // onReady function




