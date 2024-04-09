var guestlist = ["Huda", "Bakhtawar", "Ambreen", "Hina"];
var dontcome = guestlist[0];
console.log(dontcome, "nai a sakti");
guestlist.splice(0, 1, "Shumaila");
guestlist.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to have a dinner with me")); });
