// $("h1").css("color", "green");
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

$("h1").addClass("big-title margin-50"); // multiple classes applied
console.log($("h1").css("color"))  // get color of h1 to log
$("h1").text("Hello Example"); // change element text
$("h1").removeClass("big-title");  // remove a class
$("img").attr("src", "radon.png")

$("button").html("Don't <em>click</em> me") // change element text with html
// Event Listener H1
$("h1").click(function() {
    $("h1").css("color", "red");
});

$("h2").on("mouseover", function() {
    $("h1").css("color", "orange");

});$("h2").on("mouseout", function() {
    $("h1").css("color", "black");
});



// Event Listener button
$("button").click(function() {
    $("h1").css("color", "green");
});



// Event Listener keypress
$(document).keypress(function (e) { 
    $("h1").text(e.key);
});

// Creating new elements with: before after prepend append
$("h1").before("<button>NEW</button>");

// Animate elements with hide show toggle
// fadeIn fadeOut fadeToggle 
// slideIn slideOut slideToggle
// animate({opacity: 0.5}) Numericaal valued properties only
// Can chain together in a sequence as shown.
$("button").on("click", function() {
    $("h2").slideUp().slideDown().animate({opacity: 0.2});
});
