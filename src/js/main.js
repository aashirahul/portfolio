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

function submitForm(){
	var senderEmail = $("#email").val();
	var senderMessage = $("#mess").val();

	$.ajax({
		type:'POST',
		url:"https://doorbell.io/api/applications/5189/submit",
		data:{
			email: senderEmail,
			message: senderMessage,
			key: '3tLcZ8oZ8vd4UMO4ZVkDZrv6NzINLPIGC8PwN19h0AJV5lLzBwsZm8VSZuZmVHDv'
		},
		dataType:'text',
		success: function() { alert("Save Complete") }

	});

}

$("#submit").click(submitForm);

