function solution(my_string, num1, num2) {
    let stringArray = [...my_string];
    const str1 = my_string[num1];
    const str2 = my_string[num2];
    
    stringArray.splice(num1, 1, str2);
    stringArray.splice(num2, 1, str1);
    
    return stringArray.join('');
}