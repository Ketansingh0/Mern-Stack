console.log('1. Start of script');

// Microtask queue (Promise)
Promise.resolve().then(() => console.log('2. Microtask 1'));

// Timer queue 
setTimeout(() => console.log('3. Timeout 1'), 0);

// I/O queue
const fs = require('fs');
fs.readFile('userDetails.txt', () => console.log('4. I/O operation'));

// Check queue
setImmediate(() => console.log('5. Immediate 1'));

// Close queue
process.on('exit', (code) => {
  console.log('6. Exit event');
});

console.log('7. End of script');