// // As a merchant, when I click on the Shopify icon on the top bar, I am taken to the shopify landing page shopify.com
// /*
// 1. select the icon
// 2. Add click Event listener
// 3. Redirect to shopify landing page

// */

const shopifyIcon = document.querySelector(".nav-bar__item--logo");
const notificationBell = document.querySelector(".notification__bell");
const dropdownPanel = document.querySelector(".notification__dropdown");
const planBtn = document.querySelector(".plan-button");
const cancelBtn = document.querySelector(".cancel-button");
const planContainer = document.querySelector(".plan-container");

function redirectPage(loc) {
  // Redirect to the location
  window.location.href = loc;
}

shopifyIcon.addEventListener(
  "click",
  redirectPage.bind(this, "https://www.shopify.com")
);

// // As a merchant, when I focus on the search box on the top bar, I can freely type into the input. At the moment, no further actions or results should occur. A merchant should only be able to type freely in the box.

// // As a merchant, when I click on the notification bell, I see a dropdown panel that shows me an empty list of notifications since I have none yet. When I click on the notification bell again, this dropdown panel is closed.
// /*
// 1. Add empty list if no list when clicked
// 2. close when panel when there's list
// */
// notificationBell.addEventListener("click", function () {
//   dropdownPanel.classList.toggle("hidden");
// });
// notificationBell.addEventListener("click", function () {
//   toggleDropdown();
// });

document.addEventListener("DOMContentLoaded", function () {
  const notificationBell = document.querySelector(".notification__bell");
  const notificationDropdown = document.querySelector(
    ".notification__dropdown"
  );

  notificationBell.addEventListener("click", function () {
    toggleDropdown();
  });

  notificationBell.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    }
  });

  function toggleDropdown() {
    const isHidden = notificationDropdown.classList.contains("hidden");
    notificationDropdown.classList.toggle("hidden", !isHidden);
    notificationDropdown.setAttribute("aria-hidden", String(!isHidden));
  }
});

// // As a merchant, when I click on the name of my store Davii Collections, or on my profile image placeholder DC on the far right of the topbar menu, I see a menu with a list of menu items as specified by the Figma design. Clicking on this button again closes the menu. Finally, when I click on any of the menu items in this menu, I am redirected toadmin.shopify.com

// // As a merchant, when I click on theSelect plan link, I am redirected to the Shopify pricing page atshopify.com/pricing
// // 1. select the icon
// // 2. Add click Event listener
// // 3. Redirect to shopify landing page
planBtn.addEventListener(
  "click",
  redirectPage.bind(this, "https://www.shopify.com/pricing")
);
// As a merchant, when I click on the dismiss button of the trial callout, the trial callout is immediately removed from the page.
cancelBtn.addEventListener("click", function () {
  planContainer.classList.remove("plan-container");
  planContainer.classList.add("hidden");
});

// As a merchant, when I click the "Arrow Up" icon on the top right of the Setup guide card, it closes the card. When I click again, it reopens the card.

// As a merchant, when I click on any of the 5 onboarding steps, it expands the panel, showing the content of the onboarding step, and closes the previously opened one. When I click on an opened onboarding step, nothing happens.

// As a merchant, when I click on the circle checkbox (empty) on the left side of an onboarding step title, it marks that step as completed, and expands the next incomplete step. If I click again, it marks the step as incomplete. As I mark steps as completed or incomplete, I see the onboarding progress bar showing the correct progress.

// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.querySelector(".searchbox__input");

//   searchInput.addEventListener("focus", function () {
//     // You can add additional logic here if needed
//     // For now, we're just preventing any further actions
//     searchInput.addEventListener("keydown", function (event) {
//       event.stopPropagation();
//     });
//   });
// });
