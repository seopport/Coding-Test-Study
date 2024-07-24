function solution(price) {
    let sale = 0;
    
    // 10만 이상 5퍼
    // 30만 이상 10퍼
    // 50만 이상 20퍼
    if(price >=100000 && price < 300000){
        sale = 0.05;
    }else if(price >= 300000 && price < 500000){
        sale = 0.1;
    }else if(price >= 500000){
        sale = 0.2;
    }
    
    return Math.floor(price - (price * sale));
}