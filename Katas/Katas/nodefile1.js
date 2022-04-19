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

function printOut3DMatrix(mat){
	let result="";
	for(let n=0; n < mat.length;n++){
		for(let i=0;i < mat[0].length;i++){
			for(let j=0;j < mat[0][0].length;j++){
				result+=mat[n][i][j]+' ';
			}
			result=result.replace(/[\s]$/,'');
			result+='\n';
		}
		result+='\n';
	}
	return result;
}

function printOutMatrix(mat){
	return mat.reduce((res,row)=>res+ row.reduce((res2,elem)=>res2+' '+elem,'')+'\n','');
}

function printOutArray(arr){
	return arr.reduce((sum,x)=>sum.length%20==0?sum+x+'\n'+' ':sum+x+' ','').replace(/[\s]$/,'');
}

function trifidEncode(key, period, data){
  //populate the key matrix
  let BigMat=[],BigMat2=[];
  data=data.replace(/[\s]/g,'');
  for(let i=0;i < 3;i++) BigMat.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(3).fill(1)],[]));
  key.split('').map(
  		(x,i)=>{  			
  			BigMat[parseInt(i / 9)][parseInt((i % 9)/3)][(i % 9)%3]=x;
  		}
  	);

  
  //populate the master matrix to put encoded triplets
  let numMats=parseInt(data.length / period);
  let residueMatCols=data.length % period;
  // console.log(`numMats:${numMats},residue:${residueMatCols}`);
  for(let i=0;i < numMats;i++) BigMat2.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(period).fill(1)],[]));
  BigMat2.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(residueMatCols).fill(1)],[]));
  // return printOut3DMatrix(BigMat2);
  //populate BigMat2 with encoded triplets
  let r_colind=0;
  for(let i=0; i < data.length;i++){
  	let a,b,c;
  	let elemPositions=FindPositionInBigMat(BigMat,data[i]);
  	for(let j in elemPositions)
  	BigMat2[parseInt(r_colind/period)][j][r_colind % period]=elemPositions[j];
    r_colind++;
  }
  
  // return printOut3DMatrix(BigMat2);

  let r_rowind=0;
  let result_string='';
  let maxElemsInBigMat=(BigMat2.length-1) * 3 * period + residueMatCols * 3;

  //traverse across BigMat2 and extract encode characters from BigMat2 as per tripletes a,b,c
  for(let i=0; i < maxElemsInBigMat; i+=3){
  	let indices=[];
  	for(let k=i; k < i+3;k++){
  	let cols=parseInt(k / (3*period)) < (BigMat2.length -1)?period:residueMatCols;
  	let matrixIndex=parseInt(k / (3*period));
  	let rowIndex=parseInt((k % (3*period))/cols);
  	let colIndex=(k % (3*period))%cols;  	
  	indices.push(BigMat2[matrixIndex][rowIndex][colIndex]);  	
  }    
  	let [a,b,c]=indices.map(x=>x-1);  	
  	result_string+=BigMat[a][b][c];
  }
  return result_string;
}

function FindPositionInBigMat(BigMat,ch){
	for(let n=0;n < 3;n++)
		for(let i=0; i < 3;i++)
			for(let j=0;j < 3;j++){
				if(BigMat[n][i][j]==ch) 
					return [n+1,i+1,j+1];
			}
	return [-1,-1,-1];
}

function trifidDecode(key, period, data){
  //populate the key matrix
  let BigMat=[],BigMat2=[];
  data=data.replace(/[\s]/g,'');
  for(let i=0;i < 3;i++) BigMat.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(3).fill(1)],[]));
  key.split('').map(
  		(x,i)=>{  			
  			BigMat[parseInt(i / 9)][parseInt((i % 9)/3)][(i % 9)%3]=x;
  		}
  	);
  //create BigMat2
  let numMats=parseInt(data.length / period);
  let residueMatCols=data.length % period;  
  for(let i=0;i < numMats;i++) BigMat2.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(period).fill(1)],[]));
  BigMat2.push(Array(3).fill(0).reduce((arr,x)=> [...arr,Array(residueMatCols).fill(1)],[]));


  //populate BigMat2
  let maxElemsInBigMat=(BigMat2.length-1) * 3 * period + residueMatCols * 3;  
  for(let i=0; i < maxElemsInBigMat; i+=3){
  	let posTriplet=FindPositionInBigMat(BigMat,data[i/3]);
  	let l=0;
  	for(let k=i; k < i+3;k++){
	  	let cols=parseInt(k / (3*period)) < (BigMat2.length -1)?period:residueMatCols;
	  	let matrixIndex=parseInt(k / (3*period));
	  	let rowIndex=parseInt((k % (3*period))/cols);
	  	let colIndex=(k % (3*period))%cols;  	
	  	BigMat2[matrixIndex][rowIndex][colIndex]=posTriplet[l++];
  		}
	}

  //populate result string while tranversing BigMat2 with r_colind
  let r_colind=0,result='';
  for(let i=0; i < data.length;i++){
  	let posTriplet=[];
  	for(let j=0;j < 3;j++)
  	posTriplet.push(BigMat2[parseInt(r_colind/period)][j][r_colind % period]);
  	[a,b,c]=posTriplet;
  	result+=BigMat[a-1][b-1][c-1]
    r_colind++;
  }
  return result;
}
/* Clever
let trifidEncode = (key, period, data) => {
  let keySquare = new KeySquare(key), [s,r,c] = [...'src'].map(q => [...data].map(c => keySquare.encryption[c][q]).join``).map(q => q.match(new RegExp('.{1,'+period+'}','g')));
  return s.map((x,i) => x + r[i] + c[i]).join``.match(/.{3}/g).map(x=>keySquare.decryption[''+x]).join``;
};

let trifidDecode = (key, period, data) => {
  let keySquare = new KeySquare(key), hold = [...data].map((x,i,a,k=keySquare.encryption[x])=>''+k.s+k.r+k.c).join``.match(new RegExp('.{1,'+period*3+'}','g')).map(x=>x.match(new RegExp('.{1,'+x.length/3+'}','g'))).reduce((a,b)=>[a[0]+b[0], a[1]+b[1], a[2]+b[2]],['','',''])
  return [...hold[0]].map((x,i)=>keySquare.decryption[''+x+hold[1][i]+hold[2][i]]).join``;
};

class KeySquare {
  constructor (key, $ = {}, _ = {}) {
    [...key].forEach((x,i,a,s=~~(i/9)+1,r=1+~~((i%9)/3),c=i%3+1)=>($[x]={s:s,r:r,c:c})&&(_[''+s+r+c]=x));
    [this.encryption, this.decryption] = [$, _];
  }
};
*/

