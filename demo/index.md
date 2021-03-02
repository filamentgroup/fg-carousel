---
---

<script>this.customElements||document.write('<script src="./lib/document-register-element.js" defer><\x2fscript>');</script>
<script src="./lib/intersection-observer.js" defer></script>
<script src="../src/fg-carousel.js" type="module"></script>
<script src="./es5/fg-carousel.js" defer nomodule></script>
<link rel="stylesheet" href="../src/fg-carousel.css">


<style>

/* next prev arrow selectors */
.carousel_nextprev,
.carousel_nextprev_item {
  list-style: none;
  margin: 0;
  padding: 0;
}
.carousel_nextprev_next,
.carousel_nextprev_prev {
  position: absolute;
  top: 50%;
  width: 46px;
  height: 46px;
  line-height: 46px;
	margin-top: -23px;
  background-color: #fff;
  border-radius: 100%;
  overflow: hidden;
	text-align: center;
  font-size: .7em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #eee;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
}
.carousel_nextprev_next:not(.carousel_nextprev-disabled),
.carousel_nextprev_prev:not(.carousel_nextprev-disabled) {
	opacity: .8;
	cursor: pointer;
}
.carousel_nextprev_next:not(.carousel_nextprev-disabled):hover,
.carousel_nextprev_next:not(.carousel_nextprev-disabled):focus,
.carousel_nextprev_prev:not(.carousel_nextprev-disabled):hover,
.carousel_nextprev_prev:not(.carousel_nextprev-disabled):focus {
  opacity: 1;
}
.carousel_nextprev_next {
  right: -23px;
}
.carousel_nextprev_prev {
  left: -23px;
}


@media (min-width: 40em) {
	.carousel_nextprev_next,
	.carousel_nextprev_prev {
	  width: 50px;
	  height: 50px;
    line-height: 50px;
		margin-top: -25px;
	}
	.carousel_nextprev_next {
	  right: -25px;
	}
	.carousel_nextprev_prev {
	  left: -25px;
	}
}



/* dots nav */
.carousel_nav-dots {
	display: block;
	margin: 1em 0;
	text-align: center;
}
.carousel_nav.carousel_nav-dots a {
	display: inline-block;
	width: 10px;
    height: 10px;
    margin-right: 10px;
    background: #ccc;
    border: 0;
	border-radius: 100%;
	overflow: hidden;
	text-indent: -9999px;
	cursor: pointer;
}
.carousel_nav-dots a.carousel_nav_item-selected {
	background: #111;
	box-shadow: none;
	border: none;
	outline: none;
}

  </style>

<h1 id="demos">Demos</h1>

<h2 class="docs" id="nextprev">Basic example with thumbnails and next/previous links.</h2>
<p class="docs">This carousel starts with HTML containing slides and thumbnail links, which are regular anchor links to each slide's corresponding ID attribute. It also has next/prev links that are automatically added through the addition of a <code>data-carousel-nextprev</code> attribute. </p>
<fg-carousel data-carousel-nextprev="">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane">
        <div class="carousel_items">
            <div class="carousel_item" id="img-a1">
            <a href="#">Test link 1</a>
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
            </div>
            <div class="carousel_item" id="img-b1">
            <a href="#">Test link 2</a>
            <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
            </div>
            <div class="carousel_item" id="img-c1">
            <a href="#">Test link 3</a>
            <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
            </div>
            <div class="carousel_item" id="img-d1">
            <a href="#">Test link 4</a>
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
            </div>
        </div>
        </div>
    </div>
    <div class="carousel_nav">
        <a href="#img-a1"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="" /></a>
        <a href="#img-b1"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="" /></a>
        <a href="#img-c1"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="" /></a>
        <a href="#img-d1"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" /></a>
    </div>
  </fg-carousel>

<style>
  
      /* breakpoints example */
      @media (min-width: 30em){
        .breakpointsexample .carousel_item {
          width: 50%;
        }
        .breakpointsexample .carousel_pane {
          scroll-snap-points-x: repeat(50%);
        }
      }
      @media (min-width: 50em){
        .breakpointsexample .carousel_item {
          width: 33.333%;
        }
        .breakpointsexample .carousel_pane {
          scroll-snap-points-x: repeat(33.33333%);
        }
      }
    </style>

