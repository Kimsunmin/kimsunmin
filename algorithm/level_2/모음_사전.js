function solution(word) {
    const distWords = [...'AEIOU'];
    const result = [];
    const str = '';

    for(let i in distWords) {
        dfs(distWords, str, parseInt(i)+1, result);
    }

    return result.sort().indexOf(word) + 1;
}

const dfs = function (distWords, word, length, result) {
    if(length === word.length) {
        result.push(word);
        return;
    }
    distWords.forEach((v) => {
        dfs(distWords, word + v, length, result)
    });
}

const word = 'AAAAE';
console.log(solution(word));