document.addEventListener("DOMContentLoaded", function () {
  // Different gallery images array
  const galleryImages = Array.from({ length: 10 }, (_, i) => 
    `https://picsum.photos/800/800?random=${i}`
);

  // Generate fellows data with different images
  const fellowsData = Array.from({ length: 10 }, (_, i) => ({
    id: `fellow-${i}`,
    image: galleryImages[i % galleryImages.length],
    avatar: `https://randomuser.me/api/portraits/${
      i % 2 === 0 ? "men" : "women"
    }/${i}.jpg`,
    online: i % 3 === 0,
  }));

  // Generate featured galleries data with different images
  const featuredData = Array.from({ length: 8 }, (_, i) => ({
    id: `featured-${i}`,
    image: galleryImages[(i + 2) % galleryImages.length],
    title: `Gallery Title ${i + 1}`,
    description: `This is a description of gallery ${
      i + 1
    }. It showcases amazing artworks from various artists.`,
    user: {
      name: `Artist ${i + 1}`,
      handle: `@artist${i + 1}`,
      type: i % 2 === 0 ? "Digital Artist" : "Traditional Painter",
      avatar: `https://randomuser.me/api/portraits/${
        i % 2 === 0 ? "women" : "men"
      }/${i + 10}.jpg`,
    },
    reputation: Math.floor(Math.random() * 1000),
    brushDrips: Math.floor(Math.random() * 500),
  }));

  // Generate browse galleries data with different images
  const browseData = Array.from({ length: 20 }, (_, i) => ({
    id: `browse-${i}`,
    image: galleryImages[(i + 4) % galleryImages.length],
    user: {
      name: `Creator ${i + 1}`,
      handle: `@creator${i + 1}`,
      type: ["Digital Artist", "Photographer", "Sculptor", "Illustrator"][
        i % 4
      ],
      avatar: `https://randomuser.me/api/portraits/${
        i % 2 === 0 ? "women" : "men"
      }/${i + 20}.jpg`,
    },
  }));

  // Render fellows section
  // Render fellows section
const fellowsContainer = document.querySelector(".fellows-container");
const fellowsDotsContainer = document.querySelector(".fellows-dots");

// Clone first and last few cards for infinite loop
const firstFew = fellowsData.slice(0, 3);
const lastFew = fellowsData.slice(-3);
const loopFellowsData = [...lastFew, ...fellowsData, ...firstFew];

let currentFellowIndex = 3; // Start at the first original card (after the cloned ones)
let isAnimating = false;

// Create fellow cards
loopFellowsData.forEach((fellow, index) => {
  const fellowCard = document.createElement("div");
  fellowCard.className = "fellow-card";
  fellowCard.dataset.index = index;
  fellowCard.innerHTML = `
    <img src="${fellow.image}" alt="Fellow's gallery" class="fellow-image">
    <img src="${fellow.avatar}" alt="Fellow's avatar" class="fellow-avatar">
    ${fellow.online ? '<div class="online-dot"></div>' : ""}
  `;
  fellowsContainer.appendChild(fellowCard);
});

// Create dots only for original cards
fellowsData.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.className = `fellow-dot ${index === 0 ? "active" : ""}`;
  dot.dataset.index = index;
  fellowsDotsContainer.appendChild(dot);
});

const fellowCards = document.querySelectorAll(".fellow-card");
const fellowDots = document.querySelectorAll(".fellow-dot");
const fellowPrevBtn = document.querySelector(".fellows-prev");
const fellowNextBtn = document.querySelector(".fellows-next");

function updateFellowsCarousel(direction = null) {
  if (isAnimating) return;
  isAnimating = true;
  
  // Update cards
  fellowCards.forEach((card, index) => {
    const position = index - currentFellowIndex;
    card.style.transform = `translateX(${position * 110}%)`;
    card.style.opacity = position === 0 ? "1" : "0.6";
    card.style.filter = position === 0 ? "none" : "brightness(0.7)";
    card.style.zIndex = position === 0 ? "1" : "0";
  });

  // Update dots
  const originalIndex = (currentFellowIndex - 3 + fellowsData.length) % fellowsData.length;
  fellowDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === originalIndex);
  });

  // Check if we need to loop
  setTimeout(() => {
    if (direction === 'next' && currentFellowIndex >= loopFellowsData.length - 4) {
      currentFellowIndex = 3;
      fellowCards.forEach((card, index) => {
        card.style.transition = 'none';
        card.style.transform = `translateX(${(index - currentFellowIndex) * 110}%)`;
        void card.offsetWidth; // Trigger reflow
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease';
      });
    } else if (direction === 'prev' && currentFellowIndex <= 3) {
      currentFellowIndex = loopFellowsData.length - 4;
      fellowCards.forEach((card, index) => {
        card.style.transition = 'none';
        card.style.transform = `translateX(${(index - currentFellowIndex) * 110}%)`;
        void card.offsetWidth; // Trigger reflow
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease';
      });
    }
    isAnimating = false;
  }, 500);
}

