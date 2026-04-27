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

// 2. LOGIC: Display Books
const container = document.getElementById('book-container');

myBooks.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    card.innerHTML = `
        <div class="book-inner">
            <div class="book-front">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <small>${book.genre}</small>
            </div>
            <div class="book-back">
                <p>${book.summary}</p>
            </div>
        </div>
    `;

    // Toggle the flip class on click
    card.addEventListener('click', function() {
        this.querySelector('.book-inner').classList.toggle('is-flipped');
    });

    container.appendChild(card);
});

// 3. LOGIC: Read More Button
// 1. Get the button reference
const storyBtn = document.getElementById('read-more-btn');

// 2. The new logic: Redirect instead of expanding
if (storyBtn) { 
    storyBtn.addEventListener('click', () => {
        // This sends the user to the new page you created
        window.location.href = "story-detail.html";
    });
}

// 4. LOGIC: Theme Switcher

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

const themeBtn = document.getElementById('theme-toggle');

if (themeBtn) {
    // Update button text on load
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? "Switch Theme ☀️" : "Switch Theme 🌙";

    // --- 2. Handle the click ---
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Save the choice!
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeBtn.innerText = "Switch Theme ☀️";
        } else {
            localStorage.setItem('theme', 'light');
            themeBtn.innerText = "Switch Theme 🌙";
        }
    });
}