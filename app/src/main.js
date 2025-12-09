import "./style.css";

const quizzes = [
  {
    name: "Easy Math Quiz",
    difficulty: "Easy",
    category: "Math",
    filter: "All",
    img: "/images/easy-math.webp",
  },
  {
    name: "Medium Math Quiz",
    difficulty: "Medium",
    category: "Math",
    filter: "All",
    img: "/images/medium-math.webp",
  },
  {
    name: "Hard Math Quiz",
    difficulty: "Hard",
    category: "Math",
    filter: "All",
    img: "/images/hard-math.webp",
  },
  {
    name: "Easy Animal Quiz",
    difficulty: "Easy",
    category: "Animal",
    filter: "All",
    img: "/images/easy-animal.webp",
  },
  {
    name: "Medium Animal Quiz",
    difficulty: "Medium",
    category: "Animal",
    filter: "All",
    img: "/images/medium-animal.webp",
  },
  {
    name: "Hard Animal Quiz",
    difficulty: "Hard",
    category: "Animal",
    filter: "All",
    img: "/images/hard-animal.webp",
  },
  {
    name: "Easy Science Quiz",
    difficulty: "Easy",
    category: "Science",
    filter: "All",
    img: "/images/easy-science.webp",
  },
  {
    name: "Medium Science Quiz",
    difficulty: "Medium",
    category: "Science",
    filter: "All",
    img: "/images/medium-science.webp",
  },
  {
    name: "Hard Science Quiz",
    difficulty: "Hard",
    category: "Science",
    filter: "All",
    img: "/images/hard-science.jpg",
  },
  {
    name: "Easy Geography Quiz",
    difficulty: "Easy",
    category: "Geography",
    filter: "All",
    img: "/images/easy-geography.webp",
  },
  {
    name: "Medium Geography Quiz",
    difficulty: "Medium",
    category: "Geography",
    filter: "All",
    img: "/images/medium-geography.webp",
  },
  {
    name: "Hard Geography Quiz",
    difficulty: "Hard",
    category: "Geography",
    filter: "All",
    img: "/images/hard-geography.webp",
  },
];

