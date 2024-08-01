function solution(my_string, num1, num2) {
    let stringArray = my_string.split('');
    [stringArray[num1], stringArray[num2]] = [stringArray[num2], stringArray[num1]]
    
    return stringArray.join('');
}