const comments = [
    {
      name: "Nama Mahasiswa (NIM)",
      comment: "Terima kasih untuk materinya, Pak. Sangat bermanfaat!",
      createdAt: "19 Juli 2024",
    },
    {
      name: "Nama Mahasiswa (NIM)",
      comment: "Mantap! Dari nol sampai bisa, terima kasih banyak!",
      createdAt: "20 Juli 2024",
    },
    {
      name: "Nama Mahasiswa (NIM)",
      comment: "Materi yang disampaikan sangat mudah dipahami.",
      createdAt: "21 Juli 2024",
    },
    {
      name: "Nama Mahasiswa (NIM)",
      comment: "Terima kasih banyak, Pak! Sangat bermanfaat!",
      createdAt: "22 Juli 2024",
    },
  ];
  
  function escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[tag] || tag)
    );
  }
  
  const commentList = document.getElementById("commentList");
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("card", "mb-3");
    commentElement.innerHTML = `
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${escapeHTML(comment.name)}</h5>
        <small class="text-muted">${comment.createdAt}</small>
      </div>
      <p class="card-text text-muted">${comment.comment}</p>
    </div>
  `;
    commentList.prepend(commentElement);
  });