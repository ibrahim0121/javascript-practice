
//string -строка


// ""


// let name ="jyrgal"
// console.log(name)

// let country ="UNITED STATES OF AMERICA"
// [] - index
// console.log(country[0])
// console.log(country[5])
// console.log(country.length)
// console.log("    ".length)
// console.log(country[23]) b
// console.log(country[country.length -1])
// console.log(country[Math.floor(country.length/2)])



// методы
// let company ="Googleo";

// indexOf-солдон он жака
//lastIndexOf-ондон сол жака

// console.log(company.indexOf("o"))
// console.log(company.lastIndexOf("o"))

//includes --boolean туеундо чыгарып берет

// console.log(company.includes("a"))
// console.log(company.includes("g"))

//toUppercase
//toLoverCase

// console.log(company.toLowerCase())
// console.log(company.toUpperCase())

//startsWith- башкы тамгасын чыгарып берет (boolean) турундо
//endsWith - акыркы тамгасын
// console.log(company.startsWith("G"))
// console.log(company.endsWith("o"))


//slice
//substring
//substr

let user ="Konstantin"
// console.log(user.slice(0,4))
// console.log(user.slice(4))
// console.log(user.slice(0))
// console.log(user.slice())
// console.log(user.slice(-5))


//substring
console.log(user.substring(0,7))


//substr
console.log(user.substr(0,5))

//repeat
// console.log(user.repeat(5))
//
// //trim
//
// console.log("       0999   ".trim().length)


let name = "ali"
// let surname = "bekov"

//concat
// console.log( name + " " + surname)
// console.log(name.concat(surname))

//charAt
console.log(name.charAt(0))


//replace - тамгаларын башка тамгага озгортсо болот
// console.log(name.replace("a","y"))


//backtick -``
//
// let name ="Jaslan"
// let floor = 4
// let country = "KG"
// console.log(`Hello ${name},he lives on the ${floor}th floor`)




// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str ='Привет, Мир!'
// console.log(str)

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
// С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.

// let str1 ='Привет, '
// let  str2 ='Мир!'
// console.log(str1 + str2)

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = "Myrza"
// console.log(`Привет ${name}`)

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.

// let age =25;
// console.log(`mne ${age} let`)

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

// let days = 365;
// let planet = "Земля"
// let sun = "Солнце"
// let population = "7 млрд"

// Typeof:
// 1. Вам дана переменная a=50. Выведите в консоль тип значения этой переменной.
// let a =50;
// console.log(typeof a)

// 2. Вам даны переменные a=10, b=35. Создайте переменную result, и сделайте так,
// чтобы в консоли значение переменной result было string.

// let a =10;
// let b=35;
// let result
// console.log( result )
// 3. Вам дана переменная a=10, выведите в консоль тип этой переменной - string.

// let a =10;
// console.log( typeof a + "")

//toString
//string
//""


// строканы санга айлантат

//toString -санды строкага айлантат
// let item =10;
// console.log(item.toString())

//String -
// console.log(String(item))

//""
// console.log(item + "")

// строканы санга айлантат эгер ичинде сан болсо

// let  str = "10"
// Number()
// console.log(Number(str))
// parseInt()
// console.log(parseInt(str))
// +
// console.log(+str)

// NaN - not a number


// let  a ="10";

// console.log("10" + "2")
// console.log("10" - "2")
// console.log("10" * "2")
// console.log("10" / "2")
// console.log("10" % "2")
// console.log("10" *  "2")

//1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
//  let str ='Nevis ITDB TECH';
// console.log(str.slice(0,4).length)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// let str = 'Максимально УЖАСНО'
// console.log(str.slice(11).toLowerCase())

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// let str = 'максимально УЖАСНО';
// console.log(str.slice(0,11).toUpperCase())

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split.чё Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// let str = 'Максимально УЖАСНО';
// console.log(str.split(""))

// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки,
// используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// let str = 'Максимально Ужасно, переделывай'
// console.log(str.split(","))

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// let str = 'Максимально Ужасно'
// console.log(str.slice(5))


// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// let  str = 'Максимально Ужасно'
// console.log(str.charAt(12))

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.

// let str = 'Максимально '
// let str2 = 'Ужасно'
// console.log(str.concat(str2))
// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// let str = 'Максимально Ужасно'
// console.log(str.slice(11))