<h2 class="docs" id="breakpoints">Example w/ multiple slides showing</h2>
<p class="docs">This example plays nicely with CSS breakpoints to show a different number of slides depending on the viewport size. To use breakpoints in this way, for back compat, be sure to include Snap Points that correspond to the item widths. <a href="#css">See CSS for this example</a></p>

<fg-carousel data-carousel-nextprev="" class="breakpointsexample">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a2">
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
          </div>
          <div class="carousel_item" id="img-b2">
            <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
          </div>
          <div class="carousel_item" id="img-c2">
            <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
          </div>
          <div class="carousel_item" id="img-d2">
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
          </div>
        </div>
      </div>
    </div>
    <div class="carousel_nav">
      <a href="#img-a2"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="" /></a>
      <a href="#img-b2"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="" /></a>
      <a href="#img-c2"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="" /></a>
      <a href="#img-d2"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" /></a>
    </div>
  </fg-carousel>

<h3 class="docs" id="css">CSS for this example</h3>
<pre class="docs language-css"><code class="docs language-css">
  /* breakpoints example */
  @media (min-width: 30em){
  .carousel_item {
  width: 50%;
  }
  .carousel_pane {
  scroll-snap-points-x: repeat(50%);
  }
  }
  @media (min-width: 50em){
  .carousel_item {
  width: 33.333%;
  }
  .carousel_pane {
  scroll-snap-points-x: repeat(33.33333%);
  }
  }
  </code></pre>


  <h2 class="docs" id="dots">Dots carousel example</h2>
  <p class="docs">You can have dots instead of thumbnails by adding the <code>carousel_nav-dots</code> class</p>
  <p class="docs">You can also set the attribute on carousel_item elements to get individual timing.</p>
  <fg-carousel data-carousel-nextprev>
      <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
          <div class="carousel_pane">
              <div class="carousel_items">
                  <div class="carousel_item" id="img-a3b">
                  <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
                  </div>
                  <div class="carousel_item" id="img-b3b">
                  <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
                  </div>
                  <div class="carousel_item" id="img-c3b">
                  <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
                  </div>
                  <div class="carousel_item" id="img-d3b">
                  <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
                  </div>
              </div>
              </div>
          </div>
          <div class="carousel_nav carousel_nav-dots">
              <a href="#img-a3b">Slide 1</a>
              <a href="#img-b3b">Slide 2</a>
              <a href="#img-c3b">Slide 3</a>
              <a href="#img-d3b">Slide 4</a>
          </div>
    </fg-carousel>



<style>
  
    .revealexample .carousel_item {
        width: 45%;
    }
    .revealexample .carousel_pane {
        scroll-snap-points-x: repeat(45%);
    }
  
  </style>

<h2 class="docs" id="reveal">Example w/ multiple slides and revealing on partially</h2>

<fg-carousel class="revealexample" data-carousel-nextprev="">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
        <div class="carousel_pane">
            <div class="carousel_items">
                <div class="carousel_item" id="img-a4">
                <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
                </div>
                <div class="carousel_item" id="img-b4">
                <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
                </div>
                <div class="carousel_item" id="img-c4">
                <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
                </div>
                <div class="carousel_item" id="img-d4">
                <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
                </div>
            </div>
            </div>
        </div>
        <div class="carousel_nav">
            <a href="#img-a4"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="" /></a>
            <a href="#img-b4"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="" /></a>
            <a href="#img-c4"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="" /></a>
            <a href="#img-d4"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" /></a>
        </div>
</fg-carousel>

<h3 class="docs" id="css">CSS for this example</h3>
<pre class="docs language-css"><code class="docs language-css">
  .revealexample .carousel_item {
  width: 45%;
  }
  .revealexample .carousel_pane {
  scroll-snap-points-x: repeat(45%);
  }
  </code></pre>