const questionBank = {
  "Easy Math Quiz": [
    { q: "2 + 2 = ?", a: ["4", "3", "5", "6"] },
    { q: "5 + 3 = ?", a: ["8", "7", "9", "6"] },
    { q: "10 - 7 = ?", a: ["3", "2", "4", "5"] },
    { q: "3 + 6 = ?", a: ["9", "8", "7", "6"] },
    { q: "8 - 1 = ?", a: ["7", "6", "8", "9"] },
  ],

  "Medium Math Quiz": [
    { q: "12 x 3 = ?", a: ["36", "32", "30", "35"] },
    { q: "45 ÷ 5 = ?", a: ["9", "8", "10", "7"] },
    { q: "15 x 4 = ?", a: ["60", "55", "65", "50"] },
    { q: "81 ÷ 9 = ?", a: ["9", "8", "7", "10"] },
    { q: "9 x 7 = ?", a: ["63", "56", "59", "61"] },
  ],

  "Hard Math Quiz": [
    { q: "Solve for x, 3x + 5 = 26", a: ["7", "6", "8", "9"] },
    { q: "15 squared = ?", a: ["225", "215", "235", "250"] },
    { q: "Cube root of 125 = ?", a: ["5", "25", "15", "10"] },
    { q: "Solve, 2x - 9 = 17", a: ["13", "12", "14", "11"] },
    { q: "Area of circle with radius 7", a: ["154", "49", "100", "200"] },
  ],

  "Easy Animal Quiz": [
    { q: "What animal barks?", a: ["Dog", "Cat", "Cow", "Bird"] },
    { q: "What animal purrs?", a: ["Cat", "Dog", "Horse", "Elephant"] },
    {
      q: "What animal has a trunk?",
      a: ["Elephant", "Giraffe", "Lion", "Tiger"],
    },
    { q: "What animal has feathers?", a: ["Bird", "Dog", "Cat", "Fish"] },
    { q: "What animal lays eggs?", a: ["Chicken", "Dog", "Cat", "Cow"] },
  ],

  "Medium Animal Quiz": [
    {
      q: "What animal is a mammal?",
      a: ["Dolphin", "Shark", "Crocodile", "Eagle"],
    },
    { q: "What animal hibernates?", a: ["Bear", "Dog", "Cat", "Elephant"] },
    { q: "What animal has gills?", a: ["Fish", "Dog", "Cat", "Horse"] },
    {
      q: "What animal lives in herds?",
      a: ["Elephant", "Tiger", "Fox", "Wolf"],
    },
    { q: "What animal migrates in winter?", a: ["Bird", "Cat", "Dog", "Lion"] },
  ],

  "Hard Animal Quiz": [
    {
      q: "What animal uses echolocation?",
      a: ["Bat", "Lion", "Dog", "Elephant"],
    },
    {
      q: "What animal is the fastest bird?",
      a: ["Peregrine Falcon", "Eagle", "Ostrich", "Sparrow"],
    },
    {
      q: "What animal has the strongest bite?",
      a: ["Crocodile", "Lion", "Tiger", "Shark"],
    },
    {
      q: "What animal is a monotreme?",
      a: ["Platypus", "Kangaroo", "Dog", "Cat"],
    },
    {
      q: "What animal is an apex predator?",
      a: ["Great White Shark", "Rabbit", "Deer", "Frog"],
    },
  ],

  "Easy Science Quiz": [
    {
      q: "Water freezes at what temperature?",
      a: ["0°C", "100°C", "50°C", "32°C"],
    },
    {
      q: "What gas do plants breathe in?",
      a: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    },
    {
      q: "What planet is closest to the sun?",
      a: ["Mercury", "Earth", "Venus", "Mars"],
    },
    {
      q: "What force pulls objects down?",
      a: ["Gravity", "Magnetism", "Friction", "Electricity"],
    },
    { q: "What organ pumps blood?", a: ["Heart", "Lungs", "Brain", "Liver"] },
  ],

  "Medium Science Quiz": [
    { q: "What is the chemical symbol for oxygen?", a: ["O", "Ox", "O2", "C"] },
    {
      q: "What part of the cell holds DNA?",
      a: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
    },
    {
      q: "What simple machine is a ramp?",
      a: ["Inclined plane", "Lever", "Pulley", "Wheel"],
    },
    {
      q: "What type of energy is stored energy?",
      a: ["Potential energy", "Kinetic", "Thermal", "Chemical"],
    },
    {
      q: "What organ controls the body?",
      a: ["Brain", "Heart", "Liver", "Stomach"],
    },
  ],

  "Hard Science Quiz": [
    {
      q: "State Newton’s third law.",
      a: [
        "Every action has an equal and opposite reaction",
        "Force equals mass times acceleration",
        "Objects in motion stay in motion",
        "Energy cannot be created",
      ],
    },
    {
      q: "What subatomic particle has no charge?",
      a: ["Neutron", "Proton", "Electron", "Photon"],
    },
    {
      q: "Define osmosis.",
      a: [
        "Movement of water through a membrane",
        "Movement of air",
        "Chemical reaction",
        "Energy transfer",
      ],
    },
    {
      q: "What is the powerhouse of the cell?",
      a: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
    },
    {
      q: "What wave requires a medium?",
      a: ["Sound wave", "Light wave", "Radio wave", "X-ray"],
    },
  ],

  "Easy Geography Quiz": [
    {
      q: "What is the largest ocean?",
      a: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      q: "What continent is Egypt in?",
      a: ["Africa", "Asia", "Europe", "South America"],
    },
    {
      q: "What country is Rome in?",
      a: ["Italy", "France", "Spain", "Greece"],
    },
    {
      q: "What is the capital of Japan?",
      a: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    },
    {
      q: "What river runs through Egypt?",
      a: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    },
  ],

  "Medium Geography Quiz": [
    {
      q: "What continent has the most countries?",
      a: ["Africa", "Asia", "Europe", "South America"],
    },
    {
      q: "What mountain range is in South America?",
      a: ["Andes", "Himalayas", "Rockies", "Alps"],
    },
    {
      q: "What is the capital of Australia?",
      a: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    },
    {
      q: "What ocean borders the east United States?",
      a: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      q: "What country is north of the United States?",
      a: ["Canada", "Mexico", "Russia", "Greenland"],
    },
  ],

  "Hard Geography Quiz": [
    {
      q: "What is the longest river in the world?",
      a: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    },
    {
      q: "Name the highest mountain on Earth.",
      a: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    },
    {
      q: "What line separates hemispheres east and west?",
      a: [
        "Prime Meridian",
        "Equator",
        "Tropic of Cancer",
        "Tropic of Capricorn",
      ],
    },
    {
      q: "Name the driest desert in the world.",
      a: ["Atacama", "Sahara", "Gobi", "Kalahari"],
    },
    {
      q: "What country has the most time zones?",
      a: ["France", "USA", "Russia", "China"],
    },
  ],
};

