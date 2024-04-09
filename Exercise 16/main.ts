let guestlist = ["Huda","Bakhtawar","Ambreen","Hina"];

let dontcome = guestlist [0];

console.log(dontcome, "nai a sakti");

guestlist.splice(0, 1, "Shumaila");

console.log("Good news ! we have found a bigger table for dinner");

guestlist.unshift("Daniya");

guestlist.push("Maria");

let middleIndex: number = Math.floor(guestlist.length / 2);

guestlist.splice(middleIndex, 0, "Zenat");

console.log("Updated list of our guests");

guestlist.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to have a dinner with me`));