function navigateToAnotherPage() {
    // Replace "target-page.html" with the actual URL of the page you want to navigate to
    window.location.href = "874194.html";
}

function toggleComments() {
    var commentsContainer = document.querySelector('.comments-container');
    var icon = document.querySelector('.seecomment-btn i');
  
    // Toggle the display of comments-container
    commentsContainer.style.display = (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') ? 'block' : 'none';
  
    // Toggle the icon class
    if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    } else {
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    }
}

function toggleThumbs() {
  var postRow = document.querySelector('.comments-container');
  var activityIcons = document.querySelector('.seecomment-btn i');

  
 
}

555