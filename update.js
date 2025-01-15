/*
বিসমিল্লাহির রাহমানির রহিম
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم ِ
ইয়া আল্লাহ, এপয়েন্টমেন্টের জন্য যেন স্লট পাই, রহম করুন আমার উপর। [আমিন]
*/

(function () {
    // Add buttons to the page
    const startButton = document.createElement('button');
    const stopButton = document.createElement('button');
    const buttonContainer = document.createElement('div');

    // Style the buttons and container
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px';
    buttonContainer.style.right = '30px';
    buttonContainer.style.zIndex = '9999';

    startButton.innerText = 'Start';
    startButton.style.marginRight = '10px';
    startButton.style.padding = '6px 12px';
    startButton.style.backgroundColor = '#4CAF50';
    startButton.style.color = '#fff';
    startButton.style.border = 'none';
    startButton.style.borderRadius = '4px';
    startButton.style.cursor = 'pointer';

    stopButton.innerText = 'Stop';
    stopButton.style.padding = '6px 12px';
    stopButton.style.backgroundColor = '#f44336';
    stopButton.style.color = '#fff';
    stopButton.style.border = 'none';
    stopButton.style.borderRadius = '4px';
    stopButton.style.cursor = 'pointer';

    // Add buttons to the container and container to the body
    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(stopButton);
    document.body.appendChild(buttonContainer);

    let intervalId = null;

    // Function to randomly click "Send OTP" and "OK" buttons
    function clickSendOTP() {
        var buttons = document.querySelectorAll('button'); // All button elements
        var sendOTPButton = null;
        var okButton = null;
        var verifyButton = null;

        // Loop through all buttons to find "Send OTP", "OK", and "Verify"
        buttons.forEach(function (button) {
            if (button.innerText && button.innerText.trim() === "Send OTP") {
                sendOTPButton = button;
            }
            if (button.innerText && button.innerText.trim() === "OK") {
                okButton = button;
            }
            if (button.innerText && button.innerText.trim() === "Verify") {
                verifyButton = button;
            }
        });

        // If "Verify" button is found, stop the process
        if (verifyButton) {
            console.log("Verify button found. Stopping the process.");
            clearInterval(intervalId); // Stop the interval function
            intervalId = null;
            selectDateTime(); // Call function to select date and time
            return;
        }

        // If "Send OTP" button exists, click it
        if (sendOTPButton) {
            console.log("Clicking Send OTP button.");
            sendOTPButton.click();
        }

        // If "OK" button is found after clicking "Send OTP", click it
        if (okButton) {
            console.log("OK button found. Clicking OK.");
            okButton.click();

            // Click "Send OTP" button again if "OK" button was clicked
            if (sendOTPButton) {
                console.log("Clicking Send OTP again after OK.");
                sendOTPButton.click();
            }
        } else {
            console.log("OK button not found. Waiting for next check.");
        }
    }

    // Function to auto-select date and time
    function selectDateTime() {
        console.log("Selecting date and time...");
        const dateSelect = document.querySelector('select[name="appointment_date"]');
        if (dateSelect) {
            const options = dateSelect.querySelectorAll("option");
            if (options.length > 1) { // Skip the first "Select a Appointment Date" option
                dateSelect.value = options[1].value; // Select the first available date
                const event = new Event("change");
                dateSelect.dispatchEvent(event);
                console.log("Date selected.");
            }
        }

        const timeSelect = document.querySelector('select[name="appointment_time"]');
        if (timeSelect) {
            const timeOptions = timeSelect.querySelectorAll("option");
            if (timeOptions.length > 1) { // Skip the first "Select a Appointment Time" option
                timeSelect.value = timeOptions[1].value; // Select the first available time
                const event = new Event("change");
                timeSelect.dispatchEvent(event);
                console.log("Time selected.");
            }
        }

        const payButton = document.querySelector('button[ng-click="payNowV2()"]');
        if (payButton && !payButton.disabled) {
            console.log("Clicking Pay Now button.");
            payButton.click();
        }
    }

    // Start button functionality
    startButton.addEventListener('click', function () {
        if (!intervalId) {
            console.log("Starting the process...");
            intervalId = setInterval(clickSendOTP, 5000); // Start the process every 5 seconds
        } else {
            console.log("Process is already running.");
        }
    });

    // Stop button functionality
    stopButton.addEventListener('click', function () {
        if (intervalId) {
            console.log("Stopping the process...");
            clearInterval(intervalId); // Stop the interval
            intervalId = null;
        } else {
            console.log("Process is not running.");
        }
    });
})();
