document.addEventListener("DOMContentLoaded", function () {
  // Different gallery images array
  const galleryImages = Array.from(
    { length: 10 },
    (_, i) => `https://picsum.photos/800/800?random=${i}`
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
  const featuredData = [
    {
      id: "featured-0",
      image: "https://picsum.photos/800/800?random=40",
      title: "Ethereal Landscapes",
      description:
        "A breathtaking collection of surreal environments that blur the line between dream and reality.",
      user: {
        name: "Arden Mira",
        handle: "@ardenmira",
        type: "Land Artist",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      reputation: 892,
      brushDrips: 311,
    },
    {
      id: "featured-1",
      image: "https://picsum.photos/800/800?random=41",
      title: "Fragments of Memory",
      description:
        "Mixed media collages that explore nostalgia and fragmented thoughts through texture and color.",
      user: {
        name: "Jules Navarro",
        handle: "@julesnav",
        type: "Collage Artist",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      reputation: 654,
      brushDrips: 208,
    },
    {
      id: "featured-2",
      image: "https://picsum.photos/800/800?random=42",
      title: "City Pulse",
      description:
        "An energetic series capturing the chaos and beauty of metropolitan life through vibrant brushwork.",
      user: {
        name: "Mina Tao",
        handle: "@minart",
        type: "Painter",
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
      },
      reputation: 721,
      brushDrips: 439,
    },
    {
      id: "featured-3",
      image: "https://picsum.photos/800/800?random=43",
      title: "Monochrome Movements",
      description:
        "Fine art photography in black and white, capturing the essence of motion and emotion.",
      user: {
        name: "Leo Granger",
        handle: "@grangleo",
        type: "Fine Art Photographer",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      reputation: 508,
      brushDrips: 159,
    },
    {
      id: "featured-4",
      image: "https://picsum.photos/800/800?random=44",
      title: "The Poetic Frame",
      description:
        "A literary visual series merging abstract visuals with spoken word performance.",
      user: {
        name: "Anika Reyes",
        handle: "@anikaverse",
        type: "Literary Artist",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      },
      reputation: 944,
      brushDrips: 472,
    },
    {
      id: "featured-5",
      image: "https://picsum.photos/800/800?random=45",
      title: "Steel & Silence",
      description:
        "Installation pieces made of reclaimed metal and sound-responsive elements.",
      user: {
        name: "Kai Stellan",
        handle: "@kaistellan",
        type: "Installation Artist",
        avatar: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      reputation: 389,
      brushDrips: 194,
    },
    {
      id: "featured-6",
      image: "https://picsum.photos/800/800?random=46",
      title: "Between the Lines",
      description:
        "Charcoal drawings that explore human expression through subtle shading and raw lines.",
      user: {
        name: "Elara Quinn",
        handle: "@elquinn",
        type: "Draughtsman",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      },
      reputation: 781,
      brushDrips: 226,
    },
    {
      id: "featured-7",
      image: "https://picsum.photos/800/800?random=47",
      title: "Code of Motion",
      description:
        "Experimental video art exploring human-machine interactions in digital time loops.",
      user: {
        name: "Zev Matthis",
        handle: "@zevmatt",
        type: "Video Artist",
        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      },
      reputation: 673,
      brushDrips: 367,
    },
  ];

  // Generate browse galleries data with different images
  const browseData = [
    {
      id: "browse-0",
      image: "https://picsum.photos/800/800?random=0",
      user: {
        name: "Elena Navarro",
        handle: "@elena.navarro",
        type: "Painter",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      },
    },
    {
      id: "browse-1",
      image: "https://picsum.photos/800/800?random=1",
      user: {
        name: "Marcus Dela Cruz",
        handle: "@marcusdc",
        type: "Sculptor",
        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      },
    },
    {
      id: "browse-2",
      image: "https://picsum.photos/800/800?random=2",
      user: {
        name: "Yara Okoye",
        handle: "@yarart",
        type: "Draughtsman",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    },
    {
      id: "browse-3",
      image: "https://picsum.photos/800/800?random=3",
      user: {
        name: "Noah Vinter",
        handle: "@noahv",
        type: "Printmaker",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      },
    },
    {
      id: "browse-4",
      image: "https://picsum.photos/800/800?random=4",
      user: {
        name: "Aisha Boudreaux",
        handle: "@aishab.art",
        type: "Collage Artist",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      },
    },
    {
      id: "browse-5",
      image: "https://picsum.photos/800/800?random=5",
      user: {
        name: "Leo Zhang",
        handle: "@leoz",
        type: "Digital Collage Artist",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
    {
      id: "browse-6",
      image: "https://picsum.photos/800/800?random=6",
      user: {
        name: "Carmen Reyes",
        handle: "@carm.creates",
        type: "Fine Art Photographer",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    },
    {
      id: "browse-7",
      image: "https://picsum.photos/800/800?random=7",
      user: {
        name: "Omar Sethi",
        handle: "@omarsethi",
        type: "Video Artist",
        avatar: "https://randomuser.me/api/portraits/men/49.jpg",
      },
    },
    {
      id: "browse-8",
      image: "https://picsum.photos/800/800?random=8",
      user: {
        name: "Nina Calloway",
        handle: "@ninac.art",
        type: "Installation Artist",
        avatar: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    },
    {
      id: "browse-9",
      image: "https://picsum.photos/800/800?random=9",
      user: {
        name: "Jasper Hollow",
        handle: "@jasphollow",
        type: "Land Artist",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      },
    },
    {
      id: "browse-10",
      image: "https://picsum.photos/800/800?random=10",
      user: {
        name: "Maeve Fontaine",
        handle: "@maevef",
        type: "Public Intervention Artist",
        avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      },
    },
    {
      id: "browse-11",
      image: "https://picsum.photos/800/800?random=11",
      user: {
        name: "Darius Cole",
        handle: "@dariuscole",
        type: "Performance Artist",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
      },
    },
    {
      id: "browse-12",
      image: "https://picsum.photos/800/800?random=12",
      user: {
        name: "Isla Moreau",
        handle: "@islamoreau",
        type: "Literary Artist",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      },
    },
    {
      id: "browse-13",
      image: "https://picsum.photos/800/800?random=13",
      user: {
        name: "Kai Nguyen",
        handle: "@kaing.art",
        type: "Painter",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    },
    {
      id: "browse-14",
      image: "https://picsum.photos/800/800?random=14",
      user: {
        name: "Talia Ferenc",
        handle: "@taliaf",
        type: "Sculptor",
        avatar: "https://randomuser.me/api/portraits/women/70.jpg",
      },
    },
    {
      id: "browse-15",
      image: "https://picsum.photos/800/800?random=15",
      user: {
        name: "Ezra Montoya",
        handle: "@ezram",
        type: "Draughtsman",
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    },
    {
      id: "browse-16",
      image: "https://picsum.photos/800/800?random=16",
      user: {
        name: "Lucia Santoro",
        handle: "@lucias.art",
        type: "Printmaker",
        avatar: "https://randomuser.me/api/portraits/women/74.jpg",
      },
    },
    {
      id: "browse-17",
      image: "https://picsum.photos/800/800?random=17",
      user: {
        name: "Arjun Patel",
        handle: "@arjuncreates",
        type: "Digital Collage Artist",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      },
    },
    {
      id: "browse-18",
      image: "https://picsum.photos/800/800?random=18",
      user: {
        name: "Zara Kwon",
        handle: "@zarakwon",
        type: "Fine Art Photographer",
        avatar: "https://randomuser.me/api/portraits/women/78.jpg",
      },
    },
    {
      id: "browse-19",
      image: "https://picsum.photos/800/800?random=19",
      user: {
        name: "Theo Richter",
        handle: "@theor",
        type: "Performance Artist",
        avatar: "https://randomuser.me/api/portraits/men/80.jpg",
      },
    },
  ];

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
    <div class="avatar-container">
      <img src="${fellow.avatar}" alt="Fellow's avatar" class="fellow-avatar">
    ${fellow.online ? '<div class="online-dot"></div>' : ""}
    </div>
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
    const originalIndex =
      (currentFellowIndex - 3 + fellowsData.length) % fellowsData.length;
    fellowDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === originalIndex);
    });

    // Check if we need to loop
    setTimeout(() => {
      if (
        direction === "next" &&
        currentFellowIndex >= loopFellowsData.length - 4
      ) {
        currentFellowIndex = 3;
        fellowCards.forEach((card, index) => {
          card.style.transition = "none";
          card.style.transform = `translateX(${
            (index - currentFellowIndex) * 110
          }%)`;
          void card.offsetWidth; // Trigger reflow
          card.style.transition =
            "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
        });
      } else if (direction === "prev" && currentFellowIndex <= 3) {
        currentFellowIndex = loopFellowsData.length - 4;
        fellowCards.forEach((card, index) => {
          card.style.transition = "none";
          card.style.transform = `translateX(${
            (index - currentFellowIndex) * 110
          }%)`;
          void card.offsetWidth; // Trigger reflow
          card.style.transition =
            "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
        });
      }
      isAnimating = false;
    }, 500);
  }

  fellowPrevBtn.addEventListener("click", () => {
    currentFellowIndex--;
    updateFellowsCarousel("prev");
  });

  fellowNextBtn.addEventListener("click", () => {
    currentFellowIndex++;
    updateFellowsCarousel("next");
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
    updateFellowsCarousel("next");
  }, 5000);

  // Pause auto-rotate on hover
  fellowsContainer.addEventListener("mouseenter", () => {
    clearInterval(autoRotateInterval);
  });

  fellowsContainer.addEventListener("mouseleave", () => {
    autoRotateInterval = setInterval(() => {
      currentFellowIndex++;
      updateFellowsCarousel("next");
    }, 5000);
  });

  // Render featured galleries carousel
  const carousel = document.querySelector(".carousel");
featuredData.forEach((gallery, index) => {
  const aTag = document.createElement("a");
  aTag.href = "gallery-view.html";

  const galleryCard = document.createElement("div");
  galleryCard.className = `gallery-card ${index === 0 ? "active" : ""}`; // First card active by default
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
          <span title="Reputation"><i class="fa-solid fa-circle-dot" style="color: var(--secondary);"></i> ${gallery.reputation}</span>
          <span title="Brush Drips"><i class="fas fa-tint"></i> ${gallery.brushDrips}</span>
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
  aTag.appendChild(galleryCard);
  carousel.appendChild(aTag);
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

let currentIndex = 0; // Start with the first card

function updateCarousel() {
  // Update active state
  carouselCards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });

  // Center the active card
  if (carouselCards[currentIndex]) {
    carouselCards[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  // Update button states
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === carouselCards.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < carouselCards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Initialize carousel
updateCarousel();

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
      const a = 0.6;
      const newColor = `rgb(${r}, ${g}, ${b}, ${a})`;

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
