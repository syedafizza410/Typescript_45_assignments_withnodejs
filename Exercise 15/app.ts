let guestlist = ["Huda","Bakhtawar","Ambreen","Hina"];

let dontcome = guestlist [0];

console.log(dontcome, "nai a sakti");

guestlist.splice(0, 1, "Shumaila");

guestlist.forEach(guest => console.log(`Hello ${guest}, would you like to have a dinner with me`));