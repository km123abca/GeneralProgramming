//Finding all combinations by which a number can be written as a sum of smaller numbers


AllCombs2=(num,maxAllowed)=>{
	// console.log("called with "+num+","+maxAllowed);
	if(num == maxAllowed || num==0) return 1;
	if(num < maxAllowed) return 0;
	if(num < 2* maxAllowed) return 1;
	
	let i=0;
	let numPosibs=0;
	while(num >= i*maxAllowed)
	{
		let res= AllCombs2(num- i*maxAllowed,maxAllowed+1);
		// if(res==0) break;
		numPosibs+=res;
		i+=1;
	}
	return numPosibs;
}
function sumx(num)
	{
		return AllCombs2(num,1);
	}


//packbagging algo
function packBagpack(scores, weights, capacity) {
  let load = Array.from({ length: capacity + 1 }, () => 0);
  for (let i = 0; i < weights.length; i++) {
    load = load.map(
      (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i])
    );
  }
  return load.pop();
}


//recursive way to find gcd
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFracsmart(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}
