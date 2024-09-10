// Form Validation Example
const form = document.getElementById('contact-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
  }
});

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
