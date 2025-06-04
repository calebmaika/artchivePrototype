// Gallery data simulation
const galleryItems = [
    {
        id: 1,
        title: "Digital Dreamscape",
        description: "A surreal landscape exploring the boundaries between reality and imagination.",
        image: "https://picsum.photos/800/600?random=1",
        category: "Digital Art"
    },
    {
        id: 2,
        title: "Character Concept: The Guardian",
        description: "Character design for an upcoming game project featuring a mystical guardian.",
        image: "https://picsum.photos/800/600?random=2",
        category: "Character Design"
    },
    {
        id: 3,
        title: "Neon City Nights",
        description: "A cyberpunk-inspired cityscape with vibrant neon lighting effects.",
        image: "https://picsum.photos/800/600?random=3",
        category: "Environment Design"
    },
    {
        id: 4,
        title: "Ancient Mysteries",
        description: "Concept art for a fantasy game depicting ancient ruins and artifacts.",
        image: "https://picsum.photos/800/600?random=4",
        category: "Concept Art"
    },
    {
        id: 5,
        title: "Future Warriors",
        description: "Character lineup for a sci-fi animation project.",
        image: "https://picsum.photos/800/600?random=5",
        category: "Character Design"
    }
];

// Feedback data simulation
const feedbackData = [
    {
        id: 1,
        user: {
            name: "Alex Chen",
            avatar: "https://picsum.photos/50/50?random=1",
            isVerified: true
        },
        content: "Sarah's work consistently amazes me. The attention to detail in her character designs is extraordinary!",
        mood: "positive",
        likes: 42,
        replies: [
            {
                user: {
                    name: "Maria Garcia",
                    avatar: "https://picsum.photos/50/50?random=2"
                },
                content: "Couldn't agree more! The Guardian character design is my favorite."
            }
        ],
        timestamp: "2 days ago"
    },
    {
        id: 2,
        user: {
            name: "Jordan Taylor",
            avatar: "https://picsum.photos/50/50?random=3",
            isVerified: true
        },
        content: "The way she captures lighting in her environmental pieces is truly masterful. Each piece tells a story.",
        mood: "positive",
        likes: 38,
        timestamp: "1 week ago"
    }
];

// DOM Elements
const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-nav.prev');
const nextButton = document.querySelector('.carousel-nav.next');
const feedbackList = document.querySelector('.feedback-list');
const submitFeedback = document.querySelector('.submit-feedback');
const moodButtons = document.querySelectorAll('.mood-btn');
const sections = document.querySelectorAll('.section');
const pageDots = document.querySelectorAll('.page-dot');

// Initialize gallery
let currentSlide = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function initializeGallery() {
    // Create gallery items
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${index === 0 ? 'active' : ''}`;
        
        galleryItem.innerHTML = `
            <div class="gallery-card">
                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                <div class="gallery-item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category">${item.category}</span>
                </div>
            </div>
        `;
        
        carouselTrack.appendChild(galleryItem);
        
        // Add mouse move effect
        const card = galleryItem.querySelector('.gallery-card');
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.addEventListener('mouseleave', (e) => handleMouseLeave(e, card));
    });

    updateGalleryPositions();
}

function updateGalleryPositions() {
    const items = document.querySelectorAll('.gallery-item');
    const centerIndex = currentSlide;
    
    items.forEach((item, index) => {
        const diff = index - centerIndex;
        const zIndex = diff === 0 ? 2 : 1;
        const opacity = diff === 0 ? 1 : 0.5;
        const scale = diff === 0 ? 1 : 0.8;
        const x = diff * 80;
        
        item.style.transform = `translate(${x}%, -50%) scale(${scale})`;
        item.style.zIndex = zIndex;
        item.style.opacity = opacity;
        item.classList.toggle('active', diff === 0);
    });
}

// Mouse move effect for gallery cards
function handleMouseMove(e, card) {
    if (!card.closest('.gallery-item').classList.contains('active')) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function handleMouseLeave(e, card) {
    card.style.transform = '';
}

// Gallery navigation
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + galleryItems.length) % galleryItems.length;
    updateGalleryPositions();
}

// Page dots navigation
function initializePageDots() {
    pageDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetSection = document.getElementById(dot.dataset.section);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Scroll handling
function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Update active dot
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - windowHeight / 2 && 
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
            pageDots.forEach(dot => dot.classList.remove('active'));
            pageDots[index].classList.add('active');
        }
        
        // Add visible class for animations
        if (scrollPosition + windowHeight * 0.8 > sectionTop) {
            section.classList.add('visible');
            
            // Animate feedback items when feedback section is visible
            if (section.id === 'feedback') {
                const feedbackItems = section.querySelectorAll('.feedback-item');
                feedbackItems.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, i * 200);
                });
            }
        }
    });
}



// Event listeners
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        moodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

submitFeedback.addEventListener('click', () => {
    const textarea = document.querySelector('.feedback-form textarea');
    const mood = document.querySelector('.mood-btn.active').classList.contains('positive') ? 'positive' : 'negative';
    
    if (textarea.value.trim()) {
        const newFeedback = {
            id: feedbackData.length + 1,
            user: {
                name: "Guest User",
                avatar: "https://picsum.photos/50/50?random=" + (Math.floor(Math.random() * 100) + 1)
            },
            content: textarea.value,
            mood: mood,
            likes: 0,
            timestamp: "Just now"
        };
        
        const feedbackElement = createFeedbackElement(newFeedback);
        feedbackList.insertBefore(feedbackElement, feedbackList.firstChild);
        textarea.value = '';
        
        // Animate the new feedback
        setTimeout(() => {
            feedbackElement.classList.add('visible');
        }, 100);
    }
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', updateGalleryPositions);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeFeedback();
    initializePageDots();
    handleScroll(); // Initial check for visible sections
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
