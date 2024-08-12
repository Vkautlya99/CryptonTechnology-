
// Example: I want to add a click event to the buttons
document.addEventListener("DOMContentLoaded", () => {
  const signupButton = document.querySelector(".btn-signup");
  const exploreButton = document.querySelector(".btn-explore");

  signupButton?.addEventListener("click", () => {
    alert("Signup clicked");
  });

  exploreButton?.addEventListener("click", () => {
    alert("Explore clicked");
  });
});
