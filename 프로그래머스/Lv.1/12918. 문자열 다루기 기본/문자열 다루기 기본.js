function solution(s) {
    return /^[0-9]+$/.test(s) && (s.length === 4 || s.length === 6);
}


//테스트 11 4또는 6인데 트루가 나온다?