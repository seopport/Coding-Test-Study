function solution(num, k) {
    return num.toString().indexOf(k.toString()) >= 0 ? num.toString().indexOf(k.toString()) + 1 : -1
}