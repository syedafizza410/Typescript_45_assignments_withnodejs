function make_Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy Sandwich");
}

make_Sandwich("Chicken", "Cheese", "Mayo", "Egg");

make_Sandwich("Bread", "Butter");

make_Sandwich("Bread", "Butter", "Mayo", "Eggo", "Cheese", "Chicken", "Lettuce", "Tomato");