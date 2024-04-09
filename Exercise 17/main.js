var guestlist = ["Huda", "Bakhtawar", "Ambreen", "Hina"];
var dontcome = guestlist[0];
console.log(dontcome, "nai a sakti");
guestlist.splice(0, 1, "Shumaila");
console.log("Good news ! we have found a bigger table for dinner");
guestlist.unshift("Daniya");
guestlist.push("Maria");
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Zenat");
console.log("Updated list of our guests");
guestlist.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to have a dinner with me")); });
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitations to the last 2Guests");
guestlist.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist);
