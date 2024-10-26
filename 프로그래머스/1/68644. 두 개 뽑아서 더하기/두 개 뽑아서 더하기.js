function solution(numbers) {
    const sumSet = new Set(); // Set을 사용해 중복 제거

    // 두 개의 수를 더하는 모든 조합 생성
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumSet.add(numbers[i] + numbers[j]); // 합을 Set에 추가
        }
    }

    // Set을 배열로 변환하고 정렬
    const answer = Array.from(sumSet).sort((a, b) => a - b);
    return answer;
}
