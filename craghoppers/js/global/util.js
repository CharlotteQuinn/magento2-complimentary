/*/////////////////////////////////////
// REGLIB
// A Regatta JS Utility library
// Author: Shaun Pelling
/////////////////////////////////////*/

 /*///////// Unticking account sign up ////////*/
 
requirejs(['jquery'], function( $ ) {
	jQuery('.customer-account-create .newsletter .c-checkbox-option__label input, .guest-checkout-login-account-create .newsletter .c-checkbox-option__label input').prop('checked', false);
});


/*///////// Badge & Promo Behaviour ////////*/

function rlBadge(){

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

function rlPromoDE(){

  var query = "#monVars_price_saving_percent";

  // product listing page
  Array.from(document.querySelectorAll('.c-product-details')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) document.querySelector(".product-info-stock-sku").innerHTML += "<span class='save__product-page' style='display:none;'>" + value + "% Rabatt</span>";
  });

  // product details page
  Array.from(document.querySelectorAll('.c-product-tile__badge-content #monVars')).forEach(function(item){
    var value = item.querySelector(query).value != '' ? item.querySelector(query).value.substr(0,2) : null;
    if(value) item.innerHTML += "<div class='roundel' style='display:none;'>" + value + "% Rabatt</div>";
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

/*//////////// SEO Expand Behaviour ////////////*/

function rlExpand(){

  var banner;

  if(document.getElementsByClassName("s-text-banner")[0].getElementsByTagName('div')[1]){
    banner = document.getElementsByClassName("s-text-banner")[0].getElementsByTagName('div')[1];
  }
  if(document.getElementById('top-level-cat-banner-text')){
    banner = document.getElementById('top-level-cat-banner-text');
  }

  var seoText = banner.getElementsByTagName('p')[0];
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
 
} // end rlExpand()

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