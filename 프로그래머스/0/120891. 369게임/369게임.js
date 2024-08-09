function solution(order) {
    return order.toString().split('').filter((item) => ["3", "6", "9"].includes(item)).length
}