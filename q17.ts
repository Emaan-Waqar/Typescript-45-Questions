// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guest2:string[]=["Albert einstein","cristiano Ronaldo","Leonel messi"]
guest2.splice(2,0,'😊')
guest2.splice(0,0,'✔')
guest2.push("Virat")


for (let i=0;i<guest2.length;i+=1){

    console.log(`hello,${guest2[i]} you are invited to dinner`);
    
}
// removing virat
console.log(guest2);
console.log((guest2[guest2.length-1])+', you are no longer invited to the dinner due to shortage of tables');
guest2.pop()
// removing leonel messi
console.log(guest2);
console.log((guest2[guest2.length-1])+', you are no longer invited to the dinner due to shortage of tables');
guest2.pop()
// removing 😊
console.log(guest2);
console.log((guest2[guest2.length-1])+', you are no longer invited to the dinner due to shortage of tables');
guest2.pop()
console.log(guest2);
// removing cristiano ronaldo
console.log(guest2);
console.log((guest2[guest2.length-1])+', you are no longer invited to the dinner due to shortage of tables');
guest2.pop()
console.log(guest2);
for (let i=0;i<guest2.length;i++){
    console.log(guest2[i]+" You are still invited");
    
}
guest2.pop()
guest2.pop()
console.log(guest2);

export{}