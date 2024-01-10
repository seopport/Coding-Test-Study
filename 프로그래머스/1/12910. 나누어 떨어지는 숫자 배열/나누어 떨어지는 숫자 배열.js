function solution(arr, divisor) {
    let dividedArr = [];
    
    dividedArr = arr.filter((num) => num%divisor === 0).sort((a, b) => a - b);
    if (dividedArr.length === 0){
        dividedArr.push(-1)
    }
    
    return dividedArr;
}