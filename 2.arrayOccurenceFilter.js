// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution must work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]

const occurrenceFilter = (arr, n) => {
    let obj = {};
    for (let i of arr) {
        if(!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i] += 1;
        }
    }

    let returnArr = [];

    for(let i in obj) {
        if(obj[i] >= n) {
            returnArr.push(i)
        }
    }

    console.log(returnArr)
}

occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3) // Returns [1, 3]
