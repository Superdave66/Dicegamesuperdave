function rungame(){ 
let namegenerated;
namegenerator();  //runs the game. note succescfull completion  of game is almost impossible first time going through 
acceptanceofdeal();
encounters();
}
function namegenerator(name){
	let array_character = [["Ted", "Jeffery", "Ed", "Jack"],[ "Amy", "faye", "Suzan", "Tillie"]];
	let gender  = prompt("type 0 for male type 1 for female ");
	let genderArray = array_character[gender];
	let i= rolldice(4) - 1;
	namegenerated = genderArray[i];{
		if (gender ===  ("1") ){
			console.log(namegenerated)
		}		
		else if(gender === ("0")){
			console.log(namegenerated) 	
		}
		else {
			prompt("you did not type 0 or 1 try again") , namegenerator()	
		}  //working on code for preventing misshaps with non 0 or 1 entered 
	}
	console.log(namegenerated)	
}

function rolldice(x){										//x= number of sides of dice being used with 0 and 1 of the sides 
	return Math.floor(Math.random() * x) + 1;
}	
 function acceptanceofdeal(accept){
	alert ("you can either attempt a adventure killing all of the bad guys " + namegenerated + ", or you can suffer being tortured beyond your imagination for the next century");
	let acceptance = prompt("will you accept the offer");{
		if 	(acceptance !== "yes"){
			alert ("enjoy your torture " + namegenerated + ".")
		}
		else{
			alert ("goood luck on your adventure" + namegenerated + ".")
		}
}
 function encounters(){
 	let failurerate =	rolldice(6);
 			if (failurerate === 1){
 				let success = rolldice(20);
 				let mercyresult
 				if (success <13){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") , 
 					mercyresult = godsmercy();
 					return mercyresult;
 					}			
 				
 					return true 
 				}
 			else if (failurerate === 2){
 				let success = rolldice(20);
 				if (success <14){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") , 
 					mercyresult = godsmercy();
 					return mercyresult;
 				}
 					return true 
 				}
 			else if (failurerate === 3){
 				 success = rolldice(20);
 				if (success <15){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") , 
 					mercyresult = godsmercy();
 					return mercyresult; 
 				}					
 					return true
 				}	 
 			else if (failurerate === 4){
 				    success = rolldice(20);
 				if (success <16){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") , 
 					mercyresult = godsmercy();
 					return mercyresult;
 				} 				
 					return true
				}
 			else if (failurerate === 5){
 					success = rolldice(20);
 				if (success <17){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") , 
 					mercyresult = godsmercy()
 					return mercyresult;
 				}
 					return true 
 				}
 			else (failurerate === 6)
 					success = rolldice(20);
 				if (success <19){
 					alert ("you have failed your encounter roll" + namegenerated + ". will the gods have mercy and grant you success anyways") ,   
 					mercyresult = godsmercy();
 					return mercyresult;
 					}
 					return true 
 					}
 }
 			
function godsmercy(){
	let granted = rolldice(100)
	if(granted >= 96){
		return true;

	}
	return false;
} 
rungame()