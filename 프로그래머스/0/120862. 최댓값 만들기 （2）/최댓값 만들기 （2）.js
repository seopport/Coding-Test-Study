function solution(numbers) {
    numbers.sort((a, b) => b - a)
    const front = numbers[0] * numbers[1]
    const back = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return front > back ? front : back
}
                    
