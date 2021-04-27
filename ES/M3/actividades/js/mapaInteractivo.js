function precarica(img) {
  $(img).each(function () {
    $("<img/>")[0].src = this;
  });
}
precarica([
  "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png",
  "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png",
  "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png",
  "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png",
  "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png",
]);

/*******jQuery for external titulo*********/

jQuery(document).ready(function () {
  $(".titulo-blue").mouseout(function () {
    $("#map").attr(
      "src",
      "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
    );
  }),
    $(".titulo-blue").mouseover(function () {
      $("#map").attr(
        "src",
        "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png"
      );
    });
  $(".titulo-red").mouseout(function () {
    $("#map").attr(
      "src",
      "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
    );
  }),
    $(".titulo-red").mouseover(function () {
      $("#map").attr(
        "src",
        "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png"
      );
    });
  $(".titulo-green").mouseout(function () {
    $("#map").attr(
      "src",
      "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
    );
  }),
    $(".titulo-green").mouseover(function () {
      $("#map").attr(
        "src",
        "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png"
      );
    });
  $(".titulo-yellow").mouseout(function () {
    $("#map").attr(
      "src",
      "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
    );
  }),
    $(".titulo-yellow").mouseover(function () {
      $("#map").attr(
        "src",
        "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png"
      );
    });
  $(".titulo-pink").mouseout(function () {
    $("#map").attr(
      "src",
      "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
    );
  }),
    $(".titulo-pink").mouseover(function () {
      $("#map").attr(
        "src",
        "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png"
      );
    });
});
