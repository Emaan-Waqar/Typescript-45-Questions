"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
let guest1 = ["Albert einstein", "cristiano Ronaldo", "Leonel messi"];
guest1.pop();
guest1.push("leonardo");
for (let i = 0; i < guest1.length; i += 1) {
    console.log(`hello,${guest1[i]} you are invited to dinner`);
}
