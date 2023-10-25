function solution(array, commands) {
    let answer = [];
    
    answer = commands.map((v) => {
       let [i, j, k] = v;
        return array.slice(i-1, j).sort((a, b) => a - b)[k-1];
    });
    
    return answer;
}
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands))