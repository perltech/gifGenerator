$( document ).ready(function() {

var topics = ["Erykah Badu", "Devin Townsend", "Pink Floyd", "David Bowie", "Thundercat"];

function renderButtons() {
	$("#button-generator").html("<div></div>");

	$.each(topics, function(index, topic) {
		var btn = $("<button>");
		btn.append(topic);
		btn.addClass("gif-click");
    btn.addClass("btn");
		btn.attr("gif-name", topic);
    btn.attr("data-state", "still");
		$("#button-generator").append(btn);	
	});
};

$("#gif-button").click(function(event) {
	event.preventDefault();
	
	var userInput = $("#gif-text").val();
	topics.push(userInput);
	console.log(topics);
	renderButtons();
});

renderButtons();
// $("#gif-text").removeAttr("value");
// $("#gif-text").attr("placeholder", "Enter a new gif here")
//  I want to strip out current value in input field and replace with placeholder text


$('#button-generator').on('click', '.gif-click', function() {
  $("#gifs").html("<div></div>")
	var image = $(this).attr("gif-name");

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        image + "&api_key=dc6zaTOxFJmzC&limit=12";

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
            p.addClass("rating");

            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);
            image.attr("data-state", "still");
            image.addClass("gif");

            gifDiv.prepend(p);
            gifDiv.prepend(image);
            gifDiv.addClass("col-lg-3");
            console.log(results); 
            $("#gifs").prepend(gifDiv);
          };
        });
        console.log("button clicked");
});

$("body").on("click", ".gif", function() {
	// Pausing videos goes here
  var state = $(this).attr("data-state");
  var src = $(this).attr("src")

  if (state === "still") {
    $(this).attr("src", src.replace(/\.gif/i, "_s.gif"));
    $(this).attr("data-state", "animate");
  } 
  else {
    $(this).attr("src", src.replace(/\_s\.gif/i, ".gif"));
    $(this).attr("data-state", "still");
  }

});


}); // onReady function




