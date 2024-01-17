function solution(absolutes, signs) {
    answer = 0;
    
    for (let i = 0; i<absolutes.length; i++){
        signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i]
    }

    return answer;
}


// ----------------------------------------
// let result = 0;
// let answer = 0;

// function solution(absolutes, signs) {
    
//     for(let i = 0; i<=absolutes.length; i++){
//         //같은 위치 비교했을 때 true면은 그대로
//         // false면은 -1 곱하기
//         if(signs[i] === true){
//             answer += absolutes[i]
//         }

//         if(signs[i] === false){
//             absolutes[i] = absolutes[i] * -1
//             answer += absolutes[i]
//         }
        
//     }
//          console.log(answer);

//     return answer;
// }



