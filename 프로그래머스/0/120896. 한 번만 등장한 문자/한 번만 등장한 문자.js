function solution(s) {
    return [...s].filter((item) => s.indexOf(item) === s.lastIndexOf(item)).sort().join('')
}