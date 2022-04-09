// Pseudo code:
/*
    1) Start looping from a variable called "i" to the end of the array towards the beginning
    2) Start an inner loop with a variable called "j" from the beginning until j < i - 1
    3) If arr[j] is grater than arr[j+1], swap those two values!
    4) Return the sorted array
*/

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}

bubbleSort([8, 0, 1,4,6]);
