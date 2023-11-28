//1 Задание
var medalForScore = function (score) {
    if (score < 10) {
        return "Нет медали";
    }
    if (score >= 10 && score <= 15) {
        return "Бронза";
    }
    if (score >= 16 && score <= 20) {
        return "Серебро";
    }
    return "Золото";
};
var userScore = prompt("Введите количество набранных очков:");
var result = medalForScore(parseInt(userScore, 20));

if (result) {
    alert("Ваша медаль: " + result);
} else {
    alert("Неправильный ввод");
};

//2 Задание
var areArraysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};
var arr1 = [3, 2, 3, 2, 3];
var arr2 = [2, 3, 2, 3, 2];
console.log(areArraysSame(arr1, arr2));
