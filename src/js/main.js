import $ from 'jquery';

function intropage(){
	var reqdSection = particleground(document.getElementById("intro-section"),{
    dotColor: '#16a085',
    lineColor: '#16a085'
		
	});
	

}
intropage();
var timeoutId;
var timeoutID;
var timeoutid;

$(document).ready(function appearGreeting(){
    $("#message").addClass('greetingAnimation-i')
}());
//appearGreeting();

function displayGreeting() {
  timeoutID = window.setTimeout(removeGreeting, 2000);
}

function removeGreeting(){
	$("#message").addClass('greetingAnimation-ii')
};
//displayGreeting();
 

function displayName(){
	timeoutid = window.setTimeout(addName,2000);
}
function addName(){
	$(".introduction").addClass('introAnimation')
};


displayName();