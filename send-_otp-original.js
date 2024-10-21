//বিসমিল্লাহির রাহমানির রহিম
//بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم ِ
//ইয়া আল্লাহ, এপয়েন্টমেন্টের জন্য যেন স্লট পাই, রহম করুন আমার উপর। [আমিন]
//Assalamualaikum, Ich bin Nafizul Islam (NöYöN) [Deutsch]


(function() {
    // Function to randomly click the "Send OTP" button if it exists
    function clickSendOTP() {
        var buttons = document.querySelectorAll('button'); // All button elements
        var sendOTPButton = null;
        var okButton = null;  // Declare okButton to search for the OK button
        var verifyButton = null;  // Declare verifyButton to search for the Verify button
        var clickedSendOTP = false; // Track whether Send OTP has been clicked or not

        // Loop through all buttons to find the one that contains the text "Send OTP", "OK", and "Verify"
        buttons.forEach(function(button) {
            if (button.innerText && button.innerText.trim() === "Send OTP") {
                sendOTPButton = button;  // If found, set sendOTPButton to this button
            }
            if (button.innerText && button.innerText.trim() === "OK") {
                okButton = button;  // If found, set okButton to this button
            }
            if (button.innerText && button.innerText.trim() === "Verify") {
                verifyButton = button;  // If found, set verifyButton to this button
            }
        });

        // If Verify button is found, stop the process
        if (verifyButton) {
            console.log("Verify button found. Stopping the process.");
            clearInterval(intervalId); // Stop the interval function
            return; // Exit the function to prevent further actions
        }

        // If Send OTP button exists and hasn't been clicked yet, click it first
        if (sendOTPButton && !clickedSendOTP) {
            console.log("Clicking Send OTP button for the first time.");
            sendOTPButton.click();  // Click the Send OTP button
            clickedSendOTP = true;  // Mark that Send OTP has been clicked
        }

        // If OK button is found after clicking Send OTP, click it
        if (okButton) {
            console.log("OK button found. Clicking OK.");
            okButton.click();  // Click the OK button

            // Click Send OTP button again if OK button was clicked
            if (sendOTPButton) {
                console.log("Clicking Send OTP again after OK.");
                sendOTPButton.click();
            }
        } else {
            console.log("OK button not found. Waiting for next check.");
        }
    }

    // Run the function every 5 seconds
    var intervalId = setInterval(clickSendOTP, 5000); // Try checking every 5 seconds
})();

// Appointment booking from IVACBD.
// Randomly auto click on the "Send OTP" button.