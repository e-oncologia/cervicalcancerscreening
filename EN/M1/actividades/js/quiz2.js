var quizB = {
    user: "e-oncología",
    questions: [
      {
        text: "QUESTION",
        responses: [
          { text: "OPTION MISSING" },
          { text: "OPTION MISSING", correct: true },
          { text: "OPTION MISSING" },
          { text: "OPTION MISSING" },
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
