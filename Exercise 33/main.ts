let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let one_Number of numbers){
    let ordinalEnding: string;

    if(one_Number === 1){
        ordinalEnding = "st"
    }
    else if(one_Number === 2){
        ordinalEnding = "nd"
    }
    else if(one_Number === 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }

    console.log(`${one_Number}${ordinalEnding}`)
}