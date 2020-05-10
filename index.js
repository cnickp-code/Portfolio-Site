let mn = $(".main-nav");
let mns = "main-nav-scrolled";
let hdr = $('.splash').height();

console.log(hdr);

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr) {
    mn.addClass(mns);
    $('.splash').css('box-shadow', '3px 3px 5px 6px rgb(41, 41, 41)');
  } else {
    mn.removeClass(mns);
    $('.splash').css('box-shadow', '0 0 0 0');
  }
});