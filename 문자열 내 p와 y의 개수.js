/*
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
---
제한사항(입력값의 예시)
- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.
*/ 

s = "pYY";

function solution(s){
    var answer = true;

    lower_s = s.toLowerCase(); //소문자로 변환
    
    let arr_p = [];
    let arr_y = [];
    
    for(let i =0; i<=50; i++) { 
        if(lower_s[i] === "p") { //조회한 인덱스가 p라면
            is_p = lower_s[i] //is_p는 문자열 p
            arr_p.push(is_p); //arr_p 배열에 추가
        }
    }
    
    for(let i =0; i<=50; i++) {
        if(lower_s[i] === "y") {
            is_y = lower_s[i]
            arr_y.push(is_y);
        }
    }
        //p배열과y배열의 길이가 같다면 || p배열 + y배열 = 0 이라면
        if(arr_y.length === arr_p.length || arr_y.length + arr_p.length === 0) {
        console.log("true")
        answer = true;
    } else {
        console.log("false")
        answer = false;
    }

    return answer;
}

solution(s);

/* 튜터님 코드 
function solution(s){
  var result = true;
  s = s.toUpperCase();
  var num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++; // p이면 갯수 더하기
    if(s[i] === 'Y') num--; // y이면 갯수 빼기
  } 
  result = (num === 0); // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)

  return result;
}
*/