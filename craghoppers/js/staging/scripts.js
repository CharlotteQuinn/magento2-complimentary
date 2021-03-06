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
    
    var loggedInCheck = setInterval(function() {

      // check if user logged in
      if (jQuery('a[data-bind="visible: isLoggedIn()').is(":visible")){
        jQuery("#header ul.header.links").addClass("isLoggedIn");
        clearInterval(loggedInCheck);
      } else if (jQuery('a[data-bind="visible: !isLoggedIn()').is(":visible")){
        clearInterval(loggedInCheck);
      }

    }, 1000);

    // Sticky Header 
    jQuery(window).scroll(function() {
      var clientHeight = document.getElementById('header').clientHeight;
      var scroll = jQuery(window).scrollTop();

      if (scroll >= clientHeight && jQuery(".mobile-theme").length == 0) {
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
        var homeURL = jQuery(".c-header__logo")[0].href;

        // if current URL is equal to locale homepage
        if(currentURL === ukURL || usURL || deURL) {
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

    if (jQuery(".page-products").length > 0){ // check to see if on PLP

      // PLP Facet Accordion
      var facetCheck = setInterval(function(){
        if (jQuery(".o-list-stacked li:first-of-type ul").length > 0){
          jQuery('.o-list-stacked li:first-of-type .c-facet-list__list').addClass("facetOpen");
          jQuery('.c-facet-list__list').click(function(){
            jQuery(this).toggleClass("facetOpen");
          });
          jQuery(".o-layout.mobile-flex .c-toolbar--position .o-layout.u-flex-row .o-layout__item:nth-child(1) ul li").after("<span>|</span>");
          clearInterval(facetCheck);
        }
      }, 1000);
      


      var elementTop = jQuery(".o-layout__item.c-toolbar--position").offset().top;
      var elementHeight = jQuery(".o-layout__item.c-toolbar--position").outerHeight() - 55;
      jQuery(window).scroll(function(){
          if(jQuery(window).scrollTop() > (elementTop + elementHeight)){
            jQuery(".o-layout__item.c-selected-facets--position").addClass("facetScroll");
            jQuery(".c-back-to-top-btn__wrapper").addClass("btnScroll");
            jQuery(".c-back-to-top-btn__wrapper").css("top", "0");
          }
          else{
            if (jQuery(".facetScroll").length > 0){
              jQuery(".o-layout__item.c-selected-facets--position").removeClass("facetScroll");
              jQuery(".c-back-to-top-btn__wrapper").removeClass("btnScroll");
            }
          }
      });

    }


    setInterval(function(){ // keep checking size to adjust stop point
      var containerHeight = jQuery(".o-layout.mobile-flex").outerHeight();
      var facetHeight = jQuery(".o-layout__item.c-selected-facets--position").outerHeight() / 2;
      var totalHeight = (containerHeight - facetHeight);

      jQuery(window).scroll(function(){
          if(jQuery(window).scrollTop() > totalHeight){
            jQuery(".o-layout__item.c-selected-facets--position.facetScroll").addClass("facetbottom");
            jQuery(".o-layout__item.c-selected-facets--position").removeClass("facetScroll");
          }
          else{
            jQuery(".o-layout__item.c-selected-facets--position.facetScroll").removeClass("facetbottom");
          }
      });
    }, 1000);
    // PLP Facet Accordion END

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