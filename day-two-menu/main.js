$(".menu-icon").bind("click", function () {
  console.log("hello");
  $(this).toggleClass("active");
  $(this).find("div").removeClass("no-animation");
});
