var quizE = {
    user: "e-oncología",
    questions: [
      {
        text: "It is the most efficient screening delivery system in countries or settings with a publicly-funded healthcare system. Organized screening ensures high and equitable coverage, as well as high quality of the processes involved. This implies implementing an information system that identifies all individuals at risk for the disease and instituting a call-recall system to reach all members of the target age group.",
        responses: [
          { text: "Organized screening", correct: true },
          { text: "Opportunistic screening"},
        ],
      },
      {
        text: "It tends to reach younger women at lower risk, for example those attending antenatal, child health and family planning services.",
        responses: [
          { text: "Organized screening" },
          { text: "Opportunistic screening", correct: true },
        ],
      },
      {
        text: "It tends to be inefficient, though when applied with full adherence to professional guidelines it can also achieve a high reduction in disease incidence and mortality.",
        responses: [
          { text: "Organized screening" },
          { text: "Opportunistic screening", correct: true },
        ],
      },
      {
        text: "It is generally accepted as more cost-effective than opportunistic screening, making better use of available resources and ensuring that the greatest number of women benefit.",
        responses: [
          { text: "Organized screening", correct: true  },
          { text: "Opportunistic screening"},
        ],
      },
    ],
  },
  userResponseSkelaton = Array(quizE.questions.length).fill(null);

var appE = new Vue({
  el: "#appE",
  data: {
    quizE: quizE,
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
      this.userResponses = Array(this.quizE.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quizE.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quizE.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quizE.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quizE.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
