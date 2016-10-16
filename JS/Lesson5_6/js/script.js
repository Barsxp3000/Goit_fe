/*
Нужно сделать вот такой таймер (выбираете Stop Watch).

Кнопка Start запускает таймер, так же нужно выводить милисекунды. После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
Кнопка reset останавливает и обнуляет таймер.
Дизайн сделайте свой, используя Pure или Bootstrap.
*/

var time = 0;
var running = 0;
function startPause(){
  if(running==0){
    running=1;
    increment();
    document.getElementById('start').innerHTML='Pause';
    document.getElementById('startPause').style.backgroundColor = "blue";
  }else{
    running=0;
    document.getElementById('start').innerHTML='Cont..';
    document.getElementById('startPause').style.backgroundColor = "green";
  }
}
function reset(){
  running=0;
  time=0;
  document.getElementById('start').innerHTML='Start';
  document.getElementById('output').innerHTML='00:00:00:0';
}

function increment(){
  if (running==1){
    setTimeout (function(){
      time++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10%60);
      var hours = Math.floor(time/10/60/60);
      var tenths = time%10;
      if(mins<10){
        mins = "0" + mins;
      }
      if(secs<10){
        secs = "0" + secs;
      }
      document.getElementById('output').innerHTML = hours+ ":" + mins + ":" + secs + ":" + tenths + "0";
      increment();
    },50)
  }
}
