function solution(s) {
  // for문 돌려서 count 넣고 공백이면 count 0으로 초기화 하고 공백 추가,
  // count가 홀수면 소문자로 추가
  // count가 짝수면 대문자로 추가
  answer = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count = 0;
      answer += " ";
    } else {
      if (count % 2 === 0) answer += s[i].toUpperCase();
      else {
        answer += s[i].toLowerCase();
      }
      count++;
      console.log(count);
    }
  }
  return answer;
}

















// function solution(s) {
//     var answer = [];
//     s = s.split(' ');
//     let odd = [];
//     let even = [];
    
//     for(let i = 0; i<s.length; i++){
//         for(let j = 0; j<s[i].length; j++){
//             if(j % 2 === 0){
//             even.push(s[i][j])
//         }else odd.push(s[i][j])
//         }
        
//     }
    
//     even = even.join('').toUpperCase();
//     even = even.split('');
    
//     odd = odd.join('').toLowerCase();
//     odd = odd.split('');
    
//     console.log(even, odd)
    
//     const minLength = Math.min(even.length, odd.length)

//     for(let i = 0; i<even.length; i++){
//         answer.push(even[i]);
//         // answer.push(odd[i]);
//     }
    
    
    
//     return answer.join('');
// }