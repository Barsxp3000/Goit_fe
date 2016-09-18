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
            toolTipShow();
        }
        if (chatL != '') {
            (document.getElementById("left_form").value) = "";
        }
    }

    function sendR() {
        var chatR = (document.getElementById("right_form").value);
        var newLi = document.createElement('li');
        if (chatR != '') {
            newLi.innerHTML = ('<string id="right"> You says: </string>' + (chatR));
            sms_box.appendChild(newLi);
        } else {
            toolTipShow();
        }
        if (chatR != '') {
            (document.getElementById("right_form").value) = "";
        }
    }

    function toolTipShow() {
        var element = document.getElementsByClassName("tool_tips")[0];
        element.style.display = 'inline-block';
        setTimeout(function toolTipHide() {
            element.style.display = 'none';
        }, 1000)
    }

    document.getElementById("send_left").onclick = sendL;
    document.getElementById("send_right").onclick = sendR;
}
