function solution(numlist, n) {
    let sorted = numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
    
    for(let i = 0; i<sorted.length; i++){
        if(Math.abs(n - sorted[i]) === Math.abs(n - sorted[i+1])){
            const front = sorted[i];
            const back = sorted[i+1];
           sorted[i] = Math.max(front, back)
           sorted[i+1] = Math.min(front, back)
           }
    }
    
    return sorted;
}