const explanations = {
  "Easy Math Quiz": [
    "2 + 2 equals 4.",
    "5 + 3 equals 8.",
    "10 - 7 equals 3.",
    "3 + 6 equals 9.",
    "8 - 1 equals 7.",
  ],
  "Medium Math Quiz": [
    "12 x 3 equals 36.",
    "45 ÷ 5 equals 9.",
    "15 x 4 equals 60.",
    "81 ÷ 9 equals 9.",
    "9 x 7 equals 63.",
  ],
  "Hard Math Quiz": [
    "3x + 5 = 26 → x = 7.",
    "15 squared = 225.",
    "Cube root of 125 = 5.",
    "2x - 9 = 17 → x = 13.",
    "Area of circle with radius 7 = π*7² ≈ 154.",
  ],
  "Easy Animal Quiz": [
    "Dogs bark.",
    "Cats purr.",
    "Elephants have trunks.",
    "Birds have feathers.",
    "Chickens lay eggs.",
  ],
  "Medium Animal Quiz": [
    "Dolphins are mammals.",
    "Bears hibernate.",
    "Fish have gills.",
    "Elephants live in herds.",
    "Birds migrate in winter.",
  ],
  "Hard Animal Quiz": [
    "Bats use echolocation.",
    "Peregrine Falcons are the fastest birds.",
    "Crocodiles have the strongest bite.",
    "Platypus is a monotreme.",
    "Great White Sharks are apex predators.",
  ],
  "Easy Science Quiz": [
    "Water freezes at 0°C.",
    "Plants breathe in carbon dioxide.",
    "Mercury is closest to the sun.",
    "Gravity pulls objects down.",
    "The heart pumps blood.",
  ],
  "Medium Science Quiz": [
    "Oxygen symbol is O.",
    "DNA is in the nucleus.",
    "A ramp is an inclined plane.",
    "Stored energy is potential energy.",
    "The brain controls the body.",
  ],
  "Hard Science Quiz": [
    "Newton's third law: Every action has an equal and opposite reaction.",
    "A neutron has no charge.",
    "Osmosis is the movement of water through a membrane.",
    "Mitochondria is the powerhouse of the cell.",
    "Sound waves require a medium.",
  ],
  "Easy Geography Quiz": [
    "Pacific Ocean is the largest ocean.",
    "Egypt is in Africa.",
    "Rome is in Italy.",
    "Tokyo is the capital of Japan.",
    "The Nile runs through Egypt.",
  ],
  "Medium Geography Quiz": [
    "Africa has the most countries.",
    "Andes mountains are in South America.",
    "Canberra is the capital of Australia.",
    "The Atlantic Ocean borders the east US.",
    "Canada is north of the United States.",
  ],
  "Hard Geography Quiz": [
    "Nile is the longest river in the world.",
    "Mount Everest is the highest mountain.",
    "Prime Meridian separates east and west hemispheres.",
    "Atacama is the driest desert.",
    "France has the most time zones.",
  ],
};

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

