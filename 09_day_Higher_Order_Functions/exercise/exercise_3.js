console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

const { countries } = require('./data/countries_data.js');

// Q.1
function sortByName(arr) {
    const sortedName = arr.map(elem => elem.name).sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].name < arr[j].name) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function sortByCapital(arr) {
    const sortedName = arr.map(elem => elem.name).sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].capital < arr[j].capital) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // console.log(arr.map(elem=>({name:elem.name, capital:elem.capital})));
    return arr;
}

function sortByPopulation(arr) {
    const sortedName = arr.map(elem => elem.name).sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].population < arr[j].population) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortByName(countries));
console.log(sortByCapital(countries));      // country with blank capital will be at first
console.log(sortByPopulation(countries));


// Q.2
function top10SpokenLang(arr, count = 10) {

    // getting languages of each country into an object
    // acc is the sum of previous & current value

    const data = arr.reduce((acc, { languages }) => {
        // since the languages is an array, we iterates each elements using loop

        languages.forEach(elem => {
            acc[elem] = (acc[elem] || 0) + 1;

            // (acc[elem] || 0)     => if acc[elem] doesnot return any number then the value will be 0.

            // for the first time, if lang is englis, english: 1
            // for the second time, if lang is englis, then englis: 1+1, i.e 2;
        });
        return acc;
    }, {});

    // we can use Object.entries() to get each items of object as array
    const sortedData = Object.entries(data);

    // we can also use loop to iterates over the object and push each items into the array

    // const sortedData = [];  // creating an empty arry    

    // for (const count in data) {
    //     sortedData.push([count, data[count]]);      // pushing each data as a array in sortedData array
    // }


    // sorting sortedData array

    // sort() takes a callback(), first and second item,
    // return -1 is first is smaller than second
    // return 1 is first is greater than second
    // return 0 is first is equal to second

    sortedData.sort((a, b) => {
        return a[1] - b[1]
    })

    // return sortedData.reverse().slice(0, count);        // returns array of array

    // But the question is to show data in the form of array of objects.
    // so we can use map() to convert into object

    countLang = sortedData.reverse().slice(0, count);       // slice to get desigred top countries
    return countLang.map(elem => ({
        country: elem[0], count: elem[1]
    }));

}

console.log(top10SpokenLang(countries, 5));

// Q.3
function mostPopulatedCountries(arr, count = 10) {
    return arr.map(elem => ([elem.name, elem.population]))
        .sort((a, b) => {
            return a[1] - b[1]
        })
        .reverse()
        .slice(0, count)
        // the output will be in array of arrays
        // so we can again use map() to convert into array of objects
        .map(elem => ({ country: elem[0], population: elem[1] }))


}

console.log(mostPopulatedCountries(countries, 5));
console.log(mostPopulatedCountries(countries, 15));

// Q.4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: function () {
        return ages.length
    },
    sum: (arr = ages.slice()) => {
        let sum = 0;
        arr.forEach(elem => { sum += elem })
        return sum;
    },
    min: () => { return Math.min(...ages) },     // ... is the spread operator, used to copy the copy all or part of an existing array or object into another array, since, Math.min() takes array or numbers, it is good idea to copy all the items of 'ages' array using the (...) spread operator
    max: () => { return Math.max(...ages) },
    range: () => { return (statistics.max() - statistics.min()) },
    mean: () => { return (statistics.sum() / statistics.count()) },
    median: () => {
        // return ages[1]
        const temp = ages.slice();      // create a new array from the existing array
        // const temp = ages;      // create a new array but the memory location will be same, so change in new array will affect old also
        temp.sort();
        return temp[Math.round((statistics.count() + 1) / 2 - 1)]
    },
    mode: () => {
        const temp = ages.slice();
        const count = temp.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {})

        return Object.entries(count)        // getting items as array of arrays
            .sort((a, b) => { return a[1] - b[1] })     // sorting based on the index 1 i.e 2nd item, i.e count of occurance
            .reverse()      // reversing to get the last item, since last element has the highest count of occurance
            .slice(0, 1)        // slicing to get only one item
            .map(elem => ({ mode: elem[0], count: elem[1] }))   // mapping into the desired output
    },
    var: () => {
        // Variance = (sum((X- min)^2))/n-1

        const squares = [];
        ages.forEach(elem => {
            squares.push(((elem - statistics.mean()) ** 2));
        })
        let sum_sq = statistics.sum(squares);
        return sum_sq / (statistics.count() - 1);
    },
    sd: () => {
        return Math.sqrt(statistics.var())
    }
    // write a function to calculate frequency distribution.

}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 29.76
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // [{'mode': 26, 'count': 5}]
console.log('Variance: ', statistics.var()) // 18.27
console.log('Standard Deviation: ', statistics.sd()) // 4.27
// console.log('Frequency Distribution: ', statistics.freqDist()) #[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
