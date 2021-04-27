var quiz = {
    user: "e-oncología",
    questions: [
      {
        text: "¿Cuál es la respuesta correcta?",
        responses: [
          { text: "Esta no es correcta" },
          { text: "Esta sí es correcta", correct: true },
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
        ],
      },

      {
        text: "¿Cuál es la respuesta correcta?",
        responses: [
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
          { text: "Esta sí es correcta", correct: true },
          { text: "Esta no es correcta" },
        ],
      },

      {
        text: "¿Cuál es la respuesta correcta?",
        responses: [
          { text: "Esta sí es correcta", correct: true },
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
        ],
      },

      {
        text: "¿Cuál es la respuesta correcta?",
        responses: [
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
          { text: "Esta sí es correcta", correct: true },
          { text: "Esta no es correcta" },
        ],
      },

      {
        text: "¿Cuál es la respuesta correcta?",
        responses: [
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
          { text: "Esta no es correcta" },
          { text: "Esta sí es correcta", correct: true },
        ],
      },
    ],
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
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
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
