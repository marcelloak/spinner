const output = ["|","/","-","\\"];

const spinner = function() {
  for (let i = 0; i < 9; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${output[i % output.length]}   `);
    }, 100 + (i * 200));
  }
}

spinner();