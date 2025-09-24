function runlater() {
  console.log("sumeya");
}

runlater();
// setTimeout(runlater, 30000)
let timer = setInterval(runlater, 1000);
setTimeout(
    function () {
  clearInterval(timer);
}, 10000
         );
