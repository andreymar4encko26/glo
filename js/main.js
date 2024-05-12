let title= "первый проэкт ";
let screens ='Простые,Сложные,Интерактивные'.toLowerCase();
let screenPrice =2000;
let rollback =30;
let fullPrice ="40000";
let adaptive =true;
let screensArray= screens.split(',')

alert('первый урок');

console.log(typeof(title,fullPrice,adaptive))
console.log(screens.length)
console.log(`Стоимость верстки экранов ${screenPrice} рублей/`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log(screensArray)
console.log('первый урок')
console.log(fullPrice * (rollback/100))