function solution(myString) {
    const vowels = ["a", "e", "i", "o", "u"];
    return myString.split('').filter((item) => !vowels.includes(item)).join('');
}