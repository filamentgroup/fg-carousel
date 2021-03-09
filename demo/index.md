---
---

<script>this.customElements||document.write('<script src="./lib/document-register-element.js" defer><\x2fscript>');</script>
<script src="./lib/intersection-observer.js" defer></script>
<script src="../src/fg-carousel.js" type="module"></script>
<script src="./es5/fg-carousel.js" defer nomodule></script>
<script src="./lib/inert.js" defer></script>
<link rel="stylesheet" href="../src/fg-carousel.css">


<h1 id="demos">Demos</h1>

Quick links to examples:

- [Standard](#nextprev)
- [Dots](#dots)
- [Varying width breakpoints](#breakpoints)
- [Partial Reveals](#reveal)
- [Fixed width slides](#fixed)
- [Paginated navigation](#pagination)
- [Autoplay](#autoplay)
- [Looping](#looping)



<h2 class="docs" id="nextprev">Standard 1up Carousel with thumbnail and next/previous links.</h2>
<p class="docs">This carousel starts with HTML containing slides with focusable (linked) content inside them and linked thumbnail navigation, which are regular anchor links to each slide's corresponding ID attribute. It also has next/prev links that are automatically added through the addition of a <code>data-carousel-nextprev</code> attribute.</p>

<fg-carousel data-carousel-nextprev="" class="marketing-example">
<div class="carousel_nav">
      <a href="#img-a1b"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" /></a>
      <a href="#img-b1b"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" /></a>
      <a href="#img-c1b"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" /></a>
      <a href="#img-d1b"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" /></a>
      <a href="#img-e1b"><img src="imgs/thumb-chuttersnap-ZRFzHWwGm3g-unsplash.jpg" alt="Photo of city scene by Chuttersnap" /></a>
      <a href="#img-f1b"><img src="imgs/thumb-a-k-kNG1xaJklfA-unsplash.jpg" alt="Photo of city scene by @djluvrocks" /></a>
      <a href="#img-g1b"><img src="imgs/thumb-lance-anderson-PcCQgQ6KGkI-unsplash.jpg" alt="Photo of city scene by Lance Anderson" /></a>
      <a href="#img-h1b"><img src="imgs/thumb-anthony-intraversato-xr43RescWSA-unsplash.jpg" alt="Photo of city scene by Anthony Intraversato" /></a>
  </div>
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane" aria-label="Series of images of city scenes">
        <div class="carousel_items">
            <div class="carousel_item" id="img-a1b">
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Andrea Cau</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-b1b">
            <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Henning Witzel</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-c1b">
            <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Jonathan Riley</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-d1b">
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Jonathan Roger</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-e1b">
            <img src="imgs/chuttersnap-ZRFzHWwGm3g-unsplash.jpg" alt="Photo of city scene by Chuttersnap" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Chuttersnap</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-f1b">
            <img src="imgs/a-k-kNG1xaJklfA-unsplash.jpg" alt="Photo of city scene by @djluvrocks" />
            <div class="demo-caption">
              <p>city scene by <a href="#">@djluvrocks</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-g1b">
            <img src="imgs/lance-anderson-PcCQgQ6KGkI-unsplash.jpg" alt="Photo of city scene by Lance Anderson" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Lance Anderson</a></p>
            </div>
            </div>
            <div class="carousel_item" id="img-h1b">
            <img src="imgs/anthony-intraversato-xr43RescWSA-unsplash.jpg" alt="Photo of city scene by Anthony Intraversato" />
            <div class="demo-caption">
              <p>city scene by <a href="#">Anthony Intraversato</a></p>
            </div>
            </div>
        </div>
        </div>
    </div>
  </fg-carousel>

  <style>
  .marketing-example .carousel_item {
    position: relative;
  }
  .marketing-example .demo-caption {
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,.8);
    left: 0;
    right: 0;
    padding: 1em 2em;
  }
  .marketing-example .demo-caption p {
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    margin: 0;
  }
  .marketing-example .demo-caption a {
    text-decoration: underline;
    color: #fff;
  }
  </style>



  <h2 class="docs" id="dots">Same Example with Dot Navigation</h2>
  <p class="docs">You can have dots instead of thumbnails by adding the <code>carousel_nav-dots</code> class</p>
  <p class="docs">You can also set the attribute on carousel_item elements to get individual timing.</p>
  <fg-carousel data-carousel-nextprev>
      <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
          <div class="carousel_pane" aria-label="Series of images of city scenes">
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
                  <div class="carousel_item" id="img-e3b">
            <img src="imgs/chuttersnap-ZRFzHWwGm3g-unsplash.jpg" alt="Photo of city scene by Chuttersnap" />
            </div>
            <div class="carousel_item" id="img-f3b">
            <img src="imgs/a-k-kNG1xaJklfA-unsplash.jpg" alt="Photo of city scene by @djluvrocks" />
            </div>
            <div class="carousel_item" id="img-g3b">
            <img src="imgs/lance-anderson-PcCQgQ6KGkI-unsplash.jpg" alt="Photo of city scene by Lance Anderson" />
            </div>
            <div class="carousel_item" id="img-h3b">
            <img src="imgs/anthony-intraversato-xr43RescWSA-unsplash.jpg" alt="Photo of city scene by Anthony Intraversato" />
            </div>
              </div>
              </div>
          </div>
          <div class="carousel_nav carousel_nav-dots">
              <a href="#img-a3b">Slide 1</a>
              <a href="#img-b3b">Slide 2</a>
              <a href="#img-c3b">Slide 3</a>
              <a href="#img-d3b">Slide 4</a>
              <a href="#img-e3b">Slide 5</a>
              <a href="#img-f3b">Slide 6</a>
              <a href="#img-g3b">Slide 7</a>
              <a href="#img-h3b">Slide 8</a>
          </div>
    </fg-carousel>



<style>
/* breakpoints example */
@media (min-width: 40em){
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
@media (min-width: 60em){
  .breakpointsexample .carousel_item {
    width: 25%;
  }
  .breakpointsexample .carousel_pane {
    scroll-snap-points-x: repeat(25%);
  }
}
</style>

<h2 class="docs" id="breakpoints">Example w/ varying number of slides showing depending on viewport size</h2>
<p class="docs">This example plays nicely with CSS breakpoints to show a different number of slides depending on the viewport size. To use breakpoints in this way, for back compat, be sure to include Snap Points that correspond to the item widths. <a href="#css">See CSS for this example</a>.</p>

<fg-carousel data-carousel-nextprev class="breakpointsexample">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane" aria-label="Series of images of city scenes">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a21">
          <img src="imgs/joshua-koblin-eqW1MPinEV4-unsplash.jpg" alt="picture of a car by joshua koblin">
          </div>
          <div class="carousel_item" id="img-b21">
          <img src="imgs/marcus-p-oUBjd22gF6w-unsplash.jpg" alt="picture of a car by marcus p">
          </div>
          <div class="carousel_item" id="img-c21">
          <img src="imgs/joey-banks-YApiWyp0lqo-unsplash.jpg" alt="picture of a car by joey banks">
          </div>
          <div class="carousel_item" id="img-d21">
          <img src="imgs/lance-asper-N9Pf2J656aQ-unsplash.jpg" alt="picture of a car by lance asper">
          </div>
          <div class="carousel_item" id="img-e21">
          <img src="imgs/john-vicente-CMzmQNU-DGE-unsplash.jpg" alt="picture of a car by john vicente">
          </div>
          <div class="carousel_item" id="img-f21">
          <img src="imgs/benjamin-child-7Cdw956mZ4w-unsplash.jpg" alt="picture of a car by benjamin child">
          </div>
          <div class="carousel_item" id="img-g21">
          <img src="imgs/matt-antonioli-3akA0XDg1_g-unsplash.jpg" alt="picture of a car by matt antonioli">
          </div>
              </div>
              </div>
          </div>
  </fg-carousel>

<h3 class="docs" id="css">CSS for this example</h3>
<pre class="docs language-css"><code class="docs language-css">
/* breakpoints example */
@media (min-width: 40em){
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
@media (min-width: 60em){
  .breakpointsexample .carousel_item {
    width: 25%;
  }
  .breakpointsexample .carousel_pane {
    scroll-snap-points-x: repeat(25%);
  }
}
</code></pre>








<style>
    .revealexample .carousel_item {
        width: 85%;
    }
    .revealexample .carousel_pane {
        scroll-snap-points-x: repeat(85%);
    }
  
  </style>

<h2 class="docs" id="reveal">Example with partial slide reveals.</h2>

<p class="docs">If you set slides to a width that doesn't divide evenly in the visible viewport, you'll have slides that partially reveal, which can be a nice affordance to suggest to the user that there's more content to see. </p>

<fg-carousel class="revealexample" data-carousel-nextprev="">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
        <div class="carousel_pane" aria-label="Series of images of city scenes">
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
                <div class="carousel_item" id="img-e4">
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
            </div>
            <div class="carousel_item" id="img-f4">
              <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
            </div>
            <div class="carousel_item" id="img-g4">
              <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
            </div>
            <div class="carousel_item" id="img-h4">
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
          </div>
            </div>
            </div>
        </div>
        <div class="carousel_nav carousel_nav-dots">
          <a href="#img-a4">Scroll carousel to slide 1 of 8</a>
          <a href="#img-b4">Scroll carousel to slide 2 of 8</a>
          <a href="#img-c4">Scroll carousel to slide 3 of 8</a>
          <a href="#img-d4">Scroll carousel to slide 4 of 8</a>
          <a href="#img-e4">Scroll carousel to slide 5 of 8</a>
          <a href="#img-f4">Scroll carousel to slide 6 of 8</a>
          <a href="#img-g4">Scroll carousel to slide 7 of 8</a>
          <a href="#img-h4">Scroll carousel to slide 8 of 8</a>
        </div>
</fg-carousel>

<h3 class="docs" id="css">CSS for this example</h3>
<pre class="docs language-css"><code class="docs language-css">
  .revealexample .carousel_item {
  width: 85%;
  }
  .revealexample .carousel_pane {
  scroll-snap-points-x: repeat(85%);
  }
  </code></pre>




<style>
/* cars example */
.cars-example .carousel_item {
width: 500px;
max-width: 100%;
}
</style>

<h2 class="docs" id="fixed">Fixed width slides</h2>
<p class="docs">This example is similar to prior examples that show multiple slides, but it has fixed-width slides, rather than slides that fill a percent of the viewport. It also uses dynamic pagination for thumbnails and arrows through the "data-carousel-paginated" attribute. Pagination will cause the thumbnails and arrows to treat the visible slides as one unit, advancing as a whole, which tends to work better for multiple slides. Regardless of whether widths are fixed or fluid, if the number of slides showing at any time varies such as in this example, the number of dots may change across breakpoints. Dynamic thumbnails highlight one "viewport" at a time.</p>

<fg-carousel data-carousel-nextprev="" class="cars-example">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane" aria-label="Series of images of city scenes">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a2a">
          <img src="imgs/joshua-koblin-eqW1MPinEV4-unsplash.jpg" alt="picture of a car by joshua koblin">
          </div>
          <div class="carousel_item" id="img-b2a">
          <img src="imgs/marcus-p-oUBjd22gF6w-unsplash.jpg" alt="picture of a car by marcus p">
          </div>
          <div class="carousel_item" id="img-c2a">
          <img src="imgs/joey-banks-YApiWyp0lqo-unsplash.jpg" alt="picture of a car by joey banks">
          </div>
          <div class="carousel_item" id="img-d2a">
          <img src="imgs/lance-asper-N9Pf2J656aQ-unsplash.jpg" alt="picture of a car by lance asper">
          </div>
          <div class="carousel_item" id="img-e2a">
          <img src="imgs/john-vicente-CMzmQNU-DGE-unsplash.jpg" alt="picture of a car by john vicente">
          </div>
          <div class="carousel_item" id="img-f2a">
          <img src="imgs/benjamin-child-7Cdw956mZ4w-unsplash.jpg" alt="picture of a car by benjamin child">
          </div>
          <div class="carousel_item" id="img-g2a">
          <img src="imgs/matt-antonioli-3akA0XDg1_g-unsplash.jpg" alt="picture of a car by matt antonioli">
          </div>
              </div>
              </div>
          </div>
    <div class="carousel_nav carousel_nav-dots">
          <a href="#img-a2a">Scroll carousel to slide 1 of 8</a>
          <a href="#img-b2a">Scroll carousel to slide 2 of 8</a>
          <a href="#img-c2a">Scroll carousel to slide 3 of 8</a>
          <a href="#img-d2a">Scroll carousel to slide 4 of 8</a>
          <a href="#img-e2a">Scroll carousel to slide 5 of 8</a>
          <a href="#img-f2a">Scroll carousel to slide 6 of 8</a>
          <a href="#img-g2a">Scroll carousel to slide 7 of 8</a>
        </div>
  </fg-carousel>

<h3 class="docs" id="css">CSS for this example</h3>
<pre class="docs language-css"><code class="docs language-css">
  /* cars example */
.cars-example .carousel_item {
  width: 500px;
  max-width: 100%;
}
  </code></pre>




<h2 class="docs" id="pagination">Responsive slide widths with paginated navigation</h2>
<p class="docs">This example is similar to prior examples that show multiple slides, but it uses dynamic pagination for thumbnails and arrows through the "data-carousel-paginated" attribute. Pagination will cause the thumbnails and arrows to treat the visible slides as one unit, advancing as a whole, which tends to work better for multiple slides. The number of dots in the nav may change across breakpoints to match the number of "pages" that are visible.</p>

<fg-carousel data-carousel-nextprev="" data-carousel-paginated class="breakpointsexample">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane" aria-label="Series of images of city scenes">
        <div class="carousel_items">
          <div class="carousel_item" id="img-a20">
          <img src="imgs/joshua-koblin-eqW1MPinEV4-unsplash.jpg" alt="picture of a car by joshua koblin">
          </div>
          <div class="carousel_item" id="img-b20">
          <img src="imgs/marcus-p-oUBjd22gF6w-unsplash.jpg" alt="picture of a car by marcus p">
          </div>
          <div class="carousel_item" id="img-c20">
          <img src="imgs/joey-banks-YApiWyp0lqo-unsplash.jpg" alt="picture of a car by joey banks">
          </div>
          <div class="carousel_item" id="img-d20">
          <img src="imgs/lance-asper-N9Pf2J656aQ-unsplash.jpg" alt="picture of a car by lance asper">
          </div>
          <div class="carousel_item" id="img-e20">
          <img src="imgs/john-vicente-CMzmQNU-DGE-unsplash.jpg" alt="picture of a car by john vicente">
          </div>
          <div class="carousel_item" id="img-f20">
          <img src="imgs/benjamin-child-7Cdw956mZ4w-unsplash.jpg" alt="picture of a car by benjamin child">
          </div>
          <div class="carousel_item" id="img-g20">
          <img src="imgs/matt-antonioli-3akA0XDg1_g-unsplash.jpg" alt="picture of a car by matt antonioli">
          </div>
              </div>
              </div>
          </div>
    <div class="carousel_nav carousel_nav-dots">
          <a href="#img-a20">Scroll carousel to slide 1 of 8</a>
          <a href="#img-b20">Scroll carousel to slide 2 of 8</a>
          <a href="#img-c20">Scroll carousel to slide 3 of 8</a>
          <a href="#img-d20">Scroll carousel to slide 4 of 8</a>
          <a href="#img-e20">Scroll carousel to slide 5 of 8</a>
          <a href="#img-f20">Scroll carousel to slide 6 of 8</a>
          <a href="#img-g20">Scroll carousel to slide 7 of 8</a>
        </div>
  </fg-carousel>




 
<h2 class="docs" id="autoplay"> Auto-play carousel example</h2>
<p class="docs">By setting the <code>data-carousel-autoplay</code> attribute on the <code>fg-carousel</code> element to a natural number value carousel will automatically rotate through the images. The value represents a the millisecond delay between item transitions. In the example below we have <code>data-carousel-autoplay="4000"</code></p>
<p class="docs">You can also set the attribute on carousel_item elements to get individual timing.</p>
<fg-carousel data-carousel-nextprev data-carousel-autoplay="4000">
    <div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
        <div class="carousel_pane" aria-label="Series of images of city scenes">
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
                <div class="carousel_item" id="img-e3">
            <img src="imgs/andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Photo of city scene by Andrea Cau" />
            </div>
            <div class="carousel_item" id="img-f3">
              <img src="imgs/henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Photo of city scene by Henning Witzel" />
            </div>
            <div class="carousel_item" id="img-g3">
              <img src="imgs/jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Photo of city scene by Jonathan Riley" />
            </div>
            <div class="carousel_item" id="img-h3">
            <img src="imgs/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Photo of city scene by Jonathan Roger" />
          </div>
            </div>
            </div>
        </div>
        <div class="carousel_nav">
          <a href="#img-a3"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Scroll carousel to slide 1" /></a>
          <a href="#img-b3"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Scroll carousel to slide 2" /></a>
          <a href="#img-c3"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Scroll carousel to slide 3" /></a>
          <a href="#img-d3"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Scroll carousel to slide 4" /></a>
          <a href="#img-e3"><img src="imgs/thumb-chuttersnap-ZRFzHWwGm3g-unsplash.jpg" alt="Scroll carousel to slide 5" /></a>
          <a href="#img-f3"><img src="imgs/thumb-a-k-kNG1xaJklfA-unsplash.jpg" alt="Scroll carousel to slide 6" /></a>
          <a href="#img-g3"><img src="imgs/thumb-lance-anderson-PcCQgQ6KGkI-unsplash.jpg" alt="Scroll carousel to slide 7" /></a>
          <a href="#img-h3"><img src="imgs/thumb-anthony-intraversato-xr43RescWSA-unsplash.jpg" alt="Scroll carousel to slide 8" /></a>
      </div>
  </fg-carousel> 



<h2 class="docs" id="looping">Example with endless looping</h2>
<p class="docs">A carousel carousel with <code>data-carousel-loop</code> will append items to either end as needed so the scroll is infinite. This is recommended for 1-slide-at-a-time carousels.</p>

<fg-carousel data-carousel-nextprev="" data-carousel-loop="">
<div class="carousel_nextprev_contain"><!-- optional wrapper to allow for next-prev arrows to relatively position to a direct wrapper of the slides -->
    <div class="carousel_pane" aria-label="Series of images of city scenes">
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
        <a href="#img-a5"><img src="imgs/thmb-andrea-cau-nV7GJmSq3zc-unsplash.jpg" alt="Scroll Carousel to slide 1" /></a>
        <a href="#img-b5"><img src="imgs/thmb-henning-witzel-ukvgqriuOgo-unsplash.jpg" alt="Scroll Carousel to slide 2" /></a>
        <a href="#img-c5"><img src="imgs/thmb-jonathan-riley-VW8MUbHyxCU-unsplash.jpg" alt="Scroll Carousel to slide 3" /></a>
        <a href="#img-d5"><img src="imgs/thmb-jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="Scroll Carousel to slide 4" /></a>
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