//club and spades are black, diamonds and hearts are red
//club pairs with diamonds, spades pairs with hearts
const arrangeDeck=(deck)=>{
	let blackPile=[],redPile=[];
	deck.forEach(x=>{
					if(x[1]=='C' || x[1]=='S' || x=='XB') 
						blackPile.push(x);
					else 
						redPile.push(x);
				}
			);
	let newPile=[];
	for(let i in blackPile){
		newPile.push(redPile[i]);
		newPile.push(blackPile[i]);		
	}
	return newPile;
}


let blackCards=['AC','2C','3C','4C','5C','6C','7C','8C','9C','TC','JC','QC','KC','AS','2S','3S','4S','5S','6S','7S','8S','9S','TS','JS','QS','KS','XB'];
let   redCards=['AD','2D','3D','4D','5D','6D','7D','8D','9D','TD','JD','QD','KD','AH','2H','3H','4H','5H','6H','7H','8H','9H','TH','JH','QH','KH','XR'];
let   allAlphs=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
function CheckInput(message,deck){	
	if(!message.match(/^[A-Z\s]+$/) || deck.length !=54) return false;
  for(let card of deck){
		if(blackCards.indexOf(card)==-1 && redCards.indexOf(card)==-1) return false;
		if(deck.filter(x=>x==card).length > 1) return false;
	}
	return true;
}

class CardChameleon {
	/**
	 * Takes a String containing a message and an array of Strings representing a deck
	 * of playing cards, and returns a String containing the text encrypted, or null if
	 * the message, or the deck, is invalid.
	 */
	
	encrypt(message, deck) {
    if(message=='') return '';
    if(!CheckInput(message,deck)) return null;
		deck=arrangeDeck(deck);
		return message.split('').reduce((summ,x,i)=>
										  {
										  	let blackCard=blackCards[allAlphs.indexOf(x)];
										  	let redCardAbove=deck[deck.indexOf(blackCard)-1];
										  	blackCard=blackCards[redCards.indexOf(redCardAbove)];
										  	redCardAbove=deck[deck.indexOf(blackCard)-1];
										  	let res=summ+allAlphs[redCards.indexOf(redCardAbove)];

										  	deck[deck.indexOf(redCardAbove)]=deck[0];
										  	deck[0]=redCardAbove;
										  	deck=[...deck,deck[0],deck[1]];
										  	deck=deck.slice(2,deck.length);

										  	return res;
										  },
								''
							  );
		return '';
	}

	/**
	 * Takes a String containing an encrypted message and an array of Strings
	 * representing a deck of playing cards, and returns a String containing the
	 * message decrypted, or null if the text, or the deck, is invalid.
	 */
	decrypt(encrypted, deck) {
    if(encrypted=='') return '';
    if(!CheckInput(encrypted,deck)) return null;
		deck=arrangeDeck(deck);
		return encrypted.split('').reduce((summ,x,i)=>
										  {
										  	let redCard=redCards[allAlphs.indexOf(x)];
										  	let firstRed=redCard;
										  	let blackCardBelow=deck[deck.indexOf(redCard)+1];
										  	redCard=redCards[blackCards.indexOf(blackCardBelow)];
										  	blackCardBelow=deck[deck.indexOf(redCard)+1];
										  	let res=summ+allAlphs[blackCards.indexOf(blackCardBelow)];

										  	deck[deck.indexOf(firstRed)]=deck[0];
										  	deck[0]=firstRed;
										  	deck=[...deck,deck[0],deck[1]];
										  	deck=deck.slice(2,deck.length);

										  	return res;
										  },
								''
							  );
    return '';
	}
}

/*
//Some other guy
class CardChameleon{
  
  constructor(){
    this.LB={' ':'XB'}                  // letter => black card
    this.LR={' ':'XR'}                  // letter => red card
    this.CL={XB:' ',XR:' '}             // card   => lettet
    
    let a='A23456789TJQK'
    let b='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0,j=0;i<26;j=++i%13){
      this.LB[b[i]]=a[j]+(i<13?'C':'S')
      this.LR[b[i]]=a[j]+(i<13?'D':'H')
      this.CL[a[j]+(i<13?'C':'H')]=b[i]
      this.CL[a[j]+(i<13?'D':'S')]=b[i]
    }
  }
  
  valid(text,deck){
    return /^[A-Z ]*$/.test(text)
      && new Set(deck).size==54
      && deck.every(e=>this.CL[e])
  }
  
  interleave(deck){
    let b=deck.filter(e=>/C|S|B/.test(e))
    let r=deck.filter(e=>/D|H|R/.test(e))
    return r.reduce((a,e,i)=>[...a,e,b[i]],[])
  }
  
  encrypt(message,deck){
    if(!this.valid(message,deck)) return null
    let enc='',a,b,c,d,e,f,g,h,i,j
    i=this.interleave(deck)
    for(j of message){
      a=this.LB[j]                      // 1. Find the black card in the deck
      b=i.indexOf(a)                    //    corresponding to the character in the assignment table 
      c=i[b-1]                          // 2. Look at the red card above this black card.
      d=this.CL[c]                      //    Interpret it as a character in the assignment table
      e=this.LB[d]                      // 3. Find the black card in the deck
      f=i.indexOf(e)                    //    corresponding to this new character
      g=i[f-1]                          // 4. Look at the red card above this black card
      h=this.CL[g]                      //    Interpret it as a character and write to ciphertext
      i[f-1]=i[0]                       // 5. Exchange this red card
      i[0]=g                            //    with the one on the top of the deck (also red)
      i.push(i.shift())                 // 6. Move the top two cards (one red
      i.push(i.shift())                 //    one black) to the bottom
      enc+=h
    }
    return enc
  }

  decrypt(encrypted, deck){
    if(!this.valid(encrypted,deck)) return null
    let dec='',a,b,c,d,e,f,g,h,i,j
    i=this.interleave(deck)
    for(j of encrypted){
      a=this.LR[j]                      // 1. Find the red card in the dec
      b=i.indexOf(a)                    //    corresponding to the character in the assignment table
      c=i[b+1]                          // 2. Look at the black card below this red card
      d=this.CL[c]                      //    Interpret it as a character in the assignment table
      e=this.LR[d]                      // 3. Find the red card in the deck
      f=i.indexOf(e)                    //    corresponding to this new character
      g=i[f+1]                          // 4. Look at the black card below this red card
      h=this.CL[g]                      //    Interpret it as a character and write to message
      i[b]=i[0]                         // 5. Exchange the red card found at step 1
      i[0]=a                            //    with the one on the top of the deck (also red)
      i.push(i.shift())                 // 6. Move the top two cards (one red
      i.push(i.shift())                 //    one black) to the bottom
      dec+=h
    }
    return dec
  }
}
*/
//find out maximum score with weights limited by capacity
function packBagpack(scores, weights, capacity) {
    	return packBagHelper(scores, weights, capacity,0,0,0);
}

