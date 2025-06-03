
// Simple carousel navigation for popular posts
let currentPost = 0;
const posts = document.querySelectorAll('.carousel-item');

function showPost(index) {
    posts.forEach((post, i) => {
        post.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.prev-post').addEventListener('click', function() {
    currentPost = (currentPost - 1 + posts.length) % posts.length;
    showPost(currentPost);
});

document.querySelector('.next-post').addEventListener('click', function() {
    currentPost = (currentPost + 1) % posts.length;
    showPost(currentPost);
});

showPost(0);