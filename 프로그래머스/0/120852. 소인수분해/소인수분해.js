function solution(n) {
    let primeFactors = [];
    
    // 2부터 시작하여 n의 소인수 찾기
    for (let i = 2; i * i <= n; i++) {
        // i로 나누어 떨어지면 i는 소인수
        while (n % i === 0) {
            primeFactors.push(i);
            n /= i;  // 나눈 후 계속해서 나눔
        }
    }

    // n이 1보다 크면 그 값은 소수이므로 primeFactors에 추가
    if (n > 1) {
        primeFactors.push(n);
    }

    // 중복 제거 후 오름차순 정렬
    return [...new Set(primeFactors)].sort((a, b) => a - b);

}