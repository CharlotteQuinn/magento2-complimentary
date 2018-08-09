/*/////////////////////////////////////
// REGLIB
// A Regatta JS Utility library
// Author: Shaun Pelling
// CONTENTS:
//
/////////////////////////////////////*/

/*///////// French Scripts ////////*/
function categoryShowMore(){
if (jQuery('.category-text').text().length > 300) {
    console.log(true);

    jQuery(".category-links").prepend("<div class='text-size'>Voir plus...</div>");
    
} 
    
    jQuery(".text-size").click(function(){
        jQuery(".category-text div").toggleClass("less");
        if(jQuery(".text-size").html() == "Voir plus...") {

            jQuery(".category-text").addClass("active");
            jQuery(".text-size").html("Voir moins...");

        } else {

            jQuery(".category-text").removeClass("active");
            jQuery(".text-size").html("Voir plus...");

        }
    });
}

/*///////// Unticking account sign up ////////*/
function untickTrigger(){
	requirejs(['jquery'], function( $ ) {
	    jQuery('.customer-account-create .newsletter .c-checkbox-option__label input, .guest-checkout-login-account-create .newsletter .c-checkbox-option__label input').prop('checked', false);
	});
}

/*///////// Badge & Promo Behaviour ////////*/
function rlBadge(){

  var query = "[name='monVar_promotion']";

  // product listing page
  if(document.querySelectorAll(query).length && document.querySelectorAll('.search-index-index').length){
    Array.from(document.querySelectorAll(query)).forEach(function(item){
      if(item.value.length){
        var className = item.value.replace(/\s+/g, '-').replace(/\u00A3/g, '');
        item.parentNode.innerHTML += "<span class='" + className + " mon-badge'>" + item.value + "</span>"
      }
    });
  }


  var query = "[name='monVar_promotion']";

  // product listing page
  if(document.querySelectorAll(query).length && document.querySelectorAll('.catalog-category-view').length){
    Array.from(document.querySelectorAll(query)).forEach(function(item){
      if(item.value.length){
        var className = item.value.replace(/\s+/g, '-').replace(/\u00A3/g, '');
        item.parentNode.innerHTML += "<span class='" + className + " mon-badge'>" + item.value + "</span>"
      }
    });
  }

  // product details page
  var query = "[name='monVar_promotion']";

  if(document.querySelectorAll(query).length){
    Array.from(document.querySelectorAll(query)).forEach(function(item){
      if(item.value.length){
        var className = item.value.replace(/\s+/g, '-').replace(/\u00A3/g, '');
        if(document.querySelector('.gallery-placeholder')){
	        document.querySelector('.gallery-placeholder').innerHTML += "<span class='" + className + " mon-badge'>" + item.value + "</span>";
	    }
      }
    });
  }

}

// Saving roundal - FR
function rlPromoFR(){

  var query = "#monVars_price_saving_percent";

  // product listing page
  Array.from(document.querySelectorAll('.c-product-details')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) document.querySelector(".product-info-stock-sku").innerHTML += "<span class='save__product-page' style='display:none;'>Moins " + value + "%</span>";
  });

  // product details page
  Array.from(document.querySelectorAll('.c-product-tile__badge-content #monVars')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) item.innerHTML += "<div class='roundel' style='display:none;'>Moins " + value + "%</div>";
  });

}
// Saving roundal - UK
function rlPromo(){

  var query = "#monVars_price_saving_percent";

  // product listing page
  Array.from(document.querySelectorAll('.c-product-details')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) document.querySelector(".product-info-stock-sku").innerHTML += "<span class='save__product-page' style='display:none;'>Save " + value + "%</span>";
  });

  // product details page
  Array.from(document.querySelectorAll('.c-product-tile__badge-content #monVars')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) item.innerHTML += "<div class='roundel' style='display:none;'>Save " + value + "%</div>";
  });

}

/*///////// Toggle Behaviour ////////*/

function rlToggle(){
	var nodeList = document.body.querySelectorAll("[data-action='toggle']");
	var nodes = Array.prototype.slice.call(nodeList,0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			this.classList.toggle('active');
			var target = this.getAttribute('data-target');
			target = document.body.querySelector(target);
			target.classList.toggle('active');
		});
	});
}

/*////////// Tab Behaviour //////////*/

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

/*////////// Select Behaviour //////////*/

function rlSelect(){
  var nodeList = document.body.querySelectorAll("[data-action='select']");
  var nodes = Array.prototype.slice.call(nodeList,0);
  nodes.forEach(function(node){
    node.addEventListener('change', function(){
      var selected = this.value;
      var target = this.getAttribute('data-target');
      target = document.body.querySelector(target);
      
      // Hide current active
      target.querySelector('.active').classList.remove('active');

      // Show new active
      var option = target.querySelector('[data-value=' + selected +']');
      option.classList.add('active');
    });
  });
}

/*////////// Toggle Active Behaviour //////////*/

