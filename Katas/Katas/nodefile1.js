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

		for(let m=0;m<n;m++)
		{
			let arr=strval.replace(/[\s]+/g,'').split('').sort((a,b)=>-1);
			for(let i=0;i<n;i++)
			arr=arr.map((x,ind)=> ind!=arr.length-1?arr[ind+1]:arr[0]);
			let strr=arr.sort((a,b)=>-1).join('');
			let j=0,strr2='';
			for(let i=0;i<strval_copy.length;i++)
			{
				if(strval_copy[i] != ' ')	strr2+=strr[j++];		
				else strr2+=' ';			
			}
			strr=strr2;		
			strr=strr.split(/[\s]+/g).map(
				x=>{
					let arr2=x.split('').sort((a,b)=>-1);
					for(let i=0;i<n;i++)					
						arr2=arr2.map((x,ind)=> ind!=arr2.length-1?arr2[ind+1]:arr2[0]);
					return arr2.sort((a,b)=>-1).join('');					
				   }
				).join('');
			j=0;strr2='';
			for(let i=0;i<strval_copy.length;i++)
			{
				if(strval_copy[i] != ' ')	strr2+=strr[j++];		
				else strr2+=' ';			
			}

			strval=strr2;
		}

		return n+' '+strval;
	},
	decode:function(strval){	

		let n=parseInt(strval.match(/^[0-9]+/)[0]);
		let strval_copy=strval.match(/[\s]{1}.*/)[0].replace(/^[\s]{1}/,'');
		let strr=strval_copy;
		for(let m=0;m<n;m++){
			strr=strr.split(/[\s]+/g).map(
				x=>{
					let arr2=x.split('');
					for(let i=0;i<n;i++)					
						arr2=arr2.map((x,ind)=> ind!=arr2.length-1?arr2[ind+1]:arr2[0]);
					return arr2.join('');					
				   }
				).join('');
			
			let j=0;
			let strr2='';
			for(let i=0;i<strval_copy.length;i++)
			{
				if(strval_copy[i] != ' ')	strr2+=strr[j++];		
				else strr2+=' ';			
			}			
			let arr=strr2.replace(/[\s]+/g,'').split('');
			for(let i=0;i<n;i++)
			arr=arr.map((x,ind)=> ind!=arr.length-1?arr[ind+1]:arr[0]);
			strr=arr.join('');
			j=0;strr2='';
			for(let i=0;i<strval_copy.length;i++)
			{
				if(strval_copy[i] != ' ')	strr2+=strr[j++];		
				else strr2+=' ';			
			}
			strr=strr2;
		}
		return strr;
	}
}
const InterlacedSpiralCipher = {};
InterlacedSpiralCipher.encode=(strxx)=>{
let n= Math.ceil(Math.sqrt(strxx.length));
// let sq_dim=n;
strxx+=Array(n*n-strxx.length).fill(' ').join('');
let sq=[],a=0,b=n-1,j=0;
for(let i=0;i<n;i++) sq.push(Array(n).fill(''));
n-=1;
while(n >= 1){
	for(let i=0;i < n;i++){
		sq[a][a+i]=strxx[j++];
		sq[a+i][b]=strxx[j++];
		sq[b][b-i]=strxx[j++];
		sq[b-i][a]=strxx[j++];
	}
	n-=2;
	a+=1;
	b-=1;
}
if(n==0)
	sq[a][a]=strxx[j++];
return sq.map(x=> x.join('')).join('');
}

InterlacedSpiralCipher.decode=(strxx)=>{
let n= Math.ceil(Math.sqrt(strxx.length));
// let sq_dim=n;
strxx+=Array(n*n-strxx.length).fill(' ').join('');
let sq=[],a=0,b=n-1,j=0;
for(let i=0;i<n;i++) sq.push(Array(n).fill(''));
for (let i=0;i<n;i++)
	for(let k=0;k<n;k++)
		sq[i][k]=strxx[j++];
n-=1;
let res='';
while(n >= 1){
	for(let i=0;i < n;i++){
		res+=sq[a][a+i];
		res+=sq[a+i][b];
		res+=sq[b][b-i];
		res+=sq[b-i][a];
	}
	n-=2;
	a+=1;
	b-=1;
}
if(n==0)
	res+=sq[a][a];
return res.trim();

}

const InterlacedSpiralCipher2 = {};

InterlacedSpiralCipher2.encode = function(str){
  var s=Math.ceil(str.length**0.5), m=[...Array(s)].map(_=>Array(s).fill(' ')), a=[...str+' '.repeat(s*s-str.length)].reverse();
  for(let q=0; q*2+1<s; q++) for(let i=0; i<s-1-q*2; i++) {m[q][q+i]=a.pop();m[q+i][s-1-q]=a.pop(); m[s-1-q][s-1-q-i]=a.pop(); m[s-1-q-i][q]=a.pop();}
  if(s%2===1) m[(s-1)/2][(s-1)/2]=a.pop();
  return m.map(r=>r.join('')).join('');
};

InterlacedSpiralCipher2.decode = function(str){
  var s=Math.ceil(str.length**0.5), m=str.match(new RegExp(`.{${s}}`,'g')).map(r=>[...r]), r=[];
  for(let q=0; q*2+1<s; q++) for(let i=0; i<s-1-q*2; i++) r.push(m[q][q+i],m[q+i][s-1-q],m[s-1-q][s-1-q-i],m[s-1-q-i][q]);
  if(s%2===1) r.push(m[(s-1)/2][(s-1)/2]);
  return r.join('').trim();
};



