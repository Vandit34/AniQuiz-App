const questions = [
  {
    id: 1,
    question: 'Who is the captain of the Straw Hat Pirates?',
    options: [
      { id: 2, text: 'Roronoa Zoro', isCorrect: false },
      { id: 1, text: 'Monkey D. Luffy', isCorrect: true },
      { id: 3, text: 'Sanji', isCorrect: false },
      { id: 4, text: 'Usopp', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "In 'Attack on Titan,' what is Eren Yeager's primary goal?",
    options: [
      { id: 2, text: 'Rule the world', isCorrect: false },
      { id: 1, text: 'Destroy the Titans', isCorrect: true },
      { id: 3, text: 'Protect Marley', isCorrect: false },
      { id: 4, text: 'Join the Scouts', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "What is the name of Goku's home planet in 'Dragon Ball Z'?",
    options: [
      { id: 2, text: 'Planet Namek', isCorrect: false },
      { id: 4, text: "King Kai's Planet", isCorrect: false },
      { id: 1, text: 'Planet Vegeta', isCorrect: true },
      { id: 3, text: 'Earth', isCorrect: false }
    ]
  },
  {
    id: 4,
    question:
      'Which anime features a notebook that can kill anyone whose name is written in it?',
    options: [
      { id: 2, text: 'Bleach', isCorrect: false },
      { id: 4, text: 'Fairy Tail', isCorrect: false },
      { id: 1, text: 'Death Note', isCorrect: true },
      { id: 3, text: 'One Piece', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "In 'My Hero Academia,' what is Deku's real name?",
    options: [
      { id: 4, text: 'Eijiro Kirishima', isCorrect: false },
      { id: 1, text: 'Izuku Midoriya', isCorrect: true },
      { id: 2, text: 'Katsuki Bakugo', isCorrect: false },
      { id: 3, text: 'Shoto Todoroki', isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "What is the main goal of Light Yagami in 'Death Note'?",
    options: [
      { id: 4, text: 'Rule over Shinigami', isCorrect: false },
      { id: 3, text: 'Become a detective', isCorrect: false },
      { id: 1, text: 'Create a new world as its god', isCorrect: true },
      { id: 2, text: 'Destroy all criminals', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "In 'Fullmetal Alchemist,' what is the first rule of alchemy?",
    options: [
      { id: 2, text: 'No human transmutation', isCorrect: false },
      { id: 1, text: 'Equivalent Exchange', isCorrect: true },
      { id: 3, text: 'Alchemy is forbidden', isCorrect: false },
      { id: 4, text: 'Sacrifice for gain', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: 'What is Sailor Moon’s real name?',
    options: [
      { id: 3, text: 'Rei Hino', isCorrect: false },
      { id: 4, text: 'Makoto Kino', isCorrect: false },
      { id: 2, text: 'Ami Mizuno', isCorrect: false },
      { id: 1, text: 'Usagi Tsukino', isCorrect: true }
    ]
  },
  {
    id: 9,
    question: "In 'Hunter x Hunter,' what is the name of Gon’s best friend?",
    options: [
      { id: 1, text: 'Killua Zoldyck', isCorrect: true },
      { id: 2, text: 'Leorio Paradinight', isCorrect: false },
      { id: 3, text: 'Kurapika', isCorrect: false },
      { id: 4, text: 'Hisoka', isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "What is Edward Elric searching for in 'Fullmetal Alchemist'?",
    options: [
      { id: 3, text: 'Immortality', isCorrect: false },
      { id: 4, text: "The Elric Brothers' Lost Scroll", isCorrect: false },
      { id: 1, text: "Philosopher's Stone", isCorrect: true },
      { id: 2, text: "Father's Approval", isCorrect: false }
    ]
  }
]

const questionBox = document.getElementsByClassName('question')[0]

// Assign a value  whcih will act as index of "questions" array which will help tp traverse across it

const prevBtnHTML = document.querySelector('.prev')
const nextBtnHTML = document.querySelector('.next')
const score = document.querySelector('.score')
// let scoreValue =

let traverseIndex = 0

// =============== Updating the question & option ========================

const updateUI = () => {
  // XXXXXXXXXXXXXXXXXXXXXXXX

  //Rendering the Question content and Number
  const questionData = questions.map(value => {
    return `Q${value.id} ${value.question}`
  })

  questionBox.innerHTML = questionData[traverseIndex]
  console.log(questionData[traverseIndex]) //⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

  // XXXXXXXXXXXXXXXXXXXXXXXX

  // XXXXXXXXXXXXXXXXXXXXXXXX

  const optionHTML = document.getElementsByClassName('optionHTML')[0]
  const optionData = questions.map(value => {
    return value
  })
  // Options populate on UI

  const optionValue = optionData[traverseIndex].options
    .map(data => {
      console.log(data.text) //⚠️⚠️⚠️⚠️⚠️⚠️

      return `<li
        class="option bg-gray-200 hover:bg-gray-300 p-4 rounded-lg cursor-pointer shadow-sm" data-correct="${data.isCorrect}"
      >
        ${data.text}
      </li>`
    })
    .join('')

  optionHTML.innerHTML = optionValue

  // Clicking the options

  const options = Array.from(document.getElementsByClassName('option'))
  options.forEach((btn, key) => {
    btn.addEventListener('click', () => {
      // console.log(btn.innerText)
      // optionData[traverseIndex].options
      const isCorrect = btn.getAttribute('data-correct') === 'true'

      if (isCorrect && traverseIndex < questions.length - 1) {
        btn.style.backgroundColor = '#00ff55'
        setTimeout(() => {
          // if()
          traverseIndex = traverseIndex + 1

          scoreValue = Number(score.innerText) + 1
          score.innerText = scoreValue

          prevBtnHTML.setAttribute('disabled', '')
          updateUI()
        }, 1000)
      } else if (isCorrect) {
        btn.style.backgroundColor = '#00ff55'
        setTimeout(() => {
          scoreValue = Number(score.innerText) + 1
          score.innerText = scoreValue
          prevBtnHTML.setAttribute('disabled', '')
          updateUI()
        }, 1000)
      } else if (!isCorrect && traverseIndex < questions.length - 1) {
        btn.style.backgroundColor = '#ff3333'
        setTimeout(() => {
          traverseIndex = traverseIndex + 1
          updateUI()
        }, 1000)
      }
      else {
        // Incorrect answer for the last question
        btn.style.backgroundColor = '#ff3333'; // Red for incorrect answer (last question)
        setTimeout(() => {
          updateUI(); // Update UI for the end of the quiz or show final results
        }, 1000);
      }

    })
  })

  // const update = () => {
  //   optionValue.addEventListener("click", () => {
  //     console.log(optionValue);
  //   })
  // }

  // update()

  // XXXXXXXXXXXXXXXXXXXXXXXX
}

// =======================================

// ================ Button functionality=======================

const clickBtn = () => {
  updateUI()
  prevBtnHTML.addEventListener('click', () => {
    if (traverseIndex > 0) {
      traverseIndex = traverseIndex - 1
      console.log('Previous button clicked, traverseIndex:', traverseIndex)
    } else {
      traverseIndex = 0
      console.log('Previous button clicked, traverseIndex:', traverseIndex)
    }
    updateUI()
  })

  nextBtnHTML.addEventListener('click', () => {
    if (traverseIndex < questions.length - 1) {
      traverseIndex = traverseIndex + 1
      console.log('Next button clicked, traverseIndex:', traverseIndex)
    } else {
      traverseIndex = questions.length - 1
    }
    updateUI()
  })
}

clickBtn()

console.log('Initial traverseIndex:', traverseIndex)

// ======================================

// =======================Updating the Score =========================

// const update = () => {
//   optionValue.addEventListener("click", () => {
//     console.log(optionValue);
//   })
// }

// update()

// ======================================
