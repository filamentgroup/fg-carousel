
class carousel extends HTMLElement {
	constructor(){
		super();
		this._init = this._init.bind(this);
		this._observer = new MutationObserver(this._init);
	}
	connectedCallback(){
		if (this.children.length) {
			this._init();
		}
		this._observer.observe(this, { childList: true });
	}
	_init(){
		this.pluginName = "carousel";
		var self = this;
		this.navActiveClass = this.pluginName + "_nav_item-selected";
		this.activeItemClass = this.pluginName + "_item-active";

		this.initEvent = this.makeEvent("init");
		this.activeEvent = this.makeEvent("active");
		this.inActiveEvent = this.makeEvent("inactive");

		this.idItems();
		this.observeItems();
		this.defineElems();

		if( this.hasAttribute( "data-carousel-nextprev") ){
			this.addNextPrev();
			setTimeout(function(){
				self.manageArrowState();
			});
		}

		if( this.hasAttribute( "data-carousel-dynamicnav" ) ){
			this.manageDynamicNav();

		}
		
		this.slider.setAttribute("tabindex",0);
		this.slider.setAttribute("aria-orientation", "horizontal");
		this.slider.setAttribute("role", "region" );
		this.bindEvents();

		this.dispatchEvent( this.initEvent );

		this.autoplayAttr = this.getAttribute( "data-carousel-autoplay");
		if( this.autoplayAttr !== null ){
			setTimeout(function(){
				self.nextAutoplay();
			});
		}
		// make sure changes to the item list are tracked
		this._observeItemChanges = new MutationObserver( function(){
			self.updateIntObserveList();
		} );
		this._observeItemChanges.observe(this, { childList: true, subtree: true });
	}
	makeEvent( evtName ){
		if( typeof window.CustomEvent === "function" ){
			return new CustomEvent( evtName, {
				bubbles: true,
				cancelable: false
			});
		} else {
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent( evtName, true, true, {} );
			return evt;
		}
	}

	addNextPrev(){
		var	nextprev = document.createElement( "ul" );
		nextprev.classList.add("carousel_nextprev");
		nextprev.innerHTML = `
			<li class="carousel_nextprev_item"><button class="carousel_nextprev_prev">Prev</button></li>
			<li class="carousel_nextprev_item"><button class="carousel_nextprev_next">Next</button></li>
		`;
		var nextprevContain = this.querySelector( "." + this.pluginName + "_nextprev_contain" );
		if( !nextprevContain ){
			nextprevContain = this;
		}
		nextprevContain.append( nextprev );
	}

	defineElems(){
		this.classList.add( this.pluginName );
		this.slider = this.querySelector( ".carousel_pane" );
		this.nav = this.querySelector( ".carousel_nav" );
		this.nextprev = this.querySelector( ".carousel_nextprev" );
	}


	observerCallback( entries ){
		var self = this;
		var parentElem =  this;
		var navElem = this.nav;
		entries.forEach(function( entry ){
			var entryNavLink = parentElem.querySelector( "a[href='#" + entry.target.id + "']" );
			if (entry.isIntersecting && entry.intersectionRatio >= .75 ) {
				entry.target.classList.add( self.activeItemClass );
				entry.target.dispatchEvent( self.activeEvent );
				if( navElem && entryNavLink ){
					entryNavLink.classList.add( self.navActiveClass );
					if( navElem.scrollTo ){
						navElem.scrollTo({ left: entryNavLink.offsetLeft, behavior: "smooth" });
					}
					else {
						navElem.scrollLeft = entryNavLink.offsetLeft;
					}
				}
			}
			else {
				entry.target.classList.remove( self.pluginName + "_item-active" );
				entry.target.dispatchEvent( self.inActiveEvent );
				if( entryNavLink ){
					entryNavLink.classList.remove( self.navActiveClass );
				}
			}
		});
	}

	getItems(){
		return this.querySelectorAll( "." + this.pluginName + "_item" );
	}

	idItems(){
		var self = this;
		this.getItems().forEach(function( item ){
			if( !item.id ){
				item.id = self.pluginName + "-" + new Date().getTime();
			}
		});
	}

