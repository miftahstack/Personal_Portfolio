//Back to Top
let bactoTop = document.getElementById("bactoTop");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        bactoTop.style.display = "grid";

    } else {
        bactoTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Back to Top
