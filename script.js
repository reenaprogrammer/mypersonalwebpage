// 1. DATA: Our Book List
const myBooks = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "Atomic Habits", author: "James Clear", genre: "Self-Help" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" }
];

// 2. LOGIC: Display Books
const container = document.getElementById('book-container');
for (const book of myBooks) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-card';
    bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <span>${book.genre}</span>
    `;
    container.appendChild(bookDiv);
}

// 3. LOGIC: Read More Button
const storyBtn = document.getElementById('read-more-btn');
const extraText = document.getElementById('extra-story');
const storyImg = document.getElementById('story-image');

storyBtn.addEventListener('click', () => {
    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        storyBtn.innerText = "Show Less";
        storyImg.src = "https://picsum.photos/800/401"; 
    } else {
        extraText.style.display = "none";
        storyBtn.innerText = "Read Full Story";
        storyImg.src = "https://picsum.photos/800/400";
    }
});

// 4. LOGIC: Theme Switcher
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? "Light Mode ☀️" : "Dark Mode 🌙";
});