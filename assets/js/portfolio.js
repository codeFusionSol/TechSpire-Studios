// Get all filter buttons
const filterButtons = document.getElementsByClassName("filter-tabs")[0];
const galleryDiv = document.querySelector(".filter-list"); // Changed to querySelector to get single element
let selectedFilter = "all";
// Create filter buttons
const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "mobile", 
    label: "Mobile Applications",
  },
  {
    value: "game",
    label: "Game Design & Development",
  },
  {
    value: "logo",
    label: "Branding & Logo Design",
  },
  {
    value: "web",
    label: "Website Design",
  },
];

const galleryItems = [
  {
    category: "mobile",
    src: "./assets/imgs/portfolio/mobile/1.mp4",
  },
  {
    category: "mobile",
    src: "./assets/imgs/portfolio/mobile/2.mp4",
  },

  {
    category: "game",
    src: "./assets/imgs/portfolio/game/1.mp4",
  },
  {
    category: "game",
    src: "./assets/imgs/portfolio/game/2.mp4",
  },
  {
    category: "game",
    src: "./assets/imgs/portfolio/game/3.mp4",
  },
  {
    category: "game",
    src: "./assets/imgs/portfolio/game/4.mp4",
  },
  {
    category: "game",
    src: "./assets/imgs/portfolio/game/5.mp4",
  },
  {
    category: "game",
    src: "./assets/imgs/portfolio/game/6.mp4",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/1.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/2.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/3.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/4.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/5.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/6.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/7.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/8.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/9.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/10.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/11.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/12.jpg",
  },
  {
    category: "logo",
    src: "./assets/imgs/portfolio/logo/13.jpg",
  },
  {
    category: "web",
    src: "./assets/imgs/portfolio/web/1.mp4",
  },
  {
    category: "web",
    src: "./assets/imgs/portfolio/web/2.mp4",
  },
  
];

const displayGallery = () => {
  if (selectedFilter === "all") {
    galleryDiv.innerHTML = "";
    galleryItems.forEach((item) => {
        if (item.src.endsWith(".mp4")) {
          const div = document.createElement("div");
          div.className = "gallery-item mix all " + item.category + " col-lg-4 col-md-6 col-sm-12";
          div.innerHTML = `
            <div class="inner-box">
              <video autoplay muted loop style="border-radius: 20px;">
                <source src="${item.src}" type="video/mp4" />
              </video>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>${item.category}</span></div>
                </div>
              </div>
            </div>`;
          galleryDiv.appendChild(div);
        } else {
          const div = document.createElement("div");
          div.className = "gallery-item mix all " + item.category + " col-lg-4 col-md-6 col-sm-12";
          div.innerHTML = `
            <div class="inner-box">
              <img src="${item.src}" style="border-radius: 20px; " />
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>${item.category}</span></div>
                </div>
              </div>
            </div>`;
          galleryDiv.appendChild(div);
        }
    });
  } else {
    galleryDiv.innerHTML = "";
    galleryItems.forEach((item) => {
      if (item.category === selectedFilter) {
        if (item.src.endsWith(".mp4")) {
          const div = document.createElement("div");
          div.className = "gallery-item mix " + item.category + " col-lg-4 col-md-6 col-sm-12";
          div.innerHTML = `
            <div class="inner-box">
              <video autoplay muted loop style="border-radius: 20px; width: 100%">
                <source src="${item.src}" type="video/mp4" />
              </video>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>${item.category}</span></div>
                </div>
              </div>
            </div>`;
          galleryDiv.appendChild(div);
        } else {
          const div = document.createElement("div");
          div.className = "gallery-item mix " + item.category + " col-lg-4 col-md-6 col-sm-12";
          div.innerHTML = `
            <div class="inner-box">
              <img src="${item.src}" style="border-radius: 20px; width: 100%" />
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>${item.category}</span></div>
                </div>
              </div>
            </div>`;
          galleryDiv.appendChild(div);
        }
      }
    });
  }
};

displayGallery();

// Create and append filter buttons
options.forEach((option) => {
  const li = document.createElement("li");
  li.className = option.value === "all" ? "filter active" : "filter";
  li.setAttribute("data-role", "button");
  li.setAttribute(
    "data-filter",
    option.value === "all" ? "all" : `.${option.value}`
  );
  li.textContent = option.label;

  // Add click handler to toggle active class
  li.addEventListener("click", () => {
    // Remove active class from all filters
    const filters = filterButtons.getElementsByClassName("filter");
    Array.from(filters).forEach((filter) => {
      filter.classList.remove("active");
    });

    // Add active class to clicked filter
    li.classList.add("active");
    selectedFilter = option.value;

    // Filter gallery items
    displayGallery(); // Added displayGallery call
  });

  filterButtons.appendChild(li);
});