<h2 class="docs" id="looping">Example with endless looping</h2>
<p class="docs">A carousel carousel with <code>data-carousel-loop</code> will append items to either end as needed so the scroll is infinite. This is recommended for 1-slide-at-a-time carousels.</p>

<fg-carousel data-carousel-nextprev="" data-carousel-loop="">
<div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane">
        <div class="carousel_items">
            <div class="carousel_item" id="img-a5">
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
            </div>
            <div class="carousel_item" id="img-b5">
            <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
            </div>
            <div class="carousel_item" id="img-c5">
            <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
            </div>
            <div class="carousel_item" id="img-d5">
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
            </div>
        </div>
        </div>
    </div>
    <div class="carousel_nav">
        <a href="#img-a3"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="" /></a>
        <a href="#img-b3"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="" /></a>
        <a href="#img-c3"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="" /></a>
        <a href="#img-d3"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" /></a>
    </div>
</fg-carousel>


<h2 class="docs" id="autoplay"> Auto-play carousel example (also looping, optionally)</h2>
<p class="docs">By setting the <code>data-carousel-autoplay</code> attribute on the <code>class="carousel"</code> element to a natural number value carousel will automatically rotate through the images. The value represents a the millisecond delay between item transitions. In the example below we have <code>data-carousel-autoplay="2000"</code></p>
<p class="docs">You can also set the attribute on carousel_item elements to get individual timing.</p>
<fg-carousel data-carousel-nextprev data-carousel-loop data-carousel-autoplay="3000">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
        <div class="carousel_pane">
            <div class="carousel_items">
                <div class="carousel_item" id="img-a3">
                <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
                </div>
                <div class="carousel_item" id="img-b3">
                <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
                </div>
                <div class="carousel_item" id="img-c3">
                <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
                </div>
                <div class="carousel_item" id="img-d3">
                <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
                </div>
            </div>
            </div>
        </div>
        <div class="carousel_nav">
            <a href="#img-a3"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="" /></a>
            <a href="#img-b3"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="" /></a>
            <a href="#img-c3"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="" /></a>
            <a href="#img-d3"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" /></a>
        </div>
  </fg-carousel>


## About

This carousel component is built to be easy to use, dependency-free (aside from feature polyfills), and accessible.



## Documentation

To make a carousel, create a `fg-carousel` element to contain your content. This element will be recognized by this component's javascript, and allow it to be enhanced with necessary behaviors and accessibility information. 

Inside the carousel element, place one or more items that will become carousel items that snap scroll and fill 100% of the width.




## Including Scripts &amp; Styles

The carousel has two dependencies, one for the Javascript and one for the CSS, which you can find in the `src` directory:

```html
<script type="module" src="src/fg-carousel.js"></script>
<script src="demo/es5/fg-carousel.js" defer nomodule></script>
<link rel="stylesheet" href="src/fg-carousel.css">
```

Note: to support IE11, we have used Babel to create [a module-free version of the carousel](demo/es5/fg-carousel.js) in the `demo` directory, which is listed above using the module/nomodule pattern to only delivery to non-module browsers. 


## Methods and Events

The carousel has several methods you can call on it. You can find these methods on the element itself. 

- tbd 

The carousel has several events. 
- tbd

## Polyfills

To use the carousel in modern browsers, two polyfills are likely necessary (please check browser support to see how these align with your needs). 

- Custom Elements: The `fg-carousel` element uses the standard HTML custom elements feature, which are well supported but need a polyfill in IE11 and older. This project references WebReflection's [Document Register Element](https://github.com/WebReflection/document-register-element) polyfill which can be found at [demo/lib/document-register-element.js](demo/lib/document-register-element.js). It should be loaded prior to the accessible carousel script. In our demo page we use the following pattern to load it, but you could package it with <script>this.customElements||document.write('<script src=".demo/lib/document-register-element.js"><\x2fscript>');</script>
- Intersection Observer: The `fg-carousel` element uses the standard intersection observer API to detect visibility of elements in the scroll area. For support, this may need a polyfill. We've [included one in the demos](demo/lib/intersection-observer.js) for convenience, via `<script src="./demo/lib/intersection-observer.js" defer></script>`