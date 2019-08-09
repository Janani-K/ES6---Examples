let [bookName, author] = ["Java", "Sandra", "2019", "Rs2000"];
console.log(bookName);
console.log(author);

let[book, ...details] = ["Java", "Sandra", "2019", "Rs2000"];
console.log(book);
console.log(details);

let[, , ...trivial] = ["Java", "Sandra", "2019", "Rs2000"];
console.log(trivial);