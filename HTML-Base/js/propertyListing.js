$(document).ready(function () {
  $("#sortbyCategory").slick({
    //infinite: true,
    speed: 300,
    slidesToShow: 1,
    //centerMode: true,
    variableWidth: true,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-narrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-narrow-right"></i></button>',
  });

  $("#fiterboxSwitch").on("click", function () {
    $(".filterbox").toggleClass("is-open");
  });

  $("#priceRangeSlider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 100000,
    from: 20000,
    to: 60000,
    prefix: "₹",
    prettify_enabled: true,
    prettify_separator: ",",
    onStart: function (data) {
      var valueText = data.from_pretty + "-" + data.to_pretty;
      $(data.input).next(".range-slider-values").html(valueText);
    },
    onChange: function (data) {
      var valueText = data.from_pretty + "-" + data.to_pretty;
      $(data.input).next(".range-slider-values").html(valueText);
    },
  });

  $("#areaRangeSlider").ionRangeSlider({
    type: "double",
    min: 200,
    max: 10000,
    from: 1000,
    to: 4000,
    postfix: "sq.ft",
    prettify_enabled: true,
    prettify_separator: ",",
    onStart: function (data) {
      var valueText = data.from_pretty + "-" + data.to_pretty;
      $(data.input).next(".range-slider-values").html(valueText);
    },
    onChange: function (data) {
      var valueText = data.from_pretty + "-" + data.to_pretty;
      $(data.input).next(".range-slider-values").html(valueText);
    },
  });

  $(".filterbox").stickit({
    top: 120,
    screenMinWidth: 1183,
  });
});
