console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

// Q.1
const personAccount = {
    firstName: "Mukesh",
    lastName: "Mahato",
    incomes: 100,
    expenses: 110,
    totalIncome: function () {
        return (`${this.incomes} "Description"`)
    },
    totalExpense: function () {
        return (`${this.expenses} "Description"`)
    },
    accountInfo: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        return (`Name: ${fullName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`);
    },
    addIncome: function (income) {
        this.incomes += income;
    },
    addExpense: function (expense) {
        this.expenses += expense;
    }
}

personAccount.addIncome(50);
personAccount.addExpense(10);
console.log(personAccount.accountInfo());

// Q.2 a)
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function signUp(username, email, password) {
    let isUserExist = false;
    for (const user of users) {
        if (user.email == email || user.username == username) {

            isUserExist = true;
            break;
        }
    }

    if (isUserExist) {
        let error = `Invalid: user exist for ${email} or ${username}`;
        console.log(error);
        return error;
    } else {
        const createUser = {
            _id: userIdGenerator(),
            username: username,
            email: email,
            password: password,
            createdAt: formatedDate(),
            isLoggedIn: false
        }
        users.push(createUser);
        let message = `User created: email: ${email}, username: ${username}`;
        console.log(message);
        return message;
    }
}

function userIdGenerator() {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphSmall = "abcdefghijklmnopqrstuvwxyz";
    const sets = [num, alph, alphSmall];
    const lengthOfSets = 3;
    const lengthOfId = 6;
    let ID = "";

    for (let i = 0; i < lengthOfId; i++) {
        let setToBeSelected = Math.floor(Math.random() * lengthOfSets);
        let index = Math.floor(Math.random() * sets[setToBeSelected].length);
        ID += sets[setToBeSelected][index];
    }
    return ID;
}

function formatedDate() {
    const now = new Date();
    let month = addDigit(now.getMonth() + 1);
    let date = addDigit(now.getDate());
    let year = now.getFullYear();
    let mm = addDigit(now.getMinutes());
    let hh = addDigit(now.getHours() > 12 ? now.getHours() - 12 : now.getHours());
    let ampm = now.getHours() > 12 ? "PM" : "AM";

    return `${month}/${date}/${year} ${hh}:${mm} ${ampm}`
}

addDigit = (digit) => {
    // digit = digit < 10 ? `0${digit}` : digit;
    return digit < 10 ? `0${digit}` : digit;;
}

signUp("Mukesh", "mukeshmahato843@gmail.com", "password");

// Q.2 b)

function signIn(email, password) {
    let isLoggedIn = false;
    // let message = ""
    for (const user of users) {
        if (user.email == email && user.password == password) {
            isLoggedIn = true;
            user.isLoggedIn = true;
            break;
        }
    }
    if (isLoggedIn) {
        let message = "Logged in successfully";
        console.log(message);
        return message;
    } else {
        let message = "Invalid email or password";
        console.log(message);
        return message;
    }
}

signIn("mukeshmahato843@gmail.com", "password");    // Logged in successfully 
signIn("mukeshmahato0843@gmail.com", "password");   // Invalid email or password
console.log();

// Q.3 (a)

function rateProduct(productsName, rateStar, userId) {
    let isProductFound = false;

    // checking for the product
    for (const product of products) {
        if (productsName.toLocaleLowerCase() == product.name.toLocaleLowerCase()) {
            isProductFound = true;

            // checking for userid in users object.
            const userData = checkUser(userId);
            if (userData.isUserExist && userData.isLoggedIn) {

                let isAlreadyRated = false;

                for (const rate of product.ratings) {
                    if (userId == rate.userId) {
                        isAlreadyRated = true;
                        break;
                    }
                }

                if (isAlreadyRated) {
                    console.log("You have already rated.");
                } else {
                    rate = {
                        userId: userId,
                        rate: rateStar
                    }
                    product.ratings.push(rate);
                    console.log("Thank you! for rating us.");
                }
                break;
            } else if (!userData.isUserExist) {
                console.log(`user not exist for id: '${userId}'`);
            } else {
                console.log(`sorry, you are not logged in. Please login to rate.`);
            }
        }
    }

    if (!isProductFound) {
        console.log(`No product found named '${productsName}'`);
    }


}

