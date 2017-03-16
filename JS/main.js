$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
$("#sidebar-wrapper").load("sidebar.html");

function load(page, element) {
	$("#sidebar-wrapper .selected-link").each(function(k, v) { $(v).toggleClass("selected-link") });
	$(element).parent().toggleClass("selected-link");
	$("#page-content-wrapper").load(page + " #container");
}