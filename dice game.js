function rungame(){ 
let namegenerated;
namegenerator();  //runs the game. note succescfull completion  of game is almost impossible first time going through 
acceptanceofdeal();
}
function namegenerator(name){
	let array_character = [["Ted", "Jeffery", "Ed", "Jack"],[ "Amy", "faye", "Suzan", "Tillie"]];
	let gender  = prompt("type 0 for male type 1 for female ");
	let genderArray = array_character[gender];
	let i= rolldice(4) - 1;
	namegenerated = genderArray[i];{
		// if (prompt =  1 ){
		// 	console.log(namegenerated)
		// }		
		// else if(prompt = 0){
		// 	console.log(namegenerated) 	
		// }
		// else {
		// 	prompt("you did not type 0 or 1 try again") , namegenerator()	
		// }  working on code for preventing misshaps with non 0 or 1 entered 
	}
	console.log(namegenerated)	
}

function rolldice(x){										//x= number of sides of dice being used with 0 and 1 of the sides 
	return Math.floor(Math.random() * x) + 1;
}	
 function acceptanceofdeal(accept){
	alert ("you can either attempt a adventure killing all of the bad guys " + namegenerated + ", or you can suffer being tortured beyond your imagination for the next century");
	let acceptance = prompt("will you accept the offer");{
		if (
			acceptance != ("yes")) 
			alert ("enjoy your torture" + namegenerated".")
		else(
			alert ("goood luck on your adventure" + namegenerated"."))
}
 	
}
rungame()
