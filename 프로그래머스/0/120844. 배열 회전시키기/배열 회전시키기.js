function solution(numbers, direction) {
    if(direction === "right"){
        const num = numbers.pop();
        numbers.unshift(num)
        return numbers;
    }else{
        const num = numbers.shift();
        numbers.push(num);
        return numbers;
    }
}