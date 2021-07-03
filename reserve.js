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