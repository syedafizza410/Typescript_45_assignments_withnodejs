var current_users = ["Hina", "Bakhtawar", "Ambreen", "Huda", "Amina"];
var new_users = ["Ayesha", "Hina", "Saniya", "Bakhtawar", "Saba"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
