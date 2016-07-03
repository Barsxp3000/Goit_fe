'use strict';

//возведение в степень

function powHwork() {

    function powNat(a, n) {
        var result = 1;
        for (var i = 0; i < n; i++) {
            result *= a;
        }
        return result;
    }

    function powInt(a, n) {
        if (n >= 0) return powNat(a, n);
        return powNat(1 / a, -n);
    }

    var a = prompt('Введите число', '');
    var n = prompt('Введите степень', '');

    console.log(powInt(a, n));
    var message = powInt(a, n);
    alert(message);
}

//заполнение массива

function arr() {

    var userArr = [];

    for (var i = 0; i < 5; i++) {
        userArr.push(prompt('Enter user Name in array', ''));
    }
    console.log(userArr);

    var userName = prompt('Enter you correct User name', '');

    function findUser() {
        for (var i = 0; i < userArr.length; i++) {
            if (userName == userArr[i]) {
                return true;
            }
        }
        return false;
    }
    if (findUser()) {
        alert(userName + ', hello bratanushka!!!');
    } else {
        alert(userName + ', you a not from this pesochnica');
    }

}
