document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menu = document.getElementById("menu");

    // Abrir o menu
    menuBtn.addEventListener("click", function () {
        menu.classList.add("active");
    });

    // Fechar o menu
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    // Fechar o menu ao clicar fora dele
    menu.addEventListener("click", function (event) {
        if (event.target === menu) {
            menu.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll("#menu ul li a");

    // Abrir o menu
    menuBtn.addEventListener("click", function () {
        menu.classList.add("active");
    });

    // Fechar o menu
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    // Fechar ao clicar fora do menu
    menu.addEventListener("click", function (event) {
        if (event.target === menu) {
            menu.classList.remove("active");
        }
    });

    // Fechar o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});