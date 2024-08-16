  // Get logged in user info from LocalStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // If no user is logged in, redirect to login page
  if (!loggedInUser) {
      alert('No user is logged in');
      setTimeout(() => {
          window.location.href = 'login.html';
      }, 1000);
  } else {
      // Display username on home page
      document.getElementById('username').textContent = loggedInUser.username;
  }

  // Add event listener to logout button
  document.getElementById('logoutButton').addEventListener('click', function() {
      // Remove logged in user info from LocalStorage
      localStorage.removeItem('loggedInUser');
      alert('Logged out successfully');

      // Redirect to login page after 1 second
      setTimeout(() => {
          window.location.href = 'login.html';
      }, 1000);
  });

// create post function 
  let post = document.querySelector('#createpost');
  post.addEventListener('click', ()=>{
    let div = document.createElement('div');
    document.body.append(div)
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.border = '2px solid black'
    let input = document.querySelector('input')
    div.innerHTML = input.value
  })