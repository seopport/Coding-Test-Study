function solution(arr) {
    var answer = [];
    var temp = 0;
    
    var minNum = Math.min(...arr);
    console.log(minNum)
    arr.splice(arr.indexOf(minNum), 1);
    
    if(arr.length === 0 ){
        arr.push(-1);
    }

    return arr;
}


// for(let i =0; i<arr.length - 1; i++){
//         for(let j = 0; j<arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){ //arr[j+1]를 arr[j]로 바꿔야함.
//                 temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }