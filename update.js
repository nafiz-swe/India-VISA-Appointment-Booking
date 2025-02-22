(function() {
    const startButton = document.createElement('button');
    const stopButton = document.createElement('button');
    const buttonContainer = document.createElement('div');

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

    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(stopButton);
    document.body.appendChild(buttonContainer);

    let intervalId = null;

    function clickHandler() {
        const buttons = document.querySelectorAll('button');
        let sendOTPButton = null;
        let okButton = null;
        let paymentButton = null;
        let otpVerifiedText = null;

        // Identify buttons and check for OTP verification text
        buttons.forEach(button => {
            if (button.innerText && button.innerText.trim() === "Send OTP") {
                sendOTPButton = button;
            }
            if (button.innerText && button.innerText.trim() === "OK") {
                okButton = button;
            }
            if (button.innerText && button.innerText.trim() === "Proceed to Payment") {
                paymentButton = button;
            }
        });

        otpVerifiedText = document.body.innerText.includes("OTP successfully verified");

        if (otpVerifiedText) {
            console.log("OTP successfully verified. Selecting date and time...");

            // Automatically select the first available date and time
            const dateField = document.querySelector('input[type="date"]');
            const timeField = document.querySelector('input[type="time"]');

            if (dateField) {
                const minDate = dateField.min || new Date().toISOString().split('T')[0];
                dateField.value = minDate;
                console.log("Date selected: " + dateField.value);
            } else {
                console.log("Date field not found.");
            }

            if (timeField) {
                const availableTimes = timeField.list?.options || [];
                if (availableTimes.length > 0) {
                    timeField.value = availableTimes[0].value;
                    console.log("Time selected: " + timeField.value);
                } else {
                    console.log("No time options available or list is not linked.");
                }
            } else {
                console.log("Time field not found.");
            }

            if (paymentButton) {
                console.log("Clicking the payment button...");
                paymentButton.click();
            } else {
                console.log("Payment button not found.");
            }

            clearInterval(intervalId);
            intervalId = null;
        } else if (sendOTPButton) {
            console.log("Clicking Send OTP button.");
            sendOTPButton.click();
        } else if (okButton) {
            console.log("Clicking OK button.");
            okButton.click();
        } else {
            console.log("Waiting for the next check...");
        }
    }

    startButton.addEventListener('click', function() {
        if (!intervalId) {
            console.log("Starting the process...");
            intervalId = setInterval(clickHandler, 5000);
        } else {
            console.log("Process is already running.");
        }
    });

    stopButton.addEventListener('click', function() {
        if (intervalId) {
            console.log("Stopping the process...");
            clearInterval(intervalId);
            intervalId = null;
        } else {
            console.log("Process is not running.");
        }
    });
})();
