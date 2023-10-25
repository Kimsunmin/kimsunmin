function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(0);

    const search = (i) => {
        visited[i] = true;
        for(let j=0; j<n; j++){
            if(computers[i][j] === 1 && !visited[j]){
                search(j);
            }
        }
    };

    for(let i=0; i<n; i++){
        if(!visited[i]){
            search(i);
            answer++;
        }
    }

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));