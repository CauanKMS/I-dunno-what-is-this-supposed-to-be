var btnSomething = document.getElementById("button_Something");

btnSomething.addEventListener("click", vaporWave);

function alertFunction(){
	alert("Nice")
}


function vaporWave(){
	var bodyStyle = document.body.style;

	bodyStyle.backgroundColor = "#f000f0";
	bodyStyle.fontFamily = "";

	btnSomething.style.backgroundColor = "#ffffff";


	alertFunction();
}



