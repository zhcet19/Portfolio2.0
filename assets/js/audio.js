var vid = document.getElementById("myAudio");
function setHalfVolume() { 
  vid.volume = 0.15;
} 
setHalfVolume();


const checkbox1 = document.getElementById('checkbox-1');

checkbox1.addEventListener('change', ()=>{

  var audio=document.getElementById("audiosrc");
audio.src = "../audio/music2.mp3";
  
   
})