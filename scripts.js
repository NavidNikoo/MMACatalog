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


let currentFighters = [...fighters]; // The list currently being displayed

// Show all fighter cards on the page (default = all fighters)
function showCards(filtered = fighters) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards
  const templateCard = document.querySelector(".card");

  // Loop through the fighter data and create a card for each one
  for (let i = 0; i < filtered.length; i++) {
    const fighter = filtered[i];
    const nextCard = templateCard.cloneNode(true); // Clone hidden template
    editCardContent(nextCard, fighter); // Fill in fighter data
    cardContainer.appendChild(nextCard); // Add to page
  }
}

// Fill in content for a single card with fighter data
function editCardContent(card, fighter) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  const fighterId = fighter.firstName + fighter.lastName;

  // Insert the fighter name and the star span into the header
  const nickname = fighter.nickname ? `"${fighter.nickname}" ` : "";
  cardHeader.innerHTML = `
  ${fighter.firstName} ${fighter.nickname ? `<span class="nickname">"${fighter.nickname}"</span>` : ""} ${fighter.lastName}
  <span class="favorite-star" data-id="${fighterId}">☆</span>
`;

  // Set image
  const cardImage = card.querySelector("img");
  cardImage.src = fighter.image;
  cardImage.alt = `${fighter.firstName} ${fighter.lastName} Image`;

  cardImage.addEventListener("mouseenter", () => {
  cardImage.src = fighter.highlightGif;
  });

  cardImage.addEventListener("mouseleave", () => {
  cardImage.src = fighter.image;
  });

  // Fill fighter stats
  const ul = card.querySelector("ul");
  ul.innerHTML = `
    <li><strong>🌎 Country:</strong> ${fighter.country}</li>
    <li><strong>🏋️‍♂️ Weight Class:</strong> ${fighter.weightClass}</li>
    <li><strong>📊 Record:</strong> ${fighter.wins}-${fighter.losses}</li>
    <li><strong>👑 Rank:</strong> ${fighter.rank}</li>
    <li><strong>🥋 Style:</strong> ${fighter.style}</li>
    <li><strong>✅ Active:</strong> ${fighter.active ? "Yes" : "No"}</li>
  `;

  if (fighter.rank && fighter.rank.includes("Champion")) {
    card.classList.add("champion");
  }

  // Handle the star logic
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

    // Create the highlight button
  const highlightBtn = document.createElement("button");
  highlightBtn.textContent = "🎥 View Highlight";
  highlightBtn.classList.add("highlight-btn");

  // Event listener to toggle between image and GIF
  highlightBtn.addEventListener("click", () => {
    const isGif = cardImage.src.endsWith(".gif");
    cardImage.src = isGif ? fighter.image : fighter.highlightGif;
  });

  card.appendChild(highlightBtn);

}

// Runs once when the page first loads, displays all cards
document.addEventListener("DOMContentLoaded", showCards);

// Pops up a fun quote when "Get A Quote!" is clicked
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

// Filter fighters based on selected dropdown values
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


// Render filtered fighter cards to the page
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

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  // Filter Toggle
  const filterToggle = document.getElementById("filter-toggle");
  const filterMenu = document.getElementById("filter-menu");
  filterToggle.addEventListener("click", () => {
    filterMenu.classList.toggle("hidden");
  });

  // Filters
  document.getElementById("weight-filter").addEventListener("change", filterFighters);
  document.getElementById("style-filter").addEventListener("change", filterFighters);

  // Search
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


    showCards(filteredFighters);
  });

  // Sort
  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", function () {
    const selected = this.value;
    sortFighters(selected);
  });
});


function sortFighters(criterion) {
  let sorted = [...currentFighters];

  if (criterion === "wins") {
    sorted.sort((a, b) => b.wins - a.wins);
  } else if (criterion === "losses") {
    sorted.sort((a, b) => b.losses - a.losses);
  }else if (criterion === "Male") {
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

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
