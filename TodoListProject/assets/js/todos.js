// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	// // if li is gray
	// // Note you have to compare the color with rgb, otherwise it would not work
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// turn it black
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// }
	// // else
	// 	// turn it gray
	// else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });	
	// }
	$(this).toggleClass("completed");
});

// click on x to delete Todos
// when using jQuery, you can only add events to existing elements for the first time. That's why we add events
// on "ul" here, but we want the event to be fired only when the span is clicked, so we add "span" after "click"
$("ul").on("click", "span", function(event) {
	// remove the parent element of this element
	//$(this).parent().remove();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	// avoid event bubbling. Since the span is inside li and inside ul and inside container and inside body. 
	// If you do not call the stopPropagation method, after clicking the span all the parent level events
	// would be triggered.
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grabbing new todo text from input 
		var todoText = $(this).val();
		// clear the input
		$(this).val("");
		// create a new li and add to ul
		// a new method called append which would append sth to the end of an element
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});