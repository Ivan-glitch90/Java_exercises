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




