document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // PAGE ELEMENTS
  // ==========================================

  const introPage = document.getElementById("introPage");
  const enterButton = document.getElementById("enterButton");

  const welcomeOverlay = document.getElementById("welcomeOverlay");

  const mainPage = document.getElementById("mainPage");
  const messagesSection = document.getElementById("messages");
  const messageDetail = document.getElementById("messageDetail");

  const detailNumber = document.getElementById("detailNumber");
  const detailTitle = document.getElementById("detailTitle");
  const detailContent = document.getElementById("detailContent");

  const previousButton = document.getElementById("previousCard");
  const nextButton = document.getElementById("nextCard");
  const returnButton = document.getElementById("returnToCards");

  const replayButton = document.getElementById("replayButton");
  const birthdayMusic = document.getElementById("birthdayMusic");

  const messageCards = Array.from(
    document.querySelectorAll(".message-card")
  );

  let currentCardIndex = 0;
  let currentGameQuestion = 0;
  let welcomeTimer = null;


  // ==========================================
  // EIGHT MESSAGE CARDS
  // ==========================================

  const messages = [

    {
      title: "To My Dearest Sister",

      text: `
        <p>Dear big sis,</p>

        <p>
          Today is a beautiful reminder of how blessed I am to have you
          in my life. You are more than my sister. You are someone whose
          presence has a special place in my heart, someone I will always
          be grateful to God for.
        </p>

        <p>
          I admire the strength you carry, the kindness you show, and
          the way you continue moving forward even when life is not easy.
          You may not always realize how special you are, but I hope
          today reminds you that your life means so much.
        </p>

        <p>
          Happy birthday, my precious big sister. I made this little
          surprise with love, simply because you deserve to be celebrated.
        </p>
      `
    },

    {
      title: "What You Mean to Me",

      text: `
        <p>
          Some people enter our lives and leave ordinary memories.
          Others become a part of our hearts in a way words cannot fully
          explain. You are one of those people to me.
        </p>

        <p>
          You are not someone I could measure against another person.
          You have your own place in my heart, your own story, and your
          own kind of importance. Nobody else can be you.
        </p>

        <p>
          I hope you never doubt that you matter. Even on the days when
          life feels overwhelming, please remember that you are loved
          more deeply than a single birthday message could ever express.
        </p>
      `
    },

    {
      title: "Your Beautiful Heart",

      text: `
        <p>
          One of the things I appreciate about you is the person you are
          becoming. Your heart, your courage, your kindness, and the
          things you keep trying to do matter.
        </p>

        <p>
          You do not have to be perfect to be wonderful. You do not have
          to have every answer or have everything figured out. You are
          allowed to learn, grow, rest, and begin again.
        </p>

        <p>
          I pray that the world gives you reasons to smile, people who
          genuinely appreciate you, and moments that remind you how
          beautiful life can be.
        </p>
      `
    },

    {
      title: "For Your Journey",

      text: `
        <p>
          Big sis, as you step into another year, I hope you give yourself
          permission to dream boldly. May you discover opportunities that
          bring out the best in you and find the courage to pursue the
          things that truly matter.
        </p>

        <p>
          Your journey does not have to look like anybody else's.
          Take your time. Learn what you need to learn. Celebrate your
          progress, even when it seems small.
        </p>

        <p>
          May the doors meant for you open at the right time, and may
          you have the wisdom to recognize the opportunities worth taking.
        </p>
      `
    },

    {
      title: "My Prayers for You",

      text: `
        <p>
          My prayer for you is that God continues to guide your steps,
          strengthen your heart, and give you peace in every season.
        </p>

        <p>
          May He protect you, give you wisdom when decisions are difficult,
          and surround you with people whose intentions are sincere.
          May you find strength when you feel tired and hope when the
          road ahead seems uncertain.
        </p>

        <p>
          May this new year of your life bring growth, good health,
          genuine happiness, meaningful opportunities, and beautiful
          reasons to thank God.
        </p>

        <p>
          Happy birthday, my sister. You are in my prayers.
        </p>
      `
    },

    {
      title: "Things I Hope You Know",

      text: `
        <p>
          I hope you know that you do not always have to be strong for
          everybody. You deserve care, encouragement, rest, and people
          who make you feel safe enough to be yourself.
        </p>

        <p>
          I hope you know that a difficult day does not make you a failure,
          a mistake does not define your entire life, and a slow season
          does not mean you are going nowhere.
        </p>

        <p>
          Most importantly, I hope you know that you are valuable beyond
          your achievements. You are a person worth loving and celebrating
          simply because you are you.
        </p>
      `
    },

    {
      title: "A Little Birthday Game",

      text: `
        <p>
          Big sis, this little game was made especially for you.
          Answer each question in your heart, reveal my answer, and
          discover why I chose it.
        </p>

        <div class="birthday-game" id="birthdayGame">

          <p class="game-progress" id="gameProgress">
            QUESTION 1 OF 5
          </p>

          <h3 class="game-question" id="gameQuestion"></h3>

          <p class="game-answer" id="gameAnswer" hidden></p>

          <p class="game-reason" id="gameReason" hidden></p>

          <button
            class="glow-button game-button"
            id="revealAnswer"
            type="button"
          >
            Reveal My Answer
          </button>

          <button
            class="glow-button game-button"
            id="nextQuestion"
            type="button"
            hidden
          >
            Discover Another
          </button>

        </div>
      `
    },

    {
      title: "One Last Thing, Big Sis",

      text: `
        <p>
          If there is one thing I want you to carry with you from this
          little surprise, it is this: your life is worth celebrating.
        </p>

        <p>
          I may not always find the perfect words to express everything
          I feel, but I hope the little things I create remind you that
          you are special to me.
        </p>

        <p>
          May your new age bring beautiful memories, sincere love,
          unexpected blessings, and moments that make you proud of
          the woman you are becoming.
        </p>

        <p>
          Happy birthday, my amazing big sis.
          This surprise was made with love, just for you.
        </p>

        <p class="gold-signature">
          Always your little sister. Always with love.
        </p>
        <div class="full-name-tribute">
  <h3 class="full-name-heading">Esosuakpor Faith TJ</h3>

  <p>You are a woman of remarkable strength, a mind capable of extraordinary things, and a spirit that deserves to be celebrated.</p>

  <p>You carry within you a potential that no circumstance can erase and a worth that no person's opinion can diminish.</p>

  <p>May you always have the courage to pursue the life you envision, the wisdom to recognize your own value, and the confidence to walk into every room knowing you belong there.</p>

  <p>Never allow the difficulties of today to convince you that you are anything less than the incredible woman you are growing into.</p>
</div>
      `
    }

  ];


  // ==========================================
  // BIRTHDAY GAME QUESTIONS
  // ==========================================

  const gameQuestions = [

    {
      question: "Who deserves to be celebrated today?",
      answer: "YOU, BIG SIS!",
      reason:
        "Do you know why I said that? Because your life is meaningful, your presence matters, and today is a special chance to celebrate you."
    },

    {
      question: "Can anyone else take your exact place in my heart?",
      answer: "NO ONE CAN BE YOU.",
      reason:
        "Do you know why I said that? Because you have your own story and a place in my life that belongs to you."
    },

    {
      question: "What do I wish for your new age?",
      answer: "A YEAR FILLED WITH BEAUTIFUL THINGS.",
      reason:
        "Do you know why I said that? Because you deserve opportunities to grow, reasons to smile, peace of mind, and memories worth keeping."
    },

    {
      question: "What should you remember on difficult days?",
      answer: "YOU ARE STILL VALUABLE.",
      reason:
        "Do you know why I said that? Because your worth does not disappear when things go wrong. You deserve kindness even when life is difficult."
    },

    {
      question: "What is this little surprise really saying?",
      answer: "YOU ARE LOVED, BIG SIS!",
      reason:
        "Do you know why I said that? Because sometimes love needs more than words, so I made this little corner of the internet especially for you."
    }

  ];


  // ==========================================
  // INTRO AND FIVE-SECOND WELCOME
  // ==========================================

  function openSurprise() {

    if (introPage) {
      introPage.hidden = true;
    }

    if (welcomeOverlay) {
      welcomeOverlay.hidden = false;
    }

    if (mainPage) {
      mainPage.hidden = true;
    }

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

    clearTimeout(welcomeTimer);

    welcomeTimer = setTimeout(() => {

      if (welcomeOverlay) {
        welcomeOverlay.hidden = true;
      }

      if (mainPage) {
        mainPage.hidden = false;
      }

      if (messageDetail) {
        messageDetail.hidden = true;
      }

      if (messagesSection) {
        messagesSection.hidden = false;
      }

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    }, 5000);

  }


  if (enterButton) {
    enterButton.addEventListener("click", openSurprise);
  }


  // ==========================================
  // OPEN A MESSAGE
  // ==========================================

  function openMessage(index) {

    if (!messages[index]) {
      return;
    }

    currentCardIndex = index;

    const message = messages[index];

    if (detailNumber) {
      detailNumber.textContent =
        `MESSAGE ${String(index + 1).padStart(2, "0")} OF 08`;
    }

    if (detailTitle) {
      detailTitle.textContent = message.title;
    }

    if (detailContent) {
      detailContent.innerHTML = message.text;
    }

    if (messagesSection) {
      messagesSection.hidden = true;
    }

    if (messageDetail) {
      messageDetail.hidden = false;
    }

    updateNavigation();

    if (index === 6) {
      setupBirthdayGame();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  messageCards.forEach((card, index) => {

    card.addEventListener("click", () => {

      const cardIndex = Number(card.dataset.card);

      if (
        Number.isInteger(cardIndex) &&
        cardIndex >= 0 &&
        cardIndex < messages.length
      ) {
        openMessage(cardIndex);
      } else {
        openMessage(index);
      }

    });

  });


  // ==========================================
  // PREVIOUS AND NEXT BUTTONS
  // ==========================================

  function updateNavigation() {

    if (previousButton) {
      previousButton.hidden = currentCardIndex === 0;
      previousButton.disabled = currentCardIndex === 0;
    }

    if (nextButton) {
      nextButton.hidden =
        currentCardIndex === messages.length - 1;

      nextButton.disabled =
        currentCardIndex === messages.length - 1;
    }

  }


  if (previousButton) {

    previousButton.addEventListener("click", () => {

      if (currentCardIndex > 0) {
        openMessage(currentCardIndex - 1);
      }

    });

  }


  if (nextButton) {

    nextButton.addEventListener("click", () => {

      if (currentCardIndex < messages.length - 1) {
        openMessage(currentCardIndex + 1);
      }

    });

  }


  // ==========================================
  // RETURN TO THE EIGHT MESSAGE CARDS
  // ==========================================

  if (returnButton) {

    returnButton.addEventListener("click", () => {

      if (messageDetail) {
        messageDetail.hidden = true;
      }

      if (messagesSection) {
        messagesSection.hidden = false;
      }

      window.scrollTo({
        top: messagesSection
          ? messagesSection.getBoundingClientRect().top +
            window.scrollY - 15
          : 0,
        behavior: "smooth"
      });

    });

  }


  // ==========================================
  // BIRTHDAY GAME
  // ==========================================

  function setupBirthdayGame() {

    currentGameQuestion = 0;

    displayGameQuestion();

    const revealButton =
      document.getElementById("revealAnswer");

    const nextQuestionButton =
      document.getElementById("nextQuestion");

    if (revealButton) {
      revealButton.onclick = revealGameAnswer;
    }

    if (nextQuestionButton) {
      nextQuestionButton.onclick = moveToNextQuestion;
    }

  }


  function displayGameQuestion() {

    const progress =
      document.getElementById("gameProgress");

    const question =
      document.getElementById("gameQuestion");

    const answer =
      document.getElementById("gameAnswer");

    const reason =
      document.getElementById("gameReason");

    const revealButton =
      document.getElementById("revealAnswer");

    const nextQuestionButton =
      document.getElementById("nextQuestion");

    const item = gameQuestions[currentGameQuestion];

    if (!item) {
      return;
    }

    if (progress) {
      progress.textContent =
        `QUESTION ${currentGameQuestion + 1} OF ${gameQuestions.length}`;
    }

    if (question) {
      question.textContent = item.question;
    }

    if (answer) {
      answer.textContent = "";
      answer.hidden = true;
    }

    if (reason) {
      reason.textContent = "";
      reason.hidden = true;
    }

    if (revealButton) {
      revealButton.hidden = false;
      revealButton.textContent = "Reveal My Answer";
    }

    if (nextQuestionButton) {
      nextQuestionButton.hidden = true;

      nextQuestionButton.textContent =
        currentGameQuestion === gameQuestions.length - 1
          ? "Play Again"
          : "Discover Another";
    }

  }


  function revealGameAnswer() {

    const item = gameQuestions[currentGameQuestion];

    if (!item) {
      return;
    }

    const answer =
      document.getElementById("gameAnswer");

    const reason =
      document.getElementById("gameReason");

    const revealButton =
      document.getElementById("revealAnswer");

    const nextQuestionButton =
      document.getElementById("nextQuestion");

    if (answer) {
      answer.textContent = item.answer;
      answer.hidden = false;
    }

    if (reason) {
      reason.textContent = item.reason;
      reason.hidden = false;
    }

    if (revealButton) {
      revealButton.hidden = true;
    }

    if (nextQuestionButton) {
      nextQuestionButton.hidden = false;
    }

  }


  function moveToNextQuestion() {

    if (currentGameQuestion >= gameQuestions.length - 1) {
      currentGameQuestion = 0;
    } else {
      currentGameQuestion++;
    }

    displayGameQuestion();

  }


  // ==========================================
  // GALLERY IMAGES
  // ==========================================

  const galleryImages =
    document.querySelectorAll(".gallery-photo img");

  galleryImages.forEach((image) => {

    image.addEventListener("error", () => {

      image.alt = "This photograph could not be loaded.";

      image.style.opacity = "0.4";

    });

  });


  // ==========================================
  // MUSIC
  // ==========================================

  if (birthdayMusic) {

    birthdayMusic.volume = 0.65;

    birthdayMusic.addEventListener("error", () => {

      console.warn(
        "The music could not be loaded. Please check the audio URL or your internet connection."
      );

    });

  }


  // ==========================================
  // REPLAY THE SURPRISE
  // ==========================================

  if (replayButton) {

    replayButton.addEventListener("click", () => {

      clearTimeout(welcomeTimer);

      if (birthdayMusic) {
        birthdayMusic.pause();
        birthdayMusic.currentTime = 0;
      }

      if (mainPage) {
        mainPage.hidden = true;
      }

      if (messageDetail) {
        messageDetail.hidden = true;
      }

      if (messagesSection) {
        messagesSection.hidden = false;
      }

      if (welcomeOverlay) {
        welcomeOverlay.hidden = true;
      }

      if (introPage) {
        introPage.hidden = false;
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // ==========================================
  // INITIAL PAGE STATE
  // ==========================================

  if (introPage) {
    introPage.hidden = false;
  }

  if (welcomeOverlay) {
    welcomeOverlay.hidden = true;
  }

  if (mainPage) {
    mainPage.hidden = true;
  }

  if (messageDetail) {
    messageDetail.hidden = true;
  }

  console.log("Luxury Birthday Website is ready.");

});
