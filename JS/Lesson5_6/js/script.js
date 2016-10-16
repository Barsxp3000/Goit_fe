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
}

function reset() {
    running = 0;
    time = 0;
    document.getElementById('start').innerHTML = 'Start';
    document.getElementById('time').innerHTML = '0:00:00';
    document.getElementById('sec').innerHTML = '00';

}

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10 % 60);
            var hours = Math.floor(time / 10 / 60 / 60);
            var tenths = time % 10;
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById('time').innerHTML = hours + ":" + mins + ":" + secs;
            document.getElementById('sec').innerHTML = tenths + "0";
            increment();
        }, 50)
    }
}
