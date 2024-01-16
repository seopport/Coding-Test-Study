function solution(price, money, count) {
    var answer = 0;
    let bill = 0;
    
    for(let i = 1; i<=count; i++){
        bill += price * i
    }  
    
    money - bill < 0 ? answer = (money - bill) * -1 : answer = 0


    return answer;
}