function toggleMode() {
  const toggleButton = document.getElementById("toggleMode");
  const body = document.body;
  const sideBar = document.querySelector(".side-bar");
  const cardContainer = document.querySelector(".card-container");
  const quizContainer = document.querySelector(".quiz-container");
  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
    if (sideBar.classList.contains("light2")) {
      sideBar.classList.add("dark2");
      sideBar.classList.remove("light2");
    } else {
      sideBar.classList.add("light2");
      sideBar.classList.remove("dark2");
    }
    if (cardContainer.classList.contains("light2")) {
      cardContainer.classList.add("dark2");
      cardContainer.classList.remove("light2");
    } else {
      cardContainer.classList.add("light2");
      cardContainer.classList.remove("dark2");
    }
    if (quizContainer.classList.contains("light2")) {
      quizContainer.classList.add("dark2");
      quizContainer.classList.remove("light2");
    } else {
      quizContainer.classList.add("light2");
      quizContainer.classList.remove("dark2");
    }
  });
}
toggleMode();

function dropdownMenu() {
  const quizButton = document.querySelector(".nav-quiz");
  const navFilters = document.querySelector(".filter-container");
  const settingButton = document.querySelector(".setting");
  const navSettings = document.querySelector(".setting-container");
  quizButton.addEventListener("click", () => {
    navFilters.style.display =
      navFilters.style.display === "flex" ? "none" : "flex";
  });
  settingButton.addEventListener("click", () => {
    navSettings.style.display =
      navSettings.style.display === "flex" ? "none" : "flex";
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
      loadQuestions();
    });
  });
}
filterQuiz();

function loadQuestions() {
  const playButtons = document.querySelectorAll(".play-button");
  const quizContainer = document.querySelector(".quiz-container");
  const container = document.querySelector(".card-container");
  const quizContent = document.querySelector(".quiz-content");
  const submitButton = document.querySelector(".submit-quiz");
  const scoreDisplay = document.querySelector(".quiz-score");
  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quizCard = button.closest(".card");
      const quizName = quizCard.querySelector(".card-title").textContent.trim();
      const questions = questionBank[quizName];
      const quizExplanations = explanations[quizName];
      container.style.display = "none";
      quizContent.innerHTML = "";
      scoreDisplay.textContent = "";
      quizContainer.style.display = "flex";
      questions.forEach((item, index) => {
        quizContent.insertAdjacentHTML(
          "beforeend",
          `<div class="question-block" data-index="${index}">
            <p class="question-title">${index + 1}. ${item.q}</p>
            <div class="answers">
              <button class="answer">${item.a[0]}</button>
              <button class="answer">${item.a[1]}</button>
              <button class="answer">${item.a[2]}</button>
              <button class="answer">${item.a[3]}</button>
            </div>
            <p class="explanation">${quizExplanations[index]}</p>
          </div>`
        );
      });
      const answerButtons = quizContent.querySelectorAll(".answer");
      answerButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const answerDiv = btn.parentElement;
          answerDiv
            .querySelectorAll(".answer")
            .forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      });
      submitButton.onclick = () => {
        let score = 0;
        questions.forEach((item, index) => {
          const questionBlock = quizContent.querySelector(
            `.question-block[data-index="${index}"]`
          );
          const answers = questionBlock.querySelectorAll(".answer");
          const selectedAnswer =
            questionBlock.querySelector(".answer.selected");
          const explanation = questionBlock.querySelector(".explanation");
          explanation.style.display = "block";
          answers.forEach((btn) => {
            btn.disabled = true;
            if (btn.textContent === item.a[0]) {
              btn.classList.add("correct");
            } else if (btn.classList.contains("selected")) {
              btn.classList.add("wrong");
            }
          });
          if (selectedAnswer && selectedAnswer.textContent === item.a[0]) {
            score++;
          }
        });
        scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
      };
    });
  });
}
loadQuestions();

function goToMainMenu() {
  const goBack = document.querySelector(".go-back");
  const quizContainer = document.querySelector(".quiz-container");
  const quizContent = document.querySelector(".quiz-content");
  const container = document.querySelector(".card-container");
  goBack.addEventListener("click", function () {
    quizContainer.style.display = "none";
    quizContent.innerHTML = "";
    container.innerHTML = "";
    container.style.display = "flex";
    quizzes.forEach((quiz) => inject(quiz));
    loadQuestions();
  });
}

goToMainMenu();
