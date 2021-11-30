
const spinner = ['\r|', '\r/', '\r-', '\r\\'];
let delay = 100;
let increment = 200;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write (char); // more control and avoid automatically adding an extra "newline character" at the end each time.
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.  
  delay += increment;
};