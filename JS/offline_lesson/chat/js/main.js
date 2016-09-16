window.onload = function() {
    var leftForm = document.getElementById('left_form');
    var rightForm = document.getElementById('right_form');
    var center = document.querySelector('ul');

    function sendL() {
        var chatL
        var newLi
        chatL = (document.getElementById("left_form").value);
        newLi = document.createElement('li');
        if (chatL != '') {
            newLi.innerHTML = ('<string id="left_form"> You says: </string>' + (chatL));
						sms_box.appendChild(newLi);
					} else {
						toolTipsWindow();
					}
        if (chatL != '') {
            (document.getElementById("left_form").value) = "";
        }
    }

    function sendR() {
        var chatR = (document.getElementById("right_form").value);
        var newLi = document.createElement('li');
        newLi.innerHTML = ('<string id="right"> He says: </string>' + (chatR));
        sms_box.appendChild(newLi);
        if (chatR != '') {
            (document.getElementById("right_form").value) = "";
        }
    }
function toolTipsWindow() {
	var timerId = setInterval(showWindow(), 500);

setTimeout(function() {
  clearInterval(timerId);
}, 5000);

function showWindow() {
	document.getElementsByClassName("tool_tips")[0].style.display = 'inline-block';
}
}


    document.getElementById("send_left").onclick = sendL;
    document.getElementById("send_right").onclick = sendR;
}
