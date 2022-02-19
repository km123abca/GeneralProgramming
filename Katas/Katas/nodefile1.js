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

function denico(key,message){
	
}

function chooseBestSum(t, k, ls,tT=t) {
    if(t < 0 || ls.length < k) return -1;
    if(k==0) return tT-t;
    ls.splice(0,1);
    let x1=chooseBestSum(t,k,ls,tT);
    let x2=chooseBestSum(t-ls[0],k-1,ls,tT);
    if(x1 > x2) return x1;
    return x2;
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
		// data=JSON.stringify(encipher(strxx,key));
		key='EPSDUCVWYM+ZLKXNBTFGORIJHAQ';
		period=5;
		inp='DEFEND THE EAST WALL OF THE CASTLE+';//to be encoded
		inp='SUEFECPHSEGYYJIXIMFOFOCEJLBSP';//to be decoded
		// data=JSON.stringify(trifidEncode(key,period,inp));
		// data=trifidDecode(key,period,inp);
		// data=JSON.stringify(populateKeyMatrix(key));		

		// orig="thecatinthebage";
		// key="xxx xxx xx";
		// data=JSON.stringify(IntroduceSpaces(orig,key));
		

		const deck = [
					  "2C", "6H", "5S", "7S", "JS", "8C", "7C", "2D", "3D", "8D", "3C", "KS", "QS",
					  "2S", "7D", "TD", "QC", "TS", "AH", "5C", "XB", "TH", "AC", "9H", "6D", "4C",
					  "7H", "3S", "5H", "KC", "3H", "6C", "4D", "8H", "KH", "8S", "JC", "5D", "TC",
					  "9D", "2H", "9C", "4S", "4H", "QD", "AS", "JH", "6S", "QH", "9S", "XR", "JD",
					  "AD", "KD"
					 ];


	



		// let blackCards=['AC','2C','3C','4C','5C','6C','7C','8C','9C','TC','JC','QC','KC','AS','2S','3S','4S','5S','6S','7S','8S','9S','TS','JS','QS','KS','XB'];
		// let   redCards=['AD','2D','3D','4D','5D','6D','7D','8D','9D','TD','JD','QD','KD','AH','2H','3H','4H','5H','6H','7H','8H','9H','TH','JH','QH','KH','XR'];
		// let   allAlphs=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
		// data=printOutArray(arrangeDeck(deck));

		// message="ATTACK TONIGHT ON CODEWARS";
		// codedmessage="QNBSCTZQOLOBZNKOHUHGLQWLOK";	
		// message="A";	
		// codedmessage="B"; 

		// if(process.argv[2] == 'd')
		// data=CardChameleon.decrypt(codedmessage,deck);
		// else
		// data=CardChameleon.encrypt(message,deck);

		// scores=[15, 10, 9, 5];
		// weights = [1, 5, 3, 4];
		// capacity = 8;
		// data=JSON.stringify(packBagpack(scores, weights, capacity));

		// data=''+printOutMatrix(FindAllDiceCombs(8,3));
		// data= ''+ josephusSurvivor(5,3);
		// gold = [140,649,340,982,105,86,56,610,340,879];
		// data= JSON.stringify(GetAllElems(gold).map(subarr=>subarr.map(i=>gold[i])));
		// data= JSON.stringify(distributionOf(gold));

		// data=nico("crazy","secretmessage");
		// data2=denico_clever("crazy",data);
		ls=[162, 163, 165, 165, 167, 168, 170, 172, 173, 175];
		k=3;
		t=174;
		data=''+chooseBestSum(t, k, ls);



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

