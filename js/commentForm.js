document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
  
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();
  
      if (name && comment) {
        addComment(name, comment);
        nameInput.value = "";
        commentInput.value = "";
      }
    });
  
    function addComment(name, comment) {
      const commentElement = document.createElement("div");
      commentElement.classList.add("card", "mb-3");
      commentElement.innerHTML = `
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${escapeHTML(name)}</h5>
        <small class="text-muted">Baru saja</small>
      </div>
      <p class="card-text text-muted">${comment}</p>
    </div>
  `;
      commentList.prepend(commentElement);
    }
  });