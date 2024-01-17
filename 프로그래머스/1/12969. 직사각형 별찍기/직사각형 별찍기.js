process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    // solution 함수 호출
    solution(a, b);
});

function solution(n, m) {
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push("*");
    }
    console.log(row.join(''));
  }
}
