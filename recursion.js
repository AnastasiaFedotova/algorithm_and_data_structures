//применение рекурсии в подсчете суммы всех чисел массива
function summ(arr, index) {
    if(arr.length - 1 != index) {
        return arr[index] += summ(arr, index+1);
    }
    return arr[index];
}
summ([20, 30, 4], 0);

/*/найти наибольшее число в массиве
function findBiggest(arr) {
}*/
