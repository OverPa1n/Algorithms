/*
Pseudo Code:

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (means the left side)
  to place the element in the correct place.
- Repeat until the array is sorted.
 */

const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if(arr[j + 1] < arr[j]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j + 1]]
            } else {
                break;
            }
        }
    }

    return arr;
}

insertionSort([20, 10, 0, -2]);
