function setSize() {
	if (window.innerWidth <= 767) {
		$("#splash").css("height", window.innerHeight);
	} else {
		$("#splash").css("height", Math.max(500, window.innerHeight - 90));
	}
	$("#navbar-filler").css("height", $("#nav").outerHeight());
}

$(document).ready(function() {
	setSize();
	$("[data-toggle=\"tooltip\"]").tooltip();
	smoothScroll.init({
		speed: 480,
		easing: "easeOutCubic",
		offset: $("#nav").outerHeight(),
		updateURL: false
	});
});

$(document).resize(function() {
	setSize();
});

$(document).scroll(function() {
	var scroll = $(window).scrollTop();
	if ($("#navbar-filler").is(":visible") ? (scroll > $("#navbar-filler").position().top) : (scroll > $("#nav").position().top)) {
		$("#nav").addClass("navbar-fixed-top");
		$("#navbar-filler").show();
	} else {
		$("#nav").removeClass("navbar-fixed-top");
		$("#navbar-filler").hide();
	}
});