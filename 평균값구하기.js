numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        //배열의 값을 모두 더하기
        answer += numbers[i];

    } 
    answer /= numbers.length;
    return answer;
}

solution(numbers);


