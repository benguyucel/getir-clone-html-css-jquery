$(document).ready(function () {
 
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
  });
  showLangItem();
  navBarLeftClickEvent();
  updateButton();
  phoheCodeDropDown();
  selectPhoneCode();
  showRegisterItem();
  registerNavButton();
});

function navBarLeftClickEvent() {
  $(".nav-group.nav-left .nav-item").click(function () {
    $(".nav-group.nav-left .nav-item").removeClass("active");
    $(this).addClass("active");
  });
}

function updateButton() {
  $(".ch-lang").change(function () {
    console.log(this);
    var attr = $(this).attr("checked");
    if ((typeof attr !== "undefined") & (attr !== false)) {
      $(".update-button").removeClass("active").addClass("passive");
    } else {
      $(".update-button").addClass("active").removeClass("passive");
    }
  });
  $(".update-button").click(function () {
    if ($(this).hasClass("active")) {
      ///
    }
  });
}

function showLangItem() {
  $(".nav-right .choose-lang,.footer-bottom .choose-lang").on("click", function () {
    $(".user-actions .language,.shadow-bg-all").css("display", "block");
  });
  $(".shadow-bg-all,.user-actions .exit-btn-bg").click(
    function () {
      
      $(".language").css("display", "none");
      $(".shadow-bg-all")
        .css("display", "none")
        .siblings(".language")
        .css("display:none");
    }
  );
}
function showRegisterItem() {
  $(".nav-right .register-button").on("click", function () {
    $(".login-or-register-container,.shadow-bg-all").css(
      "display",
      "block"
    );
  });
  $(".shadow-bg-all,.login-or-register-container .exit-btn-bg").click(function(){
    $(".user-actions .login-or-register-container,.shadow-bg-all").css(
      "display",
      "none"
    );
  })
  
}

function phoheCodeDropDown() {
  $(".phones-drowdown").click(function () {
    if (!$(".phones-drowdown .arrow").hasClass("up")) {
      $(".phones-drowdown .arrow").addClass("up");
    } else {
      $(".phones-drowdown .arrow").removeClass("up");
    }
    if ($(".phones-drowdown .phone-dropdown-content").hasClass("hide")) {
      $(this).addClass("border");
      $(".phones-drowdown .phone-dropdown-content")
        .removeClass("hide")
        .addClass("show");
    } else {
      $(".phones-drowdown .phone-dropdown-content")
        .removeClass("show")
        .addClass("hide");
      $(this).removeClass("border");
    }
  });
}

function selectPhoneCode() {
  $(".phone-dropdown-content .dropdown-item").click(function () {
    var classList = $(".phones-drowdown>.flag").attr("class").split(/\s+/);
    $.each(classList, function (index, item) {
      if (item !== "flag") {
        $(".phones-drowdown>.flag").removeClass(item);
      }
    });
    var flagAttr = this.children[0].getAttribute("flag-attr");
    var flagCodeAttr = this.children[1].getAttribute("flag-code-attr");
    $(".phones-drowdown>.flag").addClass(flagAttr);
    $(".phones-drowdown>.code").html(flagCodeAttr);
  });
}


function registerNavButton(){
  $(".nav-right .registter-nav-button").on("click",function(){
      $(".register-container,.shadow-bg-all").css("display","block")
  })
  $(".shadow-bg-all, .register-container .exit-btn-bg").click(function(){
    $(".register-container,.shadow-bg-all").css(
      "display",
      "none"
    );
  })
}

// $(".nav-right .choose-lang").on("click", function () {
//   $(".user-actions .language,.shadow-bg-all").css("display", "block");
// });