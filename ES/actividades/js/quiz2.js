var quizB = {
  user: "e-oncología",
  questions: [
    {
      text: "Para lograr una elevada cobertura de cribado, el programa debe llegar a toda la población diana. Dentro del intervalo de cinco años recomendado en un programa de cribado poblacional con la prueba de VPH, esto significa que las invitaciones deben enviarse a:",
      responses: [
        { text: "Aproximadamente una quinta parte de la población diana cada año.", correct: true },
        { text: "Aproximadamente una quinta parte de la población cribada cada año." },
        { text: "Aproximadamente una quinta parte de la población diana durante 5 años." },
        { text: "Aproximadamente una quinta parte de la población cribada durante 5 años." },
      ],
    },


  ],
},
  userResponseSkelaton = Array(quizB.questions.length).fill(null);

var appB = new Vue({
  el: "#appB",
  data: {
    quizB: quizB,
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
      this.userResponses = Array(this.quizB.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quizB.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quizB.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quizB.questions[i].responses[this.userResponses[i]] !==
          "undefined" &&
          this.quizB.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
