window.onload=function(){
    var btnStart = document.getElementById('button-start');
    var btnStop = document.getElementById('button-stop');
    var btnReset = document.getElementById('button-reset');
    var appendSeconds=document.getElementById('seconds');
    var appendTens=document.getElementById('tens');
    var seconds=00;
    var  tens=00;
    var Interval
    btnStart.onclick=function(){
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    }
    btnStop.onclick=function(){
        clearInterval(Interval);
    }
    btnReset.onclick=function(){
        clearInterval(Interval);
        tens='00';
        seconds='00';
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
    }
    function startTimer (){
        tens++;
        if(tens<9){
            appendTens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML = seconds;
          }
    }
}
