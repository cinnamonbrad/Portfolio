let userName = "John";
const age = 25;
const skills = ["HTML","CSS","JavaScript"];
console.log(skills.at(0));
console.log("Hello, World!"); 
const sum = 10 + 5; 
const product = 10 * 2; 
console.log(sum, product); 
firstName = "Jane";
lastName = "Doe"; 
console.log("Hello," , firstName , lastName); 
console.log(`Hello, ${firstName} ${lastName}`);
function greet(name){
    return `Hello, ${name}`;
}
const greet1 = function greet(name)
{
    return `Hello, ${name}!`;
} 
console.log(greet1(firstName));

const greet2 = (name) => `Hello ${name}`; /* Arrow functions do not use the function keyword*/

console.log(greet2("Alex")); 
const names = ["Joe", "Jane", "John"];
const numbers = [20, 99, 1, 23, 3, 4, 5];
names.forEach((name) => (console.log(name)));
skills.forEach((skill) => {
  console.log(skill);
});
const squares = numbers.map((num) => num * num);
console.log(squares);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
const sum2 = numbers.reduce( (acc, num) => acc + num , 1);
console.log(sum2);
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);
numbers.sort((a,b) => b - a);
console.log(numbers);
// const aFunc = (acc, num) => acc + num;
// const aFunc = (num) => num % 2 === '0';
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
counter = 0; 

document.nav.innerHTML = countText; 
a.addEventListener("click", function(counter){
 counter = counter +1; 
})
