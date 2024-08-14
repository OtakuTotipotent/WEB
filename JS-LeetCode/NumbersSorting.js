
const numbers = [33, 2, 8];

numbers.sort(); // sorts in lexicographic order i.e considers everything as string
console.log(numbers[1]);


numbers.sort((n1, n2) => {
    return n1 - n2;
}); // force change in behavior of sort() method
console.log(numbers[1]);

