function solution(my_string) {    
    let num = 0;
    const myStr = my_string.split(' ');
    
    for(let i = 0; i < myStr.length; i++){
        if(myStr[i] === '+' && i <= 2){
            num = ~~myStr[i - 1] + ~~myStr[i+1]
        }else if(myStr[i] === '-' && i <= 2){
            num = ~~myStr[i - 1] - ~~myStr[i+1]
        }
        
        if(myStr[i] === '+' && i > 2 ){
            num += ~~myStr[i+1]
        }else if(myStr[i] === '-' && i > 2 ){
            num -= ~~myStr[i+1]
        } 
        console.log(num)
        
    }
   
    return num
}