//jQuery
/*
BASIC SYNTAX
	document.querySelector/All 			= 			$()
	document.querySelector/All.action 	= 			$().click
	this 								= 			$(this)
	document.querySelector.value 		= 			$().val()
	.style 								= 			.css()
	.style.fontWeight = "bold" 			= 			.css("font-weight", bold)
	.innerHTML 							= 			.html()
	.innerHTML 							= 			html("new value")
	.style.display = "none" 			= 			.hide()
	.style.display = "block" 			= 			.show()


*/

const player = {
	character : $("#player"),
	playerPos: 0
}

const ai1 = {
	character : $("#ai1"),
	aiPos: 0
}

const ai2 = {
	character : $("#ai2"),
	aiPos: 0
}

const ai3 = {
	character : $("#ai3"),
	aiPos: 0
}

const ai4 = {
	character : $("#ai4"),
	aiPos: 0
}

let playerPosition = 0;
let ai1Position = 0;
let ai2Position = 0;
let ai3Position = 0;
let ai4Position = 0;
let finishLine = 1150;
// let finishLine = 111150;

// move player
player.character.click(function(){
	$(this).animate({
		"left" : (playerPosition += 100) + "px" 
	})

	player.playerPos = playerPosition;
	if(playerPosition > finishLine)
	{
	 winner(0);	
	}
	
})

// player.character.keyup(function(){
// 	console.log("enter")
// 	$(this).animate({
// 		"left" : (playerPosition += 100) + "px" 
// 	})

// 	player.playerPos = playerPosition;
// 	if(playerPosition > finishLine)
// 	{
// 	 winner(0);	
// 	}
	
// })

// const result = () =>{
// 	if(player.playerPos === 800)
// 	{
// 		alert("player won!")
// 		return true;
// 	}

// 	if(ai.aiPos === 800)
// 	{
// 		alert("ai won!")
// 		return true;
// 	}
// }
let hasWinner = false;
function winner(winner){
	if(!hasWinner)
	{
		switch(winner){
			case 0:
				alert("PIKA! PIKA!");
				hasWinner = true;
			break;
			case 1:
				alert("Mai Shiranui: Victory is mine!");
				hasWinner = true;
			break;
			case 2:
				alert("I AM BATMAN!");
				hasWinner = true;
			break;
			case 3:
				alert("Chibi: EASY even with handicap");
				hasWinner = true;
			break;
			case 4:
				alert("AWOOOO!!");
				hasWinner = true;
			break;
		}
	}
	location.reload(true);

}

let randWinner;
let aiWinner = 0;
function randWinnerFunc(speed)
{
	randWinner = Math.floor((Math.random() * 10));
	// randWinner = 10;
	console.log(randWinner);
	if(randWinner < 2)
	{
		//make AI1 win
		aiMove1(20 + speed);
		aiMove2(15 + speed);
		aiMove3(10 + speed);
		aiMove4(5 + speed);
		aiWinner = 1;

	}
	else if(randWinner < 5)
	{
		//make AI2 win
		aiMove1(10 + speed);
		aiMove2(20 + speed);
		aiMove3(15 + speed);
		aiMove4(5 + speed);
		aiWinner = 2;
	}
	else if(randWinner < 8)
	{
		//make AI3 win
		aiMove1(5 + speed);
		aiMove2(15 + speed);
		aiMove3(20 + speed);
		aiMove4(10 + speed);
		aiWinner = 3;
	}
	else
	{
		//make AI4 win
		aiMove1(15 + speed);
		aiMove2(5 + speed);
		aiMove3(10 + speed);
		aiMove4(20 + speed);
		aiWinner = 4;
	}

	
}



$("#btn1").click(function(){
	randWinnerFunc(20);
	setTimeout(() => winner(aiWinner), 11800)
		
})

$("#btn2").click(function(){
	randWinnerFunc(50);
	setTimeout(() => winner(aiWinner), 6900)

		
})

$("#btn3").click(function(){
	randWinnerFunc(80);
	setTimeout(() => winner(aiWinner), 4800)

		
})
function aiMove1(speed){

	while(ai1.aiPos < finishLine)
	{

		ai1.character.animate({
			"left" : (ai1Position += speed) + "px"

		})
		ai1.aiPos = ai1Position;

	}
}

function aiMove2(speed){

	while(ai2.aiPos < finishLine)
	{

		ai2.character.animate({
			"left" : (ai2Position += speed) + "px"

		})
		ai2.aiPos = ai2Position;

	}
}

function aiMove3(speed){

	while(ai3.aiPos < finishLine)
	{

		ai3.character.animate({
			"left" : (ai3Position += speed) + "px"

		})
		ai3.aiPos = ai3Position;

	}
}

function aiMove4(speed){

	while(ai4.aiPos < finishLine)
	{

		ai4.character.animate({
			"left" : (ai4Position += speed) + "px"

		})
		ai4.aiPos = ai4Position;

	}
}

// const ai1Move = (speed) =>{
// 	// console.log()
// 	if(ai1.aiPos < 800)
// 	{
// 		ai.character.animate({
// 		"left" : (ai1Position += speed) + "px"
// 		})	
		
// 	}
// 	else
// 	{
// 		return true;
// 	}
// 	ai1.aiPos = aiPosition;
// 	result()
// 	setTimeout(() => aiMove(speed), 500)
// }
