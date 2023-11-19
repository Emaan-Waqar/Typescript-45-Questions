/* Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
let places=["Dubai","Norway","Canada","Belguim","China"]
//printing the original array
console.log(places);
//alphabetical order
console.log(places.slice().sort());
//the original array is unchanged
console.log(places);
//reversing the original array
console.log(places.reverse());
//reversing again to get original array
console.log(places.reverse());
// sorting array in alphabetical order, and showing that its order has been changed
console.log(places.sort());
console.log(places);
//storing array in reverse aphabetical order,and showing that its order has changed
console.log(places.reverse());
console.log(places);


