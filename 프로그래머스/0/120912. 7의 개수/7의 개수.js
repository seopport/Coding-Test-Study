function solution(array) {
    var answer = 0;
    const charArray = array.reduce((acc, cur) => acc + cur+'', 0);
    return ~~charArray.match(new RegExp(7, 'g'))?.length
}