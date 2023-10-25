function solution(numbers, target) {
    let answer = 0;

    const length = numbers.length;

    const search = (dep, sum) => {
        if(dep === length) {
            if(sum === target){
                answer++;
            }
            return;
        }

        search(dep+1, sum + numbers[dep]);
        search(dep+1, sum - numbers[dep]);
    };

    search(0, 0);

    return answer;
}

console.log(solution([1,1,1,1,1], 3));