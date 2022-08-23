/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stops animations/transitions until the page has ...

		// ... loaded.
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-preload');
				}, 100);
			});

		// ... stopped resizing.
			var resizeTimeout;

			$window.on('resize', function() {

				// Mark as resizing.
					$body.addClass('is-resizing');

				// Unmark after delay.
					clearTimeout(resizeTimeout);

					resizeTimeout = setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

			});

	// Fixes.

		// Object fit images.
			if (!browser.canUse('object-fit')
			||	browser.name == 'safari')
				$('.image.object').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Hide original image.
						$img.css('opacity', '0');

					// Set background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
							.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

				});

	// Sidebar.
		var $sidebar = $('#sidebar'),
			$sidebar_inner = $sidebar.children('.inner');

		// Inactive by default on <= large.
			breakpoints.on('<=large', function() {
				$sidebar.addClass('inactive');
			});

			breakpoints.on('>large', function() {
				$sidebar.removeClass('inactive');
			});

		// Hack: Workaround for Chrome/Android scrollbar position bug.
			if (browser.os == 'android'
			&&	browser.name == 'chrome')
				$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
					.appendTo($head);

		// Toggle.
			$('<a href="#sidebar" class="toggle">Toggle</a>')
				.appendTo($sidebar)
				.on('click', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Toggle.
						$sidebar.toggleClass('inactive');

				});

		// Events.

			// Link clicks.
				$sidebar.on('click', 'a', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Vars.
						var $a = $(this),
							href = $a.attr('href'),
							target = $a.attr('target');

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Check URL.
						if (!href || href == '#' || href == '')
							return;

					// Hide sidebar.
						$sidebar.addClass('inactive');

					// Redirect to href.
						setTimeout(function() {

							if (target == '_blank')
								window.open(href);
							else
								window.location.href = href;

						}, 500);

				});

			// Prevent certain events inside the panel from bubbling.
				$sidebar.on('click touchend touchstart touchmove', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Prevent propagation.
						event.stopPropagation();

				});

			// Hide panel on body click/tap.
				$body.on('click touchend', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Deactivate.
						$sidebar.addClass('inactive');

				});

		// Scroll lock.
		// Note: If you do anything to change the height of the sidebar's content, be sure to
		// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

			$window.on('load.sidebar-lock', function() {

				var sh, wh, st;

				// Reset scroll position to 0 if it's 1.
					if ($window.scrollTop() == 1)
						$window.scrollTop(0);

				$window
					.on('scroll.sidebar-lock', function() {

						var x, y;

						// <=large? Bail.
							if (breakpoints.active('<=large')) {

								$sidebar_inner
									.data('locked', 0)
									.css('position', '')
									.css('top', '');

								return;

							}

						// Calculate positions.
							x = Math.max(sh - wh, 0);
							y = Math.max(0, $window.scrollTop() - x);

						// Lock/unlock.
							if ($sidebar_inner.data('locked') == 1) {

								if (y <= 0)
									$sidebar_inner
										.data('locked', 0)
										.css('position', '')
										.css('top', '');
								else
									$sidebar_inner
										.css('top', -1 * x);

							}
							else {

								if (y > 0)
									$sidebar_inner
										.data('locked', 1)
										.css('position', 'fixed')
										.css('top', -1 * x);

							}

					})
					.on('resize.sidebar-lock', function() {

						// Calculate heights.
							wh = $window.height();
							sh = $sidebar_inner.outerHeight() + 30;

						// Trigger scroll.
							$window.trigger('scroll.sidebar-lock');

					})
					.trigger('resize.sidebar-lock');

				});

	// Menu.
		var $menu = $('#menu'),
			$menu_openers = $menu.children('ul').find('.opener');

		// Openers.
			$menu_openers.each(function() {

				var $this = $(this);

				$this.on('click', function(event) {

					// Prevent default.
						event.preventDefault();

					// Toggle.
						$menu_openers.not($this).removeClass('active');
						$this.toggleClass('active');

					// Trigger resize (sidebar lock).
						$window.triggerHandler('resize.sidebar-lock');

				});

			});

})(jQuery);

	
let leaves;


    const getSeason = d => Math.floor((d.getMonth() / 12 * 4)) % 4
    console.log('Northern hemisphere (Winter as Dec/Jan/Feb etc...):')
    const currentSeason = ['Winter', 'Spring', 'Summer', 'Autumn'][getSeason(new Date())]
    var falling = true;
    TweenLite.set("#container",{perspective:600})
    function R(min,max) {return min+Math.random()*(max-min)};
    var container = document.getElementById("container"),	w = window.outerWidth , h = window.outerHeight;
    function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };
    let total, pageContent
    //This Loads the seasons to make the right environment
    switch(currentSeason){
        case "Winter" : (()=>{
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
total = 100;
        })(); break;
        case "Summer" : (()=>{
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
total = 100;
        })(); break;
        case "Autumn" : (()=>{
total = 50;
pageContent = document.getElementById("wrapper")
		

leaves["fall"] = ()=>{
        

 function LeavesAnimm(elm){   
   TweenMax.to(elm,R(5,40),{y:h*3,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,0),z:R(-200,200)});
   container.insertBefore(Div,pageContent);
   LeavesAnimm(Div);
 }
    }

   
leaves["stop"] =  ()=>{
	document.querySelectorAll(".dot").forEach(x=>x.parentElement.removeChild(x))
    }
        })(); break;
 case "Spring" : (()=>{
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
total = 100;
        })(); break;
    }
    


let change = ()=> {
    console.log(currentSeason)
	if(document.querySelector("body.change")){
	    switch(currentSeason){
        case "Winter" : snowStorm.toggleSnow(); break;
        case "Summer" : snowStorm.toggleSnow(); break;
        case "Autumn" : leaves.stop(); break;
        case "Spring" : snowStorm.toggleSnow(); break;
    }
		
	    document.querySelector("[onclick='change()']").classList = "icon fa-moon change"
	    document.querySelector('[href="index2.html"]').href="index.html"
	    if(document.querySelector('[href="aboutme2.html"]')){
	    document.querySelector('[href="aboutme2.html"]').href="aboutme.html"
	    }
	}else{
	    switch(currentSeason){
        case "Winter" : snowStorm.toggleSnow(); break;
        case "Summer" : snowStorm.toggleSnow(); break;
        case "Autumn" : leaves.fall(); break;
        case "Spring" : snowStorm.toggleSnow(); break;
    }
	    
	    document.querySelector("[onclick='change()']").classList = "icon fa-sun"
	    document.querySelector('[href="index.html"]').href="index2.html"
	    if(document.querySelector('[href="aboutme.html"]')){
	    document.querySelector('[href="aboutme.html"]').href="aboutme2.html"
	    }
	}
	document.querySelector("#sidebar").classList.toggle("change")
	document.querySelector("#search.alt").classList.toggle("change")
	document.querySelector("body").classList.toggle("change")
	document.querySelectorAll("h1").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("h2").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("h3").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("h4").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("h5").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("h6").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("b").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("strong").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("ul.icons li .icon").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("ul.contact a").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("a.button").forEach(x=>x.classList.toggle("change"))
	document.querySelectorAll("p.copyright em").forEach(x=>x.classList.toggle("change"))
 
}