isProductExist = productsName => {
    let isProductFound = false;
    for (const product of products) {
        if (productsName.toLocaleLowerCase() == product.name.toLocaleLowerCase()) {
            isProductFound = true;
            break;
        }
    }

    if (isProductFound) return true;
    else return false
}

function checkUser(userId) {
    const data = {
        isUserExist: false,
        isLoggedIn: false,
    }

    for (const user of users) {
        if (userId == user._id) {
            data.isUserExist = true;
            data.isLoggedIn = user.isLoggedIn;
            break
        }
    }
    if (data.isUserExist) {
        return data;
    } else {
        data.isUserExist = false;
        return data;
    }
}

rateProduct("tablet", 5, "mukesh");   // No product found named 'tablet'
rateProduct("mobile phone", 5, "mukesh");   // user not exist for id: 'mukesh'
rateProduct("mobile phone", 5, "ab12ex");   // sorry, you are not logged in. Please login to rate.
rateProduct("mobile phone", 5, "fg12cy");   // You have already rated.

signIn("alex@alex.com", "123123");

rateProduct("mobile phone", 5, "ab12ex");   // Thank you! for rating us.

// Q.3 (b)
function averageRating() {
    const averageRating = [];
    // const averageRating = Array(products.length);
    // averageRating.fill(0);

    products.forEach((product, index) => {
        let sum = 0;
        if (product.ratings.length != 0) {
            product.ratings.forEach((rate) => {
                sum += rate.rate;
            })
            // averageRating[index] = (sum / product.ratings.length).toFixed(2);
            let avg = (sum / product.ratings.length).toFixed(2);
            const obj = {
                'Product Name': product.name,
                averageRating: avg
            }
            averageRating.push(obj);
        } else {
            const obj = {
                'Product Name': product.name,
                averageRating: 0
            }
            averageRating.push(obj);
        }
    })
    // console.log(averageRating);
    return averageRating;
}

console.log(averageRating());

// output
// [
//     { 'Product Name': 'mobile phone', averageRating: '4.83' },
//     { 'Product Name': 'Laptop', averageRating: 0 },
//     { 'Product Name': 'TV', averageRating: '5.00' }
// ]

// Q.4
function likeProduct(userId, productsName = "") {
    let isProductFound = false;
    for (const product of products) {
        if (productsName.toLocaleLowerCase() == product.name.toLocaleLowerCase()) {
            isProductFound = true;
            const userData = checkUser(userId);

            if (userData.isUserExist && userData.isLoggedIn) {

                if (!product.likes.includes(userId)) {
                    product.likes.push(userId);
                    console.log("Liked");
                } else {
                    let index = product.likes.indexOf(userId)
                    product.likes.splice(index, index + 1)
                    console.log("Unliked");
                }

            }
            else if (!userData.isUserExist) { console.log(`User not exit for id: ${userId}`); return; }
            else { console.log("sorry, you are not logged in. Please login to like."); return; }
            break;
        }
    }

    !isProductFound ? console.log("Product not found named ", productsName) : "";
}
likeProduct("myId", "tv")   // User not exit for id: myId
likeProduct("eefamr", "mobile phone");      // sorry, you are not logged in. Please login to like.

signIn("martha@martha.com", "123222");      // Logged in successfully
likeProduct("eefamr", "mobile phone");      // Liked
likeProduct("eefamr", "mobile phone");      // Unliked

likeProduct("eefamr", "tv")     // Liked
likeProduct("eefamr", "Laptop")     // Liked

likeProduct("eefamr", "tv")     // Unliked
likeProduct("eefamr", "Laptop")     // Unliked