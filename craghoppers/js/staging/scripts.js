/*********************************************

CH Staging script
For testing purposes only
All code must be cleared after it goes live

**********************************************/



requirejs(['jquery'], function( $ ) {
  var $j = jQuery.noConflict();
  $j(document).ready(function($) {
  //////////////////////////////////  
  //DONT ADD ANY JQUERY ABOVE HERE//
  ////////////////////////////////// 


  /* CHUS only script */
  if (('.cms-homepage-promo-grid-ch-us').length > 0){

    console.log('Hello');
    document.getElementById('search').placeholder='Search here';

    setTimeout(function(){
      var basketCheck = setInterval(function(){
        if (jQuery('.c-mini-cart-btn.action.showcart .c-mini-cart-btn__price br').length > 0){
          jQuery('.c-mini-cart-btn.action.showcart').addClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(1)').addClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(2)').addClass('basketEmpty');
        } else if(jQuery('.c-mini-cart-btn.action.showcart').length > 0){
          jQuery('.c-mini-cart-btn.action.showcart').removeClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(1)').removeClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(2)').removeClass('basketEmpty');
        }
      }, 1000);
    }, 6000);

    if (('.authorization-link a:nth-child(2)').length > 0){
      
      setTimeout(function(){
        console.log('Is it me your looking for?');
        console.log('I can see it in your eyes');
        console.log('I can see it in your smile');
        jQuery('.or').html('/');
      }, 5000);
    }

    // reviews check
    if (jQuery('.reviews-actions .js-reviews-click').length == 0){
      jQuery('.reviews-actions').addClass("noReviews");
    }

  }
  /* CHUS only script END */





    //////////////////////////////////  
  ///DONT ADD ANYTHING BELOW HERE///
  //////////////////////////////////
  });
});