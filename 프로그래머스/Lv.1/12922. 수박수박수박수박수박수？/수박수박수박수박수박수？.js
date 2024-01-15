function solution(n) {
    var answer = '';
    let wm = "수박"
        if(n %2 === 0){
            answer = wm.repeat(n/2);
        }else {
            answer = wm.repeat(Math.floor(n/2)) + "수";
        }

    return answer;
}