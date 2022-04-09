/*
 Pseudo code for merge function:
 - Create an empty array, take a look at the smallest values in each input array
 - While there are still values we haven't looked at...
   - if the value in the first array is smaller than the value in
     the second array, push the value in the first array into our
     results and move on to the next value in the first array
   - If the value in the first array is larger than the value in the
     second array, push the value in the second array into our
     results and move on to the next value in the second array
   - Once we exhaust one array, push in all remaining values from the other array
 */


const merge = (arr1,arr2) => {
    let resultArr = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            resultArr.push(arr1.shift())
        } else {
            resultArr.push(arr2.shift())
        }
    }

    return [...resultArr, ...arr1, ...arr2];
}

/*
Pseudo code for sort function:
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
  you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array
 */

const mergeSort = (arr) => {
    const mid = Math.floor(arr.length / 2);

    if (arr.length <= 1) return arr;

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))

    return merge(left, right);
}

mergeSort([10, 24, 76, 73, 1]);
