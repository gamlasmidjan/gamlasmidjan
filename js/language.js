
$(function() {
	$('#setEnglish').bind('click', function() {
		$.cookie("lang", "en", { expires: 365 });
		$('.is').fadeOut(function() { $('.en').fadeIn(); });
	});
	$('#setIcelandic').bind("click", function() {
		$.cookie("lang", "is", { expires: 365 });
		$('.en').fadeOut(function() { $('.is').fadeIn(); });
	});

	var currentCookie = $.cookie("lang");
	if(currentCookie == "en") {
		$('.is').hide();
		$('.en').show();
	}
});
