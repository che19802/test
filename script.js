'use strict';

// let
// var
// const
/* let objectX = {
    x1: 1,
    x2: "str",
    x3: true
};   */
// console.log();
// alert();
// confirm();
// let x = confirm(); 
// let x = prompt("", "");
// typeof(x);
// if () {} else if () {} else {};
// (условие) ? если условие верно : если условие неверно;
/* switch (x) {
    case x < 0:
        действие
        break
    case x > 0:
        действие
        break
    default:
        действие
        break
}   */

let money = +prompt("Ваш бюджет в месяц", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = +prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = +prompt("Во сколько обойдется?");

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert("Бюджет на один день = " + (answer2 + answer4)/30);







