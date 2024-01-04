const str = ["sun", "bed", "car"];
const n = 1


function solution(str, n) {

    for (let i = 0; i < str.length; i++) {

        let plus = str[i][n]
        str[i] = plus + str[i]
    }
    str.sort()

    let str_slice = []

    for (let i = 0; i < str.length; i++) {
        str_slice.push(str[i].slice(1)) //첫번째부터 자르고 나머지 반환
    }

    return str_slice;
}

solution(str, n)

/* 시도1
// for(let i = 0; i<str.length; i++) {
//     // console.log(str[i+1]);
//     if(str[i][n] > str[i+1][n]) { //sun > bed 앞에께 크면 앞에께 나중 알파벳이니까 순서바꿔라
//         //순서를 바꿔라
//         [str[i], str[i+1]] = [str[i+1], str[i]]; 
//         console.log([str[i], str[i+1]])
// }}



//console.log(str);

// console.log( "c" < "a" ? "true" : "false")
// //a는 b보다 작다 = 나중으로 갈 수록 큰 수
*/
