const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener('click',
	()=>{
		CreateNotification();
	}
	);

const CreateNotification=()=>{
	const notif= document.createElement('div');
	notif.classList.add('toast');
	notif.innerText="This is awesome";
	container.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},3000);
}