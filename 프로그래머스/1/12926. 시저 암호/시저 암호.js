function solution(s, n) {
    var answer = [];
    s = s.split('')
    
    alpha = ["a","b","c","d","e","f","g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    for(let i = 0; i<s.length; i++){
        if(alpha.includes(s[i])){
            let index = alpha.indexOf(s[i])
            index+n >25 ? answer.push(alpha[index+n-26]) :answer.push(alpha[index+n])
            console.log("index :", index, "index+n:",index+n)
        }else if(s[i] === ' '){
            answer.push(' ')
        }else {
            let index = alpha.indexOf(s[i].toLowerCase());
            index+n >25 ? answer.push(alpha[index+n-26].toUpperCase()) :answer.push(alpha[index+n].toUpperCase())
             console.log("index :", index, "index+n:",index+n)
        }
    }
    
    return answer.join('');
}

