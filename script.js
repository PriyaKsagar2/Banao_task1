function showAllPosts() {
    document.querySelectorAll('.section').forEach(section => section.classList.add('active'));
}

// Show all posts when the page is first loaded
showAllPosts();

function setupNavbar() {
    document.getElementById('all-posts').addEventListener('click', function() {
      document.querySelectorAll('.section').forEach(section => section.classList.add('active'));
    });

    document.getElementById('articles').addEventListener('click', function() {
      document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
      document.getElementById('article').classList.add('active');
    });
  
    document.getElementById('events').addEventListener('click', function() {
      document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
      document.getElementById('event').classList.add('active');
    });
  
    document.getElementById('educations').addEventListener('click', function() {
      document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
      document.getElementById('education').classList.add('active');
    });
  
    document.getElementById('jobs').addEventListener('click', function() {
      document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
      document.getElementById('job').classList.add('active');
    });
  }
  
// Calling the function to setup the navbar
setupNavbar();
  