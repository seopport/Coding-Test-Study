function solution(my_string) {
    return my_string.split('').reduce((prev, curr) => ~~prev + ~~curr )
}