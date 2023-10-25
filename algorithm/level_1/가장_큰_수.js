function solution(numbers) {
    let answer = '';

    answer = numbers
        .map(v=>String(v))
        .sort((a, b) => (b+a) - (a+b))
        .join('');

    return answer.charAt(0) === '0' ? '0' : answer;
}


console.log(solution([3, 30, 34, 5, 9]))