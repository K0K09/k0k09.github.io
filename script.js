let bar = document.getElementById("bar");
let percent = 0;
let barTimer = setInterval(() => {
  percent += 10;
  bar.style.width = percent + "%";
  if (percent >= 100) clearInterval(barTimer);
}, 1000);
if (timeLeft === 0) {
  document.getElementById("ding").play();
  window.location.href = "https://archive.org/...."
  ;
  
}
