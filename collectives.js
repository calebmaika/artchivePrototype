document.addEventListener('DOMContentLoaded', function() {
    // Filter tags functionality
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Generate mock collectives data
    const collectivesList = document.querySelector('.collectives-list');
    
    // Artist types for tags
    const artistTypes = [
        'Painter', 'Sculptor', 'Draughtsman', 'Printmaker', 
        'Collage Artist', 'Digital Collage Artist', 'Fine Art Photographer', 
        'Video Artist', 'Installation Artist', 'Land Artist', 
        'Public Intervention Artist', 'Performance Artist', 'Literary Artist'
    ];

    // Creative collective names
    const collectiveNames = [
        "The Chromatic Circle", "Brushstroke Revolution", "Canvas Underground",
        "The Infinite Palette", "Neon Dream Collective", "Clay & Code Creators",
        "The Avant-Garde Assembly", "Mixed Media Mavens", "The Gestural Guild",
        "Luminous Flux Group", "The Abstract Alliance", "Ink & Idea Society",
        "The Experimentalists", "Urban Canvas Movement", "The Found Object Fellowship",
        "Digital Drip Collective", "The Surrealist Syndicate", "Paper & Pigment Club",
        "The Ephemeral Arts Union", "Light & Shadow League", "The Conceptual Cartel",
        "Street Art Syndicate", "The Fiber Arts Front", "Ceramic Consciousness",
        "The New Aesthetic Network", "Performance Art Party", "The Outsider Art Orbit",
        "The Post-Internet Posse", "Glitch Art Guild", "The Feminist Art Force",
        "Queer Art Quantum", "The Eco-Art Ensemble", "Algorithmic Art Assembly",
        "The Radical Craft Collective", "Sound Art Society", "The Neo-Expressionist Node",
        "Bio Art Brigade", "The Decolonial Arts Division", "Speculative Design Squad"
    ];

    // Channel types
    const channelTypes = [
        { type: 'text', name: 'general' },
        { type: 'text', name: 'showcase' },
        { type: 'text', name: 'feedback' },
        { type: 'text', name: 'resources' },
        { type: 'voice', name: 'Voice Chat' },
        { type: 'audio', name: 'Listening Party' }
    ];

    // Generate 30 mock collectives
    for (let i = 1; i <= 30; i++) {
        const collective = document.createElement('div');
        collective.className = 'collective-card';
        collective.onclick = () => window.location.href='collective-view.html'
        // Random data for each collective
        const members = Math.floor(Math.random() * 500) + 50;
        const online = Math.floor(members * (Math.random() * 0.3 + 0.1));
        const reputation = Math.floor(Math.random() * 10000) + 1000;
        const brushDrips = Math.floor(Math.random() * 5000) + 500;
        const lastActivity = Math.floor(Math.random() * 7) + 1;
        const collectiveName = collectiveNames[Math.floor(Math.random() * collectiveNames.length)];
        
        // Random tags (2-4 per collective)
        const numTags = Math.floor(Math.random() * 3) + 2;
        const tags = [];
        for (let j = 0; j < numTags; j++) {
            const randomIndex = Math.floor(Math.random() * artistTypes.length);
            if (!tags.includes(artistTypes[randomIndex])) {
                tags.push(artistTypes[randomIndex]);
            }
        }
        
        // Random channels (3-6 per collective)
        const numChannels = Math.floor(Math.random() * 4) + 3;
        const channels = [];
        const usedChannels = new Set();
        for (let j = 0; j < numChannels; j++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * channelTypes.length);
            } while (usedChannels.has(randomIndex) && usedChannels.size < channelTypes.length);
            
            usedChannels.add(randomIndex);
            const channel = channelTypes[randomIndex];
            channels.push({
                type: channel.type,
                name: channel.name,
                posts: Math.floor(Math.random() * 100) + 5
            });
        }
        
    
        collective.innerHTML = `
            <div class="collective-header">
                <img src="https://picsum.photos/80/80?random=${i}" alt="Collective Image" class="collective-image">
                <div class="collective-info">
                    <div class="collective-title">${collectiveName}</div>
                    <div class="collective-stats">
                        <div class="stat-item">
                            <span>${members}</span>
                            <span>members</span>
                        </div>
                        <div class="stat-item" title="Reputation">
                            <i class="fa-solid fa-circle-dot" style="color: var(--secondary);"></i>
                            <span>${reputation}</span>
                        </div>
                        <div class="stat-item" title="Brush Drips">
                            <i class="fas fa-tint droplet-icon" style="color:var(--primary)"></i>
                            <span>${brushDrips}</span>
                        </div>
                    </div>
                </div>
                <div class="collective-activity">
                    <div class="online-count">${online} online</div>
                    <div class="last-activity">Active ${lastActivity} day${lastActivity > 1 ? 's' : ''} ago</div>
                </div>
            </div>
            <div class="collective-tags">
                ${tags.map(tag => `<div class="collective-tag">${tag}</div>`).join('')}
            </div>
            <div class="channels-list">
                ${channels.map(channel => `
                    <div class="channel-item">
                        <div class="channel-info">
                            <i class="fas ${channel.type === 'text' ? 'fa-hashtag' : channel.type === 'voice' ? 'fa-video' : 'fa-headphones'} channel-icon"></i>
                            <span class="channel-name">${channel.name}</span>
                        </div>
                        ${channel.type === 'text' ? `<div class="post-count">${channel.posts}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        collectivesList.appendChild(collective);
    }

    // Infinite scroll simulation
    let loading = false;
    window.addEventListener('scroll', function() {
        if (loading) return;
        
        const scrollPosition = window.scrollY;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        
        if (bodyHeight - (scrollPosition + windowSize) < 100) {
            loading = true;
            simulateLoading();
        }
    });

    function simulateLoading() {
        // Show skeleton cards
        for (let i = 0; i < 3; i++) {
            const skeleton = document.createElement('div');
            skeleton.className = 'skeleton-card';
            skeleton.innerHTML = `
                <div class="skeleton-line" style="width: 60%"></div>
                <div class="skeleton-line" style="width: 80%"></div>
                <div class="skeleton-line" style="width: 70%"></div>
                <div class="skeleton-line" style="width: 50%"></div>
            `;
            collectivesList.appendChild(skeleton);
        }
        
        // After delay, replace with actual content
        setTimeout(() => {
            // Remove skeleton cards
            const skeletons = document.querySelectorAll('.skeleton-card');
            skeletons.forEach(skeleton => skeleton.remove());
            
            // Add more content (simulating loaded data)
            for (let i = 31; i <= 35; i++) {
                const collective = document.createElement('div');
                collective.className = 'collective-card';
                collective.onclick = "window.location.href='collective-view.html'"
                collective.innerHTML = `
                    <div class="collective-header">
                        <img src="https://picsum.photos/80/80?random=${i}" alt="Collective Image" class="collective-image">
                        <div class="collective-info">
                            <div class="collective-title">${collectiveNames[Math.floor(Math.random() * collectiveNames.length)]}</div>
                            <div class="collective-stats">
                                <div class="stat-item">
                                    <span>${Math.floor(Math.random() * 500) + 50}</span>
                                    <span>members</span>
                                </div>
                                <div class="stat-item">
                                    <span class="purple-dot"></span>
                                    <span>${Math.floor(Math.random() * 10000) + 1000}</span>
                                </div>
                                <div class="stat-item">
                                    <i class="fas fa-tint droplet-icon"></i>
                                    <span>${Math.floor(Math.random() * 5000) + 500}</span>
                                </div>
                            </div>
                        </div>
                        <div class="collective-activity">
                            <div class="online-count">${Math.floor(Math.random() * 50) + 5} online</div>
                            <div class="last-activity">Active ${Math.floor(Math.random() * 7) + 1} day${Math.floor(Math.random() * 7) + 1 > 1 ? 's' : ''} ago</div>
                        </div>
                    </div>
                    <div class="collective-tags">
                        <div class="collective-tag">${artistTypes[Math.floor(Math.random() * artistTypes.length)]}</div>
                        <div class="collective-tag">${artistTypes[Math.floor(Math.random() * artistTypes.length)]}</div>
                    </div>
                    <div class="channels-list">
                        <div class="channel-item">
                            <div class="channel-info">
                                <i class="fas fa-hashtag channel-icon"></i>
                                <span class="channel-name">general</span>
                            </div>
                            <div class="post-count">${Math.floor(Math.random() * 100) + 5}</div>
                        </div>
                        <div class="channel-item">
                            <div class="channel-info">
                                <i class="fas fa-hashtag channel-icon"></i>
                                <span class="channel-name">showcase</span>
                            </div>
                            <div class="post-count">${Math.floor(Math.random() * 100) + 5}</div>
                        </div>
                        <div class="channel-item">
                            <div class="channel-info">
                                <i class="fas fa-video channel-icon"></i>
                                <span class="channel-name">Voice Chat</span>
                            </div>
                        </div>
                    </div>
                `;
                collectivesList.appendChild(collective);
            }
            
            loading = false;
        }, 1500);
    }
});