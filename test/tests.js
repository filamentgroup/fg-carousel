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

   var carouselA = document.querySelector("fg-carousel");

   

   test( "general API checks", function(){
        ok( customElements.get("fg-carousel"), "carousel custom element class is defined" );

        ok( carouselA.classList.contains("carousel"), "carousel one has carousel class" )

        ok( carouselA.connectedCallback, "carouselA connected callback is defined")
        ok( carouselA.disconnectedCallback, "carouselA disconnected callback is defined")

   });





}(window));
