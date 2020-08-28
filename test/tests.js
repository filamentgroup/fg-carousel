(function(window) {
	/*
		======== A Handy Little QUnit Reference ========
		http://api.qunitjs.com/

		Test methods:
			module(name, {[setup][ ,teardown]})
			test(name, callback)
			expect(numberOfAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			throws(block, [expected], [message])
    */

window.onload = function(){

   var carouselA = document.querySelector("fg-carousel");

   

   test( "general API checks", function(){
        ok( customElements.get("fg-carousel"), "carousel custom element class is defined" );

        ok( carouselA.classList.contains("carousel"), "carousel one has carousel class" )

        ok( carouselA.connectedCallback, "carouselA connected callback is defined")
        ok( carouselA.disconnectedCallback, "carouselA disconnected callback is defined")

   });



	asyncTest( 'Enhancement steps', function() {
			start();
			ok(carouselA.querySelector(".carousel_nextprev"), "next prev generated");
			ok(carouselA.querySelectorAll(".carousel_nextprev button").length === 2, "2 next prev links");		
	});

	
	asyncTest( 'Snapping occurs after scrolling to a spot that is not a snap point', function() {
		expect(1);
		carouselA.querySelector(".carousel_pane").scrollLeft = 0;
		carouselA.querySelector(".carousel_pane").scrollLeft = 35;
		setTimeout(function(){
			ok( carouselA.querySelector(".carousel_pane").scrollLeft ===0 );
			start();
		},1000);
	});
	
	

	asyncTest( 'thumbnail clicks cause pane to scroll', function() {
		expect(1);
        carouselA.querySelector(".carousel_pane").scrollLeft = 500;
        carouselA.querySelector(".carousel_nav a").click();
		 setTimeout(function(){
			 ok( carouselA.querySelector(".carousel_pane").scrollLeft !== 500, "scroll changed" );
		 	 start();
		 },1000);
	});


	asyncTest( 'disabled arrow classes are present at extremes', function() {
		expect(4);
		
		
		setTimeout(function(){
			ok( !carouselA.querySelector(".carousel_nextprev_prev.carousel_nextprev-disabled"), "prev link is not disabled ");
			ok( carouselA.querySelector(".carousel_nextprev_next.carousel_nextprev-disabled"), "next link is disabled ");
		 	start();
		 },2000);

		 ok( carouselA.querySelector(".carousel_nextprev_prev.carousel_nextprev-disabled"), "prev link is disabled ");
		 ok( !carouselA.querySelector(".carousel_nextprev_next.carousel_nextprev-disabled"), "next link is not disabled ");
 
		 carouselA.querySelector(".carousel_pane").scrollLeft = 500;
	});


	asyncTest( 'Arrows navigate', function() {
		expect(1);
		carouselA.querySelector(".carousel_pane").scrollLeft = 0;
		
		 setTimeout(function(){
			 ok( carouselA.querySelector(".carousel_pane").scrollLeft !== 0, "scroll changed" );
		 	 start();
		 },2000);
		 setTimeout(() => {
			carouselA.querySelector(".carousel_nextprev_next").click();
		 }, 1000);
	});


	asyncTest( 'Arrows navigate back', function() {
		expect(2);
		carouselA.querySelector(".carousel_pane").scrollLeft = 0;

		setTimeout(function(){
			ok( carouselA.querySelector(".carousel_pane").scrollLeft === 0, "scroll changed" );
			 start();
		},4000);

		 setTimeout(function(){
			 ok( carouselA.querySelector(".carousel_pane").scrollLeft !== 0, "scroll changed" );
			 carouselA.querySelector(".carousel_nextprev_prev").click();
		 },2000);

		 setTimeout(function(){
			carouselA.querySelector(".carousel_nextprev_next").click();
		 }, 1000);
	});








	asyncTest( 'random # link clicks are ignored', function() {
		expect(1);
		carouselA.querySelector("#testlink").trigger( "click" );
		ok( true );
		start();
	});

	/*

	asyncTest( 'get index returns correct index after goto', function(){
		expect(1);
		
	
		setTimeout(function(){
			equal(carouselA.querySelectorcarousel.carousel("getIndex"), 1);
			start();
		}, 2000);

		carouselA.querySelectorcarousel.carousel("goto", 1);
	});

	asyncTest( 'autoplay advances a few times once started', function(){
		expect(2);
		var eventCounter = 0;
		var checkBinding;
		var carouselA.querySelectorcarouselElem = carouselA.querySelector(".carousel");
		var carouselA.querySelectorcarousel;

		carouselA.querySelectorcarouselElem.attr( "data-carousel-autoplay", "500" );

		carouselA.querySelectorcarouselElem.bind("carousel.after-goto", checkBinding = function(){
			ok(true, "after-goto called");

			if(++eventCounter === 2){
				carouselA.querySelectorcarouselElem.removeAttr( "data-carousel-autoplay" );
				carouselA.querySelector(document).unbind("carousel.after-goto", checkBinding);
				start();
			} 
		});

	});

	asyncTest( 'looping goes endlessly forward', function(){
		expect(5);
		var eventCounter = 0;
		var checkBinding;
		var carouselA.querySelectorcarouselElem = carouselA.querySelector(".carousel");
		var carouselA.querySelectorcarousel;

		carouselA.querySelectorcarouselElem.attr( "data-carousel-loop", "500" );

		carouselA.querySelectorcarouselElem.bind("carousel.after-next", checkBinding = function(){
			ok(true, "after-next called");

			if(++eventCounter === 5){
				carouselA.querySelectorcarouselElem.removeAttr( "data-carousel-loop" );
				carouselA.querySelector(document).unbind("carousel.after-goto", checkBinding);
				start();
			}
			else{
				carouselA.querySelector(".carousel_nextprev_next").click();
			} 
		});

		carouselA.querySelectorcarouselElem.carousel();
		setTimeout(() => {
			carouselA.querySelector(".carousel_nextprev_next").click();
		 }, 500);
	});


	asyncTest( 'looping goes endlessly in reverse', function(){
		expect(5);
		var eventCounter = 0;
		var checkBinding;
		var carouselA.querySelectorcarouselElem = carouselA.querySelector(".carousel");
		var carouselA.querySelectorcarousel;

		carouselA.querySelectorcarouselElem.attr( "data-carousel-loop", "500" );

		carouselA.querySelectorcarouselElem.bind("carousel.after-prev", checkBinding = function(){
			ok(true, "after-prev called");

			if(++eventCounter === 5){
				carouselA.querySelectorcarouselElem.removeAttr( "data-carousel-loop" );
				carouselA.querySelector(document).unbind("carousel.after-goto", checkBinding);
				start();
			}
			else{
				carouselA.querySelector(".carousel_nextprev_prev").click();
			} 
		});

		carouselA.querySelectorcarouselElem.carousel();
		setTimeout(() => {
			carouselA.querySelector(".carousel_nextprev_prev").click();
		 }, 500);
    });
    
    */

};






}(window));
