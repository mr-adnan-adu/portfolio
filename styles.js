// Simple form submission handler (example)
// You can replace this with real API integration

const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(form);

  // For demo: show success message after "sending"
  resultDiv.textContent = 'Sending...';

  // Simulate network request
  setTimeout(() => {
    resultDiv.textContent = 'Thank you for contacting me! I will get back to you soon.';
    form.reset();
  }, 1500);
});