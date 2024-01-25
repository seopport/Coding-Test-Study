//모든 명함을 가로로 돌리고 가장 큰 가로값과 가장 큰 세로값
function solution(sizes) {
    var answer = 0;
    let maxWidth = [];
    let maxHeight = [];
    
    for(let i = 0; i<sizes.length; i++){
        maxWidth.push(Math.max(sizes[i][0], sizes[i][1]))
        maxHeight.push(Math.min(sizes[i][0], sizes[i][1]))
    }
    maxWidth = Math.max(...maxWidth)
    maxHeight = Math.max(...maxHeight)
    
    return maxWidth * maxHeight;
}