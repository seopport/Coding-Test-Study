function solution(dots) {
    let xDots = [];
    let yDots = [];
    
    for(let i = 0; i<dots.length; i++){
        xDots.push(dots[i][0]);
        yDots.push(dots[i][1]);
    }
    
    return (Math.max(...xDots) - Math.min(...xDots)) * (Math.max(...yDots) - Math.min(...yDots));
}