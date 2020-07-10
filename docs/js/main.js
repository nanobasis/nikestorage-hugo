
function doResponsive (){
  if ( $(window).width() < 768 ) {
    $('.colorbox').colorbox.remove();
    $('.colorbox').each(function(index, e) {
      // iterate colorbox links, add # before
      if( $(this).attr('href').charAt(0) != '#' ){
        $(this).attr('href', '#' + $(this).attr('href'));
      }
    });
  } else {
    $('.colorbox').colorbox({rel:'group1'});
    $('.colorbox').each(function(index, e) {
      // iterate colorbox links, remove # before
      if( $(this).attr('href').charAt(0) == '#' ){
        $(this).attr('href', $(this).attr('href').slice(1));
      }
    });
  }
}

$(function(){
  // perform on load
  doResponsive();
  // perform on window resize
  $(window).resize(function(){ doResponsive(); });
});
