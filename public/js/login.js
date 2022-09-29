const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'post',
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

// Get value from signup form
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       header: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// Target Submit button when user login. 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// Target Sigh Up button when user sign up. //I don't have the template setup yet.
// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);