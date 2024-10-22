document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    
    let allAnswered = true; // Flag to check if all questions are answered
    let resultText = ""; // Initialize a variable to hold the result text
    let resultDiv = document.getElementById("quizResult"); // Get the result div

    // Collect responses for each question
    for (let i = 1; i <= 10; i++) {
        let question = document.querySelector(`input[name="question${i}"]:checked`);
        console.log(`Question ${i}: ${question ? question.value : "Not answered"}`); // Log the response
        if (!question) {
            allAnswered = false; // If any question is not answered
        }
        resultText += question ? `${i}. Response: ${question.value}<br>` : `${i}. Response: Not answered<br>`;
    }

    if (!allAnswered) {
        alert("Please answer all questions before submitting."); // Alert if not all questions are answered
        return; // Exit the function early
    }

    // Display the result in the result section
    console.log("Displaying results:", resultText); // Log the result text
    resultDiv.innerHTML = "<h3>Your Responses:</h3>" + resultText;
});