 const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot  = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
    }

     [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]

     return swapIndex;
 }

/*
    Pseudo code
    - Call the pivot helper on the array
    - When the helper returns to you the updated pivot index,
      recursively call the pivot helper on the subarray to the left
      of that index, and the subarray to the right of that index
    - Your base case occurs when you consider a subarray with less than 2 elements
 */

 const quickSort = (array, left = 0, right = array.length - 1) => {
     if (left < right) {
         let swapIndex = pivot(array, left, right);
         quickSort(array, left, swapIndex - 1);
         quickSort(array,swapIndex + 1, right);
     }

     return array;
 }
 quickSort([100, -2, 4, 8, 2, 1, 5, 7, 6, 3]);
