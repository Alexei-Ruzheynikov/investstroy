$(document).ready(function () {
  $(".directions-blocks").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  var menuBtn = $(".top-nav_btn");
  var menu = $(".top-nav_menu");

  var sidebarBtn = $(".left-sidebar_btn");
  var sidebarmenu = $(".left-sidebar_menu");

  menuBtn.on("click", function (event) {
    event.preventDefault();
    menu.toggleClass("top-nav_menu__active");
  });

  sidebarBtn.on("click", function (event) {
    event.preventDefault();
    sidebarmenu.toggleClass("left-sidebar_menu__active");
  });
});
