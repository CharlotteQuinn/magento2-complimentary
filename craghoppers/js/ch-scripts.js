/* UK/US Stock issue */
var stockInt = setInterval(function(){

  if(document.querySelectorAll('.c-product-size__link').length > 0){
    if (typeof dataLayer.disable !== 'undefined') {
      var disable = dataLayer.disable.toString();
      var disableds = disable.split(",");

      for (let i = 0; i < disableds.length; i++) {
	if(document.querySelector('[option-id="' + disableds[i] + '"]')) {
        	disabled = document.querySelector('[option-id="' + disableds[i] + '"]');
        	disabled.parentElement.removeChild(disabled);
	}
      }

      clearInterval(stockInt);
    }
  }

}, 1000); // end timeout
/* END */

/* delivery and returns tabs */
function rlTabs(){
  var nodeList = document.body.querySelectorAll("[data-action='tab']");
  var nodes = Array.prototype.slice.call(nodeList,0);
  nodes.forEach(function(node){
    node.addEventListener('click', function(e){
      e.preventDefault();
      
      // remove active classes on tabs
      var tabList = document.body.querySelectorAll("[data-action='tab']");
      var tabs = Array.prototype.slice.call(tabList,0);
      tabs.forEach(function(tab){
        tab.classList.remove('active');
      });

      // remove active classes on content
      var contentList = document.body.querySelectorAll(".tabs-content > *");
      var contents = Array.prototype.slice.call(contentList,0);
      contents.forEach(function(content){
        content.classList.remove('active');
      });

      this.classList.toggle('active');
      var target = this.getAttribute('data-target');
      target = document.body.querySelector(target);
      target.classList.toggle('active');
    });
  });
  
  // Pick up URL and open appropriate tab
  var navigated = window.location.href;
  nodes.forEach(function(node){
    var nodeTarget = node.getAttribute('data-target');
    if(navigated.indexOf(nodeTarget) !== -1){
      
      // Remove defaulted active classes
      var activesList = document.body.querySelectorAll(".active");
      var actives = Array.prototype.slice.call(nodeList,0);
      nodes.forEach(function(active){
        active.classList.remove('active');
      });
      
      // Add active class to URL param
      document.body.querySelector(nodeTarget).classList.add('active');
      node.classList.add('active');
    }
  });
}
/* END */

/* Mobile show/hide button */
function mobileSEO(){
  var banner = document.getElementsByClassName("s-text-banner")[0].childNodes[1];
  var bannerTwo = document.getElementsByClassName("s-text-banner")[0].childNodes[3];
  var seoText = banner.getElementsByClassName('category-view__description')[0] || bannerTwo.getElementsByClassName('category-view__description')[0];
  var readBtn = document.createElement("button");

  if (seoText.textContent.length > 320) {
    seoText.classList.add('active');
    // add button to DOM
    readBtn.innerHTML = 'Read More';
    if (bannerTwo.getElementsByClassName('category-view__description')[0]){
        console.log('banner 2');
        bannerTwo.querySelector('.seoheader').insertBefore(readBtn, seoText.nextSibling);
    } else {
        console.log('banner 1');
        banner.insertBefore(readBtn, seoText.nextSibling);
    }

    // add click events
    readBtn.onclick = function(){
      if(seoText.classList.contains('active')){
        readBtn.innerHTML = 'Read Less';
        seoText.classList.remove('active');
      } else {
        readBtn.innerHTML = 'Read More';
        seoText.classList.add('active');
      }
    };
  }
}
/* END */

