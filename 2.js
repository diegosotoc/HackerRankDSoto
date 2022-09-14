'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let minor = arr[0];
    let max = arr[0];
    let sum = 0;
    // Find de mininum
    for(let i = 0; i < arr.length; i++){
        if (minor > arr[i+1]) {
            minor = arr[i+1];
        }
        if (max < arr[i+1]) {
            max = arr[i+1];
        }
        sum += arr[i];
    }
    let finalSumMin = sum-max
    let finalSumMax = sum-minor
    console.log(finalSumMin + " " + finalSumMax);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
   