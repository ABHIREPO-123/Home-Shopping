// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}



// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

var isClick=true;
$('#mode').click(function (e) { 
    if (isClick) {
        $('body').css({ "--black-color": "#fff", "--white-color": "#000", "--secondary-color": "#fff", "font-family": "'Dosis', sans-serif" });
        $('#foot').css("background-color", "#000");
        $('#dealOfDay').css("background-color", "#333");
        $('.change').css("color", "#fff");
        $("#mode").text($("#mode").text().replace("Dark", "Light"));
        isClick=false;
}

    else{ 
        $('body').css({ "--black-color": "#000", "--white-color": "#fff", "--secondary-color": "#333", "font-family": "'Dosis', sans-serif" });
        $('#foot').css("background-color", "#333");
        $("#mode").text($("#mode").text().replace("Light", "Dark"));
        isClick=true;
    }
});