/* Feefo Reviews Page UK */
function feefoReviews(){
  (function (w) {
    var feefoWidgetScript = document.createElement('script');
    feefoWidgetScript.setAttribute('async', 'async');
    feefoWidgetScript.setAttribute('src', '//register.feefo.com/feefo-widget/js/feefo-widget.js');
    feefoWidgetScript.setAttribute('type', 'text/javascript');
    feefoWidgetScript.onload = function () {
      if (typeof w.feefoWidgetInstance === 'undefined') {
        w.feefoWidgetInstance = feefoWidget({
          assetUrl: '//register.feefo.com/feefo-widget',
          debug: false,
          hosts: {
            api: 'api.feefo.com/api',
            widget: 'register.feefo.com'
          },
          merchantId: 'craghoppers-uk',
          protocol: 'https',
          source: 'javascript',
          tags: '',
          externalCta: ''
        });
      }
    };
    document.head.appendChild(feefoWidgetScript);
  })(window);
}
/* END */

/* Feefo Reviews Page USA */
function feefoReviewsUSA(){
  (function (w) {
    var feefoWidgetScript = document.createElement('script');
    feefoWidgetScript.setAttribute('async', 'async');
    feefoWidgetScript.setAttribute('src', '//register.feefo.com/feefo-widget/js/feefo-widget.js');
    feefoWidgetScript.setAttribute('type', 'text/javascript');
    feefoWidgetScript.onload = function () {
      if (typeof w.feefoWidgetInstance === 'undefined') {
        w.feefoWidgetInstance = feefoWidget({
          assetUrl: '//register.feefo.com/feefo-widget',
          debug: false,
          hosts: {
            api: 'api.feefo.com/api',
            widget: 'register.feefo.com'
          },
          merchantId: 'craghoppers-us',
          protocol: 'https',
          source: 'javascript',
          tags: '',
          externalCta: ''
        });
      }
    };
    document.head.appendChild(feefoWidgetScript);
  })(window);
}
/* END */

/* Feefo Reviews Page DE */
function feefoReviewsDE(){
  (function (w) {
    var feefoWidgetScript = document.createElement('script');
    feefoWidgetScript.setAttribute('async', 'async');
    feefoWidgetScript.setAttribute('src', '//register.feefo.com/feefo-widget/js/feefo-widget.js');
    feefoWidgetScript.setAttribute('type', 'text/javascript');
    feefoWidgetScript.onload = function () {
      if (typeof w.feefoWidgetInstance === 'undefined') {
        w.feefoWidgetInstance = feefoWidget({
          assetUrl: '//register.feefo.com/feefo-widget',
          debug: false,
          hosts: {
            api: 'api.feefo.com/api',
            widget: 'register.feefo.com'
          },
          merchantId: 'craghoppers-de',
          protocol: 'https',
          source: 'javascript',
          tags: '',
          externalCta: ''
        });
      }
    };
    document.head.appendChild(feefoWidgetScript);
  })(window);
}
/* END */

/* Category lower SEO show/hide */
function lowerseo(){
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner').addClass('active');
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').after('<div class="lower-seobttn-container"><a><div class="readmore">Read more</div></a></div>');
  jQuery('.lower-seobttn-container').click(function(){
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').toggleClass('open');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active + .lower-seobttn-container .readmore').html('Read more');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active.open + .lower-seobttn-container .readmore').html('Read less');
  });
}
/* END */

/* CHDE Category lower SEO show/hide */
function lowerseoDE(){
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner').addClass('active');
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').after('<div class="lower-seobttn-container"><a><div class="readmore">Mehr Lesen</div></a></div>');
  jQuery('.lower-seobttn-container').click(function(){
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').toggleClass('open');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active + .lower-seobttn-container .readmore').html('Mehr Lesen');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active.open + .lower-seobttn-container .readmore').html('Weniger lesen');
  });
}
/* END */

