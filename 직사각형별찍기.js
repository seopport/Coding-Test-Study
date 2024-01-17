function solution(n, m) {
  let column = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push("*");
    }
    column.push(row.join(""));
  }
  console.log(column.join("/"));
}

solution(5, 3);
