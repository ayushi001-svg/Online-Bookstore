function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    
    errorMessage.textContent = '';
  
    
    if (!username || !password) 
      {
      errorMessage.textContent = 'Please fill in both username and password.';
      return false;
    }
  
    
    if (username === 'admin' && password === 'password123') {
      alert('Login successful');
      return true;
    } else {
      errorMessage.textContent = 'Incorrect username or password.';
      return false;
    }
  }