document.addEventListener("DOMContentLoaded", function(){

	var myColors = ["#B2FFE9", "#B2BFFC", "#F26969"];
	var seconds = 0;
	var state = 0;
	var rotateAngle = 0;

	var div1 = document.getElementById("div1");

	var myDivs = [document.getElementById("div1"),document.getElementById("div2"),document.getElementById("div3")];
	var containerDiv = document.getElementsByClassName("container");

	// console.log(div1);
	myDivs[0].style.backgroundColor = myColors[0];


function timer(){
	setInterval(function(){
		seconds +=1;
		// console.log("state: " + state);
		state = seconds%myColors.length;
		rotateAngle = seconds * 90;
		colorSwap();
		rotation(containerDiv[0]);

	},1000);
}

function colorSwap(){

	myDivs[0].style.backgroundColor = myColors[state%3];
	myDivs[1].style.backgroundColor = myColors[(state+1)%3];
	myDivs[2].style.backgroundColor = myColors[(state+2)%3];

	for(var i=0; i < myColors.length; i ++){

	}
}

function rotation(myContainer){
	myContainer.style.transform = "rotate(" + rotateAngle + "deg)";
}

timer();


});