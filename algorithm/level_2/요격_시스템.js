function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);
    
    let result = 0;

    targets.reduce((p, n) => {
        const [s, e] = n;
        if(p < s){
            p = e - 1;
            result++;
        }
        return p;
    }, -1);

    
    return result;
}

const data = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
console.log(solution(data));