function solution(num_list) {
    let 짝 = 0;
    let 홀 = 0;
    
    num_list.forEach((item)=> item % 2 === 0 ? 짝++ : 홀++)
    
    return [짝, 홀];
}