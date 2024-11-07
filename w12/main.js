function startWorkout() {
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const minutes = document.getElementById('minutes').value || 0; // default 0 
    const seconds = document.getElementById('seconds').value || 0; // default 0 

    // clear 
    const output = document.getElementById('output');
    output.innerHTML = '';

    // synchronous output message
    const startMessage = document.createElement('p');
    startMessage.innerHTML = `Start ${exercise} -- Goal reps is ${reps}`;
    output.appendChild(startMessage);

    // convert minutes and seconds to milliseconds
    const timeInMs = (minutes * 60 * 1000) + (seconds * 1000);

    // asynchronous output and callback
    setTimeout(() => {
        const stopMessage = document.createElement('p');
        stopMessage.innerHTML = `Stop ${exercise}`;
        output.appendChild(stopMessage);

        // callback function after message
        afterWorkoutCallback();
    }, timeInMs);
}

// callback function 
function afterWorkoutCallback() {
    const output = document.getElementById('output');
    const completedMessage = document.createElement('p');
    completedMessage.innerHTML = "Workout completed! Great job!";
    output.appendChild(completedMessage);
}
