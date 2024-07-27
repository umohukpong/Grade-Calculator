const  scoreInput = document.getElementById('score');
const  calculateScore = document.getElementById('calculateScore');
const resetScore = document.getElementById('resetScore');

scoreInput.onclick = calculateGrade;
calculateScore.onclick = calculateGrade;
resetScore.onclick = resetGrade;

function resetGrade() {
    scoreInput.value = "";
    scoreInput.placeholder = "Enter a score (0-100)";
    document.getElementById('result').innerText = "";
}

function calculateGrade() {
    let score = scoreInput.value;
    let grade;

    if (score === "") {
        document.getElementById('result').innerText = "Please enter a score.";
        return;
    }

    if (score < 0 || score > 100) {
        document.getElementById('result').innerText = "Score must be between 0 and 100.";
        return;
    }

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else if (score >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Score: ${score} - Grade: ${grade}`;
}