function packBagHelper(scores,weights,capacity,i_reached,scoreAcc,weightAcc){
	if(i_reached == scores.length -1){
		if(weightAcc + weights[i_reached] > capacity ) return scoreAcc;
		return scoreAcc+scores[i_reached];
	}
	let score1=-1,score0;
	score0=packBagHelper(scores,weights,capacity,i_reached+1,scoreAcc,weightAcc);
	if(weights[i_reached]+weightAcc <= capacity)
	score1=packBagHelper(scores,weights,capacity,i_reached+1,scoreAcc+scores[i_reached],weightAcc+weights[i_reached]);
	if(score1 != -1 && score1 > score0)
		return score1;
	else
		return score0;	
}
/*
function packBagpack(scores, weights, capacity) {
  let load = Array.from({ length: capacity + 1 }, () => 0);
  for (let i = 0; i < weights.length; i++) {
    load = load.map(
      (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i])
    );
  }
  return load.pop();
}
*/
//arr is the sum, totalSides is the number of dice
function rolldiceSumProbx(arr, totalSides){
    var prob;
    prob = rollDiceNumPos(arr,1,totalSides);
    return prob;
}
function rollDiceNumPos(sumx,minNum,diceNum){
	if(diceNum == 1){
		if(sumx >= minNum && sumx < 7) return 1;
		return 0;
	}
	// if(sumx < minNum) return 0;
	if(sumx < 2*minNum) return 0; //This check was better sumx=9 cannot be acheived with minNum=5
	let i=0,numTimes=0;
	while( i < diceNum && sumx > minNum*i && minNum <= 6){
		numTimes += rollDiceNumPos(sumx - minNum * i,minNum + 1,diceNum - i);
		i++;
	}
	return numTimes;
}

function rolldiceSumProby(arr, totalSides,firstLevel=true){

	if(totalSides <= 1){
		if(arr < 7 && arr > 0) return 1;
		return 0;
	}
	let res=0;
	for(let i = 1; i < 7 && arr > i; i++){
		res += rolldiceSumProb(arr - i,totalSides - 1,false);
	}
	if (!firstLevel)
	return res;
	return res/(6 ** totalSides);
}

function rolldiceSumProb(arr, totalSides){
	let arrx=[[1,2,3],[4,5,6],[5,6,7]];
	return printOutMatrix(arrx);
	
}

function FindAllDiceCombs(sum,dicenum){
	if(dicenum == 1){
		if(sum <= 6) return [[sum]];
		else return [];
	}
	let allCombinations=[];
	for(let i=1 ; i < 7; i++){
		if(sum - i <= 0) break;
		let subCombinations = FindAllDiceCombs(sum - i,dicenum - 1);
		if (subCombinations.length == 0) continue;
		allCombinations=[...allCombinations,...subCombinations.map(x=>[i,...x])];
	}	
	return allCombinations;
}
//
function rolldiceSumProb_cleverAnswer(arr, totalSides){
    if (arr<totalSides || arr>totalSides*6) return 0;
    if (totalSides===0) return 1;
    let p = 0;
    for (let i=1; i<=6; i++) p += rolldiceSumProb_cleverAnswer(arr-i, totalSides-1);
    return p/6;
}

function hamsterMe(code, message) 
	{
	let result='';
	for(let i in message)
		{		 
		 //result+=fn(message(i));
		let foundInCode=false;
		let keysArr=[];		
		for(let j in code)
		 	{
		 	 if(code[j]==message[i])
		 	 	{		 	 	 
		 	 	 result+=code[j]+'1';
		 	 	 foundInCode=true;
		 	 	 break;		 	 	 
		 	 	}		 	
		 	 keysArr.push([code[j],GetPosVal(code[j],message[i])]);
		 	}
	 	if(foundInCode)
	 		{
	 		 continue;
	 		}
	 	let selected=keysArr.sort((a,b)=>a[1]-b[1])[0];
	 	result+=selected[0]+selected[1];
		}
    return result;
	}

function GetPosVal(ch1,ch2)
	{
	if(ch2.charCodeAt(0) > ch1.charCodeAt(0))
		return ch2.charCodeAt(0)-ch1.charCodeAt(0)+1;
	else
		return 'z'.charCodeAt(0)-ch1.charCodeAt(0)+ch2.charCodeAt(0)-'a'.charCodeAt(0)+2;
	}

function josephusSurvivor(n,k){
  
 let men= Array(n).fill(1);
  men=men.map((x,i)=>i+1);
  let count=k,i=0;
  let temp=0;
  if(k==1) return men[men.length-1];
  while(men.length > 1){
  	if(temp++ > 20000) {console.log("overflow");return "niet";}
  	if(men[i]!=0){
  		count--;
	  	if(count == 0){
	  		count=k;
	  		men[i]=0;

	  	}
	  }
	  // i= (i == men.length-1)?0:i+1;
	  if(i==men.length -1){
	  	i=0;
	  	men=men.filter(x=>x!=0);
	  }else{
	  	i+=1;
	  }	 
	}
	return men[0];
}
function josephusSurvivor_clever(n, k){
  return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}

function distributionOf(gold) {
  let shares= GetAllElems(gold);
  return [shares[0].reduce((sum,x)=>sum+gold[x],0),shares[1].reduce((sum,x)=>sum+gold[x],0)];
}
function GetAllElems(gold){
	if(gold.length==0) 
		return [[],[]];
	if(gold.length==1){
		return [[0],[]];
	}else if(gold.length==2){
		return gold[0] > gold[1]?[[0],[1]]:[[1],[0]];
	}
	carr_sub1 = GetAllElems(gold.slice(1,gold.length)).map(subarr=>subarr.map(x=>x+1));
	carr_sub2 = GetAllElems(gold.slice(0,gold.length-1));
	if(gold[0]+carr_sub1[1].reduce((sum,x)=>sum+x,0) > gold[1]+ carr_sub2[1].reduce((sum,x)=>sum+x,0)){
		return [[0,...carr_sub1[1]],carr_sub1[0]];
	}else{
		return [[gold.length-1,...carr_sub2[1]],carr_sub2[0]];
	}
}
function GetKeyArray(strr){
	let sortedArr=strr.split('').sort((x,y)=>x.charCodeAt(0)-y.charCodeAt(0));	
	let res=[];
	for (let elem of strr.split('')){
		for(let i in sortedArr){
			if(sortedArr[i]==elem && res.indexOf(i)==-1){
				res.push(i);
				break;
			}
		}
	}
	return res;
}

