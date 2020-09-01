/**
 * ハンバーガーメニュー
 * @return {undefined}
 */
const hamburger = () => {
  $(".open_nav").on("click", function () {
    $(".wrap,.nav").toggleClass("nav__show");
  });
};

export default hamburger;
