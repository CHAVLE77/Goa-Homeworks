export function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
      alert('User already exists');
      return false;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  
  export function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }
  
  export function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
  }
  
  export function logout() {
    localStorage.removeItem('currentUser');
  }
  