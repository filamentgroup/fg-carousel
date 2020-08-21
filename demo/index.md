---
---

<script>this.customElements||document.write('<script src="./lib/document-register-element.js" defer><\x2fscript>');</script>
<script src="./lib/intersection-observer.js" defer></script>
<script src="../src/fg-carousel.js" type="module"></script>
<script src="./es5/fg-carousel.js" defer nomodule></script>
<link rel="stylesheet" href="../src/fg-carousel.css">


  <style>
    .carousel {
      max-width: 300px;
    }

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
	margin: 0;
	text-align: center;
}
.carousel_nav-dots a {
	display: inline-block;
	width: 10px;
	height: 10px;
	margin: 0 2px;
	background: #ccc;
	border-radius: 100%;
	overflow: hidden;
	text-indent: -9999px;
	cursor: pointer;
}
.carousel_nav.carousel_nav-dots a {
	float: none;
}
.carousel_nav-dots a.carousel_nav_item-selected {
	background: #111;
	box-shadow: none;
	border: none;
	outline: none;
}

  </style>


# Demos


  <h2 class="docs" id="thumbnails">Basic carousel example</h2>
  <p class="docs">A carousel carousel with some thumbnail links. </p>
  <p class="docs"> Thumbnails are just regular links to a slide's ID attribute. The scrollbar is cropped from sight using the optional <code>carousel_pane_crop</code> div (only recommended when thumbnails or next/prev navigation is in play).</p>
  <fg-carousel>
    <div class="carousel_pane_crop">
      <div class="carousel_pane">
        <div class="carousel_items">
          <div class="carousel_item">
            <img src="imgs/monkey.jpg" alt="">
          </div>
          <div class="carousel_item">
            <img src="imgs/large.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-d2">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-e2">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-f2">
            <img src="imgs/bike.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-g2">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-h2">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-i2">
            <img src="imgs/bike.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-j2">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-k2">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-l2">
            <img src="imgs/bike.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-m2">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-n2">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-o2">
            <img src="imgs/bike.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="carousel_nav">
      <a href="#img-a2"><img src="imgs/monkey-thmb.jpg" alt=""></a>
      <a href="#img-b2"><img src="imgs/large-thmb.jpg" alt=""></a>
      <a href="#img-d2"><img src="imgs/interior-thmb.jpg" alt=""></a>
      <a href="#img-e2"><img src="imgs/cows-thmb.jpg" alt=""></a>
      <a href="#img-f2"><img src="imgs/bike-thmb.jpg" alt=""></a>
      <a href="#img-g2"><img src="imgs/interior-thmb.jpg" alt=""></a>
      <a href="#img-h2"><img src="imgs/cows-thmb.jpg" alt=""></a>
      <a href="#img-i2"><img src="imgs/bike-thmb.jpg" alt=""></a>
      <a href="#img-j2"><img src="imgs/interior-thmb.jpg" alt=""></a>
      <a href="#img-k2"><img src="imgs/cows-thmb.jpg" alt=""></a>
      <a href="#img-l2"><img src="imgs/bike-thmb.jpg" alt=""></a>
      <a href="#img-m2"><img src="imgs/interior-thmb.jpg" alt=""></a>
      <a href="#img-n2"><img src="imgs/cows-thmb.jpg" alt=""></a>
      <a href="#img-o2"><img src="imgs/bike-thmb.jpg" alt=""></a>
    </div>
  </fg-carousel>
  
  
  
  
  <h2 class="docs" id="nextprev">Example with next prev nav</h2>
  <p class="docs">A carousel carousel with next/prev links automatically added through the addition of a <code>data-carousel-nextprev</code> attribute.</p>
  <p class="docs">Also, this demo includes an optional ".carousel_nextprev_contain" div, which the next/prev nav will append to if present. This element wraps the scroll pane and allows you to precisely position arrows based on the height of the pane, without the thumbnails or dot nav.</p>
  <fg-carousel data-carousel-nextprev>
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
      <div class="carousel_pane_crop">
        <div class="carousel_pane">
          <div class="carousel_items">
            <div class="carousel_item" id="img-a3">
              <img src="imgs/monkey.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-b3">
              <img src="imgs/large.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-d3">
              <img src="imgs/interior.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-e3">
              <img src="imgs/cows.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-f3">
              <img src="imgs/bike.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
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
  
  <fg-carousel data-carousel-nextprev class="breakpointsexample">
    <div class="carousel_pane_crop">
      <div class="carousel_pane">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a4">
            <img src="imgs/monkey.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-b4">
            <img src="imgs/large.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-d4">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-e4">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-f4">
            <img src="imgs/bike.jpg" alt="">
          </div>
        </div>
      </div>
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
  
  
  
  
  <h2 class="docs" id="autoplay"> Auto-play carousel example</h2>
  <p class="docs">By setting the <code>data-carousel-autoplay</code> attribute on the <code>class="carousel"</code> element to a natural number value carousel will automatically rotate through the images. The value represents a the millisecond delay between item transitions. In the example below we have <code>data-carousel-autoplay="2000"</code></p>
  <p class="docs">You can also set the attribute on carousel_item elements to get individual timing.</p>
  <fg-carousel data-carousel-autoplay="4000">
    <div class="carousel_pane_crop">
      <div class="carousel_pane">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a2">
            <img src="imgs/monkey.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-b2">
            <img src="imgs/large.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-d2">
            <img src="imgs/interior.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-e2">
            <img src="imgs/cows.jpg" alt="">
          </div>
          <div class="carousel_item" id="img-f2">
            <img src="imgs/bike.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="carousel_nav">
      <a href="#img-a2"><img src="imgs/monkey-thmb.jpg" alt=""></a>
      <a href="#img-b2"><img src="imgs/large-thmb.jpg" alt=""></a>
      <a href="#img-d2"><img src="imgs/interior-thmb.jpg" alt=""></a>
      <a href="#img-e2"><img src="imgs/cows-thmb.jpg" alt=""></a>
      <a href="#img-f2"><img src="imgs/bike-thmb.jpg" alt=""></a>
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
  
  <fg-carousel class="revealexample" data-carousel-nextprev>
  <div class="carousel_pane_crop">
    <div class="carousel_pane">
      <div class="carousel_items">
        <div class="carousel_item" id="img-a6">
          <img src="imgs/monkey.jpg" alt="">
        </div>
        <div class="carousel_item" id="img-b6">
          <img src="imgs/large.jpg" alt="">
        </div>
        <div class="carousel_item" id="img-d6">
          <img src="imgs/interior.jpg" alt="">
        </div>
        <div class="carousel_item" id="img-e6">
          <img src="imgs/cows.jpg" alt="">
        </div>
        <div class="carousel_item" id="img-f6">
          <img src="imgs/bike.jpg" alt="">
        </div>
      </div>
    </div>
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
  
  
  <h2 class="docs" id="looping">Example with endless looping (experimental feature)</h2>
  <p class="docs">A carousel carousel with <code>data-carousel-loop</code> will append items to either end as needed so the scroll is infinite. This is recommended for 1-slide-at-a-time carousels.</p>
  
  <fg-carousel data-carousel-nextprev data-carousel-loop>
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
      <div class="carousel_pane_crop">
        <div class="carousel_pane">
          <div class="carousel_items">
            <div class="carousel_item" id="img-a7">
              <img src="imgs/monkey.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-b7">
              <img src="imgs/large.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-d7">
              <img src="imgs/interior.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-e7">
              <img src="imgs/cows.jpg" alt="">
            </div>
            <div class="carousel_item" id="img-f7">
              <img src="imgs/bike.jpg" alt="">
            </div>
          </div>
        </div>
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