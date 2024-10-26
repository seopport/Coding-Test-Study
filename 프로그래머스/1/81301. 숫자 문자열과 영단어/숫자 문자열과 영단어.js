function solution(s) {
    let answer = s;
    
    const voca = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }
    
    // voca 객체를 순회하며 정규식으로 일치하는 단어를 전부 교체
    for (const key in voca) {
        const regex = new RegExp(key, 'g');
        answer = answer.replace(regex, voca[key]);
    }
    
    return Number(answer);
}