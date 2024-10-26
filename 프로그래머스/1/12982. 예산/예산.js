function solution(d, budget) {
    let sum = 0;
    let count = 0;
    
    if(d.reduce((acc, cur) => acc + cur) <= budget){
        return d.length;
    }else {
        const sortedD = d.sort((a, b) => a - b);
        for(let i = 0; i < sortedD.length; i++){
            sum += sortedD[i];
            count++;
            if(sum > budget) {
                return count - 1;
            }else if(sum === budget) return count;
        }
    }
        
}