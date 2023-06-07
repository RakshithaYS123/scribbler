function editfunction(event) {
  var postTitle = document.querySelector(".post-title");
  var postText = document.querySelector(".post-text");
  var editButton = document.querySelector(".edit-button");

  if (postTitle.classList.contains("editable")) {
    postTitle.contentEditable = true;
    postTitle.focus();
    postText.contentEditable = true;
    editButton.innerHTML = '<span class="button-text">Save</span> <i class="fas fa-save" style="color: #ffffff;"></i>';
  } else {
    postTitle.contentEditable = false;
    postText.contentEditable = false;
    editButton.innerHTML = '<span class="button-text">Edit</span> <i class="fas fa-edit" style="color: #ffffff;"></i>';
      postTitle.classList.remove("editable");

    // Update the post with the changes
    var updatedTitle = postTitle.textContent;
    var updatedText = postText.textContent;

    // Perform the necessary actions to update the post (e.g., send an API request)

    // Example: Log the updated title and text to the console
    console.log("Updated Title:", updatedTitle);
    console.log("Updated Text:", updatedText);
  }



  function signup(){
    var modal = document.getElementById("pen");
    modal.style.display = "none";
    var modal = document.getElementById("signin");
    modal.style.display = "none";
    var modal = document.getElementById("sign");
    modal.style.display = "block";

    
var nameField = document.querySelector('input[name="namee"]');
var validationMessage = nameField.nextElementSibling;

if (nameField.value.trim() === '') {
validationMessage.style.display = 'block';
} else {
validationMessage.style.display = 'none';
// Perform other actions for successful signup

}

function signup() {
var nameField = document.querySelector('input[name="namee"]');
var validationMessage = nameField.parentNode.nextElementSibling.querySelector('.validation-message');

if (nameField.value.trim() === '') {
validationMessage.style.display = 'block';
} else {
validationMessage.style.display = 'none';
// Perform other actions for successful signup
}
}


}
function closeModal() {
var modal = document.getElementById("sign");
modal.style.display = "none";
}

function signin(){
    var modal = document.getElementById("pen");
    modal.style.display = "none";
    var modal = document.getElementById("sign");
    modal.style.display = "none";
    var modal = document.getElementById("signin");
    modal.style.display = "block";
}
function closeModall() {
var modal = document.getElementById("signin");
modal.style.display = "none";
}

function createpost(){
    var modal = document.getElementById("signin");
    modal.style.display = "none";
    var modal = document.getElementById("sign");
    modal.style.display = "none";
    var modal = document.getElementById("pen");
    modal.style.display = "block";
}

function closeModalll() {
var modal = document.getElementById("pen");
modal.style.display = "none";
}

function redirectToPage() {
window.location.href = "html/postslist.html";
}


  postTitle.classList.toggle("editable");
  postText.classList.toggle("editable");

  event.preventDefault(); // Prevent button click from scrolling to top
}

 

document.addEventListener('DOMContentLoaded', function() {
  var likeCounter = 0;
  var likeCounterText = document.querySelector(".like-class");
  if(likeCounter===0){
    likeCounterText.textContent="Be the first one to like this!";
  }

  function likefunction() {
    var buttonText = document.querySelector(".buttonlike-text");
    likeCounter++;

    if (likeCounter === 1) {
      buttonText.textContent = "Liked";
      likeCounterText.textContent = likeCounter + " person likes this!";
    } else {
      buttonText.textContent = "Liked";
      likeCounterText.textContent = likeCounter + " people like this!";
    }
  }

  // Add event listener to trigger the like function
  var likeButton = document.querySelector(".like-button");
  likeButton.addEventListener("click", likefunction);
});



function submitComment() {
  var commentInput = document.querySelector(".comment-input");
  var commentText = commentInput.value;

  if (commentText !== "") {
    var commentSection = document.querySelector(".all-comments");

    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = commentText;

    commentSection.insertBefore(newComment, commentSection.firstChild);

    commentInput.value = ""; // Clear the comment input after submission
  }
}
