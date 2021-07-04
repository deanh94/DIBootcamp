let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.push("Kiwi");
fruits.splice(1, 1);
fruits.sort();
fruits.reverse();
console.log(fruits);

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);