	observeItems(){
		var self=this;
		this._intObserver = new IntersectionObserver(function( entries ){
			self.observerCallback( entries );
		}, {root: self, threshold: .75 });
		this.updateIntObserveList();
		this._intObserver.takeRecords();
	}

	updateIntObserveList(){
		var self = this;
		this.querySelectorAll( "." + this.pluginName + "_item" ).forEach(function( item ){
			self._intObserver.observe( item );
		});
	}


	// get the carousel_item elements whose left offsets fall within the scroll pane.
	activeItems(){
		return this.querySelectorAll( "." + this.activeItemClass );
	}

	// sort an item to either end to ensure there's always something to advance to
	updateSort() {
		if( !this.closest( "[data-carousel-loop]" ) ){
			return;
		}
		var scrollWidth = this.slider.scrollWidth;
		var scrollLeft = this.slider.scrollLeft;
		var contain = this.querySelector( "." + this.pluginName + "_items" );
		var items = this.querySelectorAll( "." + this.pluginName + "_item" );
		var width = this.offsetWidth;

		if (scrollLeft < width ) {
		  var sortItem = items[ items.length - 1 ];
		  var sortItemWidth = sortItem.offsetWidth;
		  contain.prepend(sortItem);
		  this.slider.scrollLeft = scrollLeft + sortItemWidth;
		}
		else if (scrollWidth - scrollLeft - width <= 0 ) {
		  var sortItem = items[0];
		  var sortItemWidth = sortItem.offsetWidth;
		  contain.append(sortItem);
		  this.slider.scrollLeft = scrollLeft - sortItemWidth;
		}
	}

	

	bindEvents(){
		var self = this;
		// clicks for thumbs, nav
		this.addEventListener("click", function( e ){
			self.handleClick( e );
		} );

		// keyboard arrows
		this.addEventListener("keydown", function( e ){
			self.keydownHandler( e );
		} );

		// autoplay stops
		this.addEventListener("click", function( e ){
			self.stopAutoplay();
		});
		this.addEventListener("mouseenter", function( e ){
			self.stopAutoplay();
		});
		this.addEventListener("pointerdown", function( e ){
			self.stopAutoplay();
		});
		this.addEventListener("focus", function( e ){
			self.stopAutoplay();
		});
		
		// cleanup on resize 
		if( this.hasAttribute( "data-carousel-nextprev") ){
			window.addEventListener("resize", function( e ){
			self.manageArrowState();
			});
		}

		if( this.hasAttribute( "data-carousel-dynamicnav" ) ){
			window.addEventListener("resize", function( e ){
				self.manageDynamicNav();
			});
		}

		var scrolling;
		this.slider.addEventListener("scroll", function( e ){
			clearTimeout(scrolling);
			scrolling = setTimeout(function(){
				self.updateSort();
				if( self.hasAttribute( "data-carousel-nextprev") ){
					self.manageArrowState();
				}
			},66);
		});

		setTimeout(function(){
			self.updateSort();
		});


	}

	resizeRetain(){
		var afterResize;
		var self = this;
		var currSlide;
		function resizeUpdates(){
			clearTimeout( afterResize );
			if( !currSlide ){
				currSlide = self.activeItems()[0];
			}
			afterResize = setTimeout( function(){
				// retain snapping on resize 
				self.goto( currSlide );
				currSlide = null;
				// resize can reveal or hide slides, so update arrows
				self.manageArrowState();
			}, 300 );
		}

		window.addEventListener("resize", resizeUpdates);

	}

	manageDynamicNav(){
		var pane = this.slider;
		var scrollWidth = pane.scrollWidth;
		var width = pane.offsetWidth;
		var regions = scrollWidth / width;
		//this.setAttribute( "data-carousel-pages", regions.toFixed(3) )
		var allSlides = this.getItems();
		var allThumbs = this.nav.querySelectorAll("a");
		var iterator = Math.round( allSlides.length / regions );
		for( var i = 0; i < allSlides.length; i++ ){
			allThumbs[i].setAttribute("disabled", true)
		}
		for( var i = 0; i < allSlides.length; i+=iterator ){
			allThumbs[i].removeAttribute("disabled")
		}
	}

