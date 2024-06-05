
// 1) tinyNumber solution


function tinyPairs(a, b, k) {
    let ans = 0;

    for (let i = 0; i < a.length; i++) {
        let x = a[i];
        let y = b[a.length - 1 - 1];

        let concatenating = parseInt(String(x) + String(y), 10);
        if (concatenating < k) {
            ans++;
        }
    }

    return ans;
}
console.log(tinyNumber([1, 2, 3], [1, 2, 3], 31));


// 2) two distinct indices Solution

function twoDistinctIndices(arr, num) {
    arr.sort((a, b) => a - b);
    let l = 0;
    let r = arr.length - 1;
    const result = [];

    while (l < r) {
        const currentSum = arr[l] + arr[r];

        if (currentSum === num) {
            result.push([arr[l], arr[r]]);
            l++;
            r--;
        } else if (currentSum < num) {
            l++;
        } else {
            r--;
        }
    }

    return result;
}
console.log(twoDistinctIndices([3, 5, 2, -4, 8, 11], 7));


// 3) Reverse each word in the sentence Solution

function reverseString(str) {
    return str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
}

console.log(reverseString("Welcome to this Javascript Guide!"));
