//primitive data type
    //number (10,4.5,9.65)
    //string ('text')
    //Boolean (true,false)
    //undefined (jeita assign kora hoiche eita define kora hoy nai )
    //null (value thakar kotha but value nai )
//object data type
    //array
    //object
    //function

//*************Number************** */

var n=1457 //(54bits pawya jabe integer number )
var f=3.14
var nn=Number('45.0565')
console.log(nn)
console.log(parseFloat(nn)); //ei vabe float number convert kora jabe 
console.log(parseInt(nn)) //ei vabe integer number convert kora jabe
console.log(Number.MAX_VALUE) //max number
console.log(Number.MIN_VALUE) //min number 
console.log(1/0) // infinity value will be return 
console.log('abc'*10) //get NaN= Not a number 

//**********String********* */

var str= 'String'  // string literal....
var str2="String"
var str3=`String`


var str4=String('jdljflkd') //string constructor.....
var str5=String('5')
var str6=String(34.545)

console.log(str4,str5,str6)


//**********Booleans******* */
var b1=true
var b2=false

var b3 = Boolean(true)
var b4 = Boolean(false)

console.log(b1,b2,b3,b4)


//**********Null vs undefined ***************/

var abc
var xyz=null

console.log(abc,xyz)

//***********Octall and Hexadeciamal */

var hex = 0xff
console.log(hex)
var oct = 0o756

console.log(hex,oct)