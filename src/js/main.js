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