	manageArrowState(){
		// old api helper here. 
		if( this.closest( "[data-carousel-loop], [data-loop]" ) ){
			return;
		}
		var pane = this.slider;
		var nextLink = this.querySelector("." + this.pluginName + "_nextprev_next");
		var prevLink = this.querySelector("." + this.pluginName + "_nextprev_prev");
		var currScroll = pane.scrollLeft;
		var scrollWidth = pane.scrollWidth;
		var width = pane.offsetWidth;

		var noScrollAvailable = (width === scrollWidth);

		var maxScroll = scrollWidth - width;
		if (currScroll >= maxScroll - 3 || noScrollAvailable ) { // 3 here is arbitrary tolerance
			nextLink.classList.add("carousel_nextprev-disabled");
			nextLink.setAttribute("disabled", true);
		} else {
			nextLink.classList.remove("carousel_nextprev-disabled");
			nextLink.removeAttribute("disabled");
		}

		if (currScroll > 3 && !noScrollAvailable ) { // 3 is arbitrary tolerance
			prevLink.classList.remove("carousel_nextprev-disabled");
			prevLink.removeAttribute("disabled");
		} else {
			prevLink.classList.add("carousel_nextprev-disabled");
			prevLink.setAttribute("disabled", true);
		}

		if( noScrollAvailable ){
			this.classList.add( "carousel-hide-nav" );
		}
		else {
			this.classList.remove( "carousel-hide-nav" );
		}
	}

	handleClick( e ){
		var self = this;

		var parentAnchor = e.target.closest( "a" );
		if( e.target.closest( ".carousel_nextprev_next" ) ){
			e.preventDefault();
			return self.arrowNavigate( true );
		}
		else if( e.target.closest( ".carousel_nextprev_prev" ) ){
			e.preventDefault();
			return self.arrowNavigate( false );
		}
		// internal links to slides
		else if( parentAnchor ){
			e.preventDefault();
			self.goto( parentAnchor.getAttribute("href") );
		}
	}


	nextAutoplay(){
		var currentActive =  this.activeItems()[0];
		var self = this;
		if(currentActive){
			var autoTiming = currentActive.getAttribute( "data-carousel-autoplay" ) || this.autoplayAttr;
			if( autoTiming !== null ){
				if( autoTiming ) {
					var thisTime = parseInt(autoTiming, 10) || 5000;
					self.autoTiming = setTimeout( function(){
						self.next();
						self.nextAutoplay();
					}, thisTime );
				}
			}
		}
	}

	stopAutoplay(){
		clearTimeout(this.autoTiming);
	}

	goto(item, parent, callback){
		var slide;
		if( !parent ){
			parent = this.slider;
		}
		if( typeof(item) === "string" ){
			//go to ID
			slide = this.querySelector( item );
		}
		else if( typeof(item) === "number" ){
			//go to index
			slide = this.getItems()[ item ]
		}
		else{
			//go to obj
			slide = item
		}
		if( slide ){
			parent.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
			if( callback ){
				callback();
			}
			
		}
	}

	keydownHandler( e ){
		if( e.keyCode === 37 || e.keyCode === 38 ){
			this.stopAutoplay();
			e.preventDefault();
			e.stopImmediatePropagation();
			this.arrowNavigate( false );
		}
		if( e.keyCode === 39 || e.keyCode === 40 ){
			this.stopAutoplay();
			e.preventDefault();
			e.stopImmediatePropagation();
			this.arrowNavigate( true );
		}
	}
	



	// next/prev links or arrows should loop back to the other end when an extreme is reached
	arrowNavigate( forward ){
		if( forward ){
			this.next();
		}
		else {
			this.prev();
		}
	}


	// advance slide one full scrollpane's width forward
	next(){
		var currentActive =  this.activeItems()[0];
		if(currentActive){
			var next = currentActive.nextElementSibling;
			if( next ){
				this.goto( next );
			}
		}
	}

	// advance slide one full scrollpane's width backwards
	prev(){
		var currentActive =  this.activeItems()[0];
		if( currentActive ){
			var prev = currentActive.previousElementSibling;
			if( prev ){
				this.goto( prev );
			}
		}
	}
	disconnectedCallback(){
		//if needed
	}
}

if ('customElements' in window) {
	customElements.define('fg-carousel', carousel );
}
