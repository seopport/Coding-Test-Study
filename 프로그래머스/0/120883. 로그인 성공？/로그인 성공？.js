function solution(id_pw, db) {
    let answer = ''
    
//     if(db.filter((info) => id_pw[0] === info[0]).length === 0) return 'fail';
        
//     db.forEach((info) => {
//         if(id_pw[0] === info[0]){
//             answer = id_pw[1] === info[1] ? "login" : "wrong pw";
//         }
//     })
    
    const [id, pw] = id_pw;
    const database = new Map(db);
    return database.has(id) ? (database.get(id) === pw ? "login" : 'wrong pw') : "fail"
    
    // return answer;
}