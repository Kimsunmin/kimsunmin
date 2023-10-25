function solution(citations) {

    let hIndex = citations
        .sort((a, b) => b - a)
        .findIndex((v, i) => i >= v);

    return hIndex >= 0 ? hIndex : citations.length;
}

const citations = [3, 4];
console.log(solution(citations))