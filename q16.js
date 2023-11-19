"use strict";
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guest2 = ["Albert einstein", "cristiano Ronaldo", "Leonel messi"];
guest2.splice(2, 0, '😊');
guest2.splice(0, 0, '✔');
guest2.push("Virat");
for (let i = 0; i < guest2.length; i += 1) {
    console.log(`hello,${guest2[i]} you are invited to dinner`);
}
