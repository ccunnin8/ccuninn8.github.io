$(document).foundation();
$(document).ready(function(){

$(".slider").slick({dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  mobileFirst: true,
  arrows: false,
  responsive: [{
  	breakpoint: 1020,
  	settings: {
  		arrows: true
  	}
  }]
});

});