//selector
const time=document.getElementById('time');
const greeting=document.getElementById("greeting");
const text=document.getElementById("text");
const day=document.getElementById("day");


//event handler

text.addEventListener("keypress",setName);
text.addEventListener("blur",setName);

//function
function showtime(){
	let today=new Date();
	let hours=today.getHours();
	let min=today.getMinutes();
	let sec=today.getSeconds();
	let date=today.toDateString();

	const ampm=(hours>=12) ? 'PM' :'AM';//AM PM 

	var greet='';
	if(hours>=12 && hours<17)
		{
			greet='Good Afternoon';
			document.body.style.backgroundImage="url('C:\Users\HP\Desktop\afternoon_scene.jpg')";
		}
	else if(hours>=17 && hours<21)
		{greet='Good Evening';
		document.body.style.backgroundImage="url('C:\Users\HP\Desktop\evening_scene.jpg')";
		}
	else if(hours>=21 && hours<24)
		{greet='Good Night';
		document.body.style.backgroundImage="url('C:\Users\HP\Desktop\night_scene.jpg')";
		//document.body.style.color="white";
		}
	else
		{
		greet='Good Morning';
		document.body.style.backgroundImage="url('C:\Users\HP\Desktop\morning_scene.jpg')";
		
       }
	greeting.innerHTML=greet;
	//To convert to 12 hours fromat
	hours=hours%12 ||12;

	time.innerHTML=`${addZero(hours)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>  </span>${ampm}`;
	day.innerHTML=`${date}`;

	setTimeout(showtime,1000);


}

function addZero(n){
	return (parseInt(n,10)<10?'0':'')+n;
}

function getText(){
	if(localStorage.getItem("mytext")===null){
		text.innerHTML="[Enter text Here]";
	}
	else
		text.innerHTML=localStorage.getItem("mytext");
}
function setName(e){
	if(e.type==="keypress"){
		if(e.keyCode==13)
			{localStorage.setItem("mytext",e.target.innerHTML);
			text.blur();
		}

	}
	else
	{
		localStorage.setItem("mytext",e.target.innerHTML);
	}
}
//function call
showtime();
getText();