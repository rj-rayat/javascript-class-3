console.log(5 > 10) // false
console.log(5 < 10) // true
console.log(5 == 10) // false
console.log(10 == 10) // true
console.log(5 >= 10) // false
console.log(10 >= 10) // true
console.log(5 <= 10)// true
console.log(10 != 10) // false




 const currentAge = 12;

 if (currentAge >= 18){
     console.log(" Ticket price : 350")
 }
 else if(currentAge >= 12){
     console.log("Ticket Price : 100")
 }
 else {
     console.log("Ticket Free")
 }


const sellery = 30000;
const isBcs = false ;
const age =  20;

if (sellery >= 20000 || isBcs == true || age >= 25){
    console.log("You are allowed")
}else{
    console.log("You are not allowed")
}


const firstInput = 20;
const operator = "*";
const secondInput = 20;

if (operator == "+"){
    const addition = firstInput + secondInput
    console.log(addition)
}else if (operator == "-"){
    const minus = firstInput - secondInput
    console.log(minus)
}else if (operator == "*"){
    const multip = firstInput * secondInput
    console.log(multip)
}else if(operator == "/"){
    const division = firstInput / secondInput
    console.log(division)
}else {
    console.log("You entered wrong key")
}


const number = 19

if (number % 2 == 0){
    console.log("Number is Even");
}else{
    console.log("Number is odd")
}







