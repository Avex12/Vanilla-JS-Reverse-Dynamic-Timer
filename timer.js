// Create a timer
// Timer should go in reverse
// On each call the time should be like when on 9 then 9 secs 8 then 8 secs and so on.

(function timerCaller(timer) {
  setTimeout(() => {
    console.log(timer);
    timer--;
    if (timer === 0) return;
    timerCaller(timer);
  }, timer * 1000);
})(4);
