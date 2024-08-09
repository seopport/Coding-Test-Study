function solution(order) {
    let answer = 0;
    let count = 0;
    order.toString().split('').filter((item) => {
        item === "3" || item === "6" || item === "9" ? count++ : 0;
    })
      return count;
}