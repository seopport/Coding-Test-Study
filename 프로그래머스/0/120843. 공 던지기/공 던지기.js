function solution(numbers, k) {
    const n = numbers.length;  // 친구들의 총 수
    let currentIndex = 0;      // 현재 인덱스

    for (let i = 1; i < k; i++) {
        currentIndex = (currentIndex + 2) % n; // 두 명을 건너뛰기
    }

    return numbers[currentIndex];
}
