const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Target Submit button when user login. 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