fellowPrevBtn.addEventListener("click", () => {
  currentFellowIndex--;
  updateFellowsCarousel('prev');
});

fellowNextBtn.addEventListener("click", () => {
  currentFellowIndex++;
  updateFellowsCarousel('next');
});

// Click on dots to navigate
fellowDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const targetIndex = parseInt(dot.dataset.index);
    currentFellowIndex = targetIndex + 3; // Adjust for cloned cards
    updateFellowsCarousel();
  });
});

// Initialize carousel
updateFellowsCarousel();

// Auto-rotate carousel
let autoRotateInterval = setInterval(() => {
  currentFellowIndex++;
  updateFellowsCarousel('next');
}, 5000);

// Pause auto-rotate on hover
fellowsContainer.addEventListener('mouseenter', () => {
  clearInterval(autoRotateInterval);
});

fellowsContainer.addEventListener('mouseleave', () => {
  autoRotateInterval = setInterval(() => {
    currentFellowIndex++;
    updateFellowsCarousel('next');
  }, 5000);
});

  // Render featured galleries carousel
  const carousel = document.querySelector(".carousel");
  featuredData.forEach((gallery, index) => {
    const galleryCard = document.createElement("div");
    galleryCard.className = `gallery-card ${index === 2 ? "active" : ""}`;
    galleryCard.innerHTML = `
            <img src="${gallery.image}" alt="${gallery.title}" class="gallery-image">
            <div class="card-overlay">
                <h3 class="card-title">${gallery.title}</h3>
                <div class="card-details">
                    <p>${gallery.description}</p>
                    <div class="card-user">
                        <img src="${gallery.user.avatar}" alt="${gallery.user.name}" class="user-avatar-small">
                        <div class="user-info-small">
                            <span class="user-name-small">${gallery.user.name}</span>
                            <span class="user-handle-small">${gallery.user.handle}</span>
                            <span class="artist-type-small">${gallery.user.type}</span>
                        </div>
                    </div>
                    <div class="card-stats">
                        <span><i class="fas fa-star"></i> ${gallery.reputation}</span>
                        <span><i class="fas fa-tint"></i> ${gallery.brushDrips}</span>
                    </div>
                </div>
            </div>
            <div class="card-options">
                <i class="fas fa-ellipsis-v"></i>
                <div class="options-dropdown">
                    <div class="option-item"><i class="fas fa-user"></i> View artist profile</div>
                    <div class="option-item"><i class="fas fa-comment"></i> Converse with artist</div>
                    <div class="option-item"><i class="fas fa-flag"></i> Report gallery</div>
                </div>
            </div>
        `;
    carousel.appendChild(galleryCard);
  });

  // Render browse galleries grid with hover effects
  const galleryGrid = document.querySelector(".gallery-grid");
  browseData.forEach((gallery) => {
    const gridCard = document.createElement("div");
    gridCard.className = "grid-gallery-card color-transition";
    gridCard.innerHTML = `
            <div class="grid-image-container">
                <img src="${
                  gallery.image
                }" alt="Gallery image" class="grid-gallery-image">
                <div class="grid-hover-overlay">
                    <div class="hover-content">
                        <i class="fas fa-heart"></i>
                        <span>${Math.floor(Math.random() * 100)}</span>
                        <i class="fas fa-comment"></i>
                        <span>${Math.floor(Math.random() * 50)}</span>
                    </div>
                </div>
            </div>
            <div class="grid-card-body">
                <div class="grid-card-user">
                    <img src="${gallery.user.avatar}" alt="${
      gallery.user.name
    }" class="grid-user-avatar">
                    <div class="grid-user-info">
                        <span class="user-name-small">${
                          gallery.user.name
                        }</span>
                        <span class="user-handle-small">${
                          gallery.user.handle
                        }</span>
                        <span class="artist-type-small">${
                          gallery.user.type
                        }</span>
                    </div>
                </div>
            </div>
        `;
    galleryGrid.appendChild(gridCard);
  });

  // Carousel navigation
  const prevBtn = document.querySelector(".carousel-nav.prev");
  const nextBtn = document.querySelector(".carousel-nav.next");
  const carouselCards = document.querySelectorAll(".gallery-card");

  let currentIndex = 2; // Start with the active card

  function updateCarousel() {
    carouselCards.forEach((card, index) => {
      card.classList.toggle("active", index === currentIndex);
    });

    // Scroll to center the active card
    if (carouselCards[currentIndex]) {
      carouselCards[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselCards.length) % carouselCards.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    updateCarousel();
  });

  // Color transition on scroll
  const browseSection = document.querySelector(".browse-galleries");
  const gridCards = document.querySelectorAll(".grid-gallery-card");

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const sectionTop = browseSection.offsetTop;
    const sectionHeight = browseSection.offsetHeight;
    const scrollPercent = (scrollPosition - sectionTop) / sectionHeight;

    // Only apply when we're in the browse section
    if (scrollPercent >= 0 && scrollPercent <= 1) {
      // Interpolate between primary and secondary colors
      const r = Math.floor(0x6a + (0xff - 0x6a) * scrollPercent);
      const g = Math.floor(0x5a + (0x6b - 0x5a) * scrollPercent);
      const b = Math.floor(0xcd + (0x6b - 0xcd) * scrollPercent);
      const newColor = `rgb(${r}, ${g}, ${b})`;

      gridCards.forEach((card) => {
        const body = card.querySelector(".grid-card-body");
        if (body) {
          body.style.backgroundColor = newColor;
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Infinite scroll simulation
  const loadingSkeleton = document.querySelector(".loading-skeleton");
  let isLoading = false;

  function checkScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      isLoading = true;
      loadingSkeleton.style.display = "grid";

      // Simulate loading more data
      setTimeout(() => {
        const newData = Array.from({ length: 3 }, (_, i) => ({
          id: `browse-${browseData.length + i}`,
          image:
            galleryImages[(browseData.length + i + 6) % galleryImages.length],
          user: {
            name: `Creator ${browseData.length + i + 1}`,
            handle: `@creator${browseData.length + i + 1}`,
            type: ["Digital Artist", "Photographer", "Sculptor", "Illustrator"][
              (browseData.length + i) % 4
            ],
            avatar: `https://randomuser.me/api/portraits/${
              (browseData.length + i) % 2 === 0 ? "women" : "men"
            }/${browseData.length + i + 30}.jpg`,
          },
        }));

        newData.forEach((gallery) => {
          const gridCard = document.createElement("div");
          gridCard.className = "grid-gallery-card color-transition";
          gridCard.innerHTML = `
                        <div class="grid-image-container">
                            <img src="${
                              gallery.image
                            }" alt="Gallery image" class="grid-gallery-image">
                            <div class="grid-hover-overlay">
                                <div class="hover-content">
                                    <i class="fas fa-heart"></i>
                                    <span>${Math.floor(
                                      Math.random() * 100
                                    )}</span>
                                    <i class="fas fa-comment"></i>
                                    <span>${Math.floor(
                                      Math.random() * 50
                                    )}</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid-card-body">
                            <div class="grid-card-user">
                                <img src="${gallery.user.avatar}" alt="${
            gallery.user.name
          }" class="grid-user-avatar">
                                <div class="grid-user-info">
                                    <span class="user-name-small">${
                                      gallery.user.name
                                    }</span>
                                    <span class="user-handle-small">${
                                      gallery.user.handle
                                    }</span>
                                    <span class="artist-type-small">${
                                      gallery.user.type
                                    }</span>
                                </div>
                            </div>
                        </div>
                    `;
          galleryGrid.appendChild(gridCard);
        });

        browseData.push(...newData);
        loadingSkeleton.style.display = "none";
        isLoading = false;
      }, 1500);
    }
  }

  window.addEventListener("scroll", checkScroll);
});
