function dropdownMenu() {
  const quizButton = document.querySelector(".nav-quiz");
  const navFilters = document.querySelector(".quiz-container");

  quizButton.addEventListener("click", () => {
  navFilters.style.display = "flex";
  });
}

dropdownMenu();