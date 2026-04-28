function openLetter() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function nextStep() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function startMeter() {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");

  let progress = 0;
  let interval = setInterval(() => {
    progress += 5;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("percent").innerText = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("step4").classList.add("hidden");
        document.getElementById("step5").classList.remove("hidden");
      }, 800);
    }
  }, 100);
}

function showMsg(num) {
  document.getElementById("msg" + num).classList.remove("hidden");
}