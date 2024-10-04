function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const resume = document.getElementById("resume").value;
    const position = document.getElementById("position").value;
    const salaryExpectations = document.getElementById("salary-expectations").value;
    const availableToStart = document.getElementById("available-to-start").value;

    // Basic validation
    if (name === "" || email === "" || phone === "" || resume === "" || position === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Additional validation (optional)
    if (!isValidEmail(email)) {
        alert("Invalid email address.");
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        alert("Invalid phone number.");
        return false;
    }

    if (availableToStart < new Date().toISOString().slice(0, 10)) {
        alert("Start date cannot be in the past.");
        return false;
    }

    // Submit the form
    document.getElementById("job-application-form").submit();
    return true;
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    // Adjust the regular expression based on your specific phone number format
    const phoneRegex = /^\d{10}$/; // Example for 10-digit US numbers
    return phoneRegex.test(phoneNumber);
}

// Attach event listener to the form submit button
document.getElementById("job-application-form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent default form submission
    }
    alert("Job data submitted!");
});