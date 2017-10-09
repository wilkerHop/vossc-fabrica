$(document).ready(function () {
	$("#carrosel").owlCarousel({
		//navigation : true, // Show next and prev buttons
		responsive: true,
		slideSpeed: 500,
		autoPlay: 5000,
		pagination : false,
		paginationSpeed: 1000,
		singleItem: true,
		stopOnHover: true
	});
});