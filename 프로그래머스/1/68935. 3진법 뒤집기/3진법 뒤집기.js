function solution(n) {
    const base3 = n.toString(3);
    const reverse = [...base3].reverse().join('');
    const base10 = parseInt(reverse, 3);
    
    return base10;
}