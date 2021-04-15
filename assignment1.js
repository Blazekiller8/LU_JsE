//Question - 1 
console.log("Question-1")
const michael = "People say I'm the best boss";
console.log(michael.length)
console.log(michael.slice(15))
console.log(michael.slice(11, 29))
console.log(michael.slice(11, -1))
console.log(michael.slice(-5))
console.log(michael.slice(-10, -6))
console.log("")

//Question - 2
console.log("Question-2")
let dukeOfHastingsSays = "I burn for you";
let newArray = dukeOfHastingsSays.toLowerCase().split(" ")
console.log(newArray)
let newStringWithSpace = newArray.join(" ");
console.log(newStringWithSpace)
let newStringWithoutSpace = newArray.join("");
console.log(newStringWithoutSpace)
console.log("")

//Question - 3
console.log("Question-3")
let starHollows = ["Lorelai", "Rory", "Luke", "Lane", "Kirk ", "Taylor"];
let removed1 = starHollows.splice(1);
console.log(removed1)
let beverlyHillsGang = ["Brandon", "Brenda", "Dylan", "Andrea", "Steve", "Kelly", "Donna", "David"];
let removed2 = beverlyHillsGang.splice(1, 2);
console.log(removed2)
let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine'];
let removed3 = seinfeld.splice(-2, 1);
console.log(removed3)
let brooklynNineNine = ['Jake', 'Amy', 'Charles', 'Rosa', 'Captain Holt', 'Gina', 'Terry'];
let removedAndInserted = brooklynNineNine.splice(5, 1, 'Hitchcock', 'Scully');
console.log(removedAndInserted)
let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe'];
let insertedOnly = friends.splice(1, 0, 'Gunther', 'Carol', 'Susan')
console.log(insertedOnly)