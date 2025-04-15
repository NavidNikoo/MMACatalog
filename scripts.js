/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array

/**
 * Main JavaScript for the UFC Fighters Catalog
 * This handles displaying, filtering, and searching through fighters.
 */

// Track the currently displayed fighter list (filtered/sorted version)
let currentFighters = [...fighters]; // Initially includes all fighters

/**
 * Renders all fighter cards to the page
 * If a filtered list is passed in, it renders only those fighters
 */
function showCards(filtered = fighters) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previously displayed cards
  const templateCard = document.querySelector(".card"); // Hidden card used for cloning

  for (let i = 0; i < filtered.length; i++) {
    const fighter = filtered[i];
    const nextCard = templateCard.cloneNode(true); // Clone the template
    editCardContent(nextCard, fighter); // Fill in fighter info
    cardContainer.appendChild(nextCard); // Display it
  }
}

/**
 * Updates the content of a card element with the given fighter's data
 */
function editCardContent(card, fighter) {
  card.style.display = "block";
  const cardHeader = card.querySelector("h2");
  const fighterId = fighter.firstName + fighter.lastName;

  // Add nickname (if available) styled in a span + favorite star
  cardHeader.innerHTML = `
    ${fighter.firstName} ${fighter.nickname ? `<span class="nickname">"${fighter.nickname}"</span>` : ""} ${fighter.lastName}
    <span class="favorite-star" data-id="${fighterId}">☆</span>
  `;

  // Set fighter image and hover GIF logic
  const cardImage = card.querySelector("img");
  cardImage.src = fighter.image;
  cardImage.alt = `${fighter.firstName} ${fighter.lastName} Image`;


  cardImage.addEventListener("mouseleave", () => {
    cardImage.src = fighter.image;
  });

  // Fighter stats using emoji for clarity
  const ul = card.querySelector("ul");
  ul.innerHTML = `
    <li><strong>🌎 Country:</strong><span>${fighter.country}</span></li>
    <li><strong>🏋️‍♂️ Weight Class:</strong><span>${fighter.weightClass}</span></li>
    <li><strong>📊 Record:</strong><span>${fighter.wins}-${fighter.losses}</span></li>
    <li><strong>👑 Rank:</strong><span>${fighter.rank}</span></li>
    <li><strong>🥋 Style:</strong><span>${fighter.style}</span></li>
    <li><strong>✅ Active:</strong><span>${fighter.active ? "Yes" : "No"}</span></li>
  `;


  // Highlight champions visually
  if (fighter.rank && fighter.rank.includes("Champion")) {
    card.classList.add("champion");
  }

  // Favorite star toggle (visual + logic)
  const star = card.querySelector(".favorite-star");
  if (favorites.has(fighterId)) {
    star.classList.add("favorited");
    star.textContent = "★";
  }

  star.addEventListener("click", () => {
    if (favorites.has(fighterId)) {
      favorites.delete(fighterId);
      star.classList.remove("favorited");
      star.textContent = "☆";
    } else {
      favorites.add(fighterId);
      star.classList.add("favorited");
      star.textContent = "★";
    }
  });

  // Add a highlight button to manually trigger fight GIF
  const highlightBtn = document.createElement("button");
  highlightBtn.textContent = "🎥 View Highlight";
  highlightBtn.classList.add("highlight-btn");

  // Swap between regular image and GIF on click
  highlightBtn.addEventListener("click", () => {
    const isGif = cardImage.src.endsWith(".gif");
    cardImage.src = isGif ? fighter.image : fighter.highlightGif;
  });

  card.appendChild(highlightBtn);
}

/**
 * Quote button (for fun)
 */
function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

/**
 * Filter fighters by selected weight and style
 * Updates currentFighters list and re-renders
 */
function filterFighters() {
  const weightValue = document.getElementById("weight-filter").value;
  const styleValue = document.getElementById("style-filter").value;

  currentFighters = fighters.filter(f => {
    const matchWeight =
      weightValue === "" ||
      f.weightClass.includes(weightValue) ||
      `${f.gender}'s ${f.weightClass}` === weightValue;

    const matchStyle = styleValue === "" || f.style.includes(styleValue);
    return matchWeight && matchStyle;
  });

  showCards(currentFighters);
}

/**
 * Rebuilds the visible cards with a provided filtered list
 */
function displayFilteredFighters(filteredList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  filteredList.forEach(fighter => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, fighter);
    cardContainer.appendChild(nextCard);
  });
}

/**
 * Sorting and UI event listeners on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  showCards();

  // Toggle filter panel visibility
  const filterToggle = document.getElementById("filter-toggle");
  const filterMenu = document.getElementById("filter-menu");
  filterToggle.addEventListener("click", () => {
    filterMenu.classList.toggle("hidden");
  });

  // Filtering logic
  document.getElementById("weight-filter").addEventListener("change", filterFighters);
  document.getElementById("style-filter").addEventListener("change", filterFighters);

  // Search box logic
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    currentFighters = fighters.filter((fighter) => {
      return (
        fighter.firstName.toLowerCase().includes(query) ||
        fighter.lastName.toLowerCase().includes(query) ||
        fighter.nickname.toLowerCase().includes(query) ||
        fighter.weightClass.toLowerCase().includes(query) ||
        fighter.style.toLowerCase().includes(query) ||
        fighter.rank.toLowerCase().includes(query)
      );
    });

    showCards(currentFighters);
  });

  // Sorting logic
  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", function () {
    const selected = this.value;
    sortFighters(selected);
  });
});

/**
 * Sorting fighters based on user-selected criteria
 */
function sortFighters(criterion) {
  let sorted = [...currentFighters];

  if (criterion === "wins") {
    sorted.sort((a, b) => b.wins - a.wins);
  } else if (criterion === "losses") {
    sorted.sort((a, b) => b.losses - a.losses);
  } else if (criterion === "Male") {
    sorted = fighters.filter(f => f.gender === "Male");
  } else if (criterion === "Female") {
    sorted = fighters.filter(f => f.gender === "Female");
  } else if (criterion === "lastName") {
    sorted.sort((a, b) => a.lastName.localeCompare(b.lastName));
  } else if (criterion === "record") {
    const winRate = (f) => f.wins / (f.wins + f.losses);
    sorted.sort((a, b) => winRate(b) - winRate(a));
  } else if (criterion === "favorites") {
    sorted = fighters.filter(f => favorites.has(f.firstName + f.lastName));
  }

  showCards(sorted);
}

/**
 * Toggles dark mode styling for the entire site
 */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
