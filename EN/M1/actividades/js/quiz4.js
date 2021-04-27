var quizD = {
    user: "e-oncología",
    questions: [
      {
        text: "Can you indicate in which group of patients the test performs better to distinguish disease status (i.e. CIN2/3 or worse)?",
        responses: [
          { text: "Screening group" },
          { text: "Diagnosis group", correct: true },
          
        ],
      },

    ],
  },
  userResponseSkelaton = Array(quizD.questions.length).fill(null);

var appD = new Vue({
  el: "#appD",
  data: {
    quizD: quizD,
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
      this.userResponses = Array(this.quizD.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quizD.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quizD.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quizD.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quizD.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
