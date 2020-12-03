$(".burger-menu").click(function(evt) {
	evt.preventDefault();
	$("nav, .utility").toggle();
	$("header h1").toggleClass('bracket');
});
