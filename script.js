'use strict';

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

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = +prompt("Во сколько обойдется?");
    if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        
    } 
}

function detectDayBudget(){
    return appData.budget / 30;
}

let level = "не определён";
function detectLevel() {
    if (appData.moneyPerDay < 400) {
        level = "низкий";} 
    else if (appData.moneyPerDay >= 400 && appData.moneyPerDay < 2000) {
        level = "средний";}
    else if (appData.moneyPerDay >= 2000) {
        level = "высокий";}
    return level;  
}

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let a = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = a;
    }
}


appData.moneyPerDay = detectDayBudget();
detectLevel();


alert("Бюджет на один день = " + appData.moneyPerDay);
alert("Уровень дохода - " + level);






