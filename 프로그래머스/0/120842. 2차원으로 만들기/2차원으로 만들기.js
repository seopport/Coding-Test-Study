function solution(num_list, n) {
    const array = new Array(num_list.length / n).fill([]);
    for(let i = 0; i < array.length; i++){
        array[i] = num_list.splice(0, n)
    }
    
    return array;
}