function nico(key, message)  
	{
  	let keyArr=GetKeyArray(key);
  	let klen=keyArr.length;
 	 let smallArray=Array(klen).fill(' ');
  	let bigArray=[];
  	for(let i in message.split(''))
  		{
  		if(bigArray.length < parseInt(i/klen) )
  			{
  			  bigArray.push(smallArray.join(''));
  			  smallArray=Array(klen).fill(' ');
  			}
  		smallArray[keyArr[i%klen]]=message[i];
  		}
  		bigArray.push(smallArray.join(''));
  		return bigArray.join('');
	}

function nico_clever(key, message)  {

  let k = key.length
  ,   m = message.length;
  
  if (m % k)
    message += ' '.repeat(k - m % k);

  let cipher = [...key]
    .map((char, i) => [char, i])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((a, i) => a.concat(i))
    .sort((a, b) => a[1] - b[1])
    .map(a => a[2]);

  let result = [...message ]
    .map((char, i) => [char, Math.floor(i / k) * k + cipher[i % k]])
    .sort((a, b) => a[1] - b[1])
    .map(a => a[0])
    .join('');

  return result;
  
}
function denico_clever(key, message)  {

  let k = key.length
  ,   m = message.length;
  
  if (m % k)
    message += ' '.repeat(k - m % k);

  let cipher = [...key]
    .map((char, i) => [char, i])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(a => a[1]);

  let result = [...message ]
    .map((char, i) => [char, Math.floor(i / k) * k + cipher[i % k]])
    .sort((a, b) => a[1] - b[1])
    .map(a => a[0])
    .join('');

  return result;
  
}

function VigenèreCipher(key, abc) {
  this.key=key.split('').map(x=>[x,abc.indexOf(x)]);
  this.encode = function (str) {
    // key=key.split('').map(x=>[x,abc.indexOf(x)]);
    return str.split('').map(
    					(x,i)=>
    					   {
    					   	if(this.key[i%key.length][1]==-1 || abc.indexOf(x)==-1) return x;
    					   	let newPos=abc.indexOf(x)+this.key[i%key.length][1];
    					   	newPos=newPos >= abc.length?newPos-abc.length:newPos;
    					   	return abc[newPos];
    					   }
    	              ).join('');

  };
  this.decode = function (str) {
    // key=key.split('').map(x=>[x,abc.indexOf(x)]);
    return str.split('').map(
    					(x,i)=>
    					   {
    					   	if(this.key[i%key.length][1]==-1 || abc.indexOf(x)==-1) return x;
    					   	let newPos=abc.indexOf(x)-this.key[i%key.length][1];
    					   	newPos=newPos < 0?newPos+abc.length:newPos;
    					   	return abc[newPos];
    					   }
    	              ).join('');
  };
}

function VigenèreCipher_clever(key, abc) {
  var self = this;
  var size = abc.length;
    
  this.transform = function (str, getIndex) {
    return str.split('').map(function(ch, index) {
      return abc.indexOf(ch) >= 0 ? abc[getIndex(ch, index)] : ch;
    }).join('');
  }

  this.enocodeIndex = function(ch, index) {
    return (abc.indexOf(ch) + abc.indexOf(key.charAt(index % key.length)) + size) % size
  }

  this.decodeIndex = function(ch, index) {
    return (abc.indexOf(ch) - abc.indexOf(key.charAt(index % key.length)) + size) % size
  }

  this.encode = function (str) {
    return this.transform(str, this.enocodeIndex)
  };
  this.decode = function (str) {
    return this.transform(str, this.decodeIndex)
  };
}

function chooseBestSum(t, k, ls,tT=t,pid=0) {
	let randId=parseInt(Math.random()*10000);
	// console.log(`${randId}. received t=${t},k=${k} and list=${JSON.stringify(ls)} from ${pid}`);
    if(t < 0 || ls.length < k) 
    {    	
    	// console.log(`${randId}. returning -1 at 1181`);
    	return -1;
    }
    if(k==0)
    	{ 
    	// console.log(`${randId}. returning ${tT-t}`);
    	return tT-t;
    	}  
    let elem=ls[0]; 
    let slicedList= ls.filter((x,i)=>i!=0);
    let x1=chooseBestSum(t,k,slicedList,tT,randId);
    let x2=chooseBestSum(t-elem,k-1,slicedList,tT,randId);
    
    if(x1 > x2) 
    	{
    	// console.log(`${randId}. returning ${x1}`);
    	return x1;
    	}
    // console.log(`${randId}. returning ${x2}`);
    return x2;
}

function chooseBestSum_1(t, k, ls) {
  if(k == 0) {
    return 0;
  }
  if(t <= 0 || k < 0 || ls.length < k) {
    return null;
  }
  var best = 0;
  for(var i = 0; i < ls.length; i++) {
    var l = ls.slice();
    l.splice(i, 1);
    var v = ls[i], c = chooseBestSum(t-v, k-1, l);
    if(c != null && c+v > best && c+v <= t) {
      best = c+v;
    }
  }
  return best > 0 ? best : null;
}

// ls=[50, 55, 57, 58, 60];
// 		k=3;
// 		t=174;
// 		data=''+chooseBestSum(t, k, ls);

function convertFrac(lst){
  let lcm=findLCM(lst.map(x=>x[1]));
  return lst.reduce((s,x)=>s+`(${lcm/x[1]*x[0]},${lcm})`,'');
}
function findLCM(lst){
	let mults=[1];
	let val=2;
	let largest=lst.sort((a,b)=>a-b)[lst.length-1];

	while(lst.filter(x=>x!=1).length != 0)
		{
		if(val > largest) break;
		let oneValPushed=false;
		lst=lst.map(x=>{
						if(x%val == 0)
							{
							if(!oneValPushed)
								{
								mults.push(val);
								oneValPushed=true;
								}
							return x/val;
							}
						return x;
						} 
				   );
		if(!oneValPushed)
		val+=1;
		}
	
	return mults.reduce((x,s)=>s*x,1);
}
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFracsmart(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}


//Euler problems
function smallestMult(){
	arr=Array(20).fill(1).map((x,i)=>i+1);
	return arr.reduce((lc,x)=>lcm(lc,x),1);
}
const allMult=()=>{
	let lim=1000,s=0;
	for(let i=1;i < 1000;i++){
		if(i%3==0 || i%5==0){
			s+=i;
		}
	}
	return s;
}

const evenFibo=()=>{
	let lim=4e6;
	let startNum=0;
	let secondNum=1;
	let summ=0;
	while(secondNum < lim){
		let temp=secondNum;
		secondNum=secondNum+startNum;
		startNum=temp;
		summ+=(secondNum %2==0)?secondNum:0;
	}
	return summ;
}
const largestPrimeFac=(num=600851475143)=>{
	let i=parseInt(Math.sqrt(num))+1;
	while(i>0)
		{
		i--;		
		if(num%i==0)
			{
			 let flg=true;
			 for(let j=2;j<=Math.sqrt(i);j++)
			 	{
		 		if(i%j == 0)
			 		{
		 			flg=false;
		 			break;
			 		}
			 	}
			 if (flg) return i;
			}
		}
	return 1;
}

