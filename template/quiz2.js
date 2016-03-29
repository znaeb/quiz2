(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.


	//I was in class

	$mouseover = $(".mouse-over");
	$click     = $(".click");
	$submit       = $(".submit");
	$timeout       = $(".timeout");
	$title =$(".title");
	$nerdStuff =$(".nerd-stuff");

	$mouseover.on('mouseover', function() {
		//$mouseover.mouseover (function() {
		//$this = $(this);
		$(this).html('Scrooge McDuck!');
		//$(this).height($(this).height() + 50);
		//$(this).html($this);
	});
	$mouseover.on('mouseout', function() {
		//$mouseover.mouseover (function() {
		//$this = $(this);
		$(this).html("<span>mouse over event</span>	<p>Who's the richest person you know? (mouse over to find out)</p>");
		//$(this).height($(this).height() - 50);
		//$(this).height($(this).height() + 50);
		//$(this).html($this);
	});


	$click.click('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		//alert($(this).);
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			//alert("poo");
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).html("<h2>Congratulations! You've entered some text!</h2>");//.appendWith();
		}
	});
	$title.click('click', function() {
		$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=quizData", function( data ) {
			$random=Math.floor((Math.random() * data.data.length));
			$nerdyStuff=data.data[$random];
			$nerdStuff.html($nerdyStuff);
			$(this).button( "option", "label", "new text" );
			$(this).html("My NEW Text");
			$(this).prop('value', 'Change it');
		})
	})();


	$(document).on('ready', function() {
		//setTimeout({
			$timeout.fadeIn('slow');

		//})
	});

})(jQuery);