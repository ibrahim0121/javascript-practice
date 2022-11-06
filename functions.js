//functions


// function declaration -декларативная функция
// function expression - выражение функция
// arrow function - стрлечная функция
//IIFE immediate invoked function expression - самавызывающаяся функция
//anonymous function - анонимная функция,CALLBACK- функция обратного вызова


// function declaration -декларативная функция;
// функцияны каалаган жерден чакырса болот(устунон да астынан да чакырса болот)
//argument - parameter
//
// function sum ( a,b //argument ){
//
// }
// console.log(sum(10,5 //parameter))


//multiply - *
// power - **
//subtract - -
//getRemainder -%


function makeNegative(a) {
    return a * -1   //минус кылып чыгарып берет
}

console.log(makeNegative(10))
console.log(makeNegative(20))
console.log(makeNegative(30))
console.log(makeNegative(12))
console.log(makeNegative(234))


//// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза",
// // если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

// let str = 'Максимально Ужасно'
// let symbol ="a"
//
// function task10(str,symbol){
//     return str.includes(symbol)
// }
//
// console.log(task10(str,symbol))
// // 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
// каждого слова строки в верхний регистр.

// function task11(str) {
//     let a = str[0]
//     let b = str[12]
//     return a.toUpperCase() + str.slice(1,11).toLowerCase() + " " + b.toUpperCase() +str.slice(13).toLowerCase()
// }
// console.log(task11('макСИМАЛЬНО ужаСНО'))


// // 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// function task12 (str,symbol){
// return str.indexOf(symbol)
// // return str.lastIndexOf(symbol)
// }
// console.log(task12( 'Максимально Ужасно',"а"))

// // 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// function task13 (str,symbol){
//     return str.indexOf(symbol)
// // return str.lastIndexOf(symbol)
// }
// console.log(task13( 'Максимально Ужасно',"а"))


// // 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
 function task14(str){

   // return str.substr(3,5)
   // return str.substring(3,8)
   //   return str.slice(3,8)

 }

// console.log(task14('aaa bbb ccc'))


// // 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.

// function task15 (str){
//     return str.replace(/-/g, "/")
// }
// console.log(task15('17-02-2021'))


// // 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте,
// есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".
function task16 (str,a){
let index = str.indexOf(a)
    if (index > str.length / 2){
        return 2
    } else{
        return 1
    }
}

console.log(task16('Максимально Ужасно',"a"))
// // 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да,
// то выведите в консоль "Совпадает", иначе - "Не совпадает".


// // 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней. Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".


