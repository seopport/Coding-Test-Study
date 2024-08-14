function solution(array) {
    const charArray = array.reduce((acc, cur) => acc + cur+'', 0);
    return ~~charArray.match(/7/g)?.length
}