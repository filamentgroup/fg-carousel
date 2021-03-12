"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var carousel = /*#__PURE__*/function (_HTMLElement) {
  _inherits(carousel, _HTMLElement);

  var _super = _createSuper(carousel);

  function carousel() {
    var _this;

    _classCallCheck(this, carousel);

    _this = _super.call(this);
    _this._init = _this._init.bind(_assertThisInitialized(_this));
    _this._observer = new MutationObserver(_this._init);
    return _this;
  }

  _createClass(carousel, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.children.length) {
        this._init();
      }

      this._observer.observe(this, {
        childList: true
      });
    }
  }, {
    key: "_init",
    value: function _init() {
      this.pluginName = "carousel";
      var self = this;
      this.navActiveClass = this.pluginName + "_nav_item-selected";
      this.activeItemClass = this.pluginName + "_item-active";
      this.initEvent = this.makeEvent("init");
      this.activeEvent = this.makeEvent("active");
      this.inActiveEvent = this.makeEvent("inactive");
      this.interacted = false;
      this.idItems();
      this.observeItems();
      this.defineElems();

      if (this.hasAttribute("data-carousel-nextprev")) {
        this.addNextPrev();
        setTimeout(function () {
          self.manageArrowState();
        });
      }

      this.paginated = this.hasAttribute("data-carousel-paginated");

      if (this.paginated) {
        this.manageDynamicNav();
      }

      this.bindEvents();
      this.dispatchEvent(this.initEvent);
      this.autoplayAttr = this.getAttribute("data-carousel-autoplay");

      if (this.autoplayAttr !== null) {
        setTimeout(function () {
          self.nextAutoplay();
        });
      } // make sure changes to the item list are tracked


      this._observeItemChanges = new MutationObserver(function () {
        self.updateIntObserveList();
      });

      this._observeItemChanges.observe(this, {
        childList: true,
        subtree: true
      });
    }
  }, {
    key: "makeEvent",
    value: function makeEvent(evtName) {
      if (typeof window.CustomEvent === "function") {
        return new CustomEvent(evtName, {
          bubbles: true,
          cancelable: false
        });
      } else {
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtName, true, true, {});
        return evt;
      }
    }
  }, {
    key: "addNextPrev",
    value: function addNextPrev() {
      var nextprev = document.createElement("ul");
      nextprev.classList.add("carousel_nextprev");
      nextprev.innerHTML = "\n\t\t\t<li class=\"carousel_nextprev_item\"><button class=\"carousel_nextprev_prev\" title=\"Activate Previous Tab\"></button></li>\n\t\t\t<li class=\"carousel_nextprev_item\"><button class=\"carousel_nextprev_next\" title=\"Activate Next Tab\"></button></li>\n\t\t";
      var nextprevContain = this.querySelector("." + this.pluginName + "_nextprev_contain");

      if (!nextprevContain) {
        nextprevContain = this;
      }

      nextprevContain.append(nextprev);
    }
  }, {
    key: "defineElems",
    value: function defineElems() {
      this.classList.add(this.pluginName);
      this.slider = this.querySelector(".carousel_pane");
      this.nav = this.querySelector(".carousel_nav");

      if (this.nav) {
        this.nav.setAttribute('role', 'tablist');
      }

      this.nextprev = this.querySelector(".carousel_nextprev");
    }
  }, {
    key: "observerCallback",
    value: function observerCallback(entries) {
      var self = this;
      var parentElem = this;
      var navElem = this.nav;
      entries.forEach(function (entry) {
        var entryNavLink = parentElem.querySelector("a[href='#" + entry.target.id + "']");

        if (entry.isIntersecting && entry.intersectionRatio >= .75) {
          entry.target.classList.add(self.activeItemClass);
          entry.target.inert = false;
          entry.target.setAttribute("role", 'tabpanel');
          entry.target.setAttribute("tabindex", '0');
          entry.target.setAttribute("aria-hidden", 'false');
          var panelId = entry.target.getAttribute('id');
          var tabId = panelId + "-tab";
          entry.target.setAttribute("aria-labelledby", tabId);
          entry.target.dispatchEvent(self.activeEvent);

          if (navElem && entryNavLink) {
            entryNavLink.classList.add(self.navActiveClass);
            entryNavLink.setAttribute("role", "tab");
            entryNavLink.setAttribute("tabindex", "0");
            entryNavLink.setAttribute("id", tabId);
            entryNavLink.setAttribute("aria-controls", panelId);

            if (navElem.scrollTo) {
              navElem.scrollTo({
                left: entryNavLink.offsetLeft,
                behavior: "smooth"
              });
            } else {
              navElem.scrollLeft = entryNavLink.offsetLeft;
            }
          }
        } else {
          entry.target.classList.remove(self.pluginName + "_item-active");
          entry.target.setAttribute("role", 'tabpanel');
          entry.target.inert = true;
          entry.target.setAttribute("tabindex", '-1');
          entry.target.setAttribute("aria-hidden", 'true');

          var _panelId = entry.target.getAttribute('id');

          var _tabId = _panelId + "-tab";

          entry.target.setAttribute("aria-labelledby", _tabId);
          entry.target.dispatchEvent(self.inActiveEvent);

          if (entryNavLink) {
            entryNavLink.classList.remove(self.navActiveClass);
            entryNavLink.setAttribute("role", "tab");
            entryNavLink.setAttribute("aria-controls", _panelId);
            entryNavLink.setAttribute("tabindex", "-1");
            entryNavLink.setAttribute("id", _tabId);
          }
        }
      });
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this.querySelectorAll("." + this.pluginName + "_item");
    }
  }, {
    key: "idItems",
    value: function idItems() {
      var self = this;
      this.getItems().forEach(function (item) {
        if (!item.id) {
          item.id = self.pluginName + "-" + new Date().getTime();
        }
      });
    }
  }, {
    key: "observeItems",
    value: function observeItems() {
      var self = this;
      this._intObserver = new IntersectionObserver(function (entries) {
        self.observerCallback(entries);
      }, {
        root: self,
        threshold: .75
      });
      this.updateIntObserveList();

      this._intObserver.takeRecords();
    }
  }, {
    key: "updateIntObserveList",
    value: function updateIntObserveList() {
      var self = this;
      this.querySelectorAll("." + this.pluginName + "_item").forEach(function (item) {
        self._intObserver.observe(item);
      });
    } // get the carousel_item elements whose left offsets fall within the scroll pane.

  }, {
    key: "activeItems",
    value: function activeItems() {
      return this.querySelectorAll("." + this.activeItemClass);
    } // sort an item to either end to ensure there's always something to advance to

  }, {
    key: "updateSort",
    value: function updateSort() {
      if (this.loopDisabled || !this.closest("[data-carousel-loop]")) {
        return;
      }

      var scrollWidth = this.slider.scrollWidth;
      var scrollLeft = this.slider.scrollLeft;
      var contain = this.querySelector("." + this.pluginName + "_items");
      var items = this.querySelectorAll("." + this.pluginName + "_item");
      var width = this.offsetWidth;

      if (scrollLeft < width) {
        var sortItem = items[items.length - 1];
        var sortItemWidth = sortItem.offsetWidth;
        contain.prepend(sortItem);
        this.slider.scrollLeft = scrollLeft + sortItemWidth;
      } else if (scrollWidth - scrollLeft - width <= 0) {
        var sortItem = items[0];
        var sortItemWidth = sortItem.offsetWidth;
        contain.append(sortItem);
        this.slider.scrollLeft = scrollLeft - sortItemWidth;
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var self = this; // clicks for thumbs, nav

      this.addEventListener("click", function (e) {
        self.handleClick(e);
        self.interacted = true;
      }); // keyboard arrows

      this.addEventListener("keydown", function (e) {
        self.keydownHandler(e);
      }); // autoplay stops

      this.addEventListener("click", function (e) {
        self.interacted = true;
        self.stopAutoplay();
      });
      this.addEventListener("pointerdown", function (e) {
        self.interacted = true;
        self.stopAutoplay();
      });
      this.addEventListener("focus", function (e) {
        self.interacted = true;
        self.stopAutoplay();
      });
      this.slider.addEventListener("focus", function () {
        self.loopDisabled = true;
      }); // cleanup on resize 

      if (this.hasAttribute("data-carousel-nextprev")) {
        window.addEventListener("resize", function (e) {
          self.manageArrowState();
        });
      }

      if (this.paginated) {
        window.addEventListener("resize", function (e) {
          self.manageDynamicNav();
        });
      }

      var scrolling;
      this.slider.addEventListener("scroll", function (e) {
        clearTimeout(scrolling);
        scrolling = setTimeout(function () {
          self.updateSort();

          if (self.hasAttribute("data-carousel-nextprev")) {
            self.manageArrowState();
          }
        }, 66);
      });
      setTimeout(function () {
        self.updateSort();
      });
    }
  }, {
    key: "resizeRetain",
    value: function resizeRetain() {
      var afterResize;
      var self = this;
      var currSlide;

      function resizeUpdates() {
        clearTimeout(afterResize);

        if (!currSlide) {
          currSlide = self.activeItems()[0];
        }

        afterResize = setTimeout(function () {
          // retain snapping on resize 
          self["goto"](currSlide);
          currSlide = null; // resize can reveal or hide slides, so update arrows

          self.manageArrowState();
        }, 300);
      }

      window.addEventListener("resize", resizeUpdates);
    }
  }, {
    key: "manageDynamicNav",
    value: function manageDynamicNav() {
      var pane = this.slider;
      var scrollWidth = pane.scrollWidth;
      var width = pane.offsetWidth;
      var regions = scrollWidth / width; //this.setAttribute( "data-carousel-pages", regions.toFixed(3) )

      var allSlides = this.getItems();
      var allThumbs = this.nav.querySelectorAll("a");
      this.iterator = Math.round(allSlides.length / regions);

      for (var i = 0; i < allSlides.length; i++) {
        allThumbs[i].setAttribute("disabled", true);
      }

      for (var i = 0; i < allSlides.length; i += this.iterator) {
        allThumbs[i].removeAttribute("disabled");
      }
    }
  }, {
    key: "manageArrowState",
    value: function manageArrowState() {
      // old api helper here. 
      if (this.closest("[data-carousel-loop], [data-loop]")) {
        return;
      }

      var pane = this.slider;
      var nextLink = this.querySelector("." + this.pluginName + "_nextprev_next");
      var prevLink = this.querySelector("." + this.pluginName + "_nextprev_prev");
      var currScroll = pane.scrollLeft;
      var scrollWidth = pane.scrollWidth;
      var width = pane.offsetWidth;
      var noScrollAvailable = width === scrollWidth;
      var maxScroll = scrollWidth - width;

      if (currScroll >= maxScroll - 3 || noScrollAvailable) {
        // 3 here is arbitrary tolerance
        nextLink.classList.add("carousel_nextprev-disabled");
        nextLink.setAttribute("disabled", true);
      } else {
        nextLink.classList.remove("carousel_nextprev-disabled");
        nextLink.removeAttribute("disabled");
      }

      if (currScroll > 3 && !noScrollAvailable) {
        // 3 is arbitrary tolerance
        prevLink.classList.remove("carousel_nextprev-disabled");
        prevLink.removeAttribute("disabled");
      } else {
        prevLink.classList.add("carousel_nextprev-disabled");
        prevLink.setAttribute("disabled", true);
      }

      if (noScrollAvailable) {
        this.classList.add("carousel-hide-nav");
      } else {
        this.classList.remove("carousel-hide-nav");
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var self = this;
      var parentAnchor = e.target.closest("a");

      if (e.target.closest(".carousel_nextprev_next")) {
        e.preventDefault();
        return self.arrowNavigate(true);
      } else if (e.target.closest(".carousel_nextprev_prev")) {
        e.preventDefault();
        return self.arrowNavigate(false);
      } // internal links to slides
      else if (parentAnchor) {
          e.preventDefault();
          self["goto"](parentAnchor.getAttribute("href"));
        }
    }
  }, {
    key: "nextAutoplay",
    value: function nextAutoplay() {
      var currentActive = this.activeItems()[0];
      var self = this;

      if (currentActive) {
        var autoTiming = currentActive.getAttribute("data-carousel-autoplay") || this.autoplayAttr;

        if (autoTiming !== null) {
          if (autoTiming) {
            var thisTime = parseInt(autoTiming, 10) || 5000;
            self.autoTiming = setTimeout(function () {
              self.next();
              self.nextAutoplay();
            }, thisTime);
          }
        }
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      clearTimeout(this.autoTiming);
    }
  }, {
    key: "goto",
    value: function goto(item, parent, callback) {
      var slide;
      var focused = document.activeElement;

      if (!parent) {
        parent = this.slider;
      }

      if (typeof item === "string") {
        //go to ID
        slide = this.querySelector(item);
      } else if (typeof item === "number") {
        //go to index
        slide = this.getItems()[item];
      } else {
        //go to obj
        slide = item;
      }

      if (slide) {
        parent.scrollTo({
          left: slide.offsetLeft,
          behavior: "smooth"
        });

        if (self.interacted && (focused && focused.closest(".carousel_nextprev, .carousel_items") || document.activeElement === document.body)) {
          setTimeout(function () {
            slide.focus();
          }, 1000);
        }

        if (callback) {
          callback();
        }
      }
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(e) {
      var self = this;

      if (e.keyCode === 37 || e.keyCode === 38) {
        this.stopAutoplay();
        e.preventDefault();
        e.stopImmediatePropagation();
        this.arrowNavigate(false);

        if (e.target.hasAttribute("role", 'tab') && e.target.previousElementSibling && self.interacted) {
          e.target.previousElementSibling.focus();
        } else {
          var prevSlide = self.activeItems()[0].previousElementSibling;

          if (prevSlide && self.interacted) {
            setTimeout(prevSlide.focus, 1000);
          }
        }
      }

      if (e.keyCode === 39 || e.keyCode === 40) {
        this.stopAutoplay();
        e.preventDefault();
        e.stopImmediatePropagation();
        this.arrowNavigate(true);

        if (e.target.hasAttribute("role", 'tab') && e.target.nextElementSibling && self.interacted) {
          e.target.nextElementSibling.focus();
        } else {
          var nextSlide = self.activeItems()[0].nextElementSibling;

          if (nextSlide && self.interacted) {
            setTimeout(nextSlide.focus, 1000);
          }
        }
      }
    } // next/prev links or arrows should loop back to the other end when an extreme is reached

  }, {
    key: "arrowNavigate",
    value: function arrowNavigate(forward) {
      if (forward) {
        this.next();
      } else {
        this.prev();
      }
    } // advance slide one full scrollpane's width forward

  }, {
    key: "next",
    value: function next() {
      var currentActive = this.activeItems()[0];

      if (currentActive) {
        var next = currentActive.nextElementSibling;

        if (this.paginated) {
          var activeNav = this.querySelector("." + this.navActiveClass);
          var nextNav = activeNav.nextElementSibling;

          while (nextNav.hasAttribute("disabled")) {
            nextNav = nextNav.nextElementSibling;
          }

          next = this.querySelector(nextNav.getAttribute('href'));
        }

        if (next) {
          this["goto"](next);
        }
      }
    } // advance slide one full scrollpane's width backwards

  }, {
    key: "prev",
    value: function prev() {
      var currentActive = this.activeItems()[0];

      if (currentActive) {
        var prev = currentActive.previousElementSibling;

        if (this.paginated) {
          var activeNav = this.querySelector("." + this.navActiveClass);
          var nextNav = activeNav.previousElementSibling;

          while (nextNav.hasAttribute("disabled")) {
            nextNav = nextNav.previousElementSibling;
          }

          prev = this.querySelector(nextNav.getAttribute('href'));
        }

        if (prev) {
          this["goto"](prev);
        }
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {//if needed
    }
  }]);

  return carousel;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if ('customElements' in window) {
  customElements.define('fg-carousel', carousel);
}