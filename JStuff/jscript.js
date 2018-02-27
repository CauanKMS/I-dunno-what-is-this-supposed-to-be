var btnSomething = document.getElementById("button_Something");

btnSomething.addEventListener("click", vaporWave);

function alertFunction(){
	alert("Nice");
}

function vaporWave(){
	var bodyStyle = document.body.style;
	var btnSomethingStyle = btnSomething.style;

    	//var audio = new Audio('files/macintoshplus.mp3');
    	//audio.play();

	bodyStyle.backgroundColor = "#f000f0";
	bodyStyle.fontFamily = "VCR";

	btnSomethingStyle.backgroundColor = "#ffffff";
	btnSomethingStyle.fontFamily = "VCR";

	//alertFunction();
}