function rlToggleClass(){
	var nodeList = document.body.querySelectorAll("[data-action='toggle-class']");
	var nodes = Array.prototype.slice.call(nodeList,0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			this.classList.toggle('active');
		});	
	});
}

/*//////////// Lightbox Behaviour ////////////*/

function rlPop(options){
	
	// add click events for popups
	var nodeList = document.body.querySelectorAll("[data-action='pop']");
	var nodes = Array.prototype.slice.call(nodeList, 0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			
			// show popup
			var target = this.getAttribute('data-target');
			target = document.body.querySelector(target);
			target.classList.toggle('active');
			
			// show overlay
			overlay.classList.add('active');			
			
		});
	});
	
	// add click events for popups
	var crossList = document.body.querySelectorAll("[data-action='pop-close']");
	var crosses = Array.prototype.slice.call(crossList, 0);
	crosses.forEach(function(cross){
		cross.addEventListener('click', function(){
			var nodeList = document.body.querySelectorAll(".rl-pop");
			var nodes = Array.prototype.slice.call(nodeList, 0);
			nodes.forEach(function(node){
				node.classList.remove('active');
			});
			overlay.classList.remove('active');
		});
	});
	
	// create overlay & click event
	var overlay = document.createElement('div');
	overlay.className = "pop-overlay";
	document.getElementById('body').appendChild(overlay);
	overlay.addEventListener('click', function(){
		var nodeList = document.body.querySelectorAll(".rl-pop");
		var nodes = Array.prototype.slice.call(nodeList, 0);
		nodes.forEach(function(node){
			node.classList.remove('active');
		});
		overlay.classList.remove('active');
	});
	
	
} // end rlPop()

/*//////////// jQuery toggleClass ////////////*/

requirejs(['jquery'], function( $ ) {

    $('[data-target="toggleNextElement"]').click(function(){
      $(this).next('*').toggleClass('toggleSub');
      $(this).toggleClass("toggleMain");
    });

});

/*/////////// Checkout Page Delivery Instructions //////////*/

if (document.querySelectorAll('.c-block-option__delivery_instruction textarea').length > 0){
	
	var boxes = document.querySelectorAll('.c-block-option__delivery_instruction textarea');
	boxes.forEach(function(box){
		box.setAttribute('maxlength', '108');
	});

}

/* REVIEW HIDE */
setTimeout(function(){

  if(document.querySelector('#tab-label-reviews')){
    if(document.querySelector('.review-items')){
	console.log('review items found');
    } else {
      console.log('review items not found');
      document.querySelector('#tab-label-reviews').style.display = 'none';
    }
  }
  
}, 3000);

/*//////////// Left hand navigation scripts ////////////*/

function leftHandNavigationDesktopAndTablet(){

  var categoryTitle;
  var opens;
  var checkboxes;
  var filters;

  function checkFilters(){
      checkboxes = document.querySelectorAll('.c-mobile-facet--menu .c-checkbox-option__input');
      for(index in checkboxes){
          if(index.length < 3){
              if(checkboxes[index].checked){
                  var filter = checkboxes[index].parentElement.parentElement.parentElement.parentElement.parentElement;
                  filter.classList.add('has-filter');
              }
          }
      }
  }

  function resetEvents(){
      console.log('resetEvents');
      filters = document.querySelectorAll('.c-facet-list__list');
      for(index in filters){
          if(index.length < 3){
              filters[index].classList.remove('has-filter');
          }
      }
      categoryTitle = document.querySelectorAll('.c-facet-list__facet-header');
      opens = document.querySelectorAll('.o-list-stacked');
      for(index in categoryTitle){
          if(index.length < 3)
          jQuery(categoryTitle[index]).off();
      }
  }

  function setupNav() {
      console.log('setupNav');
      jQuery(categoryTitle).on('click', function(){
          console.log(this);
          if (this.classList.contains('active')) {
              this.nextSibling.nextSibling.classList.remove('active');
              this.classList.remove('active');
          } else {
              for(ind in opens){
                  if(ind.length < 3){
                      opens[ind].classList.remove('active');
                  }
              }
              for(ind in categoryTitle){
                  if(ind.length < 3){
                      categoryTitle[ind].classList.remove('active');
                  }
              }
              this.nextSibling.nextSibling.classList.add('active');
              this.classList.add('active');
          }
      });

      var findCustomerReviews = document.querySelectorAll('.c-facet-list__facet-header');

      for(index in findCustomerReviews){
          if(index.length < 3){
              if(findCustomerReviews[index].textContent == 'Customer Reviews'){
                  findCustomerReviews[index].textContent = 'Reviews';
              }
          }
      }

      var refineByChange = document.querySelectorAll('.c-facet-list__facet-header--title');

      for(index in refineByChange){
          if(index.length < 3){
              if(refineByChange[index].textContent == 'Refine By'){
                  refineByChange[index].textContent = 'Filter Products';
              }
          }
      }
  }

  resetEvents();
  setupNav();
  checkFilters();

  var observer = new MutationObserver(function(mutations) {
    resetEvents();
    setupNav();
    checkFilters();
  });

  var observerConfig = {
      attributes: true,
      childList: true,
      characterData: true
  };

  //var targetNode = document.body;
  observer.observe(document.body, observerConfig);


  document.querySelector('body').addEventListener('click', function(e){
    if(
          !e.target.classList.contains('c-facet-list__facet-header') && 
          !e.target.classList.contains('c-checkbox-option__text') &&
          !e.target.classList.contains('c-checkbox-option__checkbox') 
            //!e.target.classList.contains('c-facet-list__item')
        ){
          var activeUls = document.querySelectorAll('.c-facet-list__list > ul.active');
          for(index in activeUls){
              if(index.length < 3){
                  activeUls[index].classList.remove('active');
                  activeUls[index].parentElement.querySelector('.c-facet-list__facet-header.active').classList.remove('active');
                  checkFilters();
              }
          }

        }
  });

  var filterTop = jQuery('.c-mobile-facet-list').offset();

  jQuery(window).on('scroll', function(){
    if(window.scrollY > filterTop.top){
      if(document.querySelector('.c-facet-list__list > .active')){
              var activeFilt = document.querySelector('.c-facet-list__list > .active');
              if(activeFilt.classList.contains('active')){
                  activeFilt.classList.remove('active');
              }
          }
    }
  });
  
}

