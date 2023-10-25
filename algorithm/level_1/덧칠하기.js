const n = 8;
const m = 4;
const section = [2, 3, 6];

function solution(n, m, section) {
    var answer = 0;

    section.reduce((p, n) => {
        if(n > p){
            answer++;
            p = n + m - 1;
        }
        return p = p;
    }, 0)

    return answer;
}

console.log(solution(n, m, section));
