const videos = [
    {
      thumbnail: "https://i.ytimg.com/vi/UVvsI12LITU/maxresdefault.jpg",
      title: "Pertemuan 2: Mengenal tag, elemen dan atribut dalam HTML",
      link: "https://youtu.be/UVvsI12LITU",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/6e8F9ZaMg1c/maxresdefault.jpg",
      title: "Pertemuan 3: Membuat paragraf di HTML",
      link: "https://youtu.be/6e8F9ZaMg1c",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/COkuM-JTnJU/maxresdefault.jpg",
      title: "Pertemuan 4: Heading di HTML",
      link: "https://youtu.be/COkuM-JTnJU",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/T7wD9hEjP60/maxresdefault.jpg",
      title: "Pertemuan 4: Komentar di HTML",
      link: "https://youtu.be/T7wD9hEjP60",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/uR07z7Qqioo/maxresdefault.jpg",
      title: "Pertemuan 4: Text Formatting di HTML",
      link: "https://youtu.be/uR07z7Qqioo",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/v5_cCHD6T5c/maxresdefault.jpg",
      title: "Pertemuan 5: Membuat Link di HTML",
      link: "https://youtu.be/v5_cCHD6T5c",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/O3jJiyssD04/maxresdefault.jpg",
      title: "Pertemuan 6: Gambar dan Tabel di HTML",
      link: "https://youtu.be/O3jJiyssD04",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/u2OHREqqhbM/maxresdefault.jpg",
      title: "Pertemuan 7: Membuat List di HTML",
      link: "https://youtu.be/u2OHREqqhbM",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/c_cc_BTC6-A/maxresdefault.jpg",
      title: "Pertemuan 9: Membuat Form pada HTML",
      link: "https://youtu.be/c_cc_BTC6-A",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/cp65r8rbtis/sddefault.jpg",
      title: "Pertemuan 10: Elemen Semantik pada HTML",
      link: "https://youtu.be/cp65r8rbtis",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/7MdcfVM2Zz0/maxresdefault.jpg",
      title: "Pertemuan 11: Menampilkan Video pada HTML",
      link: "https://youtu.be/7MdcfVM2Zz0",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/16cUF2UqpQE/maxresdefault.jpg",
      title: "Pertemuan 12: Menambahkan Audio pada HTML",
      link: "https://youtu.be/16cUF2UqpQE",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/kjdT_M2F9tc/maxresdefault.jpg",
      title: "Pertemuan 13: Membuat Project Web Pribadi dengan HTML",
      link: "https://youtu.be/kjdT_M2F9tc",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/jKDG1qFAtgA/sddefault.jpg",
      title: "Pertemuan 14: Pengenalan Dasar CSS",
      link: "https://youtu.be/jKDG1qFAtgA",
    },
  ];
  
  const relatedVideos = document.getElementById("relatedVideos");
  videos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.classList.add("video");
    videoElement.innerHTML = `
      <a href="${video.link}" target="_blank" class="d-flex gap-3 link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
        <img
          src="${video.thumbnail}"
          class="rounded-2 img-fluid w-50"
          alt="${video.title}"
        />
        <div class="d-flex flex-column justify-content-flex-start">
          <span class="card-title fw-semibold">${video.title}</span>
        </div>
      </a>
    `;
    relatedVideos.appendChild(videoElement);
  });