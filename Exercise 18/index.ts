let countriesToVisit: string[] = ["China", "Dermark", "Canada", "USA"];
console.log("Orginal order:", countriesToVisit);

console.log("Alphabetical order:", [...countriesToVisit].sort());

console.log("Still in orginal order:", countriesToVisit);

console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("Still in orginal order:", countriesToVisit);

console.log("Orginal array reversed:", [...countriesToVisit].reverse());

console.log("Back to orginal order:", countriesToVisit.reverse());

console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

console.log("Orginal array reversed:", [...countriesToVisit].reverse());