const LargestPalindrome=()=>{
	let firstNum=0,secondNum=0;
	let largestNum=0;
	for(let i=999;i>99;i--)
		for(let j=999;j>99;j--)
			{
				if(i*j > largestNum && checkPalindrome(i*j))
					{
					 largestNum=i*j;
					}
			}
		return largestNum;
	
}
const checkPalindrome=(num)=>{
	let num1=''+num;
	let num2=''+num;
	num2=[...num2].map((x,i)=>[x,i]).sort((a,b)=>b[1]-a[1]).map((x,i)=>x[0]).join('');
	return num1==num2;
}

function sumsquares(n=10){
let ssquare=n*(n+1)*(2*n+1)/6;
let wholeSquare=(n*(n+1)/2)**2;
return wholeSquare-ssquare;
}

function nthprime(n=6)
	{
	let num=1;
	while(n > 0)
		{
		num+=1;
		let startFac=parseInt(Math.sqrt(num));
		while(startFac > 1)
			{
			 if(num % startFac ==0)
			 	break;
			 startFac-=1;
			}
		if(startFac == 1) n-=1;
		
		}
	return num;
	}

function thirtennadj(k=13)
	{
	let numString='7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
	let largest=0;
	for(let i=0;i < numString.length-k;i++)
		{
		let subSum=1;
		for(let j=i ;j < i+k;j++)
			{
			  subSum*= parseInt(numString[j]);			  
			}
		if(subSum > largest)
			largest=subSum;
		}
	return largest;
	}

function pythTriplet()
	{
	for(let i=400;i<1000;i++)
		{
		// console.log('here');
		result_array=sumOfSq2(i*i,2);
		if(result_array.length==0) continue;
		for(let result_array_elem of result_array)
			{
			[a,b]=result_array_elem;
			if(a+b+i==1000)
				return [a,b,i];
			}			
		}
	return [-1];
	}

function pythTriplet2()
	{
		for(let a=1;a < sum/3;a++)
			{
			 return false;
			}
	}

function sumOfSq(num,n=1)
	{
	
	if(num<=0)
		{
		 return [];
		}
	else if(n==1)
		{
		 var num_sqroot=parseInt(Math.sqrt(num));
		 if(num== num_sqroot*num_sqroot) 
		 	return [num_sqroot];
		 return [];
		}

	let m=parseInt(Math.sqrt(num));
	while (m > 0)
		{
		let res=sumOfSq(num - m*m,n-1);
		if(res.length!=0)
			{
			return [m,...res];
			}
		m-=1;
		}
		return [];		
	}

function sumOfSq2(num,n=1)
	{	
	if(num<=0)
		{
		 return [];
		}
	else if(n==1)
		{
		 var num_sqroot=parseInt(Math.sqrt(num));
		 if(num== num_sqroot*num_sqroot) 
		 	return [[num_sqroot]];
		 return [];
		}

	let m=parseInt(Math.sqrt(num));
	let result_list=[];
	while (m > 0)
		{
		let res=sumOfSq2(num - m*m,n-1);
		if(res.length!=0)
			{
			try
				{
				result_list=[...result_list,...res.map(x=>[m,...x])];
				}
			catch(err)
				{
					console.log('analysing '+JSON.stringify(res));
					throw new Error("not an error");

				}
			}
		m-=1;
		}
		return result_list;		
	}

function sumOfPrimes(num)
	{
		let sumx=0;
		for(let i=2;i<num;i++)
		{			
		if(IsPrime(i)) 
			{
			// console.log(`${i} is prime`);
			sumx+=i;
			}
		}
		return sumx;
	}

function IsPrime(num)
	{
	 for(let i=2;i<=Math.sqrt(num);i++)
	 	if(num % i==0) return false;
	 return true;
	}

function FindMaxProducth(data,posi=0,posj=0,dir='vert',n=4)
	{
		// console.log('analysing '+data[posi][posj]);
		let i=0,j=1;
		if(dir=='vert')
			{
			 i=1;
			 j=0;
			} 
		else if(dir=="diag")
			{
			i=1;
			j=1;
			}
		if(posi >= data.length || posi < 0 || posj >=data[0].length || posj < 0)
			{
			 return 0;
			}
		else if(n==1)
			{
			return data[posi][posj];
			}		
		
		return data[posi][posj]*FindMaxProducth(data,posi+i,posj+j,dir,n-1);
	}

function FindMaxProduct(data)
	{
		// return [data.length,data[0].length];
		// return FindMaxProducth(data,6,8,'diag');
		let dirs=['vert','diag','hori'];
		let max=[111111,111111,111111];
		let result=[];
		for(let i1=0;i1<data.length;i1++)
		for(let j1=0;j1<data[0].length;j1++)
		for(let x of dirs)
			{
				let product=FindMaxProducth(data,i1,j1,x);
				if(product > max[0])
					{
					max=max.map(
								(x,i)=>{
										if(i==0) return product;
										return max[i-1];
									   }
					           );	
					
					result=[i1,j1,x];
					}
			}
		console.log(JSON.stringify(result));
		return max[2];
	}


function highlyDiv()
	{
	let max=0;
	let facDict={};
	for(let i=10000;i<20000;i++)
		{
			let num=i/2*(i+1);
			let facs=0;
			for(let j=1;j<=Math.sqrt(num);j++)
			{
				if(num%j==0) facs+=1;
			}
			facs*=2;
			if(parseInt(Math.sqrt(num))==Math.sqrt(num)) facs-=1;
			if(facs > max)
				max=facs;
			if(facs > 500)
				return num+" ,target achieved";
		}
	return max+ " factors found";
	}

function FindSum(data)
	{
		sum=data.reduce((sum,x)=>sum+x,0);
		// let sum=0;
		// for(let i=0;i< data.length;i++)sum+=data[i];
		return ""+(sum);
	}
function Collatz(n)
	{
		let terms=1;
		while(n>1)
		{
			n=n%2==0?n/2:3*n+1;
			terms+=1;
		}
		return terms;
	}
function MaxCollatz()
	{
		let maxElems=0;
		let num=0;
		let strr='';
		for(let i=10;i<1000000;i++)
		{
			let res=Collatz(i);
			if(res > maxElems)
			{				
				maxElems=res;
				num=i;
			}
		}
		return 'num:'+num+", length:"+maxElems;
	}
function numRoutes()
	{
		return fac(40)/(fac(20)*fac(20));
	}
function fac(x)
	{
		return x<=1?1:x*fac(x-1);
	}
function SumOfDigits(dig)
	{
	return (''+dig).split('').map(x=>parseInt(x)).reduce((s,x)=>s+x,0);
	}
