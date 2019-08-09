function sumNumber(...numbers){
    let total = 0;
    
    numbers.forEach(number => total += number);
    return total;
}

let sum =  sumNumber(1,2,3,4,5);
console.log(sum)