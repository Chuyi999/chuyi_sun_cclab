function changeImage()
{
	element=document.getElementById('image')
	if (element.src.match("pinkheart"))
 	{
  		element.src="img/heart.png";
  	}
	else
   {
  		element.src="img/pinkheart.png";
   }
}

function mOver(obj){
	obj.innerHTML="..."
}
function mOut(obj){
	obj.innerHTML="I am watching you."
}


document.addEventListener("DOMContentLoaded", function(){

  var myColors = ["#23cfe5", "#e8184a", "#f98ca6"];
  var seconds = 0;
  var state = 0;

  var div1 = document.getElementById("div1");

  var myDivs = [document.getElementById("div1"),document.getElementById("div2"),document.getElementById("div3")];
  var containerDiv = document.getElementsByClassName("container");
  myDivs[0].style.backgroundColor = myColors[0];


function timer(){
  setInterval(function(){
    seconds +=1;
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

timer();


});
