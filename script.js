function otp() {
  alert("OTP SENT!");
}
function kannu() {
  alert("Username and Password Sent to E-mail and Mobile number!");
}
function thankyou() {
  alert("Message Sent! Thankyou for your message");
}

function checkLogin(event) {
  event.preventDefault();
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "2500110185" && pass === "1234") {
    window.location.href = "Your_Profile.html";
  } else {
    alert("Invalid username or password!");
  }
}

function checkQuiz() {
  const answers = {
    q1: "Apply pressure on the wound",
    q2: "Put under cool running water",
    q3: "Check if the person is responsive and breathing",
    q4: "112",
    q5: "Recovery position"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (const [q, correctAnswer] of Object.entries(answers)) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === correctAnswer) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${total}.`;

  if (score === total) {
    result.style.color = "green";
    result.textContent += " Excellent! You know your Kargil history well.";
  } else if (score >= total / 2) {
    result.style.color = "orange";
    result.textContent += " Good effort! Keep learning more.";
  } else {
    result.style.color = "red";
    result.textContent += " Don't worry, try again to improve your score.";
  }
}

