function scrollToDiv(divId) {
	var div = document.getElementById(divId);
	var offsetTop = div.offsetTop;
	var scrollOptions = {
		top: offsetTop,
		behavior: "smooth",
	};

	window.scrollTo(scrollOptions);
}
