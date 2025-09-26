let mining=false,seconds=8*60*60,interval;
function startMining(){
  if(mining) return;
  mining=true; seconds=8*60*60;
  document.getElementById("mineBtn").disabled=true;
  interval=setInterval(()=>{
    if(seconds>0){
      let h=Math.floor(seconds/3600);
      let m=Math.floor((seconds%3600)/60);
      let s=seconds%60;
      document.getElementById("timer").textContent=`${h}h ${m}m ${s}s`;
      seconds--;
    } else {
      clearInterval(interval);
      alert("Mining ended!");
      mining=false;
      document.getElementById("mineBtn").disabled=false;
    }
  },1000);
}

function sendMessage(){
  const chat=document.getElementById("chat");
  const input=document.getElementById("msgInput");
  if(chat && input && input.value.trim()!==""){
    const div=document.createElement("div");
    div.className="msg";
    div.innerHTML="<b>You:</b> "+input.value;
    chat.appendChild(div);
    input.value="";
    chat.scrollTop=chat.scrollHeight;
  }
}
