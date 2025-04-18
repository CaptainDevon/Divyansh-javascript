setTimeout(() => {
  process.exit();
}, 2000);

process.on("exit", () => {
  console.log(`process will exit now`);
});

console.log("hello");
//done
