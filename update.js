/*
বিসমিল্লাহির রাহমানির রহিম
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم ِ
ইয়া আল্লাহ, এপয়েন্টমেন্টের জন্য যেন স্লট পাই, রহম করুন আমার উপর। [আমিন]
*/

// Assalamualaikum, Ich bin Nafizul Islam (NöYöN) [Deutsch]

/*
[https://payment.ivacbd.com]  --  First make sure to select or fill all your categories correctly and also select the payment method. Then use developer tools.
Use developer tools and console. If console doesn't work, use paste permission "allow pasting" then paste all code. Confirm by pressing enter key.
*/

(function() {
    // Function to randomly click the "Send OTP" button if it exists
    function clickSendOTP() {
        var buttons = document.querySelectorAll('button'); // All button elements
        var sendOTPButton = null;
        var okButton = null;
        var verifyButton = null;

        // Loop through all buttons to find the one that contains the text "Send OTP", "OK", and "Verify"
        buttons.forEach(function(button) {
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

        // Check for any input field under a label containing "OTP"
        var labels = document.querySelectorAll('label'); // Find all label elements
        var otpInputFound = false; // Flag to track if OTP input is found

        labels.forEach(function(label) {
            if (label.innerText && label.innerText.includes("OTP")) {
                // Check if there's an input field below this label
                var inputField = label.nextElementSibling; // Check next sibling element
                if (inputField && inputField.tagName === "INPUT") {
                    otpInputFound = true; // OTP input found
                }
            }
        });

        // If Verify button is found, stop the process
        if (verifyButton) {
            console.log("Verify button found. Stopping the process.");
            clearInterval(intervalId); // Stop the interval function
            return;
        }

        // If an OTP input is found, do not click "Send OTP"
        if (otpInputFound) {
            console.log("OTP input found. Stopping further Send OTP clicks.");
            clearInterval(intervalId); // Stop the interval function
            return;
        }

        // If Send OTP button exists, click it
        if (sendOTPButton) {
            console.log("Clicking Send OTP button.");
            sendOTPButton.click();
        }

        // If OK button is found after clicking Send OTP, click it
        if (okButton) {
            console.log("OK button found. Clicking OK.");
            okButton.click();

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
