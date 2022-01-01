const runAnimation=()=>{
let randomChoice=Math.floor(Math.random()*24);
illuminate(0,randomChoice);
}

const illuminate=(j,val)=>{

	
	for(let i=0;i < 6;i++){
		if(i!=j%6){
		document.querySelector('#dice'+i).style.opacity="1";	
		document.querySelector('#dice'+i).style.color="white";
		}
		else{
		document.querySelector('#dice'+i).style.opacity="1";
		document.querySelector('#dice'+i).style.color="black";
		}
	}
	
	// console.log("value:"+j);

	if(j<val) setTimeout(()=>{illuminate((j+1),val);},200);
	//if j==val tell game manager that val%6+1 has been chosen, and game manager will set the active players 'rolling' variable to false

}
// runAnimation();

function Player(name){
	this.name=name;
	this.turnScore=0;
	this.totalScore=0;
	this.active=false;
	this.rolling=false;
	this.timer=0;
	this.maxTime=5000;

	this.update=()=>{
		if(this.active && !this.rolling){
			this.timer+=deltaTime;
			if(this.timer > this.maxTime){
				this.timer=0;
				this.active=false;
				//inform gamemanager that i have quit
			}
		}
	}

	this.roll=()=>{
		if(this.rolling) return false;
		this.rolling=true;
	}

}

function GameManager(){
this.presentScreen=0;
this.screens=['startScreen','midScreen','endScreen'];
this.players=[];
this.goToNextScreen=()=>{
	this.presentScreen+=1;
	if(this.presentScreen >= this.screens.length) return;
	document.querySelector('#'+this.screens[this.presentScreen-1]).style.display="none";
	document.querySelector('#'+this.screens[this.presentScreen]).style.display="block";
}


this.populatePlayers=(players)=>{
	for(let player of players){
		this.players.push(new Player(player));
		//Each player can be made into an object
		//Each player either waits until its time has expired, or quits or throws and intimates result to the gameManager
		//If the player has won it initmates the same to the game manager and the game manager displays the popup 
		//gameManager then makes the player inactive and activates the next player
		//

	}
	
}


}

let gM=new GameManager();

function addPlayerInputs(n){
	if(parseInt(n) > 5){
		alert("more than 5 players not allowed");
		return;
	}
	document.querySelector('#middleBlock').innerHTML='';
	for(let i=0;i < n;i++){
		document.querySelector('#middleBlock').innerHTML+=`
		<div class="flexRow">
					<div class="labelx">Player${i+1}:</div>
					<input type="text" class="darkInput players" />
		</div>
		`;
	}
}

function populateEndScreenWithPlayers(players){
	for(let player of players){
		document.querySelector('#playerCardContainer').innerHTML+=`
		<div class="playerCard">
			<div class="avatarSpace">
				<div class="labelx">${player}</div>
			</div>
			<div class="flexRow">
				<div class="labelx">Turn Score:</div>
				<div class="labelx">2</div>
			</div>
			<div class="flexRow">
				<div class="labelx">Total Score:</div>
				<div class="labelx">20</div>
			</div>
			<div class="flexRow">
				<button class="diceButton">Throw</button>
				<button class="diceButton">Quit</button>
			</div>
		</div>
		`;
	}

}

function CheckPlayerInputs(){
	for(let i in document.getElementsByClassName('players'))
	{
		let pname=document.getElementsByClassName('players')[i].value;
		pname=pname.trim();
		if(!pname.match(/^[a-zA-Z]+\s*[a-zA-Z]+$/))
			{
			alert("Some player names are incomplete");
			break;
			}

	}
}


function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}


let fps=60;
var deltaTime=1000/fps;
var loop = function () 
				{										                    					
				console.log("code running");				
             	};
/*
window.addEventListener('load', 
						function () 
								{					 		
				  	     		setInterval(loop, deltaTime);					  		
								}
						);

*/