const fs=require("fs");
let dummy={"name":"kitchu"};

errHandler=(err)=>
				  {
				  	if(err)
				  		console.log("error");
				  	else
				  		console.log("successful");
				  };


var removeChar=(line,charx)=>{
	while(line.indexOf(charx)!=-1) line=line.replace(charx,'');
	return line;
}

var justify = function(str, len) {
  let lines=[];
  let t=0;
  while(str.length > 0)
  {
  	t+=1;
  	if(t> 100000) break;
  	lines.push(str.slice(0,len));
  	str=str.slice(len,str.length);
  }
  console.log(JSON.stringify(lines));
  for(let i in lines)
  {
  	if(i==lines.length-1)
  	{
  		break;
  	}
  	lines[i]=lines[i].trim();
  	// console.log('operating on :'+lines[i]);  	
  	let n=lines[i].replace(/[\s]+/g,'').length;
  	// console.log('done');
  	let wordArray=lines[i].replace(/[\s]+/g,' ').split(' ');
  	// console.log(` at i=${i}, wordArray=${JSON.stringify(wordArray)}`);
  	let numWords=wordArray.length;
  	let emptySpaces=lines[i].length-n;
  	let fixedSpaces=parseInt(emptySpaces/(numWords-1));
  	let addedSpaces=emptySpaces%(numWords-1); 
  	// console.log(`At i=${i}, fixedSpaces=${fixedSpaces} and addedSpaces=${addedSpaces}`);
  	let result=''; 	
  	for(let j=0;j< wordArray.length-1;j++)
  		{
  			result+=wordArray[j]+Array(fixedSpaces).fill(0).reduce((x,y)=>x+=' ','')+(addedSpaces>0?' ':'');
  			addedSpaces--;
  		}
  	result+=wordArray[wordArray.length-1];
  	lines[i]=result;
  }
  return lines.join('\n');
};

// fs.writeFile("./datum.json",JSON.stringify(dummy),errHandler);
let prevResults={};


// fs.writeFile("./datum.json",JSON.stringify(formatDuration(parseInt(process.argv[2]))),errHandler);
// fs.appendFile("./datum.json","\n"+JSON.stringify(decomposeo(parseInt(process.argv[2]))),errHandler);




function formatDuration (seconds) {
  let titles=['second','minute','hour','day','year'];
  let div=[60,60,24,365]
  let vals=[],i=0;
  while(seconds > 0)
  {
  	vals.push(seconds%div[i]);
  	seconds=parseInt(seconds/div[i]);
  	i+=1;
  }
  // vals.push(seconds);
  return vals;
}

function decompose(n)
	{
        res=sosquares3(n*n,n-1);        
		return res;
	}
function sosquares3(n,m)
	{
		if(prevResults[n+':'+m])
			return prevResults[n+':'+m];
		msq=m*m;
		let sumT=0;
		let brkFlg=true;
		for(let i=m;i>=1;i--)
			{
			sumT+=i*i;
			if(sumT >= n)
				{
				brkFlg=false; 
				break;
				}
			}
		if(brkFlg) 
			{
			// console.log(`received ${n},${m} returning nothing since tgt unacheivable`);
			return "nothing";		
			}
		if(msq==n) 
			{
			// console.log(`received ${n},${m} returning ${[m]}`);
			// console.log("hiya");
			return [m];
			}		
		let leftSequences="nothing";
		if(msq < n) 
			{			
			leftSequences=sosquares3(n-msq,m-1);	
			if(leftSequences!="nothing")
				{
				leftSequences.push(m);
				prevResults[n+':'+m]=leftSequences;
				return leftSequences;				
				
				// return [m,...leftSequences];
				}		
			}
		// console.log("right with "+n+" "+(m-1));
		rightSequences=sosquares3(n,m-1);
		prevResults[n+':'+m]=rightSequences;
		return rightSequences;		
	}

