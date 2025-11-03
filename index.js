const quizzes = [
  {
    name: "Easy Math Quiz",
    difficulty: "Easy",
    category: "Math",
    filter: "All",
    img: "images/white-house.jpg",
  },
  {
    name: "Medium Math Quiz",
    difficulty: "Medium",
    category: "Math",
    filter: "All",
    img: "images/eiffel-tower.webp",
  },
  {
    name: "Hard Math Quiz",
    difficulty: "Hard",
    category: "Math",
    filter: "All",
    img: "images/great-wall-of-china.webp",
  },
  {
    name: "Easy Animal Quiz",
    difficulty: "Easy",
    category: "Animal",
    filter: "All",
    img: "images/taj-mahal.jpg",
  },
  {
    name: "Medium Animal Quiz",
    difficulty: "Medium",
    category: "Animal",
    filter: "All",
    img: "images/statue-of-liberty.jpg",
  },
  {
    name: "Hard Animal Quiz",
    difficulty: "Hard",
    category: "Animal",
    filter: "All",
    img: "images/colosseum.webp",
  },
  {
    name: "Easy Science Quiz",
    difficulty: "Easy",
    category: "Science",
    filter: "All",
    img: "images/machu-picchu.jpg",
  },
  {
    name: "Medium Science Quiz",
    difficulty: "Medium",
    category: "Science",
    filter: "All",
    img: "images/sydney-opera-house.jpg",
  },
  {
    name: "Hard Science Quiz",
    difficulty: "Hard",
    category: "Science",
    filter: "All",
    img: "images/big-ben.jpg",
  },
  {
    name: "Easy Geography Quiz",
    difficulty: "Easy",
    category: "Geography",
    filter: "All",
    img: "images/pyramids-of-giza.jpg",
  },
  {
    name: "Medium Geography Quiz",
    difficulty: "Medium",
    category: "Geography",
    filter: "All",
    img: "images/washington-monument.jpg",
  },
  {
    name: "Hard Geography Quiz",
    difficulty: "Hard",
    category: "Geography",
    filter: "All",
    img: "images/leaning-tower-of-pisa.jpg",
  },
];

function inject(quiz) {
  //query the container
  //using adjacent html push card into container
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="card-image" src=${quiz.img} alt=${quiz.name}/>
      <h1 class="card-title"> ${quiz.name}</h1>
      <p class="card-continent">${quiz.category}</p>
      <p class="card-price"> $${quiz.difficulty}</p>
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