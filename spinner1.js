process.stdout.write('hello from spinner1.js... \rheyyy\n');
// because \r brought our cursor back to the beginning.

setTimeout(() => {
  process.stdout.write('\r| hi  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ people  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- of ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\ js  '); 
}, 700);

// ... fill in the rest yourself ...