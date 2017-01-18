import $ from 'jquery';

function intropage(){
	var reqdSection = particleground(document.getElementById("intro-section"),{
    dotColor: '#FFFFFF',
    lineColor: '#FFFFFF'
		
	});
	

}
intropage();
var timeoutId;
var timeoutID;
var timeoutid;

$(document).ready(function appearGreeting(){
    $("#message").addClass('greetingAnimation-i')
}());

function disappearGreeting() {
  window.setTimeout(animation2, 3000);
}

function animation2() {
	$(".introduction").addClass('introAnimation');
	$("#message").addClass('greetingAnimation-ii');
}

disappearGreeting();

$(".bullet").click(function(event){	
	$(".bullet").removeClass("selected");
	$(this).addClass("selected");
})

$(document).ready(function(){

	$(window).scroll(function(){
		var windowHeight = $(window).height();
		var docTop = $(window).scrollTop();

		processVisible(windowHeight, docTop, $("#intro-section"), $("#introBullet"));
		processVisible(windowHeight, docTop, $("#about-section"), $("#aboutBullet"));
		processVisible(windowHeight, docTop, $("#skills-section"), $("#skillsBullet"));
		processVisible(windowHeight, docTop, $("#work-section"), $("#workBullet"));
		processVisible(windowHeight, docTop, $("#contact-section"), $("#contactBullet"));
	})
})

function processVisible(windowHeight, docTop, sectionElement, bulletElement) {
	var aboutElemOffset = sectionElement.offset().top;
	var aboutDocView = windowHeight+docTop-aboutElemOffset;
	if(aboutDocView>0 && (aboutDocView <= sectionElement.height())){
		bulletElement.addClass("selected");
	} else {
		bulletElement.removeClass("selected");
	}
}
