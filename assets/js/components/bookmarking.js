const SUBCIRCLE = document.getElementById('subCircle');
const SUBPATH = document.getElementById('subPath');
const SUBHEADER = document.getElementById('subHeader');
const BOOKMARK = document.getElementById('bookmark');

BOOKMARK.addEventListener('click', () => {
    SUBCIRCLE.classList.toggle('bookmarked');
    SUBPATH.classList.toggle('bookmarkedPath');
    SUBHEADER.classList.toggle('bookmarked');
    if (SUBHEADER.textContent === "Bookmark") {
        SUBHEADER.innerHTML = "Bookmarked";
    }
    else {
        SUBHEADER.innerHTML = "Bookmark";
    }
})