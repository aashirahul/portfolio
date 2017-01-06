import $ from 'jquery';

function intropage(){
	var reqdSection = particleground(document.getElementById("intro-section"),{
    dotColor: '#ccc',
    lineColor: '#ccc'
		
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



function displayName(){
	//timeoutid = window.setTimeout(addName,2000);
}
function addName(){
	$(".introduction").addClass('introAnimation')
};


displayName();
function disappearGreeting() {
  //timeoutID = window.setTimeout(removeGreeting, 1000);
  window.setTimeout(animation2, 3000);
}

function animation2() {
	$(".introduction").addClass('introAnimation');
	$("#message").addClass('greetingAnimation-ii');
}

function removeGreeting(){
	$("#message").addClass('greetingAnimation-ii')
};
disappearGreeting();
