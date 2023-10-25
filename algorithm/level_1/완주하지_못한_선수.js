function solution(participant, completion) {

    let members = {};
    participant.forEach(v => {
        members[v] = !members[v] ? 1 : members[v] + 1
    })

    completion.forEach(v => {
        members[v] -= 1;
    })

    return Object.entries(members).find(v => v[1] === 1)[0];

}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));