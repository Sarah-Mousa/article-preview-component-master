// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get both share buttons (normal and darkmode)
  const shareButtons = document.querySelectorAll(".share");
  const shareBox = document.querySelector(".share__box");

  // Add click event to both buttons
  shareButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling up
      shareBox.style.display =
        shareBox.style.display === "flex" ? "none" : "flex";
    });
  });

  // Close share box when clicking outside
  document.addEventListener("click", function (e) {
    if (!shareBox.contains(e.target)) {
      shareBox.style.display = "none";
    }
  });
});
