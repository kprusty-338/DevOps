document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const messageEl = document.getElementById('message');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
      messageEl.textContent = `Welcome, ${username}! You have successfully logged in.`;
      messageEl.className = 'message success';
      loginForm.reset();
    } else {
      messageEl.textContent = 'Please enter both username and password.';
      messageEl.className = 'message error';
    }
  });
});
