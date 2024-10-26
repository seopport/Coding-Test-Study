function solution(numbers) {
    let sumList = [];
    const sorted = [...numbers].sort((a, b) => a - b);
    for(let i = 0; i < sorted.length; i++){
        for(let j = i + 1; j < sorted.length; j++){
            sumList.push(sorted[i] + sorted[j])
        }
    }
    return [...new Set(sumList)].sort((a, b) => a - b);
}        