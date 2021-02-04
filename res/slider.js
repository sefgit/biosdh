var slider = function (sliderElement) {

  var pages = [];
  var currentSlide = 1;
  var isChanging = false;
  var keyUp = {38:1, 33:1};
  var keyDown = {40:1, 34:1};

  var init = function () {

    document.body.classList.add('slider__body');
/*
    // control scrolling
    whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    window.addEventListener(whatWheel, function (e) {
      var direction = e.wheelDelta || e.deltaY;
      if (direction > 0) {
        changeSlide(-1);
      } else {
        changeSlide(1);
      }
    });
*/
    // page change animation is done
    detectChangeEnd() && document.querySelector(sliderElement).addEventListener(detectChangeEnd(), function () {
      if (isChanging) {
        setTimeout(function() {
          isChanging = false;
          window.location.hash = document.querySelector('[data-slider-index="' + currentSlide + '"]').id;
        }, 400);
      }
    });

    // set up page and build visual indicators
    document.querySelector(sliderElement).classList.add('slider__container');

    var index = 1;
    [].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {

      var indicator = document.createElement('a');
      section.classList.add('slider__page');
      pages.push(section);
      section.setAttribute('data-slider-index', index++);
    });
  };


  // prevent double scrolling
  var detectChangeEnd = function () {
    var transition;
    var e = document.createElement('foobar');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for(transition in transitions) {
      if (e.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
    return true;
  };


  // handle css change
  var changeCss = function (obj, styles) {
    for (var _style in styles) {
      if (obj.style[_style] !== undefined) {
        obj.style[_style] = styles[_style];
      }
    }
  };

  // handle page/section change
  var changeSlide = function (direction) {

    // already doing it or last/first page, staph plz
    if (isChanging || (direction == 1 && currentSlide == pages.length) || (direction == -1 && currentSlide == 1)) {
      return;
    }

    // change page
    currentSlide += direction;
    isChanging = true;
    changeCss(document.querySelector(sliderElement), {
      transform: 'translate3d(0, ' + -(currentSlide - 1) * 100 + '%, 0)'
    });
  };

  // go to spesific slide if it exists
  var gotoSlide = function (where) {
    var target = document.querySelector(where).getAttribute('data-slider-index');
    if (target != currentSlide && document.querySelector(where)) {
      changeSlide(target - currentSlide);
    }
  };
/*
  // if page is loaded with hash, go to slide
  if (location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
      gotoSlide(location.hash);
    }, 1);
  };
  */
 
  // we have lift off
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('onload', init(), false);
  }

  // expose gotoSlide function
  return {
    gotoSlide: gotoSlide
  }
};
