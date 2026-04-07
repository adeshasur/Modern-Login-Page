const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle Sign Up
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = signUpForm.querySelector('input[placeholder="Name"]').value;
    const email = signUpForm.querySelector('input[placeholder="Email"]').value;
    const password = signUpForm.querySelector('input[placeholder="Password"]').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        if (data.success) {
            alert('Registration successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Server connection error.');
    }
});

// Handle Sign In
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[placeholder="Email"]').value;
    const password = signInForm.querySelector('input[placeholder="Password"]').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.success) {
            alert('Login successful! Welcome back.');
            window.location.href = 'dashboard.html';
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert('Server connection error.');
    }
});
