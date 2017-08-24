$( document ).ready(function() {

var topics = ["Erykah Badu", "Man or Astroman", "Pink Floyd", "Jurassic 5"];

function renderButtons() {
	$("#button-generator").html("<div></div>");

	$.each(topics, function(index, topic) {
		var btn = $("<button>");
		btn.append(topic);
		btn.addClass("gif-click")
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


$(".gif-click").click(function(){
	var image = $(this).attr("gif-name");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        image + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            console.log(results);
            $("#gifs").prepend(gifDiv);
          }
        });
});




}); // onReady function




