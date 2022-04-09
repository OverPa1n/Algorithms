// Pseudo Code:

/*
1) Function accepts a sorted array and a value
2) Create a left pointer at the start of the array, and a right pointer at the end of the array
3) While the left pointer comes before the right:
    - Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - if the value is too large, move the right pointer down
4) If you never find the value, return - 1
 */

const binarySearch = (array, value) => {
    let start = 0;
    let end = array.length - 1;

    for(let i = 0; i <= array.length -1; i++) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === value) {
            return mid
        }

        if (array[mid] > value) {
            end = mid - 1
        } else {
            start = mid + 1
        }

    }

    return -1;
}

binarySearch([1,4,6,7,9,10,12,15], 4);
