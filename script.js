function openApp(id){
 document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}
function goHome(){ openApp('home'); }

setInterval(()=>{ time.innerText=new Date().toLocaleTimeString(); },1000);

// Phone
function dialNum(n){ dial.value+=n; }
function clearDial(){ dial.value=''; }
function call(){ alert("Calling "+dial.value); }

// Contacts
function addContact(){
 contactList.innerHTML+=`<li>${cname.value} - ${cnum.value}</li>`;
 cname.value=cnum.value='';
}

// Messages
function sendSMS(){
 smsBox.innerHTML+=`<p>${sms.value}</p>`;
 sms.value='';
}

// WhatsApp
function sendWA(){
 chat.innerHTML+=`<p>🟢 ${wa.value}</p>`;
 wa.value='';
}

// Camera
function startCamera(){
 navigator.mediaDevices.getUserMedia({video:true})
 .then(s=>video.srcObject=s);
}

// Calculator
function calcBtn(v){
 if(v=='=') calc.value=eval(calc.value);
 else calc.value+=v;
}

// Dark
function toggleDark(){ document.querySelector('.phone').classList.toggle('dark'); }


/* Touch Feedback Vibration */
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(20);
  }
}

/* Apply vibration to all buttons & apps */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button, .app").forEach(el => {
    el.addEventListener("touchstart", vibrate);
    el.addEventListener("click", vibrate);
  });
});
