function changeLanguage(num) {
  if (num == 1) {
    $("#langInformation").text("ინფორმაცია").removeClass("#eng");
    $("#langGovernors").text("მართვის ორგანოები").removeClass("#eng");
    $("#langLearning").text("სწავლება").removeClass("#eng");
    $("#langScience").text("მეცნიერება").removeClass("#eng");
    $("#langFaculty").text("ფაკულტეტები").removeClass("#eng");
    $("#langLibrary").text("ბიბლიოთეკა").removeClass("#eng");
    //
    $("#langMainNews").text("მთავარი სიახლეები").removeClass("#eng");
    $("#langBachelor").text("ბაკალავრი").removeClass("#eng");
    $("#langMaster").text("მაგისტრატურა").removeClass("#eng");
    $("#langStudentLife").text("სტუდენტური ცხოვრება").removeClass("#eng");
    $("#langSelfGoverment").text("თვითმმართველობა").removeClass("#eng");
  }
  if (num == 2) {
    $("#langInformation").text("Information").addClass("#eng");
    $("#langGovernors").text("Governors").addClass("#eng");
    $("#langLearning").text("Learning").addClass("#eng");
    $("#langScience").text("Science").addClass("#eng");
    $("#langFaculty").text("Faculty").addClass("#eng");
    $("#langLibrary").text("Library").addClass("#eng");
    //
    $("#langMainNews").text("Main News").addClass("#eng");
    $("#langBachelor").text("Bachelor").addClass("#eng");
    $("#langMaster").text("Master's degree").addClass("#eng");
    $("#langStudentLife").text("Student life").addClass("#eng");
    $("#langSelfGoverment").text("Self-government").addClass("#eng");
  }
}

function AnimateRotate(angle) {
  var $elem = $(".toggleMenu i");
  $({ deg: 0 }).animate(
    { deg: angle },
    {
      duration: 2000,
      step: function (now) {
        $elem.css({
          transform: "rotate(" + now + "deg)",
        });
      },
    }
  );
}

$(document).ready(function () {
  // Animations
  $(".firstNavigation").hide().fadeIn(600);
  $(".secondNavigation").hide().fadeIn(600);
  // Language
  let Language = localStorage.getItem("Language");
  if (!Language) {
    localStorage.setItem("Language", 1);
    $(".navContent a").removeClass("activeLanguage");
    $("#geo").addClass("activeLanguage");
    changeLanguage(localStorage.getItem("Language"));
  }
  if (Language == 1) {
    $(".navContent a").removeClass("activeLanguage");
    $("#geo").addClass("activeLanguage");
    changeLanguage(localStorage.getItem("Language"));
  }
  if (Language == 2) {
    $(".navContent a").removeClass("activeLanguage");
    $("#eng").addClass("activeLanguage");
    changeLanguage(localStorage.getItem("Language"));
  }
  // Click
  $("#eng").click(function (e) {
    e.preventDefault();
    $(".navContent a").removeClass("activeLanguage");
    $("#eng").addClass("activeLanguage");
    localStorage.setItem("Language", 2);
    changeLanguage(localStorage.getItem("Language"));
  });
  $("#geo").click(function (e) {
    e.preventDefault();
    $(".navContent a").removeClass("activeLanguage");
    $("#geo").addClass("activeLanguage");
    localStorage.setItem("Language", 1);
    changeLanguage(localStorage.getItem("Language"));
  });
  // Responsive Menu
  $(".toggleMenu").click(function (e) {
    e.preventDefault();
    $(".secondNavigation").toggleClass("navigationActive");
    $(".toggleMenu i").toggleClass("fa-xmark");
    AnimateRotate(360);
  });
});
