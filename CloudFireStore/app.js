const cafeList =document.querySelector('#cafe-list');
const form     =document.querySelector('#add-cafe-form');
const form2     =document.querySelector('#update-cafe-form');

let recordUpdated="abc";
/*
let sayhello=()=>{
	if(document.querySelector('#floatingBox').style.display=="block")
		document.querySelector('#floatingBox').style.display="none";
}
document.onmousedown=sayhello;
*/
function renderCafe(doc)
	{
		let li          =document.createElement('li');
		let name        =document.createElement('span');
		let city        =document.createElement('span');
		let cross       =document.createElement('div');
		let updateB     =document.createElement('div');


		updateB.setAttribute('id','update');
		li.setAttribute('data-id',doc.id);
		name.textContent=doc.data().name;
		city.textContent=doc.data().city;
		cross.textContent='x';
		updateB.textContent='Update';
		li.appendChild(name);
		li.appendChild(city);
		li.appendChild(updateB);
		li.appendChild(cross);
		cafeList.appendChild(li);


		updateB.addEventListener('click',
										 (e)=>
										 	   {
										 	   	document.querySelector('#floatingBox').style.display='block';
										 	   	form2.nameupdated.value=doc.data().name;
										 	   	form2.cityupdated.value=doc.data().city;
										 	   	recordUpdated=doc.id;
										 	   }
							    );
		//deleting data starts
		cross.addEventListener('click',
									   (e)=>
									   		{
									   			e.stopPropagation();
									   			let id=e.target.parentElement.getAttribute('data-id');
									   			// alert(doc.data().name+" deleted");
									   			db.collection('Cafes').doc(id).delete();
									   		}
							  );
		//deleting data ends
	}
/*
db.collection('Cafes').where('city','==','London').orderBy('name').get().then(
								   (snapshot)=>
								   				{
								   					snapshot.docs.forEach(doc=>
								   											{
								   												renderCafe(doc);
								   											}
								   						               )
								   				}
							     );
*/

db.collection('Cafes').orderBy('name').onSnapshot(
								   (snapshot)=>
								   				{
								   					let changes=snapshot.docChanges();
								   					changes.forEach(
								   									change=>
								   											{
								   												console.log(change.type);
								   												if(change.type=='added')
								   													renderCafe(change.doc);
								   												else if(change.type=='removed')
								   													{
								   														let li=cafeList.querySelector(`[data-id=${change.doc.id}]`);
								   														cafeList.removeChild(li);

								   													}
								   											}
								   						           );
								   				}
							     );

form2.addEventListener('submit',
								(e)=>
									 {
									 e.preventDefault();
									  if(!form2.nameupdated.value.match(/^[A-Z]{1}[a-z]+[a-z\s]*[a-z]+$/))
							   		  		{
							   		  		alert("Cafe Name is Unusual");
							   		  		document.querySelector('#floatingBox').style.display="none";
							   		  		return;
							   		  		}
							   		  if(!form2.cityupdated.value.match(/^[A-Z]{1}[a-z]+[a-z\s]*[a-z]+$/))
							   		  		{
							   		  		alert("City Name is Unusual");
							   		  		document.querySelector('#floatingBox').style.display="none";
							   		  		return;
							   		  		}
							   		  	db.collection('Cafes').doc(recordUpdated)
							   		  	                      .update
							   		  	                          (
							   		  	                          	{
							   		  	                          		name:form2.nameupdated.value,
							   		  	                          		city:form2.cityupdated.value,
							   		  	                          	}
							   		  	                          )
							   		  	                      .then
							   		  	                      	  (
							   		  	                      	  	(resp)=>
							   		  	                      	  			{
							   		  	                      	  			form2.nameupdated.value="";
																		 	form2.cityupdated.value="";
																		 	document.querySelector('#floatingBox').style.display="none";
																		 	alert("ok");
							   		  	                      	  			}
							   		  	                      	  );
									 	
									 }
	                   );
document.querySelector('#dismissButton').addEventListener('click',
																  (e)=>
																  	   {
																  	   	e.preventDefault();
																  	   	document.querySelector('#floatingBox').style.display="none";
																  	   }
														 );
form.addEventListener('submit',
							   (e)=>
							   		{
							   		  e.preventDefault();
							   		  if(!form.name.value.match(/^[A-Z]{1}[a-z]+[a-z\s]*[a-z]+$/))
							   		  		{
							   		  		alert("Cafe Name is Unusual");
							   		  		return;
							   		  		}
							   		  if(!form.city.value.match(/^[A-Z]{1}[a-z]+[a-z\s]*[a-z]+$/))
							   		  		{
							   		  		alert("City Name is Unusual");
							   		  		return;
							   		  		}

							   		  	
							   		  db.collection('Cafes').add(
							   		  							  {
							   		  							  	name:form.name.value,
							   		  							  	city:form.city.value
							   		  							  }
							   		  	                        )
							   		  						.then(
							   		  							resp=>
							   		  								   {
							   		  								   	form.name.value="";
							   		  								   	form.city.value="";
							   		  								   	alert("done");
							   		  								   }
							   		  							);						   		  
							   		  
							   		}
					 )