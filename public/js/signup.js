const signupFormHandler = async (event) => {
  event.preventDefault();
  
  // Get value from signup form
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Target Sigh Up button when user sign up. //I don't have the template setup yet.
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);