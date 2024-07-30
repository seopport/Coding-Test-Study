function solution(my_string, letter) {
    const stringList = [...my_string];
    const answer = stringList.filter((item) => item !== letter)
    
    return answer.join('');
}