function solution(s) {
    
    if(s.length == 4 || s.length == 6){
        if(s.includes("e")){
            return false;
        }
        return isNaN(s*1) ? false : true;  
    }
    
    return false;
}

//테스트 11 4또는 6인데 트루가 나온다?