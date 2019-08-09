var converter = function(funcRef){
    var result = funcRef;
    return result;
}

var tempConverter = (faren)=> 5/9 * faren -32;

var USDToINR = (USD) => USD*65;

//console.log(converter(()=>45))

console.log(converter(tempConverter(45)))
console.log(converter(USDToINR(5)))