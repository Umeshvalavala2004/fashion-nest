// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');

    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }
});

function handleSignIn(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Add your authentication logic here
    console.log('Sign In:', { email, password, rememberMe });
    
    // Example: Simulate successful sign in
    alert('Sign in successful!');
    // Redirect to dashboard or home page
    // window.location.href = 'dashboard.html';
}

function handleSignUp(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('Please accept the Terms of Service and Privacy Policy');
        return;
    }

    // Add your registration logic here
    console.log('Sign Up:', { name, email, password, terms });
    
    // Example: Simulate successful registration
    alert('Registration successful!');
    // Redirect to sign in page
    // window.location.href = 'signin.html';
}

// Password validation
document.querySelectorAll('input[type="password"]').forEach(input => {
    input.addEventListener('input', (e) => {
        const password = e.target.value;
        // Add your password validation logic here
        const isValid = password.length >= 8;
        
        if (!isValid) {
            e.target.setCustomValidity('Password must be at least 8 characters long');
        } else {
            e.target.setCustomValidity('');
        }
    });
});