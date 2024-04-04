//QUESTION1
//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  
//and the last two added by 10. Return the array with the new values.
function array(arr){
    let firstFour = arr.slice(0, 4).map(item => item * 10)
    let lastTwo = arr.slice(-2).map(item => item + 10)
    let newArr = firstFour + " , " + arr.slice(5, 7) + " , " + lastTwo
    console.log({newArr})

}

array([9, 8, 7, 6, 5, 4, 3, 2])

//QUESTION2
//Write a program that takes in the following array and use a while loop to iterate
//and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];

let a = 0
while(a < arrNum.length){
    if(arrNum[a] === arrNum[5]){
        break;
    }
    console.log(arrNum[a]); a++
}

//QUESTION3
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  
//let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi'];

let text = " ";
for (let i = 2; i < fruits.length; i++) {
    if (fruits[i] === "plum"){
        continue;
    }
text += fruits[i];
}
console.log(text)


 
//QUESTION4
//Write a function that accepts an array of strings and console.logs each element using a for loop.
function loopArray() {
    let arr = ["apple", "mango", "orange", "guava"];
 
    for (element of arr) {
       console.log({element});
    }
}
 
loopArray();

//QUESTION5
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

function reverseString(str) {
    let reversedStr = "";
    let i = str.length-1;
    while(i>= 0){
        reversedStr += str.substring(i, i + 1);
        i--
    }
    console.log({reversedStr})
}

reverseString("Edna")
reverseString("Lovelace")
