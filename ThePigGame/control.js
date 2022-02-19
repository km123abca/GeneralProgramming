const runAnimation=(ind)=>{
let randomChoice=Math.floor(Math.random()*24);
illuminate(0,randomChoice,ind);
}
let popUpVisible=false;
let maxTime=10000;
let nxtfn=()=>{
	popUpVisible=false;
	document.querySelector('#popUpWindow').style.visibility="hidden";
};
const illuminate=(j,val,ind)=>{

	
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

	if(j<val) setTimeout(()=>{illuminate((j+1),val,ind);},200);
	else if(j==val){
		gM.pointScored(val%6+1);
	}
	//if j==val tell game manager that val%6+1 has been chosen, and game manager will set the active players 'rolling' variable to false

}
// runAnimation();

function ShowPopup(txt){
 document.querySelector('#popUpWindow').style.visibility="visible";
 popUpVisible=true;
 document.querySelector('#puw__textSpace').innerHTML=txt; 
}

function Player(name,index){
	this.name=name;
	this.index=index;
	this.turnScore=0;
	this.totalScore=0;
	this.active=false;
	this.rolling=false;
	this.timer=0;
	this.maxTime=maxTime;

	this.activatePlayer=()=>{
		this.active=true;
	}
	this.deactivatePlayer=()=>{
		this.active=false;
	}

	this.update=()=>{
		if(this.active && !this.rolling){			
			this.timer+=deltaTime;
			DecrementTimer();
			if(this.timer > this.maxTime){
				ResetTimer();
				this.timer=0;
				this.active=false;
				this.turnScore=0;				
				updatePoints(this.turnScore,this.totalScore,this.index);
				deactivatePlayer(this.index);
				gM.quit(this.index);
			}
		}
	}

	this.throw=()=>{		
		if(this.rolling) return false;
		this.timer=0;
		ResetTimer();
		this.rolling=true;
		deactivatePlayer(this.index);
		runAnimation(this.index);
	}

	this.pointScored=(pt)=>{
		if(pt==6 || pt==5 ){
			ShowPopup(`Whoops!!!!! You scored a ${pt} your turn is over, your score in this round is 0, next is ${gM.NextPlayer()}'s turn`);
			this.totalScore-=this.turnScore;
			this.rolling=false;
			gM.quit(this.index);
			return;
		}
		ShowPopup('You have scored:'+pt+' pts');
		this.turnScore+=pt;
		this.totalScore+=pt;
		updatePoints(this.turnScore,this.totalScore,this.index);
		this.rolling=false;
		this.timer=0;
		activatePlayer(this.index);
	}
	this.quit=()=>{
		if(this.rolling) return false;	
		ShowPopup(`You have scored ${this.turnScore} pts in this round, next turn is ${gM.NextPlayer()}'s`);	
		this.active=false;
		this.timer=0;
		this.turnScore=0;		
		updatePoints(this.turnScore,this.totalScore,this.index);
		deactivatePlayer(this.index);
	}

}

function DecrementTimer(){
	let presentVal=parseInt(document.querySelector('#timerIndicator').innerHTML)*1000;
	presentVal-=deltaTime;
	document.querySelector('#timerIndicator').innerHTML=parseInt(presentVal/1000);
}
function ResetTimer(){
	document.querySelector('#timerIndicator').innerHTML=parseInt(maxTime/1000);
}

function GameManager(){
this.presentScreen=0;
this.screens=['startScreen','midScreen','endScreen'];
this.players=[];
this.activePlayer=0;
this.gameStarted=false;

this.update=()=>{
	if(!this.gameStarted) return;
	for(player of this.players) player.update();
}
this.startGame=()=>{
	if(!this.gameStarted) {
		alert("Game Started");
		document.querySelector('#timerIndicator').style.visibility='visible';
		document.querySelector('#timerIndicator').innerHTML=parseInt(maxTime/1000);
		this.gameStarted=true;
		this.players[this.activePlayer].activatePlayer();
		activatePlayer(this.activePlayer);
		
	}
}
this.NextPlayer=()=>{
	let n = this.activePlayer+1;
	if(n > this.players.length) n=0;
	return this.players[n].name;
}

this.activateNextPlayer=()=>{
	this.players[this.activePlayer].deactivatePlayer()
	this.activePlayer+=1;	
	if(this.activePlayer >= this.players.length) this.activePlayer=0;
	this.players[this.activePlayer].activatePlayer()
	activatePlayer(this.activePlayer);

}
this.goToNextScreen=()=>{
	this.presentScreen+=1;
	if(this.presentScreen >= this.screens.length) return;
	document.querySelector('#'+this.screens[this.presentScreen-1]).style.display="none";
	document.querySelector('#'+this.screens[this.presentScreen]).style.display="block";
}

this.throw=(i)=>{	
		if(i!=this.activePlayer) return;    
		this.players[i].throw();
	}
this.quit=(i)=>{
	if(i!=this.activePlayer) return;	
	ResetTimer();
	this.players[i].quit();
	this.activateNextPlayer();
}
this.pointScored=(pt)=>{	
	this.players[this.activePlayer].pointScored(pt);
}

this.populatePlayers=(players)=>{
	if(players.length==0){
		alert('There are no players here!!!');
		return;
	}
	for(let i in players){
		this.players.push(new Player(players[i],i));
		//Each player can be made into an object
		//Each player either waits until its time has expired, or quits or throws and intimates result to the gameManager
		//If the player has won it initmates the same to the game manager and the game manager displays the popup 
		//gameManager then makes the player inactive and activates the next player
	}	
	populateEndScreenWithPlayers(players);
	this.goToNextScreen();
}

}

