//1:Create an array name fruit that contain some fruits names.
let fruits = ["apple" , "banana" ,"mango" ,"orange"];
console.log(fruits);
//5: Add the element grape to the end of a fruit array using the method.
let fruit = ["apple" , "mango","banana","orange"];
fruit.push("grape");
console.log(fruit);

//6:Remove the last element from the fruit array using the method and assign it to a variable named lastfruit.
let lastFruit = fruit.pop();
console.log(fruit);


// 7:Remove the first element from the fruit array by using the method and assign it to a value firstfruit.
let firstfruit = fruit.shift();
console.log(fruit);


//8: Add the element kiwi in the beggining of the fruit array by using the method.
fruit.unshift("kiwi");
console.log(fruit);

//9: Remove two element from  fruit array  starting from index using  the method
fruit.splice(1,2);
console.log(fruit);

//10:Insert the element "pineapple" and "pear" at the index of the fruit array using the method.
fruit.splice(2,0, "pineaple" , "pear");
console.log(fruit);

//11:Create a new array named "citrusFruit" that contain the first two element of the fruit array using the method.
let citrusFruit: string[] = fruit.slice(0,2);
console.log(citrusFruit);

//12: Create a new array named lasrtwofruit that contain the last two elements of the fruit aaray using the method.
let lastTwoFruit: string[] = fruit.slice(-2);
console.log(lastTwoFruit);

//2:Declare the array named numbers that can contain only numbers elements and initialize it with the number only 10,20,30,and 40.
let numbers : number[] = [10,20,30,40];

//4 : change the second element of number array in to 25
numbers[1] = 25;
console.log(numbers);

//3:Acess the third element of a fruit array and assign it to a variable named thirdfruit.
let thirdfruit: string = fruit[2];
console.log(thirdfruit);

