function solution(phone_book) {

    phone_book.sort()
    for(let i=0; i<phone_book.length; i++){
        if(phone_book[i+1]?.indexOf(phone_book[i]) === 0){
            return false;
        }
    }
    return true;
}


const phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book))