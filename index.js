// loading screen

document.addEventListener('DOMContentLoaded', function() {
  // Simulate content loading delay
  setTimeout(function() {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';
    // Show the main content
    document.getElementById('content').style.display = 'block';
  }, 3000); // Adjust the delay as needed
});



// navigation bar

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
   