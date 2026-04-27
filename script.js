// 1. DATA: Our Book List
const myBooks = [
    { 
        title: "Half Girlfriend", 
        author: "Chetan Bhagat", 
        genre: "Fiction", 
        summary: "A beautiful story of a boy, who never let go of his love even though it broke him." 
    },
    { 
        title: "Secret Wish list ", 
        author: "Preeti Shenoy", 
        genre: "Fiction", 
        summary: "The book explores the constraints on women, the importance of friendship, and the courage to live on one's own terms.." 
    },
    { 
        title: "The Silent Patient", 
        author: "Alex Michaelides", 
        genre: "Thriller", 
        summary: "A shocking psychological thriller about a woman's act of violence against her husband." 
    } 
];

// ==========================================
// 2. THEME SWITCHER (Works on ALL Pages)
// ==========================================
const themeBtn = document.getElementById('theme-toggle');

// Check browser memory on load to see if user previously chose Dark Mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeBtn) {
    // Set initial button text based on current mode
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? "Switch Theme ☀️" : "Switch Theme 🌙";

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        // Save choice to localStorage so it stays dark when switching pages
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.innerText = isDark ? "Switch Theme ☀️" : "Switch Theme 🌙";
    });
}

// ==========================================
// 3. PAGE-SPECIFIC LOGIC (Safety Checks)
// ==========================================

// --- A. The Book Shelf (Only runs on Home Page) ---
const container = document.getElementById('book-container');

if (container) {
    myBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-inner">
                <div class="book-front">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <small>>${book.genre}</small>
                </div>
                <div class="book-back">
                    <p>${book.summary}</p>
                </div>
            </div>
        `;
        
        // Add the click listener to flip the card
        card.addEventListener('click', function() {
            this.querySelector('.book-inner').classList.toggle('is-flipped');
        });

        container.appendChild(card);
    });
}

// --- B. The Read More Button (Only runs on Home Page) ---
const storyBtn = document.getElementById('read-more-btn');

if (storyBtn) {
    storyBtn.addEventListener('click', () => {
        // Redirects user to the full story page
        window.location.href = "story-detail.html";
    });
}