// Delivery Estimates 
function delEst(){
  // current date
var todayDate = new Date();

// test data
//var testDate = new Date("August 12, 2018 16:00:00");
//console.log(testDate);

  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Standard Delivery

    // current date
    var standardToday = new Date(); // set test date in here
      var standardNewDate = new Date(); // set test date in here

      // if the day is monday
      if (standardToday.getDay() == 1){
        // add 7 to day due to not delivering on sunday
        standardNewDate.setDate(standardToday.getDate()+7);
      } else {
        // gets current date and adds 6 to it for standard delivery
        standardNewDate.setDate(standardToday.getDate()+6);
    }

      // extract the day from date
      var stanDay = standardNewDate.getDay();

      // extract the date
      var stanDate = standardNewDate.getDate();

      // extract the month
      var stanMonth = standardNewDate.getMonth();

      //get estimated date
      var stanEstDate = stanDate;
      // work out what suffix it needs, nth, st etc.
      var stanSingle = stanEstDate % 10,
          stanDouble = stanEstDate % 100;
      if (stanSingle == 1 && stanDouble != 11) {
          var stanSuffix = "st";
      } else
      if (stanSingle == 2 && stanDouble != 12) {
          var stanSuffix = "nd";
      } else
      if (stanSingle == 3 && stanDouble != 13) {
          var stanSuffix = "rd";
      }else {
        var stanSuffix = "th";
    }

      // turn day number into relating day name
      var dayName = days[stanDay];

      // turn month number into relating month name
      var monthName = month[stanMonth];

      // concat vars and print to DOM
      var standard = 'Get it no later than ' + (dayName) + ' ' + (stanDate) + (stanSuffix) + ' ' + (monthName);
      jQuery('.standard').html(standard);
      // pdp print to DOM
      jQuery('.pdpStan').html(standard);
      // prints to checkout delivery options
      jQuery('#label_carrier_default_ampersandStandard').prepend('<div class="delest checkStan"></div>');
      jQuery('.checkStan').html(standard);

    // END

    //Express Delivery

      // current date
    var expressToday = new Date(); // set test date in here
      var expressNewDate = new Date(); // set test date in here

      // if the day is friday and after 7pm, set delivery date to tuesday
      if (expressToday.getDay() == 5 && expressToday.getHours() >= 19){
        expressNewDate.setDate(expressToday.getDate()+4);
      } 
      
      else if (expressToday.getDay() == 6){ //if the day is saturday, set delivery to tuesday
        expressNewDate.setDate(expressToday.getDate()+3); // +3 is original timing
      } 

      else if (expressToday.getDay() == 0 && expressToday.getHours() < 17){ //if the day is sunday before 5pm, set delivery to monday
        expressNewDate.setDate(expressToday.getDate()+1); // +1 is original timing
      }
      
      else if (expressToday.getDay() == 0){ //if the day is sunday after 5pm, set delivery to tuesday
        expressNewDate.setDate(expressToday.getDate()+2); // +2 is original timing
      } 
      
      else if (expressToday.getHours() >= 0 && expressToday.getHours() < 19){ // if time is between 12am & 7pm
        // gets current date and adds 1 to it
        expressNewDate.setDate(expressToday.getDate()+1); // +1 is original timing
    } 

    else{
      // gets current date and adds 2 to it
      expressNewDate.setDate(expressToday.getDate()+2);
    }

      // extract the day from date
      var expDay = expressNewDate.getDay();

      // extract the date
      var expDate = expressNewDate.getDate();

      // extract the month
      var expMonth = expressNewDate.getMonth();

      //get estimated date
      var expEstDate = expDate;
      // work out what suffix it needs, nth, st etc.
      var expSingle = expEstDate % 10,
          expDouble = expEstDate % 100;
      if (expSingle == 1 && expDouble != 11) {
          var expSuffix = "st";
      } else
      if (expSingle == 2 && expDouble != 12) {
          var expSuffix = "nd";
      } else
      if (expSingle == 3 && expDouble != 13) {
          var expSuffix = "rd";
      }else {
        var expSuffix = "th";
    }

      // turn day number into relating day name
      var expressDay = days[expDay];

    // turn month number into relating month name
      var expressMonth = month[expMonth];

      // concat vars and print to DOM
      var express = 'Get it by ' + (expressDay) + ' ' + (expDate) + (expSuffix) + ' ' + (expressMonth);
      var premium = 'Get it by 12pm ' + (expressDay) + ' ' + (expDate) + (expSuffix) + ' ' + (expressMonth);
      jQuery('.express').html(express);
      jQuery('.premium').html(premium);
      // pdp pring to DOM
      jQuery('.pdpExpress').html(express);
      jQuery('.pdpPrem').html(premium);
      // prints to checkout delivery options
      jQuery('#label_carrier_default_ampersandExpress').prepend('<div class="delest checkExpress"></div>');
      jQuery('.checkExpress').html(express);
      jQuery('#label_carrier_premium_ampersandExpress').prepend('<div class="delest checkPrem"></div>');
      jQuery('.checkPrem').html(premium);

    // END

    // Click and Collect
      // current date
    var ccToday = new Date(); // set test date in here
      var ccNewDate = new Date(); // set test date in here

      // if between mon & thurs
    if (ccToday.getDay() >= 1 && ccToday.getDay() <= 4){

      // hours is less than 15 (before 3pm)
      if (ccToday.getHours() < 15){

        // add 2 to current date
        ccNewDate.setDate(ccToday.getDate()+2);

      // hours is 15 and minutes less than/equal 30 (between 3pm and 3.30pm)
      } else if (ccToday.getHours() == 15 && ccToday.getMinutes() <= 30){

        // add 2 to current date
        ccNewDate.setDate(ccToday.getDate()+2);

      // hours is 15 and mins greater than 30 (between 3.30pm and 4pm)
      } else if (ccToday.getHours() == 15 && ccToday.getMinutes() > 30){

        // add 3 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      } else if (ccToday.getHours() > 15){

        // add 3 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      }

    }

    // if day is friday
    if (ccToday.getDay() == 5){

      // hours is less than 15 (before 3pm)
      if (ccToday.getHours() < 15){

        // add 1 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      // hours is 15 and minutes less than/equal 30 (between 3pm and 3.30pm)
      } else if (ccToday.getHours() == 15 && ccToday.getMinutes() <= 30){

        // add 1 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      // hours is 15 and mins greater than 30 (between 3.30pm and 4pm)
      } else if (ccToday.getHours() == 15 && ccToday.getMinutes() > 30){

        // add 3 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      } else if (ccToday.getHours() > 15){

        // add 3 to current date
        ccNewDate.setDate(ccToday.getDate()+3);

      }

    }

      // if day is saturday
      if (ccToday.getDay() == 6){
        ccNewDate.setDate(ccToday.getDate()+3); // add 3 days to date, collect tuesday
      }
      // if day is sunday
      if (ccToday.getDay() == 0){ // if day is sunday
        ccNewDate.setDate(ccToday.getDate()+2); // add 2 days to date, collect tuesday
      }

      // gets current date and adds 2 to it for click and collect
      //ccNewDate.setDate(ccToday.getDate()+2);

      // extract the day from date
      var ccDay = ccNewDate.getDay();

      // extract the date
      var ccDate = ccNewDate.getDate();

      // extract the month
      var ccMonth = ccNewDate.getMonth();

      //get estimated date
      var ccEstDate = ccDate;
      // work out what suffix it needs, nth, st etc.
      var ccSingle = ccEstDate % 10,
          ccDouble = ccEstDate % 100;
      if (ccSingle == 1 && ccDouble != 11) {
          var ccSuffix = "st";
      } else
      if (ccSingle == 2 && ccDouble != 12) {
          var ccSuffix = "nd";
      } else
      if (ccSingle == 3 && ccDouble != 13) {
          var ccSuffix = "rd";
      }else {
        var ccSuffix = "th";
    }

      // turn day number into relating day name
      var ccNameDay = days[ccDay];

    // turn month number into relating month name
      var ccNameMonth = month[ccMonth];

      // concat vars and print to DOM
      var clickCollect = 'Available to collect from ' + (ccNameDay) + ' ' + (ccDate) + (ccSuffix) + ' ' + (ccNameMonth);
      jQuery('.collect').html(clickCollect);
      jQuery('.pdpCP').html(clickCollect);

  //END
  }
// END

function videoSlider(){
  setInterval(function(){

    if (jQuery(".fullWidthSlider__slideContainer.flex-active-slide video").length){

      jQuery('.fullWidthSlider__slideContainer.flex-active-slide').find('video').each(function(){
        this.play();
      });

    } else{
      jQuery('.fullWidthSlider__slideContainer').find('video').each(function(){
        this.pause();
      });
    }

  }, 100);
};

/* Homepage SEO show/hide */
function homepageSEO(){
  var catname = jQuery('body').attr('class');
  jQuery('.pageSection--Seo').after('<div class="seo-container"><a><div class="readmore">Read more</div></a></div>');
  jQuery('.readmore').click(function(){
    jQuery('.pageSection--Seo').toggleClass('seo-open');
    jQuery('.pageSection--Seo + .seo-container .readmore').html('Read more');
    jQuery('.pageSection--Seo.seo-open + .seo-container .readmore').html('Read less');
    ga('send', 'event', 'read-more-button', 'click', '' + catname + '');
  });
}
/* END */

/* CHDE Homepage SEO show/hide */
function homepageSEODE(){
  var catname = jQuery('body').attr('class');
  jQuery('.pageSection--Seo').after('<div class="seo-container"><a><div class="readmore">Mehr Lesen</div></a></div>');
  jQuery('.readmore').click(function(){
    jQuery('.pageSection--Seo').toggleClass('seo-open');
    jQuery('.pageSection--Seo + .seo-container .readmore').html('Mehr Lesen');
    jQuery('.pageSection--Seo.seo-open + .seo-container .readmore').html('Weniger lesen');
    ga('send', 'event', 'read-more-button', 'click', '' + catname + '');
  });
}
/* END */

function chdeSignin(){
  
  jQuery('.c-login.o-layout').prepend('<a href="https://www.craghoppers.de/kontakt/"><picture><source media="(min-width: 740px)" sizes="100vw" srcset="https://cdn.craghoppers.com/img/SS18/DE/misc/new_site/CHDE-NewAccountBanner.jpg"><source sizes="100vw" srcset="https://cdn.craghoppers.com/img/SS18/DE/misc/new_site/CHDE-NewAccountBannerMobile.jpg"><img style="width:100%;" alt="Haben Sie Probleme Beim Einloggen" src="https://cdn.craghoppers.com/img/SS18/DE/misc/new_site/CHDE-NewAccountBanner.jpg"></picture></a>');

}

// PDP reviews check
function pdpReviewCheck(){
  if (jQuery('.reviews-actions .js-reviews-click').length == 0) {
    jQuery('.product-info-price .c-rating__wrap').addClass("noReviews");
    jQuery('.product-info-stock-sku + .product-info-price').addClass("noReviews");
  }
}

/*
  Craghoppers specific JS snippets
 */
requirejs(['jquery'], function( $ ) {
  var $j = jQuery.noConflict();
  $j(document).ready(function($) {
  //////////////////////////////////  
  //DONT ADD ANY JQUERY ABOVE HERE//
  //////////////////////////////////  
  // Flexslider init
  if ($j('.flexslider').length) {
    setTimeout(function(){
      $j('.flexslider').flexslider();
    }, 500);
  }

  /* Mobile Mega Menu Updates */
  jQuery(".s-main-menu .categories > li").click(function() {
    jQuery(".category-items.ui-menu-item").toggleClass("sectionActive");
  }

  );

  jQuery(document).on('click touchstart', '.ui-menu-back', function() {
    jQuery(".ui-menu-item").removeClass("menuBack");
    jQuery(this).parent().parent().addClass("menuBack");
  }

  );

  jQuery(".columnHead").click(function(e) {
    e.stopPropagation();
    //console.log("Menu Open Fire");

    if(!e.target.classList.contains('active')) {
      jQuery(".menuSection").removeClass("active");
      jQuery(".columnHead").removeClass("columnEnabled");
      jQuery(".columnHead").removeClass("active");
      jQuery(".columnHead").next().removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).addClass("columnEnabled");
      jQuery(this).addClass("active");
      jQuery(this).next().addClass("active");
      jQuery(this).addClass("activeColumn");

      jQuery('.c-mobile-menu.is-category-open').animate( {
        scrollTop: jQuery(".s-main-menu").position().top - 700
      }

      , 1000);
    }

    else {
      e.target.classList.remove('active');
      e.target.parentElement.classList.remove('active');
      e.target.parentElement.querySelector('.columnContent').classList.remove('active');
    }

  }

  );
  jQuery("i.c-header__icon.c-icon--menu").addClass("menuClosed");
  jQuery("i.c-header__icon.c-icon--menu").append("<div class='menuLabel'>Close</div>");

  jQuery("span.action.nav-toggle").click(function() {
    //console.log("hello");
    jQuery(this).toggleClass("active");
    var menuButton = jQuery("i.c-header__icon.c-icon--menu");

    if (menuButton.hasClass("menuClosed")) {
      menuButton.removeClass("menuClosed").addClass("menuOpen");
      jQuery(".menuLabel").addClass("active");
      menuButton.removeClass("menuAni");
    }

    else if (menuButton.hasClass("menuOpen")) {
      menuButton.removeClass("menuOpen").addClass("menuClosed");
      jQuery(".menuLabel").removeClass("active");
      menuButton.addClass("menuAni");
    }

  }

  );

  var menuBack = setInterval(function() {
    //console.log("timeout fire");

    if(jQuery(".menuSection.active").length) {
      jQuery(this).click(function() {
        jQuery(".menuSection").removeClass("active");
        jQuery(".columnHead").removeClass("columnEnabled");
        jQuery(".columnHead").removeClass("active");
        jQuery(".columnHead").next().removeClass("active");
        clearInterval(menuBack);
      }

      );
    }

  }

  , 100);

  jQuery(".action.nav-toggle").click(function() {
    jQuery(this).toggleClass("navActive");
    jQuery(this).parent().toggleClass("navActive");
  }

  );

  /* END */

  /* Mobile Footer */
  jQuery(".column.column--footer p").click(function(){
    jQuery(this).toggleClass("active");
    jQuery(this).next().toggleClass("active");
  });
  /* END */

  // Homepage Recs
  if ($j('body').hasClass('cms-index-index')) {
    var getLastTopCat = localStorage.getItem('lastTopCatVisit'),
        getLastSubCat = localStorage.getItem('lastSubCatVisit');
    if (getLastTopCat === 'Men' && getLastSubCat === 'Jackets') {
      $j('.pageSection__homepageRecs').addClass('pageSection__homepageRecs--Men-Jackets').removeClass('pageSection__homepageRecs');
    } else if (getLastTopCat === 'Women' && getLastSubCat === 'Jackets') {
      $j('.pageSection__homepageRecs').addClass('pageSection__homepageRecs--Women-Jackets').removeClass('pageSection__homepageRecs');
    }
  }

  // Adds a class to body for easy targetting of Kit Guide results pages
  if ($j('.kitGuideResultsContainer').length) {
    $j('body').addClass('kitGuideResultsPage');
  }

  /* Customer service page mobile drop down */
  $j(".customerservice__mobile").click(function(){
    $j(".customerservice__links").toggle();
    $j(".customerservice__mobile").toggleClass("active");
  });
  /* END */

  //Size guide script
  $j(function(){
    $j("#card__gender--women").addClass("isActive");
  });

  $j("#card__gender--women").click(function(){
    $j("#customerservice__row--women").show();
    $j("#customerservice__row--men").hide();
    $j("#customerservice__row--kids").hide();
    $j("#card__gender--women").addClass("isActive");
    $j("#card__gender--men").removeClass("isActive");
    $j("#card__gender--kids").removeClass("isActive");
  });

  $j("#card__gender--men").click(function(){
    $j("#customerservice__row--men").show();
    $j("#customerservice__row--women").hide();
    $j("#customerservice__row--kids").hide();
    $j("#card__gender--men").addClass("isActive");
    $j("#card__gender--women").removeClass("isActive");
    $j("#card__gender--kids").removeClass("isActive");
  });

  $j("#card__gender--kids").click(function(){
    $j("#customerservice__row--kids").show();
    $j("#customerservice__row--women").hide();
    $j("#customerservice__row--men").hide();
    $j("#card__gender--kids").addClass("isActive");
    $j("#card__gender--men").removeClass("isActive");
    $j("#card__gender--women").removeClass("isActive");
  });
  /* END */

  /*Contact us page - Form pop up */
  $j('.form_popup').click(function(){
    $j('.contact__popup').addClass('popup_open');
    $j('.form_popup').addClass('popup_open');
    $j('.popup__bg').addClass('popup_open');
  });

  $j('#form__close').click(function(){
    $j('.contact__popup').removeClass('popup_open');
    $j('.form_popup').removeClass('popup_open');
    $j('.popup__bg').removeClass('popup_open');
  });
  /* END */

  /* Form error scroll */
  jQuery(".redeye-form button").click(function(){
    if (jQuery(".invalid").length){
      jQuery(".invalid").prev().addClass("invalidinput");
      jQuery('html, body').animate({
            scrollTop: jQuery(".invalidinput").offset().top
        });
    }
  });
  /* END */

  /* Show/Hide copy within container */
    jQuery('.copy-toggle').after('<div class="copy-toggle-button">Read more...</div>');
    jQuery('.copy-toggle-button').click(function(){
      jQuery('.copy-toggle').toggleClass('active');
      jQuery('.copy-toggle-button').html(jQuery('.copy-toggle-button').text() == 'Read more...' ? 'Read less' : 'Read more...');
    });
  /* END */

  if (screen.width <= 767) {

    var squarelovinCheck = setInterval(function(){
      if (jQuery("ul.squarelovin-stream-container").length){
        jQuery('.squarelovin-stream-item img').click(function(e){
          e.stopPropagation();
          clearInterval(squarelovinCheck);
        });        
      }
    }, 500);

  }

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


    // Show/Hide Script
    var contentCheck = setInterval(function(){
      if (jQuery(".contentAccordion").length > 0){

        if (jQuery(".contentBtn").length == 0){

          jQuery(".contentAccordion").each(function(){
            var contentChildrenCheck = jQuery(this).children().length;
            if (jQuery(".contentAccordion").text().length > 320 && contentChildrenCheck > 1){

              var contentHeight = jQuery(this).find(">:first-of-type").height();
              jQuery(this).css("height", contentHeight + "px");
              jQuery(this).after('<button class="contentBtn">Read More</button>');
              
            }
          });

          jQuery(".contentBtn").click(function(){
            if (jQuery(this).prev().hasClass("contentActive")){
              var firstHeight = jQuery(this).prev().find(">:first-of-type").height();
              jQuery(this).prev().css("height", firstHeight + "px");
              jQuery(this).text('Read More');
              jQuery(this).prev().toggleClass("contentActive");
            } else{
              var initHeight = 0;
              jQuery(this).prev().children().each(function(){
                initHeight += jQuery(this).outerHeight(true);
                jQuery(this).parent().css("height", initHeight + "px");
              });
              jQuery(this).text('Read Less');
              jQuery(this).prev().toggleClass("contentActive");
            }

          });

        }
        
      }
    }, 1000);


    setTimeout(function(){
      clearInterval(contentCheck);
    }, 10000);

    // Show/Hide Script END

   

  //////////////////////////////////  
  ///DONT ADD ANYTHING BELOW HERE///
  //////////////////////////////////
  });
});