function encipher(s,key){
	s=s.toUpperCase();
	key=key.replace(/[\s]+/g,'').toUpperCase();
	let keyMat,replacingElem;
	[replacingElem,keyMat]=populateKeyMatrix(key);
	if(replacingElem=="I")
		s=s.replace(/[J]/g,"I");
	else
		s=s.replace(/[I]/g,"J");
	let s_copy=s;
	s=s.replace(/[\s]+/g,'');
	s_arr=s.split('');
  
	s=s_arr.reduce((su,x,i)=>
						{
							if(i!=(s.length-1) &&  x==s_arr[i+1])
								return su+x+'X';
							//else if(s.length%2==1 && i==s.length-1)
								//return su+x+'X';
							else 
								return su+x;
						}
		   ,'');
	let result='',i1,j1,i2,j2;
	// return `string:${s} and keymatrix:${JSON.stringify(keyMat)}`
  if(s.length%2==1) s+='X';
	for(let i=0;i < s.length;i+=2){			
		[i1,j1]=GetPositionInKeyMatrix(s[i],keyMat);
		[i2,j2]=GetPositionInKeyMatrix(s[i+1],keyMat);
		result+=FindReplacement(i1,j1,i2,j2,keyMat);
	}
	return IntroduceSpaces(result,s_copy);
}
function IntroduceSpaces(orig,key){
	let k=0;
	let nonSpaceLength=key.replace(/[\s]+/g,'').length;
	return key.split('').reduce((result,x)=> x==' '? result+' ':result+orig[k++],'')+''+orig.substr(nonSpaceLength,orig.length-nonSpaceLength);	
}
function GetPositionInKeyMatrix(a,keyMat){
	let i1,j1;
	for(let i=0;i < 5;i++)
	for(let j=0;j < 5;j++)
		if(keyMat[i][j]==a)
			return [i,j];
	console.log('returning negative for '+a);
	return [-1,-1];
}
function FindReplacement(i1,j1,i2,j2,keyMat){
	if(i1==i2){
		j1=(j1+1) > 4?0:j1+1;
		j2=(j2+1) > 4?0:j2+1;
		return keyMat[i1][j1]+keyMat[i2][j2];
	}
	else if(j1==j2){
		i1=(i1+1) > 4?0:i1+1;
		i2=(i2+1) > 4?0:i2+1;
		return keyMat[i1][j1]+keyMat[i2][j2];
	}
	return keyMat[i1][j2]+keyMat[i2][j1];
}

function populateKeyMatrix(key){	

	let keyMat=[];
	let keyTrack=0;
	let alphs="abcdefghijklmnopqrstuvwxyz";
	alphs=alphs.toUpperCase();
	key+=alphs;
	let replacingElem;
	
	let charsCovered='';
	for(let i=0;i<5;i++) keyMat.push(Array(5).fill(''));
	for(let i=0;i < 5;i++)
	for(let j=0;j < 5;j++)
		{
			while(keyTrack < key.length)
			{
			let c=key[keyTrack++];
			if(c!='I' && c!='J') 
				{
				 if(charsCovered.indexOf(c)==-1)
				 	{
					keyMat[i][j]=c;
					charsCovered+=c;
					break;
					}
				}
			else{
				 if(charsCovered.indexOf('I')==-1 && charsCovered.indexOf('J')==-1)
				 	{
					keyMat[i][j]=c;
					charsCovered+=c;
					replacingElem=c;
					break;
					}
				}
			}
			
		} 
	
	return [replacingElem,keyMat];
}

function trifidEncode(key, period, data){
  //populate the key matrix
  let BigMat=[];
  for(let i=0;i < 3;i++) BigMat.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(3).fill(1)],[]));
  key.split('').map(
  		(x,i)=>{  			
  			BigMat[parseInt(i / 9)][parseInt((i % 9)/3)][(i % 9)%3]=x;
  		}
  	);
  
}

function trifidDecode(key, period, data){
  // Hajime again?
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
		// data=JSON.stringify(IterativeRotationCipher.encode(10,"If you wish to make an apple pie from scratch, you must first invent the universe."));
		// data=JSON.stringify(IterativeRotationCipher.decode("10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet"));
		// data=JSON.stringify(IterativeRotationCipher.decode("14 daue ilev is a munbune Traurecracy."));

		strxx="True evil is a mundane bureaucracy.";
		// strxx="10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet";
		strxx="36 ws h weA dgIaa ug owh n!asrit git \n msm phw teaI'e tanantwhe reos\ns ther! aHeae \'gwadin\nt haw n htoo ,I\'i sy aohOy";
		n=10;
		// data=JSON.stringify(IterativeRotationCipher.encode(n,strxx));
		// data=JSON.stringify(IterativeRotationCipher.decode(strxx));

		strxx="Romani_ite_domum";
		strxx="Rntodomiimuea__m";
		// data=JSON.stringify(InterlacedSpiralCipher.decode(strxx));
		strxx="cozy lummox gives smart squid who asks for job pen";
		key='playfairjexample';
		data=JSON.stringify(encipher(strxx,key));
		// data=JSON.stringify(populateKeyMatrix(key));		

		// orig="thecatinthebage";
		// key="xxx xxx xx";
		// data=JSON.stringify(IntroduceSpaces(orig,key));	

		fs.writeFile("./datum.json",data,errHandler);
		}
}
readFromFile=()=>{
	fs.readFile('input.txt','utf8',handleReadText);
}
readFromFile();

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

