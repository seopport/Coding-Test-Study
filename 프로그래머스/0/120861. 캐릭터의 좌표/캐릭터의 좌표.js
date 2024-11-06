function solution(keyinput, board) {
    var answer = [0, 0];
    const [x, y] = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
    for(let i = 0; i < keyinput.length; i++){
         switch(keyinput[i]){
             case "up":
                 if(answer[1] < y) answer[1] += 1;
                 break;
            case "down":
                 if(answer[1] > -y) answer[1] -= 1;
                 break;
            case "left":
                 if(answer[0] > -x) answer[0] -= 1;
                 break;
            case "right":
                 if(answer[0] < x) answer[0] += 1;
                 break;
         }

        
    }
    
    return answer;
}