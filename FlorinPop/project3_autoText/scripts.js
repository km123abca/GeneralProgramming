

let words=['puppy','woman','catch','the','the','the','the','the',
          'last','is','a','was','came','to','and','or','not','were','it','them','they',
          'last','is','a','was','came','to','and','or','not','were','it','them','they',        
          'dodge','raccoon','emperor','queen','tree','hug','wall','sword','nasty','spell'
          ];
let index=0;
let text='';

function formAWord()
	{
	 text='';
	 let maxIndex=25;
	 for(let i=0;i<maxIndex;i++)
	 	{
	 		text+=' '+words[Math.floor(Math.random()*words.length)];
	 	}
	}
formAWord();
function writeText()
	{
	document.body.innerText=text.slice(0,index);
	index++;
	if(index > text.length)
		{
		index=0;
	    formAWord();

		}
	}
setInterval(writeText,100);