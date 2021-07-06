// console.log('Hello World!')

// var x = 12
// var y = 8

// console.log(x+30+y)

// var name = 'Fazle Rabbi'
// var age = 20

// console.log('My name is '+name +'. I am ' +age +' years old.' )



// var firstName = 'Fazle'      //camelCasing Variabble

// console.log('My first name is '+ firstName +'.')

// var last_name = 'Rabbi'    //Undersocer varriable

// console.log('My lirst name is '+ last_name +'.')

//JS Data Type
        // primitive               

        //     Number, String, Boolean, undefined, null
        
        // Objects

        //     Array, Objects, Function

//*****Number******//
// var n = 5
// var f = 3.5
// var nn = Number(32.23)

// console.log(Number.parseInt(nn))
// console.log(Number.parseFloat(f))
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(1/0)

//*****String******//
// var str1 = 'this is string'
// var str2 = "This is string"
// var str3 = `This is string`

// var str4 = String(123)

// console.log(str4)

//****** Null and undefined ******//

// var a 
// var b = null

// console.log(a)
// console.log(b)


//****JS Type Conversion*****///
// var str = '100'
// var n = 12

// console.log(Number.parseInt(str))
// console.log(n.toString())

// console.log(Boolean(null))

// falsy values
        // '', 0, null, undefined, NaN


// var x = '12'
// var y = 8

// console.log(Number.parseInt(x) + y)
// console.log(x + y)
// console.log(y.toString())


//*****JS Math Function**** */
// const firstName = 'Fazle'
// const lastName = 'Rabbi'
// myArray = [12, 9, 21, 7]
// let 
//     x = 12
//     y = 18
//     z = (x + 7) * 2
//     d = 3.12 

// console.log(Math.abs(d))
// console.log(Math.floor(d))
// console.log(Math.ceil(d))
// console.log(Math.round(d))

// console.log(Math.max(12, 9, 21, 7))
// console.log(Math.pow(2, 3))
// console.log(Math.sqrt(25))
// console.log(Math.round(Math.random() * 6))


// console.log(`${lastName} told me that, "go out here".`)

// console.log(Math.E)
// console.log(Math.PI)




// 6-29-2021 >> date Practice, some arithmetic, math functionality

// let x = 12
//     y = 20
//     z = 8

//     name = 'rabbi'
//     age = 13
//     year = '2021'
//     ok = 'go'
// var num = (20 + (x * 10) / 10 **2 + ((x + z) - 10) / 5)

// console.log(num.toString())
// console.log(Math.abs(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// var ab = Math.sqrt(75)
// console.log(ab)
// console.log(ab.toString())
// console.log(Math.abs(ab))
// console.log(Math.floor(ab))
// console.log(Math.ceil(ab))
// console.log(Math.round(ab))


// console.log(20 + 120 / 100 + 2)
// console.log(ok)
// console.log(age)
// console.log(year)
// console.log(x.toString())
// console.log(Number.parseInt(year))
// console.log(Number.parseInt(y))


// let date = new Date()

// console.log(date.setFullYear(2020))
// console.log(date.toDateString())     //*ueful*
// console.log(date.toLocaleDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())       //*ueful*
// console.log(date.toLocaleString())




// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())


// let r = 4
//     pi = Math.PI
//     ans = (2 * pi * r)

//     x = 3.72

// console.log(ans)
// console.log(Math.trunc(x))
// console.log(Math.round(x))
// console.log(Math.floor(x))
// console.log(Math.ceil(x))

// console.log(Math.pow(12, 2))
// console.log(Math.sqrt(225))
// console.log(Math.floor(Math.random() * 6 + 1))


/// *********** IF , Else If, Else Condition

// let a = 20
// let b = 207

// if (a > b){
//     console.log(a + ` is grater then ` + b)
// }

// if (a % 2 == 0) {
//     console.log('A is Even Number')
// }
// else {
//     console.log('A is Odd Number')
// }
// if (a > b){
//     console.log(`A is grater than B`)
// }
// else if (a < b){
//     console.log(`B is grater than A`)
// }
// else {
//     console.log(`They are same.`)
// }


// let date = new Date()

// let today = 3

// switch (today) {
//     case 0:
//         console.log('Today is Sunday')
//         break
//     case 1:
//         console.log('Today is Monday')
//         break
//     case 2:
//         console.log('Today is Tuesday')
//         break
//     case 3:
//         console.log('Today is Wednesday')
//         break
//     case 4:
//         console.log('Today is Thursday')
//         break
//     case 5:
//         console.log('Today is Friday')
//         break
//     case 6:
//         console.log('Today is Saturday')
//         break
// }


// let a = 12
//     b = 8
//     c = 14
//     d = 13


// if (a > b && c < d){
//     console.log('a nad d r big')
// }
// else if (a == d || b > c){
//     console.log('a and d r same')
// }
// else {
//     console.log('wrong number')
// }

// var n = 11
// var num = ''

// if (n % 2 == 0){
//     num = 'Even'
// }else {
//     num = 'Odd'
// }

// console.log(num)


//*** Ternary Operator ***/
// let ans = n % 2 == 0 ? 'Even Number' : 'Odd Number'
// console.log(ans)



//****And Or Shorthand *****//
// let name = 'Fazle'

// let fulName = 'Rabbi'

// if (name.length == 0) {
//     console.log(fulName)
// }else {
//     console.log(name)
// }

// let name = 'Hridoy Hasan'
// let fulName = name || 'Fazle Rabbi'   //*** OR shorthand */

// console.log(fulName)

// var a = 12
//     b = 8
// let x = a > b

