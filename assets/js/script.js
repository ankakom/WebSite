
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const logo = document.querySelector('.logo');
const codeblock = document.querySelector('.codeblock');


const tl = new TimelineMax();

tl.fromTo(slider, 1.5, {x:"-100%"}, {x: '0%', ease: Power2.easeInOut})
  .fromTo(codeblock, 1.2, {x:"100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
  .fromTo(headline, 0.5, {opacity:0, x: 80}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(logo, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=1");

jQuery(document).ready(function($) {
	$('.home_social__toggle').on('click',function(event) {
		$('.home_social__list').toggleClass('active');
		$(this).toggleClass('active');
	});

	$(".tab_nav").on('click',  function(event) {
		//event.preventDefault();
		var targetLink = $(this).attr('href');
		$(targetLink).siblings().removeClass('active');
		setTimeout(function(){
			$(targetLink).siblings('.site_content').hide();
			$(targetLink).css('display','flex');
			setTimeout(function(){
				$(targetLink).addClass('active');
			},500)
		},1000);
		
	});
	if(window.location.hash){
	    //var currentTabLink = '#'+window.location.hash.substr(1);
	    //currentTabLink = $('a[href="'+currentTab+'"]');
	    var currentTab = $('#'+window.location.hash.substr(1))
	    console.log(currentTab)

		currentTab.addClass('active');
		currentTab.css('display', 'flex');
		currentTab.siblings('.site_content').hide();
		

	  };
	  var showText = function (target, message, index, interval) {   
		  if (index < message.length) {
		    jQuery(target).append(message[index++]);
		    setTimeout(function () { showText(target, message, index, interval); }, interval);
		  }
		}
	  function firstText(){
	  	setTimeout(function(){
		  	 $('.edu1').html('<span class="str" ></span>');
		  	 showText(".edu1 span", "Kingsborough Community College, Brooklyn, NY", 0, 100);
		  	 setTimeout(function(){
		  	 	$('.edu2').html('<span class="str" ></span>');
			  	 showText(".edu2 span", "Computer Science", 0, 100);   
			  },5000);
		  	 setTimeout(function(){
		  	 	$('.edu3').html('<span class="str" ></span>');
			  	 showText(".edu3 span", "Associate of Science", 0, 100);   
			  },7000);
		  	 setTimeout(function(){
		  	 	$('.edu4').html('<span class="str" ></span>');
			  	 showText(".edu4 span", "December 2017", 0, 100);   
			  },9500);
		  },4000);
	  }
	  function secondText(){
	  	setTimeout(function(){
		  	 $('.edu1').html('<span class="str" ></span>');
		  	 showText(".edu1 span", "CUNY Brooklyn College , Brooklyn, NY", 0, 100);
		  	 setTimeout(function(){
		  	 	$('.edu2').html('<span class="str" ></span>');
			  	 showText(".edu2 span", "Computer Science", 0, 100);   
			  },5000);
		  	 setTimeout(function(){
		  	 	$('.edu3').html('<span class="str" ></span>');
			  	 showText(".edu3 span", "Bachelor of Science", 0, 100);   
			  },7000);
		  	 setTimeout(function(){
		  	 	$('.edu4').html('<span class="str" ></span>');
			  	 showText(".edu4 span", "December 2019", 0, 100);   
			  },9500);
		  },4000);
	  }
	  var textChangeCount = 2;
	  firstText();
	  setInterval(function(){
	  	textChangeCount++
	  	if (textChangeCount %2 != 0) {
	  		firstText()
	  	} else {
	  		secondText();
	  	}
	  },14000)
});



