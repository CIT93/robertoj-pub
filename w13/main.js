// get user inputs
function getUserInputs() {
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const minutes = document.getElementById('minutes').value || 0;
    const seconds = document.getElementById('seconds').value || 0;
    return { exercise, reps, minutes, seconds };
}

// clear the output
function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
}

// display a message
function displayMessage(message) {
    const output = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = message;
    output.appendChild(paragraph);
}

// display stop message
function displayStopMessage(exercise) {
    displayMessage(`Stop ${exercise}`);
}

// display workout completed message
function displayCompletionMessage() {
    displayMessage("Workout completed! Great job!");
}

// handle errors
function handleError(error) {
    displayMessage(`Error: ${error.message}`);
}

// returns a promise to delay for the specified time
function delayTimer(timeInMs) {
    return new Promise((resolve, reject) => {
        if (isNaN(timeInMs) || timeInMs < 0) {
            reject(new Error('Invalid time input.'));
        } else {
            setTimeout(() => resolve(), timeInMs);
        }
    });
}

// main function
function main() {
    const { exercise, reps, minutes, seconds } = getUserInputs();
    const timeInMs = (minutes * 60 * 1000) + (seconds * 1000);

    clearOutput();
    displayMessage(`Start ${exercise} -- Goal reps is ${reps}`);

    // chain promises for the workout process
    delayTimer(timeInMs)
        .then(displayStopMessage.bind(null, exercise))
        .then(displayCompletionMessage)
        .catch(handleError);
}
