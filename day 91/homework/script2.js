const i = document.querySelector('.fa-left-long');
const addedBooks = JSON.parse(localStorage.getItem("addedBooks"));
const container = document.querySelector(".container");

i.addEventListener('click', () => {
    window.location.href = 'index.html';
});

if (addedBooks.length > 0) {
    addedBooks.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("box");
        bookElement.innerHTML = `
            <img src="${book.imgSrc}" alt="${book.title}">
            <b>${book.title}</b>
            <p>${book.price}</p>
            <p>${book.author}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        container.appendChild(bookElement);
    });

    document.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;

            addedBooks.splice(index, 1);

            localStorage.setItem("addedBooks", JSON.stringify(addedBooks));

            window.location.reload();
        });
    });
} else {
    container.innerHTML = "<p>No books added yet!</p>";
}
