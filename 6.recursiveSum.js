// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


const recursiveSum = (arr) => {
    if(arr.length === 1) {
        console.log(arr[0])
        return;
    } else {
        let newArr = [];
        let sum = arr[0] + arr[1];
        newArr.push(sum);
        for(let i = 2; i <= arr.length -1; i++) {
            newArr.push(arr[i])
        }
        recursiveSum(newArr)
    }  
}

const arr1 = [5, 2, 9, 11]
recursiveSum(arr1) // should return 27
