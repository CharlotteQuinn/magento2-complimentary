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
        jQuery('.or').html('/');
      }, 5000);
    }

    // reviews check
    if (jQuery('.reviews-actions .js-reviews-click').length == 0){
      jQuery('.reviews-actions').addClass("noReviews");
    }

    // Stick header scroll detect
    jQuery(window).scroll(function(){
      var ScrollTop = parseInt(jQuery(window).scrollTop());
      //console.log(ScrollTop);

      if (ScrollTop > 102) {
        document.querySelector('body').classList.add('headerSticky');

        if (jQuery(".headFeaturesHide").length > 0){
          document.querySelector(".s-main-menu ul + .o-layout__item.headFeatures").classList.remove("headFeaturesHide");
        }

        if (jQuery(".headFeatures").length == 0){

          //clone header functions and append
          var headFunctions = document.querySelector(".c-header .o-region__inner .o-layout .o-layout__item:nth-child(2)");
          var clone = headFunctions.cloneNode(true);
          document.querySelector(".s-main-menu").appendChild(clone);
          document.querySelector(".headerSticky .s-main-menu ul + .o-layout__item").classList.add("headFeatures");

          //create account icon
          var accountIcon = document.createElement("DIV");
          accountIcon.classList.add("accountIcon");
          var list = document.querySelector(".s-main-menu ul + .o-layout__item .o-layout .o-layout__item");    
          list.insertBefore(accountIcon, list.childNodes[0]);

          //create search icon
          var searchIcon = document.createElement("DIV");
          searchIcon.classList.add("searchIcon");
          var list = document.querySelector(".s-main-menu ul + .o-layout__item .o-layout:nth-child(2) .o-layout__item");    
          list.insertBefore(searchIcon, list.childNodes[0]);

        }

      } else{
        jQuery('body').removeClass('headerSticky');
        if (jQuery(".headFeatures").length > 0){
          document.querySelector(".s-main-menu ul + .o-layout__item.headFeatures").classList.add("headFeaturesHide");
        }
      }

      

    }); // END scroll detect

    /*document.getElementsByClassName('searchIcon')[0].addEventListener("click", function(){
      document.getElementsByClassName('s-header-links')[0].classList.toggle('searchClick');
    });*/

  }
  /* CHUS only script END */

  /*jQuery(".accountIcon").click(function(){
    jQuery(".headerSticky .s-main-menu .s-header-links").toggleClass("searchClick");
  });*/





    //////////////////////////////////  
  ///DONT ADD ANYTHING BELOW HERE///
  //////////////////////////////////
  });
});