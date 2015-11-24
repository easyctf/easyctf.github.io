function setSplashHeight() {
	if (window.innerWidth <= 767) {
		$("#splash").css("height", window.innerHeight);
	} else {
		$("#splash").css("height", Math.max(500, window.innerHeight - 90));
	}
}

$(document).ready(function() {
	setSplashHeight();
	
	smoothScroll.init({
		speed: 240,
		easing: 'easeOutCubic',
		updateURL: false
	});
});

$(document).resize(function() {
	setSplashHeight();
});