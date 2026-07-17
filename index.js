const x = Number("123") + 7;  //question1
console.log(x);

let value =0;   //question2
if (!value){
    console.log("invalid");
}

for (let x=1; x<=10; x++){     //question3
    if (x%2 ==0) 
        continue;
        console.log(x);    
}

const numbers=[1,2,3,4,5];    //question4
const evenNumbers= numbers.filter(num=>num%2==0);
console.log(evenNumbers);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const merged = [...arr1, ...arr2];
    console.log(merged);   //question5


function getDay(num){      //question6
    switch (num){
       case 1: return "sunday";
       case 2: return "monday";
       case 3: return "tuesday";
        case 4: return "wednesday";
        case 5: return "thursday";
        case 6: return "friday";
    }
}
console.log(getDay(2));
  

const arr =["a","ab","abc"];     //question7
const lengths = arr.map(x => x.length);
console.log(lengths);


function checkDivisible(num){     //question8
    if (num %3==0 & num %5==0);{
        return "Divisible by both";
    }
}
console.log(checkDivisible(15));


const square=num => num*num;
console.log(square(5));     //question9


function formatPerson({name,age}) {
    return `${name} is ${age} years old`;
}
const person = {name:"John" , age:"25"};   //question10
console.log(formatPerson(person));

function sumAll(...nums) {
    let total=0;
    for (const n of nums){
        total +=n;
    }
    return total;    //question11
}
console.log(sumAll(1,2,3,4,5));


async function getSuccess() {
    await new promise((resolve) => setTimeout(resolve,3000));
    return "Success";
}
console.log(getSuccess);    //question12



function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([1,3,7,2,4]));    //question13


function splitWords(string) {
    return string.split(" ");
}
console.log(splitWords("The quick brown fox"));    //question15 


//essay questions
//1) for each: work with only arrays , can't use break or continue , doesn't return a new array
// for of: work with objects like array, string, maps ,, can use break or continue and return 

//2) 

//3) ==: equal at value
// ===: equal at value and type

//4)

//5) coercion: byt3ml convert mn string l number masln automatic msh ana el ba3mlha convert 
//conversion: ana el ba3ml convert ll data mn string l number masln aw l boolean