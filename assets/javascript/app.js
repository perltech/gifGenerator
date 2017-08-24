$( document ).ready(function() {

var topics = ["Erykah Badu", "Man or Astroman", "Pink Floyd", "Jurassic 5"];

function renderButtons() {
	$("#gifs").html("<div></div>");

	$.each(topics, function(index, topic) {
		$("#gifs").append("<button>" + topic + "</button>");
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



}); // onReady function