function leftHandNavigationMobileOnly(){
  var categoryTitle;
  var opens;
  var checkboxes;
  var filters;

  function checkFilters(){
      checkboxes = document.querySelectorAll('.c-mobile-facet--menu .c-checkbox-option__input');
      checkboxes.forEach(function(box){
          if(box.checked){
              var filter = box.parentElement.parentElement.parentElement.parentElement.parentElement;
              filter.classList.add('has-filter');
          }
      });
  }

  function resetEvents(){
      console.log('resetEvents');
      filters = document.querySelectorAll('.c-facet-list__list');
      filters.forEach(function(filter){
          filter.classList.remove('has-filter');
      });
      categoryTitle = document.querySelectorAll('.c-facet-list__facet-header');
      opens = document.querySelectorAll('.o-list-stacked');
      categoryTitle.forEach(function(title){
          jQuery(title).off();
      });
  }

  function setupNav() {
      console.log('setupNav');
      categoryTitle.forEach(function(item) {
          jQuery(item).on('click', function(){
              console.log('item clicked');
              if (item.classList.contains('active')) {
                  item.nextSibling.nextSibling.classList.remove('active');
                  item.classList.remove('active');
              } else {
                  opens.forEach(function(open) {
                      open.classList.remove('active');
                  });
                  categoryTitle.forEach(function(title) {
                      title.classList.remove('active');
                  });
                  item.nextSibling.nextSibling.classList.add('active');
                  item.classList.add('active');
              }
          });
      });

      var findCustomerReviews = document.querySelectorAll('.c-facet-list__facet-header');

      findCustomerReviews.forEach(function(item) {
          if (item.textContent == 'Customer Reviews') {
              item.textContent = 'Reviews';
          }
      });

      var refineByChange = document.querySelectorAll('.c-facet-list__facet-header--title');

      refineByChange.forEach(function(item) {
          if (item.textContent == 'Refine By') {
              item.textContent = 'Filter Products';
          }
      });
  }

  resetEvents();
  setupNav();
  checkFilters();

  var observer = new MutationObserver(function(mutations) {
    resetEvents();
    setupNav();
    checkFilters();
  });

  var observerConfig = {
      attributes: true,
      childList: true,
      characterData: true
  };

  //var targetNode = document.body;
  observer.observe(document.body, observerConfig);

  // Rick's horrible jQuery stuff
  jQuery(window).scroll(function() {
      var clientHeight = document.querySelector('.c-toolbar--position .o-layout.u-flex-row').clientHeight;
      var scroll = jQuery(window).scrollTop();
      if (scroll >= clientHeight) {
          jQuery(".c-toolbar--position .o-layout.u-flex-row").addClass("active");
      } else {
          jQuery(".c-toolbar--position .o-layout.u-flex-row").removeClass("active");
      }
  });

  // if (jQuery(".c-facet-list__facet-header.active").length) {
  //     jQuery(".c-facet-list__facet-header.active, .c-facet-list__list--scroll.active").removeClass('active');
  // }

  document.querySelector('body').addEventListener('click', function(e){
    if(
          !e.target.classList.contains('c-facet-list__facet-header') && 
          !e.target.classList.contains('c-checkbox-option__text') &&
          !e.target.classList.contains('c-checkbox-option__checkbox') 
            //!e.target.classList.contains('c-facet-list__item')
        ){
          document.querySelectorAll('.c-facet-list__list > ul.active').forEach(function(item){
              item.classList.remove('active');
       item.parentElement.querySelector('.c-facet-list__facet-header.active').classList.remove('active');
              checkFilters();
          });
        }
  });


}







