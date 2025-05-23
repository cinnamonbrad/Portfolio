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

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));

const mySkills = document.querySelectorAll("#skills li");
console.log(mySkills);
mySkills.forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    skill.style.color = "blue";
  })
  skill.addEventListener("mouseout", () => {
    skill.style.color = "";
  })
  skill.addEventListener("click", () => {
    console.log(skill.textContent);
  })
});
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((project) => {
  project.addEventListener("mouseover", () => {
    project.querySelector(".description").style.opacity = 1;
  });
  project.addEventListener("mouseout", () => {
    project.querySelector(".description").style.opacity = 0;
  });
});
/*const userJSON = JSON.stringify(user); 
console.log(userJSON); 
const parsedUser = JSON.parse(userJSON); 
console.log(parsedUser); 
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=> response.json()) */
  /*.then((data) => console.log(data)) 
  .then((data)=> {
    data.foreach((post) => {
      console.log(`ID:  ${post.id}, Title: ${post.title}`)
    } )
  })
  .catch((error => console.log("Error fetching data:", error))); */
  let count = 0; 
  document.getElementById("btn").addEventListener("click", () => {
    count = count + 1; 
    console.log(count); 
    document.getElementById("count").innerHTML = `
    ${count}
    `}); 


