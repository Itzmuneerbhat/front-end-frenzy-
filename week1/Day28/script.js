document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate form fields
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Enter a valid email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Password validation
    if (password === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // If form is valid, you can submit the form (or handle it as you need)
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
