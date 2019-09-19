function rungame(){ 
let namegenerated;
namegenerator();   
acceptanceofdeal();
let encountersresult = encounters();

if (encountersresult === true){
	survivethenight()
		if (survivethenight() === true){rewards();
	}
		else {alert ("you have died during the night try again")
		rungame()}	
}
else {alert ("you have died on this encounter try again")
	rungame()}

}
function namegenerator(name){
	let array_character = [["Ted", "Jeffery", "Ed", "Jack"],[ "Amy", "faye", "Suzan", "Tillie"]];
	let gender  = prompt("type 0 for male type 1 for female ");
	let genderArray = array_character[gender];
	let i= rolldice(4) - 1;
	namegenerated = genderArray[i];
		if (gender ===  ("1") ){
			console.log(namegenerated)
		}		
		else if(gender === ("0")){
			console.log(namegenerated) 	
		}
		else {
			prompt("you did not type 0 or 1 try again") , namegenerator()	
		} 
	
	console.log(namegenerated)	
}

function rolldice(x){										
	return Math.floor(Math.random() * x) + 1;
}	
 function acceptanceofdeal(accept){
	alert ("you can either attempt a adventure killing all of the bad guys " + namegenerated + ", or you can suffer being tortured beyond your imagination for the next century");
	let acceptance = prompt("will you accept the offer");
		if 	(acceptance == ("yes")){
			alert ("good luck on your adventure" + namegenerated + ".") 
		}
		else{
			alert ("enjoy your torture " + namegenerated + "."); rungame();
		}
}
 function encounters(){
 	let failurerate =	rolldice(6);
 			if (failurerate === 1){
 				let success = rolldice(20);
 				let mercyresult
 				if (success <13){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways"); 
 					mercyresult = godsmercy();
 					return mercyresult;
 					}			
 				
 					return true 
 				}
 			else if (failurerate === 2){
 				let success = rolldice(20);
 				if (success <14){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways"); 
 					mercyresult = godsmercy();
 					return mercyresult;
 				}
 					return true 
 				}
 			else if (failurerate === 3){
 				 let success = rolldice(20);
 				if (success <15){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways"); 
 					mercyresult = godsmercy();
 					return mercyresult; 
 				}					
 					return true
 				}	 
 			else if (failurerate === 4){
 				let success = rolldice(20);
 				if (success <16){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways"); 
 					mercyresult = godsmercy();
 					return mercyresult;
 				} 				
 					return true
				}
 			else if (failurerate === 5){
 				let success = rolldice(20);
 				if (success <17){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways");
 					mercyresult = godsmercy()
 					return mercyresult;
 				}
 					return true 
 				}
 			else{
 				let	success = rolldice(20);
 				if (success <19){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways");   
 					mercyresult = godsmercy();
 					return mercyresult;
 					}

 					return true 
 					
 				}
 }
 function godsmercy(){
	let granted = rolldice(100)
	if(granted >=96){
		return true;

	}
	return false;
}
function survivethenight(){
	let recovery = rolldice(10);
	let mercyresult
	if(recovery <7){ alert ("you have failed to survive the night" + namegenerated + ". will the gods have mercy and grant you success anyways");
	mercyresult = godsmercy();
	return mercyresult
}
	return true 
}
function rewards(){
let reward = rolldice(3);
let mercyresult
	if (reward === 1){
		alert ("your reward is a swift painless death " + namegenerated + "");
		mercyresult = godsmercy()
			if (mercyresult === true){ alert ("the gods must want you to live. now you must marry my daughter and will eventually become the future ruller of this world")
				}
			else {
				alert(namegenerated + "had there head cut off ");
				rungame()
			}
	}
	else if (reward === 2){
		alert ("you will marry my daughter" + namegenerated + " and will one day become the future ruller of the world");
			}
	else{
		alert (" i have decided to let " + namegenerated + "go and live a happy live in this new world. however if" + namegenerated + "  to kill anyone else they will be killed themselfs.");
		
	}	
} 	
rungame();