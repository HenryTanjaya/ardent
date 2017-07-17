




document.addEventListener("DOMContentLoaded", function() {

	/* Start element */
	var lastElementClicked;

	if ($(window).width() <= 768) {
		var winHei = $(window).height();
		$(".hero-slide").height(winHei-65);
	}

	if ($(window).width() > 992) {
		scrollAnim();
	}
	if ($(window).width() <= 1250) {
		menuMobile();
	}
	scrollSlow();
	slider();
	selectorCoursesDetail();
	selectorSliderGroup();
	videoModal();
	formFunc();
	moreDetailsModal();
	map();
	startPage();
	if ($(".barba-container").attr("data-namespace") == "mag") {
		swiperGallery();
		var magHeight = $(".top-mag .image .col-50-inner").height();
		$(".bg-top-mag").height(magHeight);
	}
	//if (($(".barba-container").attr("data-namespace") == "home") || ($(".barba-container").attr("data-namespace") == "mag")){
		videoPlayer();
	//}
	
	$(window).resize(function() {
		calculateVideoPlayerSize();
	});

	Barba.Pjax.init();
	Barba.Prefetch.init();
	
	Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
	    if ($(window).width() <= 768) {
			var winHei = $(window).height();
			$(".hero-slide").height(winHei-65);
		}
	    if ($(window).width() > 992) {
			scrollAnim();
		}
		if ($(window).width() <= 1250) {
			menuMobile();
		}
		scrollSlow();
	    slider();
	    selectorCoursesDetail();
	    selectorSliderGroup();
	    videoModal();
	    formFunc();
	    moreDetailsModal();
	    map();
	    if ($(".barba-container").attr("data-namespace") == "mag") {
			swiperGallery();
			var magHeight = $(".top-mag .image .col-50-inner").height();
			$(".bg-top-mag").height(magHeight);
		}
		//if (($(".barba-container").attr("data-namespace") == "home") || ($(".barba-container").attr("data-namespace") == "mag")){
			videoPlayer();
		//}
	});

	Barba.Dispatcher.on('linkClicked', function(el) {
		lastElementClicked = el;
	});

	var PageTransition = Barba.BaseTransition.extend({

		start: function() {
			this.originalThumb = lastElementClicked;

			Promise
			.all([this.newContainerLoading, this.fadeOut()])
			.then(this.fadeIn.bind(this));
		},

		fadeOut: function() {
			var deferred = Barba.Utils.deferred();
			var $elOld = $(this.oldContainer);

			TweenMax.fromTo($(".loader"), 0.7, {css: {y:"100%"}, ease:Power2.easeInOut}, {css:{y:"0%"}, ease:Power2.easeInOut} );
			TweenMax.to($(".menu"), 0.3, {css:{y: "-100%"}, ease:Power2.easeInOut});

			TweenLite.to($elOld, 0.8, {
		        top: "-=300px",
		        ease:Power2.easeInOut,
		        onComplete: function() {
		          deferred.resolve();
		        }
		    });

		    return deferred.promise;
		},

		fadeIn: function() {

			TweenMax.set(window, {
				scrollTo : { y: 0 }						
			});

			$("body").removeClass("overflow_hidden");
			
			var _this = this;
		    var $el = $(this.newContainer);

		    $(this.oldContainer).hide();

		   /* $el.css({
		      visibility : 'visible',
		      opacity : 1,
		      top: "+=300px"
		    });*/

		    
		    /*$el.animate({ opacity: 1 }, 200, function() {
		    	_this.done();
		    })*/
		    
		    
			/*var complete = function (){
		    	TweenMax.set($loader,{clearProps:"all"});
		    }*/


		   	TweenMax.fromTo($(".loader"), 0.6, {css: {y:"0%"}, ease:Power2.easeInOut}, {css:{y:"-100%"}, ease:Power2.easeInOut}, 0.3);
		   	TweenMax.fromTo($(".menu"), 0.2, 
		   		{css: {top:"+=70px"}, ease:Power2.easeInOut}, 
		   		{css:{top:"0px"}, ease:Power2.easeInOut}
		   	);

			/*tlEntry = new TimelineMax({onComplete:complete});
			tlEntry
				.to($loader, 1, {y:"0%", ease:Power2.easeInOut})
				.to($loader, 0.8, {y:"-100%", ease:Power2.easeInOut}, "+=0.5")
				.to($el, 0.2, {opacity:1, top:"0px", ease:Power2.easeInOut}, "+=0.2");
			tlEntry.play();*/

			_this.done();
		},

		getNewPageFile: function() {
			return Barba.HistoryManager.currentStatus().url.split('/').pop();
		}

	});

	Barba.Pjax.getTransition = function() {
		return PageTransition;
	};


	/* Home View */
	var Home = Barba.BaseView.extend({
	  namespace: 'home',
	  onEnter: function() {
	  	/*TweenLite.from($(".home-bg"), 1.3, 
          {y: "70%", ease:Power2.easeInOut});*/
	  	TweenLite.from($(".hero-slide"), 1.3, 
          {y: "70%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".hero-slide h1 span.span-outer"), 0.3, 
          {borderWidth: 0, opacity: 0, delay:1, ease:Power2.easeInOut});
	  	TweenLite.from($(".hero-slide h1 span.span-inner"), 0.7, 
          {marginTop: "+105px", delay:1, ease:Power2.easeInOut});
	  	TweenLite.from($(".hero-slide .video-trigger"), 0.7, 
          {y: "70%", opacity: 0, delay:1, ease:Power2.easeInOut});
	  	TweenLite.from($(".hero-slide .scroll"), 0.7, 
          {y: "70%", opacity: 0, delay:1, ease:Power2.easeInOut});
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Home.init();


	/* About View */
	var About = Barba.BaseView.extend({
	  namespace: 'about',
	  onEnter: function() {
	  	TweenLite.from($(".bg-top-about"), 1.3, 
          {y: "70%", ease:Power2.easeInOut});
	  	TweenLite.from($(".top-about .image"), 1.3, 
          {y: "100%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-about h1 span.span-inner"), 0.7, 
          {marginTop: "+105px", delay:1, ease:Power2.easeInOut});
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	About.init();


	/* Mag View */
	var Mag = Barba.BaseView.extend({
	  namespace: 'mag',
	  onEnter: function() {
	  	TweenLite.from($(".bg-top-mag"), 1.2, 
          {y: "80%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-mag .image"), 1.2, 
          {y: "50%", delay:0.4, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-mag h1 span.span-inner"), 0.7, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-mag p"), 0.7, 
          {y: "30%", opacity: 0, delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-mag h4"), 0.7, 
          {y: "150%", opacity: 0, delay:0.9, ease:Power2.easeInOut});
	  	},
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Mag.init();


	/* Courses View */
	var Courses = Barba.BaseView.extend({
	  namespace: 'courses',
	  onEnter: function() {
	  	TweenLite.from($(".top-courses .image"), 1.3, 
          {y: "80%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-courses-info .bg"), 1.3, 
          {y: "50%", delay:0.4, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-courses .link-prev-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-courses .link-next-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-courses-title h1 span.span-inner"), 0.65, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-courses .top-courses-year"), 0.65, 
          {y: "100%", delay:0.9, ease:Power2.easeInOut});
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Courses.init();
	

	/* Masterclasses View */
	var Masterclasses = Barba.BaseView.extend({
	  namespace: 'masterclasses',
	  onEnter: function() {
	  	TweenLite.from($(".top-masterclasses .image"), 1.3, 
          {y: "80%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-masterclasses-info .bg"), 1.3, 
          {y: "50%", delay:0.4, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-masterclasses .link-prev-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-masterclasses .link-next-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-masterclasses-title h1 span.span-inner"), 0.65, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-masterclasses .top-courses-year"), 0.65, 
          {y: "100%", delay:0.9, ease:Power2.easeInOut});
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Masterclasses.init();


	/* Workshops View */
	var Workshops = Barba.BaseView.extend({
	  namespace: 'workshops',
	  onEnter: function() {
	  	TweenLite.from($(".top-workshops .image"), 1.3, 
          {y: "80%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-workshops-info .bg"), 1.3, 
          {y: "50%", delay:0.4, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-workshops .link-prev-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-workshops .link-next-courses"), 1, 
          {y: "100%", delay:0.6, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-workshops-title h1 span.span-inner"), 0.65, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".top-workshops .top-courses-year"), 0.65, 
          {y: "100%", delay:0.9, ease:Power2.easeInOut});
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Workshops.init();


	/* Journal View */
	var Journal = Barba.BaseView.extend({
	  namespace: 'journal',
	  onEnter: function() {
	  	TweenLite.from($(".big-journal .bg"), 1.1, 
          {y: "80%", delay:0.1, ease:Power2.easeInOut});
	  	TweenLite.from($(".big-journal .image"), 1.1, 
          {y: "80%", delay:0.3, ease:Power2.easeInOut});
	  	TweenLite.from($(".big-journal .cont h1 span.span-inner"), 0.7, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	TweenLite.from($(".big-journal .cont p"), 0.7, 
          {y: "20%", opacity: 0, delay:0.9, ease:Power2.easeInOut});
        //tl.play();
	  },
	  onEnterCompleted: function() {
        
	  },
	  onLeave: function() {
        //tl.reverse();
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Journal.init();


	/* Contact View */
	var Contact = Barba.BaseView.extend({
	  namespace: 'contact',
	  onEnter: function() {
	  	TweenLite.from($(".contact-1 .image"), 1.3, 
          {y: "80%", delay:0.2, ease:Power2.easeInOut});
	  	TweenLite.from($(".contact-2"), 1.3, 
          {y: "30%", delay:0.4, ease:Power2.easeInOut});
	  	TweenLite.from($(".contact-1 .title h1 span.span-inner"), 0.7, 
          {marginTop: "+105px", delay:0.9, ease:Power2.easeInOut});
	  	/*TweenLite.from($("footer"), 0.3, 
          {opacity: 0, delay:3.5, ease:Power2.easeInOut});*/
	  },
	  onEnterCompleted: function() {
	  },
	  onLeave: function() {
	  },
	  onLeaveCompleted: function() {
	  }
	});
	Contact.init();


	/* Function Start */
	function startPage(){
		TweenMax.set(window, {
			scrollTo : { y: 0 }						
		});

	    var $el = $(".barba-container");
	    var $loader = $(".loader");
	    var $loaderw = $(".loader-white");
	    var $loadert = $(".loader-title");

	    $el.css({
	      visibility : 'visible',
	      top: "+=200px"
	    });

		tlEntry = new TimelineMax();
		tlEntry
			.to($loader, 0.8, {y:"0%", ease:Power2.easeInOut})
			.to($loader, 0.8, {y:"-100%", ease:Power2.easeInOut}, "+=0.1")
			.set($loader, {y:"100%"})
			.to($loader, 0.8, {y:"0%", ease:Power2.easeInOut})
			.to($loader, 0.8, {y:"-100%", ease:Power2.easeInOut}, "+=0.1")
			.to($loadert, 0.3, {opacity: 0, ease:Power2.easeInOut}, "-=0.2")
			.to($loaderw, 0.8, {y:"-100%", ease:Power2.easeInOut}, "-=0.1")
			.to($el, 0.7, {top:"0px", ease:Power2.easeInOut}, "-=0.7")
			.to($loadert, 0.1, {css: {display: "none"}})
			.to($loaderw, 0.1, {css: {display: "none"}});
		tlEntry.play();
	}	


	/* Scroll Slow */
	function scrollSlow(){
		var $window = $(window);
		var scrollTime = 1.3;
		var scrollDistance = 200;

		$window.on("mousewheel DOMMouseScroll", function(event){

			event.preventDefault();	

			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);

			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Expo.easeOut,
					overwrite: 5							
				});

		});
	}

	/* Function scrollAnim */
	function scrollAnim(){
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.menu').outerHeight();

		$(window).scroll(function(){
			var elementScroll = $('[data-parallax]');
	        var scroll = window.scrollY;  
	        scrollHandler(scroll);

	        didScroll = true;

			/*
			if ($(window).scrollTop() > 250) {
				$(".menu").addClass("opacity0");
				$(".logo").addClass("opacity0");
			}
			else if ($(window).scrollTop() <= 250){
				$(".menu").removeClass("opacity0");
				$(".menu").addClass("bg");
				$(".logo").removeClass("opacity0");
			}*/
	        
	        function scrollHandler(scroll) {
				var scroll = scroll;

			    $(elementScroll).each(function(){
				    var el = $(this);
				    var elH = el.outerHeight();
			        var coefficent = el.attr('data-parallax'); 
			        var translateDelta = (window.outerHeight - elH) / 2;
			        //var offsetTop = (el.offset().top - translateDelta);
			        var offsetTop = el.offset().top - $(window).scrollTop();
			        var translateY = offsetTop * -coefficent/5;

			        TweenLite.to(el, 1.5, {
			        	y: translateY
			        });

			    });
			}
	    })

		if ($(window).width() > 1200) {
		    setInterval(function() {
			    if (didScroll) {
			        hasScrolled();
			        didScroll = false;
			    }
			}, 250);
		}
        
        function hasScrolled() {
		    var st = $(this).scrollTop();
		    if (st >= 30) {
			    // Make sure they scroll more than delta
			    if(Math.abs(lastScrollTop - st) <= delta)
			        return;
			    
			    if (st > lastScrollTop && st > navbarHeight){
			        // Scroll Down
			        $('.menu').addClass('nav-down').removeClass('nav-up');
			    } else {
			        // Scroll Up
			        if(st + $(window).height() < $(document).height()) {
			            setTimeout(function(){
					        $('.menu').removeClass('nav-down').addClass('nav-up');
					    }, 30);
			        }
			    }
			    lastScrollTop = st;
		    }

		    else{
		    	$('.menu').removeClass('nav-up').removeClass('nav-down');
		    }

		    /*if ($(window).scrollTop() <= 200) {
		    	$('.menu').removeClass('nav-up').removeClass('nav-down');
		    }*/
		    
		    
		}
	}

	/* Function Slider Photos */
	function slider(){

		// Class for divider
		$(".selector-prev")
			.mouseenter(function() {
			    $(".selector-divider").addClass("prev");
			})
			.mouseleave(function() {
				$(".selector-divider").removeClass("prev");
			});
		$(".selector-next")
			.mouseenter(function() {
			    $(".selector-divider").addClass("next");
			})
			.mouseleave(function() {
				$(".selector-divider").removeClass("next");
			});

		if ($(window).width() > 992) {
			$(".slider-h").each(function() {
		      var $slides = $(this).find(".image-single");
		      var $slides_inner = $(this).find(".image-single-inner");
		      var currentIdSlide = 0;

		      TweenLite.set($slides.filter(":gt(0)"), {left:"57vw"});  
		      TweenLite.set($slides_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"-57vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide < $slides.length - 1) {
		          currentIdSlide++;
		        }
		        else {
		          currentIdSlide = 0;
		        }

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "57vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"57vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide > 0) {
		          currentIdSlide--;
		        }
		        else {
		          currentIdSlide = $slides.length - 1;
		        }

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "-57vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });
		    });
		    $(".slider-v").each(function() {
		      var $slides_v = $(this).find(".image-single");
		      var $slides_v_inner = $(this).find(".image-single-inner");
		      var currentIdSlide_v = 0;

		      TweenLite.set($slides_v.filter(":gt(0)"), {left:"42vw"});  
		      TweenLite.set($slides_v_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		        TweenLite.to($slides_v.eq(currentIdSlide_v), 1, {left:"-42vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide_v < $slides_v.length - 1) {
		          currentIdSlide_v++;
		        }
		        else {
		          currentIdSlide_v = 0;
		        }

		        TweenLite.fromTo( $slides_v.eq(currentIdSlide_v), 1, 
		          {left: "42vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		        TweenLite.to($slides_v.eq(currentIdSlide_v), 1, {left:"42vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide_v > 0) {
		          currentIdSlide_v--;
		        }
		        else {
		          currentIdSlide_v = $slides_v.length - 1;
		        }

		        TweenLite.fromTo( $slides_v.eq(currentIdSlide_v), 1, 
		          {left: "-42vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });
		    });
		    $(".slider-summer").each(function() {
		      var $names = $(this).find(".name-teacher-summer");
		      var $slides = $(this).find(".image-single");
		      var $slides_inner = $(this).find(".image-single-inner");
		      var currentIdSlide = 0;

		      TweenLite.set($names.filter(":gt(0)"), {opacity:"0"}); 

		      TweenLite.set($slides.filter(":gt(0)"), {left:"80vw"});  
		      TweenLite.set($slides_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		        TweenLite.to($names.eq(currentIdSlide), 0.6, {opacity:"0", ease:Power2.easeInOut} );
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"-80vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide < $slides.length - 1) {
		          currentIdSlide++;
		        }
		        else {
		          currentIdSlide = 0;
		        }

		        TweenLite.fromTo( $names.eq(currentIdSlide), 0.6, 
		          {opacity: "0", ease:Power2.easeInOut}, 
		          {opacity: "1", ease:Power2.easeInOut} );

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "80vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		      	TweenLite.to($names.eq(currentIdSlide), 0.6, {opacity:"0", ease:Power2.easeInOut} );
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"80vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide > 0) {
		          currentIdSlide--;
		        }
		        else {
		          currentIdSlide = $slides.length - 1;
		        }

		        TweenLite.fromTo( $names.eq(currentIdSlide), 0.6, 
		          {opacity: "0", ease:Power2.easeInOut}, 
		          {opacity: "1", ease:Power2.easeInOut} );

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "-80vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"120% 120%", ease:Power2.easeInOut} );
		      });
		    });
		}
	    if ($(window).width() <= 992) {
			$(".slider-h").each(function() {
		      var $slides = $(this).find(".image-single");
		      var $slides_inner = $(this).find(".image-single-inner");
		      var currentIdSlide = 0;

		      TweenLite.set($slides.filter(":gt(0)"), {left:"85vw"});  
		      TweenLite.set($slides_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"-85vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide < $slides.length - 1) {
		          currentIdSlide++;
		        }
		        else {
		          currentIdSlide = 0;
		        }

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "85vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"85vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide > 0) {
		          currentIdSlide--;
		        }
		        else {
		          currentIdSlide = $slides.length - 1;
		        }

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "-85vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });
		    });
		    $(".slider-v").each(function() {
		      var $slides_v = $(this).find(".image-single");
		      var $slides_v_inner = $(this).find(".image-single-inner");
		      var currentIdSlide_v = 0;

		      TweenLite.set($slides_v.filter(":gt(0)"), {left:"50vw"});  
		      TweenLite.set($slides_v_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		        TweenLite.to($slides_v.eq(currentIdSlide_v), 1, {left:"-50vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide_v < $slides_v.length - 1) {
		          currentIdSlide_v++;
		        }
		        else {
		          currentIdSlide_v = 0;
		        }

		        TweenLite.fromTo( $slides_v.eq(currentIdSlide_v), 1, 
		          {left: "50vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		        TweenLite.to($slides_v.eq(currentIdSlide_v), 1, {left:"50vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide_v > 0) {
		          currentIdSlide_v--;
		        }
		        else {
		          currentIdSlide_v = $slides_v.length - 1;
		        }

		        TweenLite.fromTo( $slides_v.eq(currentIdSlide_v), 1, 
		          {left: "-50vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_v_inner.eq(currentIdSlide_v), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });
		    });
		    $(".slider-summer").each(function() {
		      var $names = $(this).find(".name-teacher-summer");
		      var $slides = $(this).find(".image-single");
		      var $slides_inner = $(this).find(".image-single-inner");
		      var currentIdSlide = 0;

		      TweenLite.set($names.filter(":gt(0)"), {opacity:"0"});

		      TweenLite.set($slides.filter(":gt(0)"), {left:"94vw"});  
		      TweenLite.set($slides_inner.filter(":gt(0)"), {backgroundSize:"100% 100%"});  

		      $(this).find('.selector-next').click(function(){
		      	TweenLite.to($names.eq(currentIdSlide), 0.6, {opacity:"0", ease:Power2.easeInOut} );
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"-94vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide < $slides.length - 1) {
		          currentIdSlide++;
		        }
		        else {
		          currentIdSlide = 0;
		        }

		        TweenLite.fromTo( $names.eq(currentIdSlide), 0.6, 
		          {opacity: "0", ease:Power2.easeInOut}, 
		          {opacity: "1", ease:Power2.easeInOut} );

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "94vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });

		      $(this).find('.selector-prev').click(function(){
		      	TweenLite.to($names.eq(currentIdSlide), 0.6, {opacity:"0", ease:Power2.easeInOut} );
		        TweenLite.to($slides.eq(currentIdSlide), 1, {left:"94vw", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut}, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut} );

		        if (currentIdSlide > 0) {
		          currentIdSlide--;
		        }
		        else {
		          currentIdSlide = $slides.length - 1;
		        }

		        TweenLite.fromTo( $names.eq(currentIdSlide), 0.6, 
		          {opacity: "0", ease:Power2.easeInOut}, 
		          {opacity: "1", ease:Power2.easeInOut} );

		        TweenLite.fromTo( $slides.eq(currentIdSlide), 1, 
		          {left: "-94vw", ease:Power2.easeInOut}, 
		          {left: "0px", ease:Power2.easeInOut} );
		        TweenLite.fromTo( $slides_inner.eq(currentIdSlide), 1.2, 
		          {backgroundSize:"100% 100%", ease:Power2.easeInOut}, 
		          {backgroundSize:"110% 110%", ease:Power2.easeInOut} );
		      });
		    });
		}

		if ($(window).width() > 768) {
		    $(".slider-video").each(function() {
		      var $slides = $(this).find(".image-single");
		      var $slides_inner = $(this).find(".image-single-inner");
		      var currentIdSlide = 1;

		      $('.selector-video').mouseenter(function(){
		      	var currentIdSlide = $(this).attr("id");
		      	$(".selector-video").removeClass("active");
		      	$(this).addClass("active");
		      	$(".slider-video .image-single").fadeOut(200);
		      	$(".slider-video #video-"+currentIdSlide).fadeIn(200);
		      });
		    });
	    }
	}

	/* Function Courses Details*/
	function selectorCoursesDetail(){
		//if ($(window).width() > 767) {
			$(".desc-text-teacher").each(function() {
		      var bioHeight = $(this).children(".biography-teacher").height();
		      $(this).height(bioHeight);
		    });
		//}

	    $(".teacher-trigger").click(function(){
	      var idActive = $(this).attr("id");
	      var descCont = $(this).parent().siblings(".desc-text-teacher").attr("id");

	      $(this).siblings(".teacher-trigger").removeClass("active");
	      $(this).addClass("active");

	      TweenLite.to( $("#" + descCont).children(), 0.4, 
	          {y: 40, opacity: 0, ease:Power2.easeInOut} );
	      

	      setTimeout(function(){
	      	$("#" + descCont).children().css("display", "none");
	        TweenLite.fromTo( $("#" + descCont + " ." + idActive), 0.4, 
	          {y: 40, opacity: 0, ease:Power2.easeInOut}, 
	          {y: 0, opacity: 1, ease:Power2.easeInOut} );
	        $("#" + descCont + " ." + idActive).css("display", "block");
	      }, 350);

	    });
	}

	/* Function Courses Details*/
	function selectorSliderGroup(){
	    $(".selector-slider-single").click(function(){
	      var idActiveGroup = $(this).attr("id");
	      $(".selector-slider-single").removeClass("active");
	      $(this).addClass("active");
	      $(".slider-group").removeClass("active");
	      $(".calendar").removeClass("active");
	      $("." + idActiveGroup).addClass("active");
	    });
	    $(".selector-single").hover(function(){
	    	var idActiveSingle = $(this).attr("id");
	    	$(this).siblings(".selector-single").removeClass("active");
	    	$(this).addClass("active");
	    	$(this).parent().siblings(".slider").find(".image-single").removeClass("active");
	    	$(this).parent().siblings(".date-group").find(".single-date").removeClass("active");
	      	$("." + idActiveSingle).addClass("active");
	    });
	}

	/* Function Video Modal*/
	function videoModal(){
	    $(".video-trigger").click(function(){
	    	$("body").addClass("overflow_hidden");
	    	if ($(window).width() > 1200) {
		    	TweenLite.to($(".menu"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    }
		    else if ($(window).width() <= 1200) {
		    	TweenLite.to($(".menu-mobile-trigger"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu-mobile-trigger"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    	TweenLite.to($(".menu"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    }
	      	var idModal = $(this).attr("id");
	      	TweenLite.to($("." + idModal), 0.9, 
	        	{top: 0, ease:Power2.easeInOut});
	      	TweenLite.to($("." + idModal + " .close-video"), 0.7, 
	        	{marginTop: "0px", opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	      	setTimeout(function(){
				var vid = document.getElementById("videoVimeo");
	    		vid.play();
			}, 750);
	    });

	    $(".close-video").click(function(){
	    	var vid = document.getElementById("videoVimeo");
	    	vid.pause();
	    	$("body").removeClass("overflow_hidden");
	    	var idModalClose = $(this).attr("id");
	      	TweenLite.to($("." + idModalClose + " .close-video"), 0.5, 
	        	{marginTop: "30px", opacity: 0, ease:Power2.easeInOut});
      		TweenLite.to($("." + idModalClose), 0.7, 
        		{top: "110%", delay:0.4, ease:Power2.easeInOut} );
      		if ($(window).width() > 1200) {
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    }
		    else if ($(window).width() <= 1200) {
		    	TweenLite.to($(".menu-mobile-trigger"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu-mobile-trigger"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    }
	    	
	     });
	}


	/* Function More Details Modal*/
	function moreDetailsModal(){
	    $(".more-details").click(function(){
	    	$("body").addClass("overflow_hidden");
	    	if ($(window).width() > 1200) {
		    	TweenLite.to($(".menu"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    }
		    else if ($(window).width() <= 1200) {
		    	TweenLite.to($(".menu-mobile-trigger"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu-mobile-trigger"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    	TweenLite.to($(".menu"), 0.8, 
		        	{opacity: 0, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"none"}, delay:0.7});
		    }
	      	var idModal = $(this).attr("id");
	      	TweenLite.to($("." + idModal), 0.9, 
	        	{top: 0, ease:Power2.easeInOut});
	      	TweenLite.to($("." + idModal + " .more-details-modal-inner"), 0.7, 
	        	{bottom: "50px", opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	      	TweenLite.to($("." + idModal + " .close-modal"), 0.7, 
	        	{marginTop: "0px", opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	    });

	    $(".close-modal").click(function(){
	    	$("body").removeClass("overflow_hidden");
	    	var idModalClose = $(this).attr("id");
	    	TweenLite.to($("." + idModalClose + " .more-details-modal-inner"), 0.5, 
	        	{bottom: "0px", opacity: 0,  ease:Power2.easeInOut});
      		TweenLite.to($("." + idModalClose + " .close-modal"), 0.5, 
	        	{marginTop: "30px", opacity: 0, ease:Power2.easeInOut});
      		TweenLite.to($("." + idModalClose), 0.7, 
        		{top: "110%", delay:0.4, ease:Power2.easeInOut} );
      		if ($(window).width() > 1200) {
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    }
		    else if ($(window).width() <= 1200) {
		    	TweenLite.to($(".menu-mobile-trigger"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu-mobile-trigger"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    	TweenLite.to($(".menu"), 0.1, 
		        	{css:{display:"block"}, delay:0.5});
		    	TweenLite.to($(".menu"), 0.3, 
		        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
		    }
	     });	    	
	}

	/* Function Form */
	function formFunc() {
		var formContHeight = $("#ajax-contact").height();
		$("#ajax-contact").height(formContHeight);

		// Get the form.
		$('.form-ajax').submit(function(event) {
			var formId = $(this).attr("id");
		    var formMessages = $('#' + formId +' #form-messages');
		    event.preventDefault();

		    var formData = $('#' + formId).serialize();

			$.ajax({
			    type: 'POST',
			    url: $('#' + formId).attr('action'),
			    data: formData
			})
			.done(function(response) {
			    // Make sure that the formMessages div has the 'success' class.
			    $(formMessages).removeClass('alert-danger');
			    $(formMessages).addClass('alert-success');

			    // Set the message text.
			    $(formMessages).text('Grazie, il tuo messaggio Ã¨ stato inviato correttamente.');
			    $('#' + formId + ' #form_content').hide();
		        $(formMessages).show();

			    // Clear the form.
			    $('#' + formId + ' #name').val('');
			    $('#' + formId + ' #email').val('');
			    $('#' + formId + ' #message').val('');
			    $('#' + formId + ' #object').val('');
			})
			.fail(function(data) {
			    // Make sure that the formMessages div has the 'error' class.
			    $(formMessages).removeClass('alert-success');
			    $(formMessages).addClass('alert-danger');

			    // Clear the form.
			    $('#' + formId + ' #name').val('');
			    $('#' + formId + ' #email').val('');
			    $('#' + formId + ' #message').val('');
			    $('#' + formId + ' #object').val('');

			    // Set the message text.
			    $(formMessages).text('Si Ã¨ verificato un errore, il messaggio non Ã¨ stato inviato. Riprova.');
			    $(formMessages).show();
			});
		});
	}

	/* Function Map */
	function map() {
	  $("#map").click(function(){
	  	var url = "https://www.google.it/maps/place/Orsolina28/@45.0469038,8.2562012,17z/data=!3m1!4b1!4m5!3m4!1s0x4787bf1a9bbcf3b5:0x7d01355effbce94b!8m2!3d45.0469038!4d8.2583952";
	  	window.open(url);
	  });
  	}

  	/* Function SwiperGallery */
	function swiperGallery() {
		if ($(window).width() > 767) {
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 4,
		        spaceBetween: 30,
		        grabCursor: true
		    });
		}
		else if ($(window).width() <= 767) {
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 2,
		        spaceBetween: 10,
		        grabCursor: true
		    });
		}
		
	}

  	/* Function Menu Mobile */
	function menuMobile() {
	  	$(".menu-mobile-trigger").click(function(){
	  		TweenLite.to($(".menu-mobile-trigger"), 0.8, 
	        	{opacity: 0, ease:Power2.easeInOut} );
	    	TweenLite.to($(".menu-mobile-trigger"), 0.1, 
	        	{css:{display:"none"}, delay:0.7});
	    	$("body").addClass("overflow_hidden");
	      	TweenLite.to($(".menu-mobile-modal"), 0.9, 
	        	{top: 0, ease:Power2.easeInOut});
	      	TweenLite.to($(".menu-mobile-modal .menu-mobile-modal-inner"), 0.7, 
	        	{marginTop: "-180px", opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	      	TweenLite.to($(".menu-mobile-modal .close-modal"), 0.7, 
	        	{marginTop: "0px", opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	    });

	    $(".menu-mobile-modal .close-modal").click(function(){
	    	$("body").removeClass("overflow_hidden");
      		TweenLite.to($(".menu-mobile-modal .menu-mobile-modal-inner"), 0.5, 
	        	{marginTop: "-130px", opacity: 0,  ease:Power2.easeInOut});
	      	TweenLite.to($(".menu-mobile-modal .close-modal"), 0.5, 
	        	{marginTop: "40px", opacity: 0, ease:Power2.easeInOut});
      		TweenLite.to($(".menu-mobile-modal"), 0.7, 
        		{top: "110%", delay:0.4, ease:Power2.easeInOut} );
      		TweenLite.to($(".menu-mobile-trigger"), 0.1, 
	        	{css:{display:"block"}, delay:0.5});
	    	TweenLite.to($(".menu-mobile-trigger"), 0.3, 
	        	{opacity: 1, delay:0.6, ease:Power2.easeInOut} );
	    });

	    $(".menu-mobile-modal .menu-mobile-modal-inner ul li a").click(function(){
	    	$("body").removeClass("overflow_hidden");
	    });
  	}

  	/* Function videoPlayer */
	function videoPlayer() {
	  	var instances = plyr.setup({
		    debug: false
		});

	  calculateVideoPlayerSize();

	  function get(selector) {
	    return document.querySelector(selector);
	  }

	  function on(element, type, callback) {
	    if (!(element instanceof HTMLElement)) {
	      element = get(element);
	    }
	    if (element != null) {
	    	element.addEventListener(type, callback, false);
	    };
	  }

	  if(instances){

		  instances.forEach(function(instance) {
		    on('.js-play', 'click', function() { 
		      instance.play();
		    });
		    on('.js-pause', 'click', function() { 
		      instance.pause();
		    });
		    /*on('.js-stop', 'click', function() { 
		      instance.stop();
		    });
		    on('.js-rewind', 'click', function() { 
		      instance.rewind();
		    });
		    on('.js-forward', 'click', function() { 
		      instance.forward();
		    });*/
		  });
	  }

	  else{
	  	return;
	  }
	}
	
	function calculateVideoPlayerSize() {
		
		var winHeight = $(window).height();
		var winWidth = ($(window).width() * 0.8);
		var winAspectRatio = winWidth/winWidth;
		var videoAspectRatio = 1.78;

		if(winAspectRatio > videoAspectRatio) {
		  
		  // la finestra Ã¨ piÃ¹ larga del video
		  var vidWidth = winHeight*1.78;
		  $(".video-inner").width(vidWidth-100);
		  
		}
		else {
		  
		  // la finestra Ã¨ piÃ¹ stretta del video
		  var vidHeight = winWidth/1.78;
		  $(".video-inner").height(vidHeight);
		  var marginTop = (winHeight - vidHeight) / 2; 
		  $(".video-inner").css({
			"top": marginTop  
		  });
		}
	}


});