//String.prototype.charCodeAt()
//String.fromCharCode()
//Buffer.from('Hello World!').toString('base64')
//Buffer.from(b64Encoded, 'base64').toString()
function simpleHash(word, salt, iterations) {
  arrayedSalt=salt.split('');
  saltedWord=word.split('').map((x,ind)=>x+(ind < arrayedSalt.length?arrayedSalt[ind]:'') ).join('')+salt.substr(word.length,salt.length-word.length);
  i=0;
  saltedWordArray=saltedWord.split('');
  for(i=0;i< iterations;i++)
  saltedWordArray=saltedWordArray.map((x,ind)=>
  													 {
  													 	indplus=ind==saltedWordArray.length-1?0:ind+1;
  													 	z=saltedWordArray[ind].charCodeAt(0)+saltedWordArray[indplus].charCodeAt(0);
  													 	z-=32;
  													 	while(z > 95) z-=96;
  													 	z+=32;
  													 	return String.fromCharCode(z);
  													 	// return z+"#";
  													 }	  											
			  										
  										   );
  return Buffer.from(saltedWordArray.join('')).toString('base64');
}
function simpleHash_clever(word, salt, iterations) {
  var l=Math.min(word.length, salt.length);
  var q=[...[...Array(l)].map((_,i)=>word[i]+salt[i]).join('')+word.slice(l)+salt.slice(l)].map(c=>c.charCodeAt());
  for (let i=0; i<iterations; i++) q=q.map((n,i,a)=>n+a[(i+1)%a.length]).map(c=>c<128?c:32+(c-32)%96);
  return Buffer.from(q).toString('base64');
}

//msided die until n is reached
function stopAt(m,n) {
  let tot=0;
  let maxTimes=93111230;
  for(i=0;i<maxTimes;i++){
  	tot+=RunOnce(m,n);
  }
  tot/=maxTimes;
  return tot+'';
}

function RunOnce(m,n){
	let res=-1;
	let sum=0;
	while(res!=1){
		res=Math.floor(Math.random()*m)+1;
		if(sum >=n) break;
		if(res != 1){
			sum+=res;
		}
		else {
			sum=0;
		}
	}
	return sum;
}

function find4Number(x,n=Math.floor(Math.sqrt(x)),times=4){
	if(x<=0) return [];
	while(n>=1){
		if(times==1){
			if(x==n*n) return [n];
		}else{
		let interResult=find4Number(x-n*n,n,times-1);	
		if (interResult.length !=0) return [n,...interResult];
		}		
		n-=1;
	}
	return [];
}

function find4Numberalter(n, k = 4, t = ''){

  let s = Math.floor(Math.sqrt(n));

  if (k === 1)
    return s > 0 && s * s === n ? [ s ] : false;

  for (let i = s; i > 0; i--) {

    let next = find4Number(n - i * i, k - 1, t + "  ");
    
    if (next)
      return [ i, ...next ];
  
  }
 
}

IterativeRotationCipher={
	encode:function(n,strval){
		let strval_copy=strval;
		arr=strval.split(/[\s]+/).sort((a,b)=>-1);
		strr=arr.map((x,ind)=> ind!=arr.length-1?arr[ind+1]:arr[0]).sort((a,b)=>-1).join('');
		return strr;
	},
	decode:function(strval){
		return strval;
	}
}


