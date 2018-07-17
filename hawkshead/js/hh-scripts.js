/* UK/US Stock issue */
var stockInt = setInterval(function(){

  if(document.querySelectorAll('.c-product-size__link').length > 0){
    if (typeof dataLayer.disable !== 'undefined') {
      var disable = dataLayer.disable.toString();
      var disableds = disable.split(",");

      for (let i = 0; i < disableds.length; i++) {
        disabled = document.querySelector('[option-id="' + disableds[i] + '"]');
        disabled.parentElement.removeChild(disabled);
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

/* Mobile SEO show/hide *//*
function mobileSEO(){
  var banner = document.getElementsByClassName("s-text-banner")[0].childNodes[3];
  var seoText = banner.getElementsByClassName('banner__text')[0];
  var readBtn = document.createElement("button");

  if (seoText.textContent.length > 140) {
    seoText.classList.add('active');
    // add button to DOM
    readBtn.innerHTML = 'Read More';
    banner.insertBefore(readBtn, seoText.nextSibling);
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
}*/

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

  /* Endcap Lightbox */

function productPull(){

    jQuery('.mt_itemWrapper a').click(function(e) {
        e.preventDefault();
        var href = jQuery(this).attr('href');
        jQuery( "body" ).append( "<div class='outputProduct' onClick='closeProduct();'><div class='lightclose'><div class='outputClose' onClick='closeProduct();'>X</div></div><div id='outputFinal'><div class='ajaximgloader'><img id='ajaxload' src='https://cdn.hawkshead.com/img/SS17/uk/misc/icons/spinner.gif'></div></div></div>" );
        jQuery("html").css('overflow-y', 'hidden');
        jQuery(document).ajaxStart(function(){
            jQuery("#ajaxload").css("display", "block");
        });
        jQuery(document).ajaxComplete(function(){
            jQuery("#ajaxload").css("display", "none");
        });

        jQuery.ajax({
           url:href,
           type:'GET',
           success: function(data) {
               var content = jQuery('<div id="outputFinal">').append(data).find('.page.messages + div');
               jQuery('#outputFinal').html( content );
                e.preventDefault();
                jQuery( "#outputFinal .c-product-details.o-layout__item.product-info-main.js-product-info-main" ).append( '<a href="'+href+'"class="productCTA">Buy Me</a>' );
           }
        });
        
   });
}

function closeProduct(){
  jQuery('.outputProduct').remove();
  jQuery("html").css('overflow-y', 'scroll');
}
/* END */

/* Removal of roundal if less than 10% saving */
function roundelRemove(){
  jQuery('input[name=monVar_price_saving_percent]').filter(function(){
      return parseInt(jQuery(this).val(), 10) < 10;
  }).addClass('lessthan');
  jQuery('input.lessthan').closest('div').addClass('roundelhide');
}
/* END */

/* Feefo Reviews Page */
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
          merchantId: 'hawkshead',
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

// Delivery Estimates 
function delEst(){
  // current date
var todayDate = new Date();

var testDate = new Date("April 20, 2018 11:00:00");

  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Standard Delivery

    // current date
    var standardToday = new Date();
      var standardNewDate = new Date();

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
      jQuery('#label_carrier_default_ampersand_standard').prepend('<div class="delest checkStan"></div>');
      jQuery('.checkStan').html(standard);

    // END

    //Express Delivery

      // current date
    var expressToday = new Date();
      var expressNewDate = new Date();

      // if the day is friday and after 7pm, set delivery date to tuesday
      if (expressToday.getDay() == 5 && expressToday.getHours() >= 19){
        expressNewDate.setDate(expressToday.getDate()+4);
      } else if (expressToday.getDay() == 6){ //if the day is saturday, set delivery to tuesday
        expressNewDate.setDate(expressToday.getDate()+3); // +3 is original timing
      } else if (expressToday.getDay() == 0){ //if the day is sunday, set delivery to tuesday
        expressNewDate.setDate(expressToday.getDate()+2); // +2 is original timing
      } else if (expressToday.getHours() >= 0 && expressToday.getHours() < 19){ // if time is between 12am & 7pm
        // gets current date and adds 1 to it
        expressNewDate.setDate(expressToday.getDate()+1); // +1 is original timing
    } else{
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
      jQuery('#label_carrier_default_ampersand_express').prepend('<div class="delest checkExpress"></div>');
      jQuery('.checkExpress').html(express);
      jQuery('#label_carrier_premium_ampersand_express').prepend('<div class="delest checkPrem"></div>');
      jQuery('.checkPrem').html(premium);

    // END

    // Click and Collect
      // current date
    var ccToday = new Date();
      var ccNewDate = new Date();

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

requirejs(['jquery'], function( $ ) {

  var $j = jQuery.noConflict();

  $j(document).ready(function($) {
    ////////////////////////////////
    //Dont add anything above here//
    ////////////////////////////////

    // Flexslider init
    if ($j('.flexslider').length) {
      setTimeout(function(){
      $j('.flexslider').flexslider();
      }, 500);
    }


    jQuery(".icon-plus.expand").click(function() {
      jQuery("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    //JS for size guide
    $j(function(){
      $j("#cs__button--footwear").addClass("isActive");
    });

    $j("#cs__button--footwear").click(function(){
      $j("#sg_footwear").show();
      $j("#sg_craghoppers").hide();
      $j("#sg_regatta").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--footwear").addClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    });

    $j("#cs__button--craghoppers").click(function(){
      $j("#sg_craghoppers").show();
      $j("#sg_footwear").hide();
      $j("#sg_regatta").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--craghoppers").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    }); 

    $j("#cs__button--regatta").click(function(){
      $j("#sg_regatta").show();
      $j("#sg_footwear").hide();
      $j("#sg_craghoppers").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--regatta").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    });

    $j("#cs__button--dare2b").click(function(){
      $j("#sg_dare2b").show();
      $j("#sg_footwear").hide();
      $j("#sg_regatta").hide();
      $j("#sg_craghoppers").hide();
      $j("#cs__button--dare2b").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
    });

    $j("#column--about").click(function(){
      $j("#column--about").toggleClass("columnOpen");
      $j("#column--about ul").toggleClass("isOpen");
    });
    $j("#column--cs").click(function(){
      $j("#column--cs").toggleClass("columnOpen");
      $j("#column--cs ul").toggleClass("isOpen");
    });
    $j("#column--shop").click(function(){
      $j("#column--shop").toggleClass("columnOpen");
      $j("#column--shop ul").toggleClass("isOpen");
    });
    $j("#column--delivery").click(function(){
      $j("#column--delivery").toggleClass("columnOpen");
      $j("#column--delivery ul").toggleClass("isOpen");
    });

  /* Contact us page - Form pop up */
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

  /* Mobile SEO show/hide */
  if (document.documentElement.clientWidth < 771) {
    if($j('.pageintro > p').length > 1) {
        $j('.pageintro').addClass('pageintro-hidden');
        $j('.pageintro').after('<div class="mobileseo-container-first"><div class="gradient"><img src="https://dbdhuxde2t9el.cloudfront.net/AW16/img/global/category/vertical-fade.png" style="width: 100%; height: 45px;"></div><a><div class="seemore">Read more</div></a></div>');
    }

    $('.seemore').click(function(){
      $j('.pageintro').toggleClass('pageintro-hidden');
      $j('.gradient').toggleClass('gradient-toggle');
      $j('.mobileseo-container-first').toggleClass('mobileseo-container-toggle');
      $j('.seemore').html('Read less');
    });

    if($j('.banner__text').length > 1) {
      $j('.banner__text').after('<div class="mobileseo-container"><div class="gradient"><img src="https://dbdhuxde2t9el.cloudfront.net/AW16/img/global/category/vertical-fade.png" style="width: 100%; height: 45px;"></div><a><div class="seemoreseo">Read more</div></a></div>');
      $j('.mobileseo-container + .banner__text').addClass('seo-hidden');
      $j('.mobileseo-container + .banner__text + .mobileseo-container').addClass('seo-hidden');
      $j('.banner__text').addClass('seo-reduced');
    }

    $('.seemoreseo').click(function(){
      $j('.mobileseo-container + .banner__text + .mobileseo-container').toggleClass('seo-hidden');
      $j('.mobileseo-container + .banner__text').toggleClass('seo-hidden');
      $j('.banner__text').toggleClass('seo-reduced');
      $j('.mobileseo-container:first-of-type').toggleClass('bttnhide');
      $j('.mobileseo-container:last-of-type').toggleClass('marginfix');
      $j('.mobileseo-container:last-of-type .seemoreseo').html('Read less');
    });

  }

  /* Mobile Mega Menu Updates */

  jQuery(".s-main-menu .categories > li").click(function(){
    jQuery(".category-items.ui-menu-item").toggleClass("sectionActive");
  });

  jQuery(document).on('click touchstart', '.ui-menu-back', function() {
    jQuery(".ui-menu-item").removeClass("menuBack");
    jQuery(this).parent().parent().addClass("menuBack");
  });


  jQuery(".columnHead").click(function(e){
    e.stopPropagation();
    //console.log("Menu Open Fire");
    if(!e.target.classList.contains('active')){
      jQuery(".menuSection").removeClass("active");
      jQuery(".columnHead").removeClass("columnEnabled");
      jQuery(".columnHead").removeClass("active");
      jQuery(".columnHead").next().removeClass("active");

      jQuery(this).parent().addClass("active");
      jQuery(this).addClass("columnEnabled");
      jQuery(this).addClass("active");
      jQuery(this).next().addClass("active");
      jQuery(this).addClass("activeColumn");

      jQuery('.c-mobile-menu.is-category-open').animate({
          scrollTop: jQuery(".s-main-menu").position().top - 700
      }, 1000);
    } else {
      e.target.classList.remove('active');
      e.target.parentElement.classList.remove('active');
      e.target.parentElement.querySelector('.columnContent').classList.remove('active');
    }

  });

  jQuery("i.c-header__icon.c-icon--menu").addClass("menuClosed");
  jQuery("i.c-header__icon.c-icon--menu").append("<div class='menuLabel'>Close</div>");

  jQuery("span.action.nav-toggle").click(function(){   

    console.log("hello");
    jQuery(this).toggleClass("active"); 

    var menuButton = jQuery("i.c-header__icon.c-icon--menu");
    if (menuButton.hasClass("menuClosed")){

      menuButton.removeClass("menuClosed").addClass("menuOpen");
      jQuery(".menuLabel").addClass("active");
      menuButton.removeClass("menuAni");

    } else if (menuButton.hasClass("menuOpen")){

      menuButton.removeClass("menuOpen").addClass("menuClosed");
      jQuery(".menuLabel").removeClass("active");
      menuButton.addClass("menuAni");


    }

  });

  var menuBack = setInterval(function(){
    //console.log("timeout fire");
    if(jQuery(".menuSection.active").length){      
      jQuery(this).click(function(){
        jQuery(".menuSection").removeClass("active");
        jQuery(".columnHead").removeClass("columnEnabled");
        jQuery(".columnHead").removeClass("active");
        jQuery(".columnHead").next().removeClass("active");
        clearInterval(menuBack);
      });
    }
  }, 100);

  jQuery(".action.nav-toggle").click(function(){
    jQuery(this).toggleClass("navActive");
    jQuery(this).parent().toggleClass("navActive");
  });
  /* END */

  });

}); /* END REQUIRE JQUERY */

/////////////////////////////////
// Dont add anything below here//
/////////////////////////////////


    
  