let gM=new GameManager();

function addPlayerInputs(n){
	if(!n.match(/^[0-9]+$/)){
		alert("Type a number, mate!!!");
		return false;
	}
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
	for(let i in players){
		document.querySelector('#playerCardContainer').innerHTML+=`
		<div class="playerCard">
			<div class="avatarSpace">
				<div class="labelx">${players[i]}</div>
			</div>
			<div class="flexRow">
				<div class="labelx">Turn Score:</div>
				<div class="labelx" id="player${i}_turnscore">0</div>
			</div>
			<div class="flexRow">
				<div class="labelx">Total Score:</div>
				<div class="labelx" id="player${i}_totalscore">0</div>
			</div>
			<div class="flexRow">
				<button class="disabledDiceButton throwBtn" id="player${i}_throwButton" disabled>Throw</button>
				<button class="disabledDiceButton quitBtn" id="player${i}_quitButton" disabled>Quit</button>
			</div>
		</div>
		`;
	}

	for(let i in document.getElementsByClassName('throwBtn')){
		let elem1=document.getElementsByClassName('throwBtn')[i];
		let elem2=document.getElementsByClassName('quitBtn')[i];
		try{			
			elem1.addEventListener('click',()=>gM.throw(i));
			elem2.addEventListener('click',()=>gM.quit(i));

		}catch(err){
			console.log(err);
		}
	}


}


function StartGame(){
	
	gM.startGame();
	let btn=document.querySelector('#gameStartButton');
	
	btn.setAttribute('class','disabledDiceButton');
}
function updatePoints(turnScore,totalScore,ind){
	document.querySelector(`#player${ind}_turnscore`).innerHTML=turnScore;
	document.querySelector(`#player${ind}_totalscore`).innerHTML=totalScore;
}
function activatePlayer(i){	
	document.querySelector(`#player${i}_throwButton`).setAttribute('class','diceButton');
	document.querySelector(`#player${i}_quitButton`).setAttribute('class','diceButton');
	document.querySelector(`#player${i}_throwButton`).disabled=false;
	document.querySelector(`#player${i}_quitButton`).disabled=false;
}
function deactivatePlayer(i){
	document.querySelector(`#player${i}_throwButton`).setAttribute('class','disabledDiceButton');
	document.querySelector(`#player${i}_quitButton`).setAttribute('class','disabledDiceButton');
	document.querySelector(`#player${i}_throwButton`).disabled=true;
	document.querySelector(`#player${i}_quitButton`).disabled=true;
}

function deactivatePlayerThrow(i){
	document.querySelector(`#player${i}_throwButton`).setAttribute('class','disabledDiceButton');	
	document.querySelector(`#player${i}_throwButton`).disabled=true;		
}
function reactivatePlayerThrow(i){
	document.querySelector(`#player${i}_throwButton`).setAttribute('class','diceButton');	
	document.querySelector(`#player${i}_throwButton`).disabled=false;
}

function CheckPlayerInputs(){
	if(document.getElementsByClassName('players').length==0){
		alert("Game cant start without players");
		return false;
	}
	let players=[];
	for(let i in document.getElementsByClassName('players')){
		let pname=document.getElementsByClassName('players')[i].value;
		if(!pname) break;
		pname=pname.trim();		
		if(!pname.match(/^[a-zA-Z]+\s*[a-zA-Z]+$/)){
			alert("Some player names are incomplete");
			return false;
			}
		players.push(pname);
	}	
	gM.populatePlayers(players);
}


function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}


let fps=1;
var deltaTime=1000/fps;
var loop = function () 
				{										                    					
				console.log("code running");
				gM.update();				
             	};

window.addEventListener('load', 
						function () 
								{					 		
				  	     		setInterval(loop, deltaTime);					  		
								}
						);