handleReadText=(err,data)=>{
	if(err)
		console.log("error while attempting to read");
	else
		{
		// data=data.replace(/[\s]+/g,' ').split(' ').join('\n');
		// data=justify(data,10);	
		// data=simpleHash("hi","salt",2);
		// data=stopAt(6,20);
		// data=JSON.stringify(find4Number(99));
		data=JSON.stringify(IterativeRotationCipher.encode(3,"my man ramos"));
		fs.writeFile("./datum.json",data,errHandler);
		}
}
readFromFile=()=>{
	fs.readFile('input.txt','utf8',handleReadText);
}
readFromFile();
/*

function decomposeo(n)
	{
		res=sosquares(n*n);
		// res=sosquares2(n**2,n-1);
		if(res=="nothing") return "nothing";
		res=res.filter(x=>x.length!=1);
		if(res.length==0) return "nothing";
		offset=1;
		while(res.length > 1)
			{
				largest=res.reduce((lgst,x)=>x[x.length-offset]>lgst?x[x.length-offset]:lgst,-1);
				res=res.filter(x=>x[x.length-offset]==largest);
				offset+=1;
				if(offset>10) break;
			}
		return res;
	}

function decompose(n)
	{
		// res=sosquares(n*n);
		res=sosquares2(n**2,n-1);
		// console.log(JSON.stringify(res));
		if(res=="nothing") return "nothing";
		res=res.filter(x=>x.length!=1);
		if(res.length==0) return "nothing";
		offset=0;
		while(res.length > 1)
			{
				largest=res.reduce((lgst,x)=>x[offset]>lgst?x[offset]:lgst,-1);
				res=res.filter(x=>x[offset]==largest);
				offset+=1;
				if(offset>10) break;
			}
		return res;
	}
let prevResults={};
function decompose_new(n)
	{
        res=sosquares3(n*n,n-1);
        if(res!="nothing")
        	prevResults[n]=res;
		return res;
	}
function sosquares3(n,m)
	{
		msq=m*m;
		let sumT=0;
		let brkFlg=true;
		for(let i=m;i>=1;i--)
			{
			sumT+=i*i;
			if(sumT >= n)
				{
				brkFlg=false; 
				break;
				}
			}
		if(brkFlg) 
			{
			// console.log(`received ${n},${m} returning nothing since tgt unacheivable`);
			return "nothing";		
			}
		if(msq==n) 
			{
			// console.log(`received ${n},${m} returning ${[m]}`);
			// console.log("hiya");
			return [m];
			}		
		let leftSequences="nothing";
		if(msq < n) 
			{			
			leftSequences=sosquares3(n-msq,m-1);	
			if(leftSequences!="nothing")
				{
				leftSequences.push(m);
				return leftSequences;				
				
				// return [m,...leftSequences];
				}		
			}
		// console.log("right with "+n+" "+(m-1));

		return sosquares3(n,m-1);		
	}

function sosquares2(n,m)
	{
		msq=m*m;
		let sumT=0;
		let brkFlg=true;
		for(let i=m;i>=1;i--)
		{
		sumT+=i*i;
		if(sumT >= n)
			{
			brkFlg=false; 
			break;
			}
		}
		if(brkFlg) 
			{
			// console.log(`received ${n},${m} returning nothing since tgt unacheivable`);
			return "nothing";		
			}
		if(msq==n) 
			{
			// console.log(`received ${n},${m} returning [[${m}]]`);
			return [[m]];
			}
		let leftSequences="nothing";
		if(msq < n) 
		{			
			leftSequences=sosquares2(n-msq,m-1);
		}
		
		let rightSequences=sosquares2(n,m-1);

		result=[];
		if(leftSequences!="nothing") result.push(...leftSequences.map(val=>[m,...val]));
		else if(rightSequences!="nothing") result.push(...rightSequences);
		if(result.length==0)
			{ 
			// console.log(`received ${n},${m} returning nothing on both sides`);
			return "nothing";
			}
		// console.log(`received ${n},${m} returning ${JSON.stringify(result)}`);
		return result;
	}
function sosquares(n,ind=0,stackvar=0)
	{
		if(stackvar > 1000) 
		{
			alert('dangerous depth');
			console.log('dangerous depth');
			return "nothing";
		}
		if(n==0 ) return [[]];

		if (n<0 || n<=ind) return "nothing";
		let x=ind+1;
		while(Math.sqrt(x)!=Math.floor(Math.sqrt(x)) ) 
		{
			x+=1;
			if(x > n) return "nothing";
		}		
		let leftSequences=sosquares(n-x,x,stackvar+1);
		let rightSequences=sosquares(n,x,stackvar+1);

		result=[];
		if(leftSequences!="nothing") result.push(...leftSequences.map(val=>[Math.sqrt(x),...val]));
		if(rightSequences!="nothing") result.push(...rightSequences);
		if(result.length==0) return "nothing";
		return result;
	}

	*/
//29200 attempts in total 
	function livingRoom(prisonerNumber, lightbulb, previousVisits) {
  const assertion = false;
  let assertion2=assertion;
  if(prisonerNumber==0 && lightbulb) 
  	{
  	lightbulb=!lightbulb;
  	if(previousVisits.filter(x=>x).length==99) assertion2=true;
  	}
  else if(!lightbulb && previousVisits.filter(x=>!x).length==0) lightbulb=!lightbulb;

  return [lightbulb, assertion2];
}
function livingRoom_azaria(prisonerNumber, lightbulb, previousVisits) {
  if(prisonerNumber !== 0) {
    return [lightbulb || previousVisits.every(x => x), false];
  }
  return [false, lightbulb && previousVisits.filter(x => x).length === 98];
}

	function livingRoom_cheating(prisonerNumber, lightbulb, previousVisits) {
  const assertion = false;
  let assertion2=assertion;
  if(prisonerNumber==0 && previousVisits.length > 0) 
  	{
	assertion2=true;
  	}
  return [lightbulb, assertion2];
}

