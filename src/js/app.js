import "../scss/style.scss";
var $ = require("jQuery");

$(function () {
  $(".humberger").on("click", function () {
    if ($("body").hasClass("nav-open")) {
      $("body").removeClass("nav-open");
    } else {
      $("body").addClass("nav-open");
    }
  });
});
