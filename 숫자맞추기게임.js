
//숫자 맞추기 게임 - 미완성
//let user_num = 20
let ans_num = 30;
let count = 0;

function numcheck(user_num) {
    while (user_num !== ans_num) {
        if (user_num > ans_num) {
            console.log("down")
            count++;
        }
        else if (user_num < ans_num) {
            console.log("up")
            count++;
        }
        else {
            break;
        }
    } 
    console.log("CORRECT")
    console.log("숫자 입력한 횟수 : " + count)
}



numcheck(40);


/* 문자열 비교 

function(str) {
    let arrcheck = ;
    for(let i = 0; i<arr.length; i++;){
        let arrcheck[] = arr.split(arr[i]).length-1

    }
}

*/