function convToSting(num)
	{
		let strr='';
		while(num > 0)
		{
			strr=num%10+strr;
			num=parseInt(num/10);
		}
		return strr;
	}
function SumOfDigitsPower(p)
	{
		let empt='';
		for(let i=1;i<=p;i++)
		{
		 let num=2**i;
		 // empt+=`p=${i}, num=${num}, sum=${SumOfDigits(num)}`+'\n';
		 empt+=SumOfDigits(num)+'\t';
		}
		return empt;
	}
function powx(p)
	{
		let numStr='2';
		for(let i=0;i<(p-1);i++)
		{
			numStr=multBy2(numStr);
		}
		return numStr;
	}
function multBy2(numString)
	{
	let carry=0;
	let resultString='';
	while(numString.length>0)
		{
		let prod=2*parseInt(numString[numString.length-1])+carry;
		if(prod >=10)
			{
			carry=1;
			prod=prod%10;
			}
		else if(carry!=0)
			carry=0;
		resultString=prod+resultString;
		numString=numString.substr(0,numString.length-1);
		}
	if(carry > 0)
		resultString=carry+resultString;
	return resultString;
	}

const numLetters=(num)=>{
	let wrds=0;
	for(let i=1;i<=num;i++)
	{
		wrds+=letterToWord(''+i).length;
	}
	return wrds;
}
const letterToWord=(x)=>
						{
						  let numMappings={1:'one',	2:'two',3:'three',4:'four',5:'five',6:'six',	7:'seven',	8:'eight',	9:'nine',	10:'ten',	11:'eleven',	12:'twelve',	13:'thirteen',	14:'fourteen',	15:'fifteen',	16:'sixteen',	17:'seventeen',	18:'eighteen',	19:'nineteen',	20:'twenty',	30:'thirty',	40:'forty',	50:'fifty',	60:'sixty',	70:'seventy',	80:'eighty',	90:'ninety',	100:'hundred',	1000:'thousand'};
						  let wordString='';
						  while(x.length>0)
						  		{
							  	 if(x.length==4)
							  	 	{
							  	 	if(!numMappings[x[0]]) return `${x[0]} not found`;
							  	 	wordString+=numMappings[x[0]]+'thousand';
							  	 	x=x.substr(1,x.length-1);
							  	 	}
							  	 else if(x.length==3)
							  	 	{
							  	 	if(!numMappings[x[0]]) return `${x[0]} not found`;
							  	 	wordString+=numMappings[x[0]]+'hundred'+'and';
							  	 	x=x.substr(1,x.length-1);

							  	 	}
							  	 else if(x.length==2)
							  	 	{
							  	 	if(x[0]!=1)
								  	 	{
								  	 	if(!numMappings[x[0]]) return `${x[0]} not found`;
								  	 	wordString+=numMappings[x[0]+'0'];
								  	    x=x.substr(1,x.length-1);
								  		}
							  	    else
								  	    {
								  	    if(!numMappings[x[0]+x[1]]) return `${''+x[0]+x[1]} not found`;
								  	    wordString+=numMappings[x[0]+x[1]];	
								  	    x='';
								  	    }
							  	 	}
							  	 else
							  	 	{
							  	 	if(!numMappings[x[0]]) return `${x[0]} not found`;
							  	 	wordString+=numMappings[x[0]];
							  	 	x='';
							  	 	}
							  	 
							  	 while(x[0]=='0') x=x.substr(1,x.length-1); 

						  		}
						  		wordString=wordString.replace(/(hundredand)$/g,'hundred');
						  		return wordString;
						}


function FindMaxTriangleSum(tri,layer=0,col=0)
	{
	if(layer==14)
		return tri[layer][col];
	let left=tri[layer][col]+FindMaxTriangleSum(tri,layer+1,col);
	let right=tri[layer][col]+FindMaxTriangleSum(tri,layer+1,col+1);
	return left > right?left:right;
	}




function CountSundays()
	{
	 let nonLeap=[1,32,60,91,121,152,182,213,244,274,305,335];
	 let leap   =[1,32,61,92,122,153,183,214,245,275,306,336];
	 let mnths  =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	 let selectedArr=nonLeap;
	 let sunday =7;
	 let year   =1900;
	 let leapSelected=false;
	 let sundaysCount='';
	 while(year < 2001)
	 	{
	 	 if(selectedArr.indexOf(sunday)!=-1 && year!=1900)
	 	 	{
	 	 	// sundaysCount+=1;
	 	 	sundaysCount+=(mnths[selectedArr.indexOf(sunday)]+'1 of '+year+' is a sunday')+'\n';
	 	 	}
	 	 sunday+=7;
	 	 if(sunday > 365+(leapSelected?1:0))
	 	 	{
 	 		sunday-=365+(leapSelected?1:0);
 	 		year+=1;
 	 		// console.log('year '+year+' is a leap year');
 	 		// console.log('sunday:'+sunday);
 	 		if(year%4==0 && year!=1900)
 	 			{
 	 		  	leapSelected=true;
 	 		  	selectedArr=leap;
 	 			}
 	 		else
 	 			{
 	 			leapSelected=false;
 	 		  	selectedArr=nonLeap;	
 	 			}
	 	 	}
	 	}
	 return sundaysCount;
	}

const fac2=(x)=>{
	return x==1?'1':strMult(fac2(x-1),x);
}

const strMult=(num1,num2)=>{	
	let sum=0;
	for(let i=0;i<num2;i++){
		sum=strAdd(num1,sum);
	}	
	return sum+'';
}
const strAdd=(num1,num2)=>{	
	num1+='';
	num2+='';
	if (num1.length > num2.length) num2=('0').repeat(num1.length-num2.length)+num2;
	else if (num2.length > num1.length) num1=('0').repeat(num2.length-num1.length)+num1;
	
	let carry=0;
	let res='';

	for(let i in num1)
		{
			let res1=parseInt(num1[num1.length-1-i]) + parseInt(num2[num2.length-1-i])+parseInt(carry);
			
			res1+='';			
			carry=res1.length>1?res1[0]:'0';
			res=(res1.length>1?res1[1]:res1[0])+res;

		}
	if(carry!='0') res=carry+res;	
	return res;
}

const checkSumOfDivisors=(num)=>{
	let divSum=1;
	for(let i=2;i <= Math.sqrt(num);i++){
		if(num % i == 0)
			divSum+=i+(num/i);
	}
	return divSum;
}
const populateAmicable=()=>{
	let numStore=[];
	let sum=0;
	for(let i=2;i<10000;i++){
		if(numStore.indexOf(i)!=-1) continue;
		let num2=checkSumOfDivisors(i);
		if(num2==i) continue;
		if(i==checkSumOfDivisors(num2)){
			numStore.push(num2);
			if(num2>10000) num2=0;
			sum+=i+num2;
			// console.log(i+','+num2);
		}
	}
	return sum;	
}

