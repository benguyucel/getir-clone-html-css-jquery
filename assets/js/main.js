langItem();
loginItems();
showRegisters();


navLeft();
updateLangButton();
clickUpdateButton();
phoneCodeDropDown("user-actions");
phoneCodeDropDown("wrapper-front-container .right");
selectPhoneCode();
selectPhoneCode("wrapper-front-container .right")

function navLeft() {
    var navLeft = document.querySelector(".nav-group.nav-left");
    var navLeftItem = document.querySelectorAll(".nav-group.nav-left .nav-item");
    navLeftItem.forEach((element, index) => {
        element.addEventListener("click", function (el) {
            RemoveActiveClass();
            element.classList.add("active");
            console.log(el);
        })
    });

    function RemoveActiveClass() {
        navLeftItem.forEach(element => {
            element.classList.remove("active");
        });
    }
}
// lang items
let langItems = document.querySelectorAll(".user-actions .language,.shadow-bg-all");

function showLangItem() {
    langItems.forEach(element => {
        element.style.display = "block";
    });
}

function hideLangItems() {
    langItems.forEach(element => {
        element.style.display = "none";
    });
}

function langItem() {
    var langItem = document.querySelector(".nav-right .choose-lang,.footer-bottom .choose-lang");
    var exitItem = document.querySelectorAll(".shadow-bg-all,.user-actions .language .exit-btn-bg");
    let footerItem = document.querySelector(".footer-bottom .choose-lang");
    langItem.addEventListener("click", function () {
        showLangItem();
    })

    exitItem.forEach((element) => {
        element.addEventListener("click", function () {
            hideLangItems();
        })

    })
    footerItem.addEventListener("click", function () {
        showLangItem();
    })

}



// lang items
//Updata lang button
function updateLangButton() {
    var langItem = document.querySelector(".user-actions-lang-form");
    var langItems = document.querySelectorAll(".ch-lang");
    var updateButton = document.querySelector(".language .update-button");
    langItems.forEach(element => {
        if (element.hasAttribute("checked")) {
            attrID = element.getAttribute("id");
            updateButton.setAttribute("targetId", attrID);
            updateButton.setAttribute("disabled", true)
        }


    });
    langItem.addEventListener("change", function (el) {
        el.preventDefault();
        if (updateButton.getAttribute("targetId") == el.target.getAttribute("id")) {
            updateButton.classList.remove("active");
            updateButton.classList.add("passive");
            updateButton.setAttribute("disabled", "disabled")

        } else {
            updateButton.classList.add("active");
            updateButton.classList.remove("passive");
            updateButton.removeAttribute("disabled")
        }

    })
}

function clickUpdateButton() {
    var updateButton = document.querySelector(".language .update-button");
    updateButton.addEventListener("click", function () {

    })

}

//Login Items
let loginItem = document.querySelectorAll(".user-actions .login-or-register-container,.shadow-bg-all");

function showLogin() {
    loginItem.forEach(element => {
        element.style.display = "block"
    });
}

function hideLogin() {
    loginItem.forEach(element => {
        element.style.display = "none"
    });
}

function loginItems() {
    var loginButton = document.querySelector(".nav-right .register-button");
    var exitItem = document.querySelectorAll(".user-actions .login-or-register-container .exit-btn-bg,.shadow-bg-all");
    var registerItem = document.querySelector(".login-or-register-container .footer a");
    exitItem.forEach(element => {
        element.addEventListener("click", function () {
            hideLogin();
        });
    });
    loginButton.addEventListener("click",
        function () {
            showLogin();
        })
            registerItem.addEventListener("click",
            function(){
                        hideLogin();
                        showRegister();
            })
}
//Login Items

// register items
let registerItem = document.querySelectorAll(".user-actions .register-container,.shadow-bg-all");

function showRegister() {
    registerItem.forEach(element => {
        element.style.display = "block";
    });
}

function hideRegister() {
    registerItem.forEach(element => {
        element.style.display = "none";
    });
}

function showRegisters() {
    var registerButton = document.querySelector(".nav-right .registter-nav-button");
    var exitItem = document.querySelectorAll(".user-actions .register-container .exit-btn-bg,.shadow-bg-all");
    registerButton.addEventListener("click", function () {
        showRegister();
    })
    exitItem.forEach(element => {
        element.addEventListener("click", function () {
            hideRegister();
        })
    });
}

// register items

function phoneCodeDropDown(clasList) {
    const dropDownItem = document.querySelector("." + clasList + " .phones-drowdown");
    const dropDownArrow = document.querySelector("." + clasList + " .phones-drowdown .arrow");
    let dropdownContent = document.querySelector("." + clasList + " .phones-drowdown .phone-dropdown-content");

    dropDownItem.addEventListener("click", function (el) {

        if (!dropDownArrow.classList.contains("up")) {
            dropDownArrow.classList.add("up");
            dropDownArrow.classList.remove("down");
        } else {
            dropDownArrow.classList.remove("up");
            dropDownArrow.classList.add("down");

        }
        if (dropdownContent.classList.contains("hide")) {
            dropdownContent.classList.remove("hide");
            dropdownContent.classList.add("show");
        } else {
            dropdownContent.classList.add("hide");
            dropdownContent.classList.remove("show");
        }
    })

}

function selectPhoneCode(classList = "user-actions") {
    const dropDownItems = document.querySelectorAll("." + classList + " .phone-dropdown-content .dropdown-item");
    const choosenFlag = document.querySelector("." + classList + " .phones-drowdown>.flag");

    dropDownItems.forEach(element => {
        element.addEventListener("click", function () {
            if (!(element.children[0].classList[1] == choosenFlag.classList[1])) {
                choosenFlag.classList.remove(choosenFlag.classList[1]);
                let newFlag = element.children[0].getAttribute("flag-attr");
                choosenFlag.classList.add(newFlag);
                let newCode = element.children[1].getAttribute("flag-code-attr");
                choosenFlag.parentElement.children[1].innerHTML = newCode;
            }
        })
    })
}