let userName = "";
let quizScore = 0;
let completed = 12;
const total = 12; // 4 simulations + 8 quiz
function startTraining() {
    userName = document.getElementById("username").value.trim();
    if (userName === "") {
        alert("Please enter your name before starting the training!");
        return;
    }
    // Hide name input, show training
    document.getElementById("user-section").style.display = "none";
    document.getElementById("trainingSection").style.display = "block";
}

function updateProgressBar() {
  completed++;
  const percent = Math.round((completed / total) * 100);
  document.getElementById("progress").style.width = percent + "%";
  document.getElementById("progress-label").textContent = percent + "%";

  if(percent === 100) triggerConfetti();
}

function simulateAnswer(button, correct) {
  const feedback = button.parentElement.querySelector('.feedback');
  if(correct){
    feedback.textContent = "✅ Correct! This is phishing.";
    quizScore++;
  } else {
    feedback.textContent = "❌ Incorrect. This one is safe.";
  }
  button.parentElement.classList.add("completed");
  updateProgressBar();
}

function quizAnswer(button, correct, explanation) {
  const feedback = document.getElementById("quiz-feedback");
  if(correct){
    feedback.textContent = "✅ " + explanation;
    quizScore++;
  } else {
    feedback.textContent = "❌ " + explanation;
  }
  button.parentElement.classList.add("completed");
  updateProgressBar();
}

function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

