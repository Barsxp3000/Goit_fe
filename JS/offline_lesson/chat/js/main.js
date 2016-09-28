// window.onload = function() {
//     var leftForm = document.getElementById('left_form');
//     var rightForm = document.getElementById('right_form');
//     var center = document.getElementById('sms_box');
//
//
//     function sendL() {
//         var chatL = (document.getElementById("left_form").value);
//         var newLi = document.createElement('li');
//         if (chatL != '') {
//             newLi.innerHTML = ('<string id="left_form" > Левое полушарие: </string>' + (chatL));
//             center.parentNode.insertBefore(newLi, center.parentNode.firstChild);
//         }
//         if (chatL != '') {
//             (document.getElementById("left_form").value) = "";
//         } else {
//             toolTipShow();
//         }
//     }
//
//     function sendR() {
//         var chatR = (document.getElementById("right_form").value);
//         var newLi = document.createElement('li');
//         if (chatR != '') {
//             newLi.innerHTML = ('<string id="right"> Правое полушарие: </string>' + (chatR));
//             center.parentNode.insertBefore(newLi, center.parentNode.firstChild);
//         }
//         if (chatR != '') {
//             (document.getElementById("right_form").value) = "";
//         } else {
//             toolTipShow();
//         }
//     }

    function toolTipShow() {
        var element = document.getElementsByClassName("tool_tips")[0];
        element.style.display = 'inline-block';
        setTimeout(function toolTipHide() {
            element.style.display = 'none';
        }, 1000)
    }
//
//     document.getElementById("send_left").onclick = sendL;
//     document.getElementById("send_right").onclick = sendR;
// }
