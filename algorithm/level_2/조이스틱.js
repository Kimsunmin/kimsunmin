function solution(name) {
    let answer = 0;

    const codeA = 'A'.charCodeAt();
    const codeZ = 'Z'.charCodeAt() + 1;
    const size = name.length;
    let minCursurMove = size - 1;

    const nameCode = name
        .split('')
        .map(v => v.charCodeAt())
        .map(v => Math.min(v - codeA, Math.abs(codeZ - v)))
        .forEach((v, i, arr) => {
            let cursor = i+1;

            answer += v;

            while(cursor < size && arr[cursor] === 0)
                cursor += 1;

            console.log(i, (i*2) + size - cursor);
            minCursurMove = Math.min(minCursurMove, (i*2) + size - cursor);
        });
    console.log(answer, minCursurMove);
    return answer += minCursurMove;
}

// 17 - 8 = 9 


console.log(solution('JAZ'));
console.log(solution('JAN'));
console.log(solution('BAALEAAAPMAAAHSRAV'));




//BBAAAABBB|BBAAAABBB