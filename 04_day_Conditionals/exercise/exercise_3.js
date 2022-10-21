let month = (prompt("Enter a month:", "January")).toLowerCase();
// let month = "november";

switch (true) {
    case month == "january":
        monthIndex = 1;
        break;
    case month == "feburary":
        monthIndex = 2;
        break;
    case month == "march":
        monthIndex = 3;
        break;
    case month == "april":
        monthIndex = 4;
        break;
    case month == "may":
        monthIndex = 5;
        break;
    case month == "june":
        monthIndex = 6;
        break;
    case month == "july":
        monthIndex = 7;
        break;
    case month == "august":
        monthIndex = 8;
        break;
    case month == "september":
        monthIndex = 9;
        break;
    case month == "october":
        monthIndex = 10;
        break;
    case month == "november":
        monthIndex = 11;
        break;
    case month == "december":
        monthIndex = 12;
        break;

    default:
        monthIndex = 1;
        break;
}

const date = new Date(2022, monthIndex, 0).getDate();
console.log(`${month} has ${date} days`);