import './style.css'

const quizzes = [
  {
    name: "Easy Math Quiz",
    difficulty: "Easy",
    category: "Math",
    filter: "All",
    img: "images/easy-math.webp"
  },
  {
    name: "Medium Math Quiz",
    difficulty: "Medium",
    category: "Math",
    filter: "All",
    img: "images/medium-math.webp"
  },
  {
    name: "Hard Math Quiz",
    difficulty: "Hard",
    category: "Math",
    filter: "All",
    img: "images/hard-math.webp"
  },
  {
    name: "Easy Animal Quiz",
    difficulty: "Easy",
    category: "Animal",
    filter: "All",
    img: "images/easy-animal.webp"
  },
  {
    name: "Medium Animal Quiz",
    difficulty: "Medium",
    category: "Animal",
    filter: "All",
    img: "images/medium-animal.webp"
  },
  {
    name: "Hard Animal Quiz",
    difficulty: "Hard",
    category: "Animal",
    filter: "All",
    img: "images/hard-animal.webp"
  },
  {
    name: "Easy Science Quiz",
    difficulty: "Easy",
    category: "Science",
    filter: "All",
    img: "images/easy-science.webp"
  },
  {
    name: "Medium Science Quiz",
    difficulty: "Medium",
    category: "Science",
    filter: "All",
    img: "images/medium-science.webp"
  },
  {
    name: "Hard Science Quiz",
    difficulty: "Hard",
    category: "Science",
    filter: "All",
    img: "images/hard-science.jpg"
  },
  {
    name: "Easy Geography Quiz",
    difficulty: "Easy",
    category: "Geography",
    filter: "All",
    img: "images/easy-geography.webp"
  },
  {
    name: "Medium Geography Quiz",
    difficulty: "Medium",
    category: "Geography",
    filter: "All",
    img: "images/medium-geography.webp"
  },
  {
    name: "Hard Geography Quiz",
    difficulty: "Hard",
    category: "Geography",
    filter: "All",
    img: "images/hard-geography.webp"
  }
];

function inject(quiz) {
  //query the container
  //using adjacent html push card into container
  const cardContainer = document.querySelector(".card-container");
  cardContainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="card-image" src=${quiz.img} alt=${quiz.name}/>
      <h1 class="card-title"> ${quiz.name}</h1>
      <p class="card-category"> ${quiz.category}</p>
      <p class="card-difficulty"> ${quiz.difficulty}</p>
      <button class="play-button">Play</button>
    </div>`
  );
}
quizzes.forEach((quiz) => inject(quiz));

function dropdownMenu() {
  const quizButton = document.querySelector(".nav-quiz");
  const navFilters = document.querySelector(".quiz-container");
  quizButton.addEventListener("click", () => {
  navFilters.style.display = navFilters.style.display === "flex" ? "none" : "flex";
  });
}

dropdownMenu();

function filterQuiz() {
  const filterButtons = document.querySelectorAll(".nav-filter");
  const container = document.querySelector(".card-container");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedDifficulty = button.textContent.trim();
      const selectedCategory = button.textContent.trim();
      container.innerHTML = "";
      const filteredQuiz = quizzes.filter(
        (quiz) =>
          quiz.difficulty === selectedDifficulty ||
          quiz.filter === selectedDifficulty ||
          quiz.category === selectedCategory
      );
      filteredQuiz.forEach((quiz) => inject(quiz));
    })
  })
}
filterQuiz();