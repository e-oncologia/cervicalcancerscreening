var quiz = {
    user: "e-oncología",
    questions: [
      {
        text: "¿Cuál de las siguientes afirmaciones no es cierta para un registro de cáncer poblacional?",
        responses: [
          { text: "Implica la recogida de información sobre todos los casos nuevos de cáncer que se producen en una población bien definida." },
          { text: "Describe la carga de cáncer y determina los patrones de cáncer en diferentes poblaciones." },
          { text: "Ayuda a mejorar la atención de los pacientes en centros oncológicos.", correct: true },
          { text: "Ayuda en la planificación, monitorización y evaluación de programas de control del cáncer." },
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
