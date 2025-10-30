function dropdownMenu() {
  const quizButton = document.querySelector(".nav-quiz");
  const navFilters = document.querySelector(".quiz-container");
  quizButton.addEventListener("click", () => {
  navFilters.style.display = navFilters.style.display === "flex" ? "none" : "flex";
  });
}

dropdownMenu();