'use strict';
// slider
document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        const slidesContainer = document.querySelector(".slides");
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateElips();
    }


    function updateElips() {
        const elips = document.querySelectorAll('.elip');
        for (let i = 0; i < elips.length; i++) {
            elips[i].className = elips[i].className.replace(' active', '');
        }
        elips[currentSlide].className += ' active';
    }

    updateElips();

    prevButton.onclick = () => changeSlide(-1);
    nextButton.onclick = () => changeSlide(1);
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// вкладкт
function openTab(event, tabName) {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}


// выпадающее меню
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function toggleDropdown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

var acc = document.getElementsByClassName("header__btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}


window.onclick = function (event) {
    if (!event.target.matches('.header__btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



// modal window 3s
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('modal-3s').style.display = 'block';
    }, 1000);
});

document.querySelector('.modal-3s__close').addEventListener('click', function () {
    document.getElementById('modal-3s').style.display = 'none';
});

// modal window при faq
const phoneModal = document.getElementById('phoneModal');
const closeModal = document.getElementById('closeModal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('faq')) {
                phoneModal.style.display = 'block';
            }
        }
    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector('.faq'));


closeModal.addEventListener('click', () => {
    phoneModal.style.display = 'none';
});