

function calculateInsurance () {
	// defining html container for grabbing values
	var n = document.getElementById("name").value;
	
	var a = parseInt(document.getElementById("age").value);

	var c = document.getElementById("country").value;

	var hp = parseInt(document.getElementById("horsepower").value);
// if statement for different calculating methods based on Country
if (c=="austria"){
	cost = Math.round(hp*100/a+50);
	document.getElementById('result').innerHTML= n + " your insurance costs are " + cost + " €";
	} else if(c=="hungary"){
	cost= Math.round(hp*120/a+100);
	document.getElementById('result').innerHTML= n + " your insurance costs are " + cost + " €";		
	} else{
	cost = Math.round(hp*150/(a+3)+50);
	document.getElementById('result').innerHTML= n + " your insurance costs are " + cost + " €";
	} 
}

	
//adding eventlistener to button for executing Function calculateInsurance on click
document.getElementById("calculate").addEventListener("click",calculateInsurance,false);