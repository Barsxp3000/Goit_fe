window.onload = function(){
	var leftForm = document.getElementById('left_form');

	var rightForm = document.getElementById('right_form');


	var center =  document.querySelector('ul');

	function sendL() {
	var	chatL = (document.getElementById("left_form").value);
	var newLi = document.createElement('li');
	newLi.innerHTML = ('<string id="left_form"> You says: </string>'+ (chatL));
		sms_box.appendChild(newLi);
	}

	function sendR() {
	var	chatR = (document.getElementById("right_form").value);
	var newLi = document.createElement('li');
	newLi.innerHTML = ('<string id="right"> He says: </string>'+ (chatR));
		sms_box.appendChild(newLi);
	}
	document.getElementById("send_right").onclick = sendR;
	document.getElementById("send_left").onclick = sendL;
}
