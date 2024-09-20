// sendResponse.js

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect the form data
    let response = document.getElementById("response").value;

    // Initialize EmailJS with your user ID
    emailjs.init("8ciFt7VtaT1wR_wj0");

    // Set up the email parameters
    let templateParams = {
        to_email: 'bodefavour@gmail.com',  // Your email address to receive the response
        message: response,                   // The response message from Phoebe
    };

    // Send the email using EmailJS
    emailjs.send('service_ewwqqnk', 'template_q6h7yoj', templateParams)
        .then(function(response) {
            alert('Your response has been sent successfully!');
        }, function(error) {
            alert('Failed to send response. Please try again later.');
        });
}
