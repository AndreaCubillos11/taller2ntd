/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

  
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


let score = 0;
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

function randomPosition() {
    const x = Math.random() * (gameContainer.offsetWidth - 50);
    const y = Math.random() * (gameContainer.offsetHeight - 50);
    return { x, y };
}

function createSandler() {
    const sandler = document.createElement("img");
    sandler.src = "https://lens-storage.storage.googleapis.com/png/d185c35252414d8f9fe4c7c44398d1da";
    sandler.classList.add("adam-sandler");
    const position = randomPosition();
    sandler.style.position = "absolute"; 
    sandler.style.left = position.x + "px";
    sandler.style.top = position.y + "px";
    sandler.style.width = "50px";
    sandler.style.height = "50px";
    sandler.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = "Puntaje: " + score;
        sandler.remove();
    });
    gameContainer.appendChild(sandler);
}

const intervalId = setInterval(createSandler, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    alert("¡Juego terminado! Tu puntaje: " + score);
    document.getElementById('myModal').style.display = "block";
}, 20000);

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
        restartGame();
    }
}

document.getElementById('openModalButton').onclick = function() {
    document.getElementById('myModal').style.display = "block";
    restartGame();
}

function restartGame() {
    score = 0;
    scoreDisplay.textContent = "Puntaje: " + score;
    const sandlerElements = document.querySelectorAll('.adam-sandler');
    sandlerElements.forEach(element => {
        element.remove();
    });
    const restartIntervalId = setInterval(createSandler, 1000);
    setTimeout(() => {
        clearInterval(restartIntervalId);
        alert("¡Juego terminado! Tu puntaje es: " + score);
        document.getElementById('myModal').style.display = "block";
    }, 20000);
}

