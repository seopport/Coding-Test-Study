function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];
}