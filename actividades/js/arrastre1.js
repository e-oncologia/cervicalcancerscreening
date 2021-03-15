//initialize the quiz options
var answers = [];
var rightAnswers = ["eiusmod", "lorem", "incididunt", "nostrud"];
var id = 1;
var bgColor = "#5ca626";
var $target = $(".answers ." + id + "");

$(".quiz-wrapper")
  .find("li.option")
  .each(function (i) {
    var $this = $(this);
    var answerValue = $this.data("target");
    var answer;
    var labelText = $this.html();
    $target.css("background", bgColor);

    $this.draggable({
      revert: "invalid",
      containment: ".quiz-wrapper",
      start: function (event, ui) {
        answer = $this.text();
        drop();
      },
    });

    function drop() {
      if ($target.length > 0) {
        $target.droppable({
          drop: function (event, ui) {
            $this.draggable("destroy");
            $target.droppable("destroy");
            $this.html("&nbsp;");
            $target.html(answer);
            answers[id - 1] = answer;
            $target.css("background", "none");
            id++;
            nextDrag();
            if (id > 4) end();
          },
        });
      }
    }
    function nextDrag() {
      $target = $(".answers ." + id + "");
      $target.css("background", bgColor);
    }
  });

function end() {
  $(".lightbox-bg").show();
  if (correction()) $(".status.confirm").show();
  else {
    $(".status.deny").show();
    $.ajax({
      url: "",
      context: document.body,
      success: function (s, x) {
        $(this).html(s);
      },
    });
  }

  $(".lightbox-bg").click(function () {
    $(".lightbox-bg").hide();
    $(".status.deny").hide();
    $(".status.confirm").hide();
    $(".lightbox-bg").unbind("click");
  });
}

function correction() {
  var reponses = 0;
  for (var cpt = 0; cpt < 4; cpt++) {
    if (answers[cpt] == rightAnswers[cpt]) reponses++;
  }
  if (reponses == 4) return true;
  else return false;
}