//Euler problems ends 1536

handleReadText=(err,data)=>{
	if(err)
		console.log("error while attempting to read");
	else
		{	

		const deck = [
					  "2C", "6H", "5S", "7S", "JS", "8C", "7C", "2D", "3D", "8D", "3C", "KS", "QS",
					  "2S", "7D", "TD", "QC", "TS", "AH", "5C", "XB", "TH", "AC", "9H", "6D", "4C",
					  "7H", "3S", "5H", "KC", "3H", "6C", "4D", "8H", "KH", "8S", "JC", "5D", "TC",
					  "9D", "2H", "9C", "4S", "4H", "QD", "AS", "JH", "6S", "QH", "9S", "XR", "JD",
					  "AD", "KD"
					 ];

		// let equations=['4x+8y+3z=44','5x+y-2z=5','20x+y+z=47'];
		let equations=['x+y=7z-1','6x+z=-3y','4y+10z=-8x'];
		data=JSON.stringify(solve(equations));

		fs.writeFile("./datum.json",data,errHandler);
		}
}

readFromFile=()=>{
	fs.readFile('input.txt','utf8',handleReadText);
}
readFromFile();

function varExtractor(eqn){
let lhs=[];
let rhs=0;
//todo
}

function solve(equations)
	{
	 let lhs=[];
	 let rhs=[];
	 let varnames=[];	 
	 [lhs,rhs,varnames]=SeperateVars(equations);	 
	 rhs=rhs.map(x=>[x]);

	 if(lhs.length < varnames.length) return null;
	 let lhs_mat=[];	 
	 for(let i in lhs)
	 	{
	 	 lhs_mat.push(ExtractCoeffs(lhs[i],varnames));
	 	}
	 
	 [lhs_mat,rhs]=RemoveDuplicateRows(lhs_mat,rhs);
	 
	 if(lhs_mat.length > varnames.length) lhs_mat=lhs_mat.slice(0,varnames.length);
	 
	 if(lhs_mat.length != varnames.length) return null;
	 let resMap=new Map();
	 return MatrixMult(Inverse(lhs_mat),rhs).reduce((s,x,i)=>s+`${varnames[i]}:${x[0]},`,'');
	 let matResult=MatrixMult(Inverse(lhs_mat),rhs);
	 // for(let i=0;i < matResult.length;i++)
	 // 	{
	 // 		resMap.set(varnames[i],matResult[i][0]);
	 // 	}
	 // return resMap;

	}

function RemoveDuplicateRows(mat,rhs)
	{
	  let indicesToRemove=[];
	  for(let i in mat)
	  	{
	  	 for(let j=0;j < i;j++)
	  	 {
	  	  let filterResult=  mat[i].map((elem,k)=>elem/(mat[j][k]!=0?mat[j][k]:99)).map((elem,l,arr)=>elem==arr[0]?1:-1).reduce((sx,elem)=>sx+elem,0);
	  	  if(filterResult==mat[i].length)
	  	  	{ 
	  	  	 indicesToRemove.push(parseInt(i));
	  	  	 break;
	  	  	}

	  	 }
	  	}
	  
	  return [mat.filter((x,i)=>indicesToRemove.indexOf(i)==-1),rhs.filter((x,i)=>indicesToRemove.indexOf(i)==-1)];
	}





function ExtractCoeffs(expr,varnames)
	{		 
	 let resultMat=[];
	 for(let x of varnames)
	 	{	 	
	 	 let rex=new RegExp(`[+-]*\\d*(?=${x})`,'g');
	 	 if(expr.match(rex))
	 	 	{
	 	 	 if(expr.match(rex)[0].match(/[+-]*\d+/))
	 	 	 	resultMat.push(parseInt(expr.match(rex)[0]));
	 	 	 else if(expr.match(rex)[0].match(/[-]/)) 	
	 	 	 	resultMat.push(-1); 
	 	 	 else
	 	 	 	resultMat.push(1); 		 
	 	 	}	
	 	 else
	 	 	resultMat.push(0);	 	 
	 	}
	 return resultMat;
	}
function SeperateVars(equations)
	{
	let lhs=[];
	let rhs=[];
	let varnames=[];
	for(let eqn of equations)
		{
		let eqn_left_exprs=eqn.split('=')[0].match(/[+,-]?\d*[a-z]{1}/g);//, is unnecessary in [+,-]
		let eqn_right_exprs=eqn.split('=')[1].match(/[+,-]?\d*[a-z]{1}/g);
		let eqn_left_const=eqn.split('=')[0].match(/[+,-]?\d+(?![a-zA-Z])/g);
		let eqn_right_const=eqn.split('=')[1].match(/[+,-]?\d+(?![a-zA-Z])/g);
		if(!eqn_left_exprs) eqn_left_exprs=[];
		if(!eqn_right_exprs) eqn_right_exprs=[];
		if(!eqn_left_const) eqn_left_const=[];
		if(!eqn_right_const) eqn_right_const=[];
		let combinedLeftArr=eqn_left_exprs.concat(eqn_right_exprs.map(x=>
																		 {
																		 	if(x[0]=='+') return '-'+x.slice(1);
																		 	else if(x[0]=='-') return '+'+x.slice(1);
																		 	else return '-'+x;
																		 }
																	  )
												 );
		if(eqn_left_const.length==0 && eqn_right_const.length==0) rhs.push(0);
		else if(eqn_right_const.length!=0) rhs.push(parseInt(eqn_right_const[0]));
		else if(eqn_left_const.length!=0) rhs.push(-1*parseInt(eqn_left_const[0]));
        varnames=getVarNames(combinedLeftArr,varnames);
		lhs.push(combinedLeftArr.join(','));
		}
	return [lhs,rhs,varnames];
	}

function getVarNames(arr,varnames)
	{
	for(let elem of arr)
		{
		 let varx=elem.match(/[a-zA-Z]+/g);
		 if(varx && varnames.indexOf(varx[0])==-1)
		 	varnames.push(varx[0]);
		}
	return varnames;
	}

function MatrixMult(a,b)
	{
		if(a[0].length !=b.length) return Array(b.length).fill(0);
		let resultMat=[];
		for(let j=0;j<a.length;j++)
		{
			resultMat.push(b.reduce((sop,row,i)=>row.map((x,k)=>a[j][i]*x+sop[k]), Array(b[0].length).fill(0) )  );
		}
		return resultMat;
	}

