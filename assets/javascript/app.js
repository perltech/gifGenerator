$( document ).ready(function() {

var topics = ["Erykah Badu", "Man or Astroman", "Pink Floyd", "Jurassic 5"];

function renderButtons() {
	$("#button-generator").html("<div></div>");

	$.each(topics, function(index, topic) {
		var btn = $("<button>");
		btn.append(topic);
		btn.addClass("gif-click");
		btn.attr("gif-name", topic);
		$("#button-generator").append(btn);	
	});
};

function addNewButton(userInput) {
	// var newGif = topics[topics.length - 1];
	topics.push(userInput);

	var btn = $("<button>");
	btn.append(userInput);
	btn.addClass("gif-click");
	btn.attr("gif-name", userInput)
	$("#button-generator").append(btn);
	// console.log(newGif);
	$("body").load("index.html", "#button-generator")

};

$("#gif-button").click(function(event) {
	event.preventDefault();
	
	var userInput = $("#gif-text").val();
	topics.push(userInput);
	console.log(topics);
	addNewButton(userInput);
});

renderButtons();


$('#button-generator').on('click', '.gif-click', function() {
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
          };
        });
        console.log("button clicked");
});

$("img").click(function() {
	// Pausing videos goes here


});


}); // onReady function




