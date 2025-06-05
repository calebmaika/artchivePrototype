document.addEventListener('DOMContentLoaded', function() {
    // Toggle photo comments when dots are clicked
    const photoCommentDots = document.querySelectorAll('.photo-comment-dot');
    photoCommentDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const comments = document.querySelectorAll('.photo-comment');
            comments[index].style.display = comments[index].style.display === 'block' ? 'none' : 'block';
        });
    });

    // Toggle novel comments when highlighted text is clicked
    const highlightedTexts = document.querySelectorAll('.highlighted-text');
    highlightedTexts.forEach((text, index) => {
        text.addEventListener('click', function() {
            const comments = document.querySelectorAll('.highlight-comment');
            comments[index].style.display = comments[index].style.display === 'block' ? 'none' : 'block';
        });
    });

    // Simulate joining the collective dropdown
    const joinedBtn = document.querySelector('.joined-btn');
    joinedBtn.addEventListener('click', function() {
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.joined-btn') && !event.target.closest('.dropdown')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });

    // Channel click event
    const channels = document.querySelectorAll('.channel');
    channels.forEach(channel => {
        channel.addEventListener('click', function() {
            channels.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Next chapter button
    const nextChapterBtn = document.querySelector('.chapter-btn:not(:disabled)');
    if (nextChapterBtn) {
        nextChapterBtn.addEventListener('click', function() {
            alert('Loading next chapter...');
            // In a real implementation, this would fetch the next chapter content
        });
    }
});