const commentArea = document.getElementById('comment-area');
const commentsList = document.getElementById('comments-list');
const form = document.getElementById('comment-form');

function formHandler() {
  const commentText = commentArea.value;

  if (commentText !== '') {
    const li = document.createElement('li');
    li.textContent = commentText;

    document.body.appendChild(li);
  }
}

form.addEventListener('submit', formHandler);