function FindDeterminant(matx)
	{
	if(matx.length==1) return matx[0][0];
	 let deter=0;
	for(let j=0;j<matx[0].length;j++)//traverse the top row
		{		 
		 let formedMat=[];
		 let formedArr=[];
		
		 for(let a=1;a<matx.length;a++)
		 	{	
		 	for(let b=0;b<matx[0].length;b++)
		 		{
		 		  if(b==j) continue;
		 		  formedArr.push(matx[a][b]);
		 		  if(formedArr.length >= matx[0].length-1)
		 		  	{
		 		  	 formedMat.push(formedArr);
		 		  	 formedArr=[];
		 		  	}
		 		}		 	
		 	}
		
		 deter+=Math.pow(-1,j) * matx[0][j]*FindDeterminant(formedMat);
		}
	return deter;
	}
//clever solution
function determinant(m) {
  if (m.length == 0) return 0;
  if (m.length == 1) return m[0][0];
  if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  if (m.length > 2) {
    return m.reduce((prev, curr, i, arr) => {
      let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));      
      return prev + (i % 2 == 0 ? 1 : -1 ) * curr[0] * determinant(miniArr);
    }, 0);
  }
};

function transpose(mat){
	let resultMat=[];
	let colMat=[];
	for(let j=0;j<mat[0].length;j++)
		{
		for(let i=0;i<mat.length;i++)
			{
			colMat.push(mat[i][j]);
			}
		resultMat.push(colMat);
		colMat=[];
		}
	return resultMat;
}

function Inverse(mat){
	if(mat.length==1) return [[1/mat[0][0]]];
	let deter=determinant(mat);
	let coF= mat.map(
					(x,i,origMat)=>x.map(
								 (y,j)=> Math.pow(-1,i+j)*determinant( origMat.slice(0,i).concat(origMat.slice(i+1)).map(matrow=>matrow.filter((matElem,k)=>k!=j)) )								 		
						                )						   
		            );
	let adj=transpose(coF);
	return adj.map(x=>x.map(y=>y/deter));
}




function encrypt(text, key) 
	{
	 if(key==0) return text;
	key+='';	
	let regions=["qwertyuiop","asdfghjkl","zxcvbnm,."];
	let regionsUpper=['QWERTYUIOP','ASDFGHJKL','ZXCVBNM<>'];	
	let resultString='';
	for(let ch of text.split(''))
		{	
		let found=false;
		for(let i in regions)
			{
			if(regions[i].indexOf(ch)!=-1)
				{
				resultString+=encodedx(regions[i],key[i],ch);
				found=true;
				break;
				}
			}
		if(found) continue;
		for(let i in regionsUpper)
			{
			if(regionsUpper[i].indexOf(ch)!=-1)
				{
				resultString+=encodedx(regionsUpper[i],key[i],ch);
				found=true;
				break;
				}
			}
			if(!found) resultString+=ch;
		}
		return resultString;
	}

function decrypt(text, key) 
	{
	 if(key==0) return text;
	key+='';
	
	let regions=["qwertyuiop","asdfghjkl","zxcvbnm,."];
	let regionsUpper=['QWERTYUIOP','ASDFGHJKL','ZXCVBNM<>'];
	
	let resultString='';
	for(let ch of text.split(''))
		{
	
		let found=false;
		for(let i in regions)
			{
			if(regions[i].indexOf(ch)!=-1)
				{
				resultString+=decodedx(regions[i],key[i],ch);
				found=true;
				break;
				}
			}
		if(found) continue;
		for(let i in regionsUpper)
			{
			if(regionsUpper[i].indexOf(ch)!=-1)
				{

				resultString+=decodedx(regionsUpper[i],key[i],ch);
				found=true;
				break;
				}
			}
			if(!found) resultString+=ch;
		}
		return resultString;
	}

function encodedx(region,keyNum,ch)
	{
		// console.log(`region:${region},keynum:${keyNum} and ch:${ch}`)
		let chPos=region.indexOf(ch);
		let shiftedPos=(chPos+parseInt(keyNum))%region.length;
		// console.log(`returning ${region[shiftedPos]}`);
		return region[shiftedPos];
	}
function decodedx(region,keyNum,ch)
	{
		// console.log(`region:${region},keynum:${keyNum} and ch:${ch}`)
		let chPos=region.indexOf(ch);
		let shiftedPos=(chPos-parseInt(keyNum));
		if(shiftedPos < 0) shiftedPos+=region.length;
		// console.log(`returning ${region[shiftedPos]}`);
		return region[shiftedPos];
	}



//clever solutions
const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm,.",
              "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM<>"];

const encrypt3 = (text, key) =>
  text.split("")
      .map(shiftLetter("encrypt", key))
      .join("");

const decrypt3 = (text, key) =>
  text.split("")
      .map(shiftLetter("decrypt", key))
      .join("");

const shiftLetter = (mode, key) => (l) => {
  let d = (mode == "encrypt") ? 1 : -1;
  let i = rows.findIndex(x => x.includes(l));
  if (i == -1) return l;
  
  let j = rows[i].indexOf(l);
  let k = ~~(key / Math.pow(10, mod(2-i, 3))) % 10;  
  return rows[i][mod(j + d*k, rows[i].length)];
}

const mod = (m,n) => ((m % n) + n) % n;


const key=["qwertyuiop","asdfghjkl","zxcvbnm,.","QWERTYUIOP","ASDFGHJKL","ZXCVBNM<>"],
      cv=(c,k,m,f)=>(f=key.filter(x=>x.includes(c))[0])?f[(+("000"+k).slice(-3)[key.indexOf(f)%3]*m+f.indexOf(c)+f.length)%f.length]:c,
      encrypt2=(s,k)=>s.replace(/./g,x=>cv(x,k,1)), decrypt2=(s,k)=>s.replace(/./g,x=>cv(x,k,-1))



function GetDataInTree(data)
	{
		data=data.split('\r\n');		
		let rootx={value:0,left:null,right:null};
		let prevLayer=[];
		for(let i=0;i<data.length;i++)
			{
			let presentLayer=data[i].split(' ').map(x=>parseInt(x));
			if(i==0)
				{
				  rootx.value=presentLayer[0];
				  prevLayer=[rootx];
				  continue;
				}
			let prevLayerNew=[];
			let debugString='';
			for(let j in presentLayer)
				{				  
				  let node={value: presentLayer[j],left:null,right:null};	
				  prevLayerNew.push(node);	  
				  if(j%2==0)
				  	prevLayer[parseInt(j/2)].left=node;
				  else
				  	prevLayer[parseInt(j/2)].right=node;
				}
			
			prevLayer=prevLayerNew;
			}
		return rootx;
	}

function rlrTraverse(rootx)
	{	 
	 if(!rootx) return '$';
	 // if(!rootx.left || !rootx.right) return '$';
	 let leftTraversal=rootx.left?rlrTraverse(rootx.left):'_';
	 let rightTraversal=rootx.right?rlrTraverse(rootx.right):'_';
	 return rootx.value+'->'+leftTraversal+'->'+rightTraversal;
	}




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

