// check if jquery installed

// window.onload = function () {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Jquery is working!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// open mobile menu

$("#burger").click(function () {
    // when icon clicked toggle the tailwind class of opacity and top
  $("#nav").toggleClass("opacity-100 top-[70px]");
//  chamge between the menu and the close icon
  if ($("#icon").hasClass("fa-bars")) {
    $("#icon").addClass("fa-xmark");
    $("#icon").removeClass("fa-bars");
  } else if ($("#icon").hasClass("fa-xmark")) {
    $("#icon").addClass("fa-bars");
    $("#icon").removeClass("fa-xmark");
  }
});
