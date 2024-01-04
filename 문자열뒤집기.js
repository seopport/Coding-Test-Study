let str = "spartan"


//핵심: for문 역순 돌기
function reverseStr (str) {
    let new_str = ""
    for(let i = str.length - 1; i >= 0; i--){ //i=6, 길이는 7인데, 마지막 인덱스는 길이 - 1 이므로/ 0번째 인덱스까지 봐야하니까 >=
        //빈 문자열에 더하기
        new_str += str[i]
    }
    return new_str;
}

console.log(reverseStr(str))