// if (x) {
//     console.log("Go ahead")
// }else {
//     console.log("Something wrong")
// }

// x && console.log("Everything ok")   //*** AND shorthand */


//**** For Loop ***//
// for (let i = 1; i<= 10; i++) {
//     console.log(i + ' Fazle Rabbi')
// }

// let x = 11

// for (x; x <= 20; x+=2) {    //increment
//     console.log(x + "Sorry")
// }

// for (x = 9; x >= 1; x--) {      //decrement
//     console.log(x + ' Decrement Number')
// }

// for (x = 1; x <= 30; x++) {
    
//     if (x % 2 == 0 && x > 10 && x <21) {              
        
//         console.log(x)       
//     }
// }

// var sum = 0;
// for (var i = 1; i<= 10; i+=3) {
//     console.log(sum + ' + ' + i + ' = ' + (sum+i))
//     sum += i
// }
// console.log('result = ' + sum)

// var sum = 0;
// for (x = 1; x <= 10; x++) {
//     console.log(sum + ' + ' + x + ' = ' + (sum+x))
//     sum += x
// }


//****** While Loop ******//

// let x = 11;
// while (x <= 20) {
//     console.log(x + ' My name is Rabbi.')
//     x++
// }

// let bool = true;

// while (bool) {
//     let rand = Math.floor(Math.random() * 6 + 1)
//     if (rand == 6) {
//         console.log("Congrats! You are the winner.")
//         bool = false
//     }else {
//         console.log(rand + ' Wrong key')
//     }
// }




////        Nested Loop
// for(let x = 1; x <=5; x++){
//     var result = ''
//     for(let y = 1; y <= x; y++){
//         result += y + ' '
//     }
//     console.log(result)
// }


// for(let a = 1; a <=4; a++) {
//     var result = ''
//     for(let b = 1; b <=4; b++) {
//         result += b + " "
//     }
//     console.log(result)
// }

////************* 04 July 2021 **************** */

// for(let x =1; x < 10; x++){

//     if (x % 3 == 0) {
//         console.log('You are win')
//         break
//     }
//     else {
//         console.log(x + " go away")
//     }
// }

/*
while (true) {
    let rand = Math.floor(Math.random() * 6 + 1)
    if (rand == 6) {
        console.log("Congrats! You are the winner.")
        break
    }else {
        console.log(rand + ' Wrong key')
    }
} */

/*
while (true){
    let num = Math.floor(Math.random() * 10 + 1)
    if (num == 1){
        console.log("It's lucky One")
        break
    }
    else if (num == 7){
        console.log(`It's lucky Seven`)
        break
    }
    else {
        console.log("It's " + num)
    }
} */

/*
for (let x = 1; x <= 10; x++){

    if (x % 3 == 0) {
        //  continue
        // console.log("It's divisible by 3")
        // break
    }
    else {
        console.log(x)
    }
} */

/*
for (let a = 1; a <= 10; a++) {

    if (a == 3 || a == 7) {
        // continue
    }
    else{
        console.log(a)
    }
} */


// string litteral
// var x = 'text something'

// num to string

// var n = 12
// var str = n + ''
// var str = n.toString()
// var str = String(n)  //string constructor

// console.log(str)



//  5 June 2021

// Excersice 01
/*
var num1, num2;
num1 = 28;
num2 = 28;
num3 = 28;

if (num1 > num2 && num1 > num3) {
    console.log('The larger number of ' + num1 + ', ' + num2 + ' and ' + num3 + " is " + num1)
}
else if (num1 < num2 && num2 > num3) {
    console.log('The larger number of ' + num1 + ', ' + num2 + ' and ' + num3 + " is " + num2)
}
else if (num1 < num3 && num2 < num3) {
    console.log('The larger number of ' + num1 + ', ' + num2 + ' and ' + num3 + " is " + num3)
}
else {
    console.log('The number of ' + num1 + ', ' + num2 + ' and ' +num3 + " are equal.")
}*/



// Excersice 03
/*
let x = 26;
let y = 20;
let z = 12;

if (x > y && x > z) {
    if (y > z) {
        console.log(x + " " + y + " " + z)
    }
    else {
        console.log((x + " " + z + " " + y))
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + " " + x + " " + z)
    }
    else {
        console.log(y + " " + z + " " + x)
    }
}
else {
    if (x > y) {
        console.log(z + " " + x + " " + y)
    }
    else {
        console.log(z + " " + y + " " + x )
    }
} */

// var a = 2
//     b = 1
//     c = 5


// let max_num = Math.max(3, 4, 20)
// let min_num = Math.min(3, 4, 20)

// console.log(max_num)
// console.log(min_num)
                                                 

// JS string Methods
/*
var a = 'Hello!';
var b = 'My name is Rabbi.'
var d = '            Hello! How are you?     '

var concat = a.concat(' ', b)       // string concat
var strsub = concat.substr(18, 5)   //string substr
var index = concat.charAt(18)       // index letter give
var capital = (b.toUpperCase())     // Capitalize
var small = b.toLowerCase()         // Smaill letter

var space = d.trim()                // syntax er 1st & last space trim kora
var spilit = concat.split()         // Word gula vanga array ta execute kora
console.log(spilit)
*/



// Array Declaration *************

/*
var myArray = [1, 2, 'Rabbi', 'Fazle']

myArray[5] = 'Mahin'  //add array
myArray[3] = 13         // update data
console.log(myArray)
console.log(myArray[4])
console.log(myArray.length)
*/

/*
let arr = Array('Fazle', 'Rabbi', 13, 7, 17, 19)

arr[0] = 'Name'

console.log(arr)
console.log(arr[1])
*/


