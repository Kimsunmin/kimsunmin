function solution(s) {
    return s
    .toLowerCase()
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(' ');
}

//''.toLowerCase

console.log(solution("3people unFollowed meaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a a a a a aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a a aaaaaaaaaaaaaaaaaaaaaaaaa a a a aaaaaaaaaaaaassss         dwqe     sssss"))