function solution(box, n) {
    const x = parseInt(box[0] / n);
    const y = parseInt(box[1] / n);
    const z = parseInt(box[2] / n);

    return x*y*z;
}