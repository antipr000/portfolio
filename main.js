$(document).ready(function () {
  $(".menu-toggle").click(function () {
    if ($("#menu-list").css("visibility") === "hidden") {
      $("#menu-list").css("visibility", "visible");
      $(".menu-icon").text("close");
    } else {
      $("#menu-list").css("visibility", "hidden");
      $(".menu-icon").text("menu");
    }
  });
});
