function solution(array, n) {
    array.push(n);
    array.sort((a, b) => a - b)
    if(Math.max(...array) === n) return array[array.length - 2];
    
    const front = array[array.indexOf(n) - 1];
    const back = array[array.indexOf(n) + 1];
    if (n - front === Math.abs(n - back)) return front;
    return n - front < Math.abs(n - back) ? front : back;
}