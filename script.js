const videos = [
  {
    title: "Master Responsive Web Design!",
    channel: "John Doe",
    views: "15k Views",
    thumbnail: "images/thumbnail1.png",
    category: "Web Development",
  },
  {
    title: "JavaScript Basics: Start Coding Today!",
    channel: "Emily Smith",
    views: "20k Views",
    thumbnail: "images/thumbnail2.png",
    category: "JavaScript",
  },
  {
    title: "CSS Flexbox: Build Responsive Layouts",
    channel: "Michael Johnson",
    views: "12k Views",
    thumbnail: "images/thumbnail3.png",
    category: "CSS",
  },
  {
    title: "HTML5 Essentials: Everything You Need to Know",
    channel: "Anna Taylor",
    views: "25k Views",
    thumbnail: "images/thumbnail4.png",
    category: "Web Development",
  },
  {
    title: "JavaScript ES6 Features You Should Know",
    channel: "Chris Lee",
    views: "18k Views",
    thumbnail: "images/thumbnail5.png",
    category: "JavaScript",
  },
  {
    title: "Advanced CSS Techniques for Modern Web Design",
    channel: "Sara Wilson",
    views: "22k Views",
    thumbnail: "images/thumbnail6.png",
    category: "CSS",
  },
  {
    title: "Building Responsive Forms with HTML & CSS",
    channel: "James Brown",
    views: "14k Views",
    thumbnail: "images/thumbnail7.png",
    category: "Web Development",
  },
  {
    title: "Creating Stunning Animations with CSS",
    channel: "Olivia White",
    views: "30k Views",
    thumbnail: "images/thumbnail8.png",
    category: "CSS",
  },
];

const renderVideos = (filteredVideos) => {
  const videoList = document.querySelector(".video-list");
  videoList.innerHTML = "";

  if (filteredVideos.length === 0) {
    videoList.innerHTML = "<p>No videos found.</p>";
    return;
  }

  filteredVideos.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.setAttribute("data-category", video.category);
    videoItem.innerHTML = `
      <a href="#" class="video-link">
          <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}" />
          <div class="video-overlay"><span class="play-icon">▶</span></div>
      </a>
      <div class="video-info">
          <a href="#" class="video-title">${video.title}</a>
          <p class="video-channel">${video.channel}</p>
          <p class="views">${video.views}</p>
      </div>
    `;
    videoList.appendChild(videoItem);
  });
};

// Initial rendering of all videos
renderVideos(videos);

// Search functionality
const searchInput = document.querySelector(".navbar__search-input");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm)
  );
  renderVideos(filteredVideos);
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-options");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    const selectedCategory = button.textContent.trim();

    // Filter videos based on category
    const filteredVideos =
      selectedCategory === "All"
        ? videos
        : videos.filter((video) => video.category === selectedCategory);

    renderVideos(filteredVideos);
  });
});
