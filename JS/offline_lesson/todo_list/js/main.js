window.onload = function() {

var todo = document.getElementById('vvod_task');
var newLi = document.createElement('li');
var chekbox = document.createElement ('input')
chekbox.setAttribute("type", "checkbox");

	function todoAdd() {
			var vvod = (document.getElementById("vvod_task").value);
			if (vvod != '') {
					newLi.innerHTML = (vvod);
					todo.parentNode.insertBefore(newLi,todo.parentNode.firstChild);
			}
			if (vvod != '') {
					(document.getElementById("vvod_task").value) = "";
			} else {
					toolTipShow();
			}
	}


	function toolTipShow() {
			var element = document.getElementsByClassName("tool_tips")[0];
			element.style.display = 'inline-block';
			setTimeout(function toolTipHide() {
					element.style.display = 'none';
			}, 1000)
	}

  document.getElementById("add_task").onclick = todoAdd;

}
