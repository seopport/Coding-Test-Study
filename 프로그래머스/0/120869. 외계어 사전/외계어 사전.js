function solution(spell, dic) {
    const sortedDic = dic.map((item) => [...item].sort().join(''));
    const sortedSpell = [...spell].sort().join('');
    return sortedDic.some((item) => item.includes(sortedSpell)) ? 1 : 2;
} 

