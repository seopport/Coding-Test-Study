function solution(age) {
    var answer = '';
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const name = age.toString().split('').map((item) => alphabet[item]).join('');
    return name;
}