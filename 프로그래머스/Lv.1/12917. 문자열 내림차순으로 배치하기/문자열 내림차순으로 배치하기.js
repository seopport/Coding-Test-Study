function solution(s) {
    return s.split('').sort().reverse().join('');
}

// function solution(s) {
//     var answer = '';
//     var lowerS = s.toLowerCase();
//     let temp = [];

//     var s = s.split('');
//     var lowerS = lowerS.split('');

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== lowerS[i]) {
//             temp.push(s[i]);
//             console.log(temp, s)
//         }
//     } 
//     s = s.sort().reverse();
//     for(let i = 0; i<temp.length; i++){
//         s.splice(s.indexOf(temp[i]), 1);
//         s.push(temp[i])
//         console.log(s)
//     }
    
//     return s.join('')

// }

