let LogData=()=>{
	let debName=document.querySelector("#db").value;
	let credName=document.querySelector("#cd").value;
	let amount=document.querySelector("#amt").value;
	document.querySelector("#ledgerSpace").innerHTML+=`<table id="stab">														
														<tr><td>${debName}</td><td>${amount}</td><td></td></tr>
														<tr><td>${credName}</td><td></td><td>${amount}</td></tr>
														</table>`;

}