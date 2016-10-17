var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById('start').innerHTML = 'Pause';
        document.getElementById('startPause').style.backgroundColor = "rgb(61, 188, 205)";
    } else {
        running = 0;
        document.getElementById('start').innerHTML = 'Cont..';
        document.getElementById('startPause').style.backgroundColor = "rgb(95, 244, 181)";
    }
};
var reset = document.getElementById('reset');
reset.onclick = function() {
  running = 0;
time = -4;
document.getElementById('sec').innerHTML = '000';
document.getElementById('start').innerHTML = 'Start';
document.getElementById('time').innerHTML = '0:00:00';
};

function increment() {
    if (running != 0) {
        setTimeout(function () {
            time += 4;
            var mins = Math.floor(time / 1000 / 60);
            var secs = Math.floor(time / 1000 % 60);
            var hours = Math.floor(time / 1000 / 60 / 60);
            var mili = time % 1000;

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            if (mili < 100) {
                mili = '0' + mili
            }
            if (time == 0) {
              mili = '0' + mili
            }
            document.getElementById('time').innerHTML = hours + ":" + mins + ":" + secs;
            document.getElementById('sec').innerHTML = mili;
            increment();
        }, 1);
    };
};
