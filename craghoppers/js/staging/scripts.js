/*********************************************

CH Staging script
For testing purposes only
All code must be cleared after it goes live

**********************************************/
requirejs(['jquery'], function($) {
  var $j = jQuery.noConflict();

  $j(document).ready(function($) {
    //////////////////////////////////  
    //DONT ADD ANY JQUERY ABOVE HERE//
    ////////////////////////////////// 

    setTimeout(function() {
      var basketCheck = setInterval(function() {
        if (jQuery('.c-mini-cart-btn.action.showcart .c-mini-cart-btn__price br').length > 0) {
          jQuery('.c-mini-cart-btn.action.showcart').addClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(1)').addClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(2)').addClass('basketEmpty');
        }

        else if(jQuery('.c-mini-cart-btn.action.showcart').length > 0) {
          jQuery('.c-mini-cart-btn.action.showcart').removeClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(1)').removeClass('basketEmpty');
          jQuery('.o-layout__item .o-layout:nth-child(2) .o-layout__item:nth-child(2)').removeClass('basketEmpty');
        }

      }, 1000);
    }, 6000);

    if (('.authorization-link a:nth-child(2)').length > 0) {
      setTimeout(function() {
        jQuery('.or').html('/');
      }, 5000);
    }

    // PDP reviews check
    // if no reviews on product, add class and then hide in CSS
    if (jQuery('.reviews-actions .js-reviews-click').length == 0) {
      jQuery('.product-info-price .c-rating__wrap').addClass("noReviews");
      jQuery('.product-info-stock-sku + .product-info-price').addClass("noReviews");
    }

    // Sticky Header 
    jQuery(window).scroll(function() {
      var clientHeight = document.getElementById('header').clientHeight;
      var scroll = jQuery(window).scrollTop();

      if (scroll >= clientHeight && jQuery(".desktop-theme").length > 0 && jQuery(".mobile-theme").length == 0) {
        document.querySelector('body').classList.add('headerSticky');
        jQuery("#header").addClass("headStick");

        if (jQuery(".headerSticky .s-main-menu ul + .o-layout__item").length == 0) {
          //append header funtions to sticky
          var headFunctions = document.querySelector(".c-header .o-region__inner .o-layout .o-layout__item:nth-child(2)");
          document.querySelector(".s-main-menu").appendChild(headFunctions);

          if (jQuery(".accountIcon").length == 0) {
            //create account icon
            var accountIcon = document.createElement("DIV");
            accountIcon.classList.add("accountIcon");
            accountIcon.classList.add("stickyIcon");
            accountIcon.classList.add("iconClose");
            var list = document.querySelector(".s-main-menu ul + .o-layout__item .o-layout .o-layout__item");
            list.insertBefore(accountIcon, list.childNodes[0]);
            //create search icon
            var searchIcon = document.createElement("DIV");
            searchIcon.classList.add("searchIcon");
            searchIcon.classList.add("stickyIcon");
            searchIcon.classList.add("iconClose");
            var list = document.querySelector(".s-main-menu ul + .o-layout__item .o-layout:nth-child(2) .o-layout__item");
            list.insertBefore(searchIcon, list.childNodes[0]);
          }

          // END
        }

        // END
      }

      else {
        jQuery('body').removeClass('headerSticky');
        jQuery("#header").removeClass("headStick");

        if (jQuery(".headFeatures").length > 0) {
          document.querySelector(".s-main-menu ul + .o-layout__item.headFeatures").classList.add("headFeaturesHide");
        }

        if (jQuery(".c-header .o-layout .o-layout__item:nth-child(2)").length == 0) {
          var headRevert = document.querySelector(".s-main-menu ul + .o-layout__item");
          document.querySelector(".c-header .o-region__inner .o-layout").appendChild(headRevert);
        }

      }

    });

    var logoCheck = setInterval(function() {
      if (jQuery(".headStick .s-main-menu").length > 0) {
        //logo creation
        var currentURL = window.location.href;
        var ukURL = location.href === "https: //www.craghoppers.com/";
        var usURL = location.href === "https: //www.craghoppers.com/us/";
        var deURL = location.href === "https: //www.craghoppers.de/";
        var usStaging = location.href === "https: //staging-craghoppers.basecamp-nonprod.com/us/?no_cache=true";
        var homeURL = jQuery(".c-header__logo")[0].href;

        // if current URL is equal to locale homepage
        if(currentURL === ukURL || usURL || deURL || usStaging) {
          if (jQuery(".stickyLogo").length <= 0) {
            var stickyLogo = document.createElement("img");
            stickyLogo.src="https://cdn.craghoppers.com/img/logo/logoMouflon.svg";
            stickyLogo.classList.add("stickyLogo");
            var list = document.querySelector(".headerSticky .ui-menu");
            list.insertBefore(stickyLogo, list.childNodes[0]);
            clearInterval(logoCheck);
          }

          return false;
        }

        else {
          if (jQuery(".stickyLogo").length <= 0) {
            // IF Start
            var logoAnchor = document.createElement("a");
            logoAnchor.href=homeURL;
            logoAnchor.classList.add("logoAnchor");
            var list = document.querySelector(".headerSticky .ui-menu");
            list.insertBefore(logoAnchor, list.childNodes[0]);
            var stickyLogo = document.createElement("img");
            stickyLogo.src="https://cdn.craghoppers.com/img/logo/logoMouflon.svg";
            stickyLogo.classList.add("stickyLogo");
            var list = document.querySelector(".logoAnchor");
            list.insertBefore(stickyLogo, list.childNodes[0]);
            clearInterval(logoCheck);
            // IF End
          }

          return false;
        }

      }

    }, 500);

    var stickyCheck = setInterval(function() {
      if (jQuery(".stickyIcon").length > 0) {
        clickCheck();
        clearInterval(stickyCheck);
      }

    }, 100);
    //////////////////////////////////  
    ///DONT ADD ANYTHING BELOW HERE///
    //////////////////////////////////
  });
});

function clickCheck() {
  jQuery(".accountIcon").click(function() {
    if (jQuery(".searchIcon.iconActive").length > 0) {
      jQuery(".searchIcon.iconActive").removeClass("iconActive");
    }

    jQuery(this).toggleClass("iconActive");
    jQuery(this).toggleClass("iconClose");
  });

  jQuery(".searchIcon").click(function() {
    if (jQuery(".accountIcon.iconActive").length > 0) {
      jQuery(".accountIcon.iconActive").removeClass("iconActive");
    }

    jQuery(this).toggleClass("iconActive");
    jQuery(this).toggleClass("iconClose");
  }

  );
};