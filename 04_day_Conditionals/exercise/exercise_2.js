// Q.1
let inputPercent = prompt("Enter you percent:");
switch (true) {
    case inputPercent >= 80 && inputPercent <= 100:
        console.log("you scored grade 'A'");
        break;
    case inputPercent >= 70 && inputPercent <= 79:
        console.log("you scored grade 'B'");
        break;
    case inputPercent >= 60 && inputPercent <= 69:
        console.log("you scored grade 'C'");
        break;
    case inputPercent >= 50 && inputPercent <= 59:
        console.log("you scored grade 'D'");
        break;
    case inputPercent >= 0 && inputPercent <= 49:
        console.log("you scored grade 'F'");
        break;
    default:
        console.log("Invalid Input");
        break;
}

// Q.2
let month = (prompt("Enter any month:", "January")).toLowerCase();
let alexa = "mukesh";
switch (true) {
    case month=="september" || month=="october" || month == "november":
        console.log("The season is Autumn.");
        break;
    case month=="december" || month=="january" || month == "february":
        console.log("The season is Winter.");
        break;
    case month=="march" || month=="april" || month == "may":
        console.log("The season is Spring.");
        break;
    case month=="june" || month=="july" || month == "august":
        console.log("The season is Summer.");
        break;

    default:
        break;
}

// Q.3
let day = (prompt("What is the day today ?")).toLowerCase();
if (day == "saturday") {
    console.log(`${day} is a weekend.`);
}else{
    console.log(`${day} is a working day.`);
}
