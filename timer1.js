// get the args
const args = process.argv.slice(2);

for (let a = 0; a < args.length; a++) {
  if (args[a] && (args[a] * 1)) {
    setTimeout(() => {
      console.log(`\x07`);
    }, args[a] * 100);
  }
}