$(document).ready(function () {
  //   Nav handler
  var waypoint = new Waypoint({
    element: document.getElementById("section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "60px",
  });
  //   End

  //   Button scroll
  $("#btn-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-plans").offset().top },
      1000
    );
  });

  $("#btn-features").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-features").offset().top },
      1000
    );
  });
  //   End

  //   Link scroll
  $("#link-features").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-features").offset().top },
      1000
    );
  });

  $("#link-steps").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-steps").offset().top },
      1000
    );
  });

  $("#link-cities").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-cities").offset().top },
      1000
    );
  });

  $("#link-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section-plans").offset().top },
      1000
    );
  });
  //   End

  //   Animations on scroll
  $("#wp-1").waypoint(
    function (direction) {
      $("#wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $("#wp-2").waypoint(
    function (direction) {
      $("#wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "70%",
    }
  );

  $("#wp-3").waypoint(
    function (direction) {
      $("#wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );
  $("#wp-4").waypoint(
    function (direction) {
      $("#wp-4").addClass("animated pulse");
    },
    {
      offset: "30%",
    }
  );
  //   End

  // Mobile navigation
  $("#mobile-nav-icon").click(function () {
    var nav = $("#main-nav");
    var icon = $("#mobile-nav-icon i");
    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
    }
  });
  // End
});
