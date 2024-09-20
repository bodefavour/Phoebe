// sendResponse.js

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect the form data
    let response = document.getElementById("response").value;

    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    // Set up the email parameters
    let templateParams = {
        to_email: 'your-email@example.com',  // Your email address to receive the response
        message: response,                   // The response message from Phoebe
    };

    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Your response has been sent successfully!');
        }, function(error) {
            alert('Failed to send response. Please try again later.');
        });
}
