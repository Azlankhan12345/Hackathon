// Form Validation Example
var form = document.getElementById('contact-form');
var emailInput = document.getElementById('email');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = emailInput.value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    }
    else {
        alert("Form submitted successfully!");
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
