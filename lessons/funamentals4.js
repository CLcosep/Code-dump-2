const people = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let i = 0;

for (const person of people){
    if (person === "Phil" || person === "Lola"){
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + ".";

admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + ".";
/*
--normal function
function toUpper(string){
    
}

const fruits = ["Apple", "Banana", "Mango", "Peach", "Kiwi"];

const upperFruits = fruits.map(function (string){
    return string.toUpperCase();
});

--function expression
const fruits = [1 , 2, 3, 4, 5];

const upperFruits = fruits.map(function(number){
    return number * 2;
});

console.log(upperFruits);

--arrow function
const fruits = [1 , 2, 3, 4, 5];

const upperFruits = fruits.map(number => number * 2);

console.log(upperFruits);
*/