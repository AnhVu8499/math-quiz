document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let correctAnswer = 0;
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a new math question
    const generateQuestion = () => {
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, num1);
        const questionType = getRandomInt(1,3);

        // Update the question text
        if (questionType === 1) {
            document.getElementById('question').textContent = `${num1} + ${num2} = ?`;
            correctAnswer = num1 + num2;
        } else if (questionType === 2) {
            document.getElementById('question').textContent = `${num1} - ${num2} = ?`;
            correctAnswer = num1 - num2;
        } else if (questionType === 3) {
            document.getElementById('question').textContent = `${num1} * ${num2} = ?`;
            correctAnswer = num1 * num2;
        }
        // else {
        //     document.getElementById('question').textContent = `${num1} % ${num2} = ?`;
        //     correctAnswer = num1 / num2;
        // }
        
        const randomNumber = getRandomInt(1,9);
        // Generate random answers including the correct one
        const answers = [
            correctAnswer,
            correctAnswer+randomNumber, 
            Math.abs(correctAnswer-randomNumber),
            correctAnswer*randomNumber,
        ];

        // Shuffle answers to ensure the correct answer is in a random position
        answers.sort(() => Math.random() - 0.5);

        // Update answer options
        document.getElementById('ans-1').textContent = `a. ${answers[0]}`;
        document.getElementById('ans-2').textContent = `b. ${answers[1]}`;
        document.getElementById('ans-3').textContent = `c. ${answers[2]}`;
        document.getElementById('ans-4').textContent = `d. ${answers[3]}`;
    }

    // Function to update the score display
    const updateScore = () => {
        document.getElementById('print_score').textContent = `${score}`;
    }

    // Function to handle answer selection
    const handleAnswerClick = (event) => {
        if (event.target && event.target.nodeName === 'P') {
            const selectedAnswer = parseInt(event.target.textContent.split('. ')[1]);
            if (selectedAnswer === correctAnswer) {
                score++;
            } else {
                score--;
            }
            updateScore();
            generateQuestion();
        }
    }

    // Set up event listener for the answers container
    document.getElementById('answers').addEventListener('click', handleAnswerClick);

    // Generate the first question
    generateQuestion();
});
