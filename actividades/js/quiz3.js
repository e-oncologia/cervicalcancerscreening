var quizC = {
    user: "e-oncología",
    questions: [
      {
        text: "PREGUNTA",
        responses: [
          { text: "FALTAN LAS OPCIONES" },
          { text: "FALTAN LAS OPCIONES", correct: true },
          { text: "FALTAN LAS OPCIONES" },
          { text: "FALTAN LAS OPCIONES" },
        ],
      },

    ],
  },
  userResponseSkelaton = Array(quizC.questions.length).fill(null);

var appC = new Vue({
  el: "#appC",
  data: {
    quizC: quizC,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
  },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    },
  },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quizC.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quizC.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quizC.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quizC.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quizC.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
