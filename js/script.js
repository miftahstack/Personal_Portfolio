// CounterUp
let counter01= document.getElementById('counter01')
let counter02= document.getElementById('counter02')
let counter03= document.getElementById('counter03')

let count=0

function countjs (){
count++
counter01.innerText= count

}


// CounterUp


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


