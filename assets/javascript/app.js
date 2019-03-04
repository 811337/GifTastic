var animals = ["Cats", "Dogs", "Parrots", "Turtles", "Crabs", "Chickens"];

function existingButtons() {
    for (var i = 0; i < animals.length; i++) {
        var a = "<button>" + animals[i] + "</buttons>";
        $("#animalButtons").append(a);
    }
}

//creates a list of existing buttons
existingButtons();

//creates new buttons when submit button is clicked
$("#subButton").on("click", function(event) {
    event.preventDefault();

    var newAnimal = $("#animal-input").val().trim();
    $("#animalButtons").append("<button>" + newAnimal + "</button>")
    $("#animal-input").val("");
});

function displayAnimalGifs() {

    var name = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=lWbyc6E2INMnYsvTgiWyjuDsUfaa7fhX&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var animalDiv = $("<div>");
        var imgURL = response.data;
        var gif = $("<img>").attr("src", imgURL);
        animalDiv.append(gif);
        $("#gif-view").prepend(animalDiv);

    });
}
