let numbers = [];

let i = 1;
while (i <= 20) {
    numbers.push(i);
    i++;
}
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}
for (let j = 0; j < numbers.length; j++) {
    
    if (numbers[j] % 2 === 0) {
        continue; // Skip even numbers
    }

    console.log(numbers[j]);
}
for (let j = 0; j < numbers.length; j++) {
    
    if (numbers[j] === 10) {
        break; // Stop the loop completely
    }

    console.log(numbers[j]);
}