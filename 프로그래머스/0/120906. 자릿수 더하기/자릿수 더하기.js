function solution(n) {
    return n.toString().split('').map((item)=> +item).reduce((acc, cur) => acc + cur)
}