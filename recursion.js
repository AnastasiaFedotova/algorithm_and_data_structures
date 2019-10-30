//применение рекурсии в подсчете суммы всех чисел массива
function summ(arr, index = 0) {
    if(arr.length < 2) return arr[index] || false;
    if(arr.length - 1 != index) {
        return arr[index] += summ(arr, index + 1);
    }
    return arr[index];
}
summ([20, 30, 4], 0);

//найти наибольшее число в массиве
function findBiggest(arr, index = 0, count) {
    if(arr.length < 2) return arr[index] || false;
    if(index == arr.length - 1) return count;
    arr[index] > count ? count = arr[index] : false;
    return findBiggest(arr, index += 1, count);
}
