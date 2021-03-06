var settings = {

	slider: {

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of ".slider > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 4000

	},

	carousel: {

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of ".carousel > article".
			speed: 350

	}

};

(function($) {

	var	$window = $(window),
		$body = $('body');

	/**
	 * Custom slider for Altitude.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		// Handle no/multiple elements.
			if (this.length == 0)
				return $this;

			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i])._slider(options);

				return $this;

			}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [],
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Functions.
			$this._switchTo = function(x, stop) {

				// Handle lock.
					if (isLocked || pos == x)
						return;

					isLocked = true;

				// Stop?
					if (stop)
						window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('top');

				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;

						}, 100);

					}, options.speed);

			};

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this);

					// Add to slides.
						slides.push($slide);

					i++;

				});

		// Initial slide.
			slides[pos]
				.addClass('visible')
				.addClass('top');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {

				// Increment.
					current++;

					if (current >= slides.length)
						current = 0;

				// Switch.
					$this._switchTo(current);

			}, options.delay);

	};

	/**
	 * Custom carousel for Altitude.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._carousel = function(options) {

		var	$window = $(window),
			$this = $(this);

		// Handle no/multiple elements.
			if (this.length == 0)
				return $this;

			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i])._slider(options);

				return $this;

			}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [],
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Functions.
			$this._switchTo = function(x, stop) {

				// Handle lock.
					if (isLocked || pos == x)
						return;

					isLocked = true;

				// Stop?
					if (stop)
						window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						// Hide last slide (display).
							slides[lastPos].hide();

						// Show new slide (display).
							slides[pos].show();

						// Show new new slide.
							window.setTimeout(function() {
								slides[pos].addClass('visible');
							}, 25);

						// Unlock after sort delay.
							window.setTimeout(function() {
								isLocked = false;
							}, options.speed);

					}, options.speed);

			};

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this);

					// Add to slides.
						slides.push($slide);

					// Hide.
						$slide.hide();

					i++;

				});

		// Nav.
			$this
				.on('click', '.next', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Increment.
						current++;

						if (current >= slides.length)
							current = 0;

					// Switch.
						$this._switchTo(current);

				})
				.on('click', '.previous', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Decrement.
						current--;

						if (current < 0)
							current = slides.length - 1;

					// Switch.
						$this._switchTo(current);

				});

		// Initial slide.
			slides[pos]
				.show()
				.addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

	};

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Object-fit (pseudo) polyfill.
		if (!browser.canUse('object-fit'))
			$('img[data-position]').each(function() {

				var	$this = $(this),
					$parent = $this.parent();

				// Apply img's src to parent.
					$parent
						.css('background-image', 'url("' + $this.attr('src') + '")')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat')
						.css('background-position', $this.data('position'));

				// Hide img.
					$this
						.css('opacity', '0');

			});

	// Sliders.
		$('.slider')
			._slider(settings.slider);

	// Carousels.
		$('.carousel')
			._carousel(settings.carousel);

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				target: $body,
				visibleClass: 'is-menu-visible',
				side: 'right'
			});

})(jQuery);


// Mostrar
function muestra1() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestra2() {
	var x = document.getElementById("myDIV2");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestra3() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra4() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra5() {
	var x = document.getElementById("myDIV5");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra6() {
	var x = document.getElementById("myDIV6");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra7() {
	var x = document.getElementById("myDIV7");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra8() {
	var x = document.getElementById("myDIV8");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra9() {
	var x = document.getElementById("myDIV9");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra10() {
	var x = document.getElementById("myDIV10");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra11() {
	var x = document.getElementById("myDIV11");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestra12() {
	var x = document.getElementById("myDIV12");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestra13() {
	var x = document.getElementById("myDIV13");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra14() {
	var x = document.getElementById("myDIV14");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra15() {
	var x = document.getElementById("myDIV15");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra16() {
	var x = document.getElementById("myDIV16");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra17() {
	var x = document.getElementById("myDIV17");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra18() {
	var x = document.getElementById("myDIV18");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra19() {
	var x = document.getElementById("myDIV19");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra20() {
	var x = document.getElementById("myDIV20");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra21() {
	var x = document.getElementById("myDIV21");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestra22() {
	var x = document.getElementById("myDIV22");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function muestraDYK1() {
	var x = document.getElementById("DYK1");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraDYK2() {
	var x = document.getElementById("DYK2");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraDYK3() {
	var x = document.getElementById("DYK3");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraDYK4() {
	var x = document.getElementById("DYK4");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }


  function muestraOJO1() {
	var x = document.getElementById("OJO1");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO2() {
	var x = document.getElementById("OJO2");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO3() {
	var x = document.getElementById("OJO3");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO4() {
	var x = document.getElementById("OJO4");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO5() {
	var x = document.getElementById("OJO5");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO6() {
	var x = document.getElementById("OJO6");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function muestraOJO7() {
	var x = document.getElementById("OJO7");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

// FLIP CARD
var card1 = document.querySelector('.card1');
card1.addEventListener( 'click', function() {
  card1.classList.toggle('is-flipped');
});

var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});

var card3 = document.querySelector('.card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});

var card4 = document.querySelector('.card4');
card4.addEventListener( 'click', function() {
  card4.classList.toggle('is-flipped');
});

var card5 = document.querySelector('.card5');
card5.addEventListener( 'click', function() {
  card5.classList.toggle('is-flipped');
});

var card6 = document.querySelector('.card6');
card6.addEventListener( 'click', function() {
  card6.classList.toggle('is-flipped');
});

var card7 = document.querySelector('.card7');
card7.addEventListener( 'click', function() {
  card7.classList.toggle('is-flipped');
});

var card8 = document.querySelector('.card8');
card8.addEventListener( 'click', function() {
  card8.classList.toggle('is-flipped');
});

var card9 = document.querySelector('.card9');
card9.addEventListener( 'click', function() {
  card9.classList.toggle('is-flipped');
});

var card10 = document.querySelector('.card10');
card10.addEventListener( 'click', function() {
  card10.classList.toggle('is-flipped');
});

var card11 = document.querySelector('.card11');
card11.addEventListener( 'click', function() {
  card11.classList.toggle('is-flipped');
});

var card12 = document.querySelector('.card12');
card12.addEventListener( 'click', function() {
  card12.classList.toggle('is-flipped');
});

