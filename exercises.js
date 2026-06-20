//1.) Temp converter:
/*


function Converter(temp){ //temp variable to send temp in C
    let f = 0; //variable to store conversion
    f = temp * 9/5 + 32;
    return f;
} 

console.log(Converter(25));
*/

//--------------------------
/*

//2.) Remainder calculator:

 //Variable to store %
function remainder(x,y){
    let m = 0;
    m = x % y;
    return m;
}

console.log(remainder(5,5));
*/

//---------------------------
//3)
/*

function tip(x,y){
let r = 0;
    r = Math.round(x*y)/100; // new method learned google Math.round
    return r;
}

console.log(tip(43.27,20));
*/

//--------------------------

//4.)Even odd checker:

/*
function even(n){
let x = 0;
    x = n % 2;
    if(x===0){
        return "Even";
    }
    else{
        return "Odd";
    }
    
}

console.log(even(2));
*/

//-----------------------
//5.) String Reverser:
/*
function reverser(word){
    let newword = "";
    for(i = word.length - 1; i >= 0; i = i - 1) 
        newword = newword+word[i];
    return newword;
    
}

console.log(reverser("12345"));
*/

//------------------------

/* 6.) Palindrome checker

function pali(word){
    let p = "";
    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, ""); // Learned via my Google. Good to know I can manipulate strings more than 1 time; all to lower case and remove spaces
    for(i = word.length - 1; i >= 0; i--)
        p = p + word[i];

    if (p === word){
        return "True";
    }
    else {
        return "False"
    }
}

console.log(pali("Ivan"));
*/


//----------------------------
//7.) CounterV

/*
function vowels(word){
    let count = 0;
    word = word.toLowerCase();

    for(i = word.length - 1; i >= 0; i--){
        if("aeiou".includes(word[i])){ //In this case loop counting and comparing.
            count++;
            
        }

    }
        
    return count;
}

console.log(vowels("JavaScript"));

*/




//8.) TCC.
/*
function tcc(word){
    let neword = "";
    let aux = "";
    aux = word.split(" ");

    for(i = 0; i <= aux.length - 1 ; i++){
        if(i === 0){ // if to make sure there is a space in between. if i = 0 means we are at the beggining of the loop/first word. no space needed yet
            neword = neword + aux[i][0].toUpperCase() + aux[i].slice(1); //Accessing each word then the first letter.[i][0]
             
        } 
        else{
            neword = neword + " " + aux[i][0].toUpperCase() + aux[i].slice(1); //i > 0 means we are past the first word, add space before next word
             
        }
    }
    
    return neword;
    
}

console.log(tcc("hello world"));
*/

//9.)Factorial: //
/*
function Factorial(num){
    let fac = 1;
    for(let i = 1; i <= num; i++){
        fac = fac * i;
        
        
    }
    return fac;
    
}
console.log(Factorial(5));*/


//10.) Prime

/*
function prime(n){
    let x;
    if (n <= 1){
        return "False"; 
    }

    for(let i = 2; i < n; i++){
        x = n % i;

        if(x === 0){
            return "False"
        }

    }
        return "True"
}

console.log(prime(2))
*/

// 11.) Fizz
/*
function Fizz(n){
    let array = [];
    
    for(i=1;i <=n; i++){
        let fizz = i % 3;
        let buzz = i % 5;
        if(fizz === 0 && buzz === 0){
            array.push("FizzBuzz");
        }
        else if(fizz === 0){
            array.push("fizz");
        }
        else if(buzz=== 0){
            array.push("Buzz");
        }
        else{
            array.push(i);
        }
    }
    return array;
}
console.log(Fizz(15));*/

//12.) patern:

/*
function patern(n){
    let printer = " ";
    
    for(let i = 1; i<= n; i++){ 
        printer = printer + "\n ";
    for(let x = 1; x <= i; x++){
        printer = printer + "*";
    }   
    }
    return printer;
}

console.log(patern(150));*/

//13.)Array Sum
/*
function sum(array = []){
    
    let suma = 0;
    for(i = 0; i <= array.length - 1; i++){
        suma = suma + array[i];

    }
    return suma;
}

console.log(sum([2,2,2,2,2]));*/

//14.)max value:

/*
function max(array = []){
    let m = array[0];
    for(i = 0; i <= array.length - 1; i++){
        if(m < array[i]){
            m = array[i];
        }
        
    }
    return m;

}
*/

//15.)Array filtering:
/*
function filter(array = []){
    let pairs = [];
     for(i = 0; i <= array.length - 1; i++){
        n = array[i] % 2;
        if (n === 0){
            pairs.push(array[i]);
        }
    }

    return pairs;
}

console.log(filter([1,3,5,4,6]))

*/


//Start lesson Jun 18
/*
setTimeout(()=>{
   console.log("3");
},1000)


setTimeout(()=>{
   console.log("2");
},2000)


setTimeout(()=>{
   console.log("1");
console.log("GO");
},3000)

*/

/*
function delay(ms){ 
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
     resolve();       
    //console.log("It seems that is working!");
 
},ms)
    });
}
delay(2000);


async function sayHello() {
    console.log("Hello");
    delay(2000);
    console.log("Hi!");
}

sayHello();
*/
//End Lesson

//16.) Array Merging:

//This one was has been one of the hardest so far 😰
/*
function sorting(array = [],array2 = []){
    newarray = array.concat(array2); // making the two arrays into one. 
    for(let x = 0; x <= newarray.length - 1; x++){ // outer loop that controls how many passes we make over the array
        for(let i = 0; i <= newarray.length - 1; i++){ //second loop inside the first loop to swap the elements; inner loop that compares neighboring elements and swaps them if they are in the wrong order 
        let temp = newarray[i]; // variable to store the number temporarily.
        if (temp > newarray[i + 1]){ // comparing the temporarily number to the next one inside the array.
          newarray[i] = newarray[i+1]; // if greater, move the smaller number to the left
          newarray[i+1] = temp; // put the original value (temp) into the next position, completing the swap
        }
    }

    }
return newarray;
}

console.log(sorting([2,4,6,8],[1,3,5,0]));


*/

let student = {
    name: "John",
    grades:[95,82,77],
    
}

function calculate(student){
    let sum = 0;
    
    for(let i = 0; i <= student.grades.length -1; i++){ //Can i use the array inside the object as a normal array? - YES 
        sum = sum + student.grades[i];
    }
    let average = Number((sum / student.grades.length).toFixed(2)); 
    if(average >= 90 && average <= 100 ){
        return {
            name: student.name,
            average: average,
            letterGrade:"A"
}
    }
    else if(average >= 80 && average <= 89){
        return {
            name: student.name,
            average:average,
            letterGrade:"B"
        }
    }
    else if(average >= 70 && average <= 79){
        return {
            name: student.name,
            average:average,
            letterGrade:"C"
        }

    }
    else if(average >= 60 && average <= 69){
        return {
            name: student.name,
            average:average,
            letterGrade:"D"
        }
    }
    else{
        return {
            name: student.name,
            average:average,
            letterGrade:"F"
        }
    }
    
}

console.log(calculate(student));