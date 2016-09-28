
window.onload = function () {
    var tasks = [];

    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    function saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function updateView() {
        var html = '';

        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            html += '<div class="task" id="' + i + '">' +
                        // '<div class="task-status">' +
                        //     (task.done
                        //         ? '<input type="checkbox" checked="checked" />'
                        // //         : '<input type="checkbox" />') +
                        // '</div>' +
                        // '<div class="task-name ' + (task.done ? 'task-name-done' : '') + '">' +
                            task.name +
                        '</div>' 
                    // '</div>';
        }

        document.querySelector('.tasks').innerHTML = html;
    }

    updateView();



		document.querySelector('#addTaskFormLeft').addEventListener('submit', function (e) {
				e.preventDefault();
				var taskName = e.target.querySelector('[name="text_left"]').value;
          if (taskName != '') {
				e.target.querySelector('[name="text_left"]').value = '';
				e.target.querySelector('[name="text_left"]').focus();
				tasks.push({
						done: false,
						name: taskName
				});
				saveToLocalStorage();
				updateView();
      }
      else {
        toolTipShow();
      };
		});


    document.querySelector('#addTaskFormRight').addEventListener('submit', function (e) {
        e.preventDefault();
        var taskName = e.target.querySelector('[name="text_right"]').value;
        if (taskName != '') {
        e.target.querySelector('[name="text_right"]').value = '';
        e.target.querySelector('[name="text_right"]').focus();
        tasks.push({
            done: false,
            name: taskName
        });
        saveToLocalStorage();
        updateView();
      }
      else {
        toolTipShow();
      };
    });
    document.querySelector('.tasks').addEventListener('click', function (e) {
        var current = e.target;
        while (current.className !== 'task' && !!current) {
            current = current.parentNode;
        }
        var taskId = Number(current.id);
        var task = tasks[taskId];
        task.done = !task.done;
        updateView();
        saveToLocalStorage();
    });
    document.querySelector('#clearDone').addEventListener('click', function(e) {
        e.preventDefault();
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            if (task.done) {
                tasks.splice(i, 1);
                i--;
            }
        }
        updateView();
        saveToLocalStorage();
    })
    function toolTipShow() {
        var element = document.getElementsByClassName("tool_tips")[0];
        element.style.display = 'inline-block';
        setTimeout(function toolTipHide() {
            element.style.display = 'none';
        }, 1000)
    }

};
