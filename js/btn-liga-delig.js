const toggle_btn = document.querySelector(".toggle-btn");
const servicesBoxes = document.querySelectorAll(".services-box"); 
const portfolio = document.querySelectorAll(".portfolio");// Seleciona todos os elementos com essa classe
const portfolioLayer = document.querySelectorAll(".txt-portfolio");// Seleciona todos os elementos com essa classe
const about = document.querySelectorAll(".about");// Seleciona todos os elementos com essa classe
const footer = document.querySelector(".footer");

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "var(--bg-color-03)";
        document.body.style.color = "var(--text-color-04)";
        toggle_btn.classList.replace("uil-moon", "uil-sun");

        // Altera o background de todas as services-box
        servicesBoxes.forEach(box => {
            box.style.backgroundColor = "var(--bg-color-03)";
        });

        portfolio.forEach(box => {
            box.style.backgroundColor = "var(--bg-color-03)";
        });

        portfolioLayer.forEach(box => {
            box.style.color = "var(--bg-color-03)";
        });

        about.forEach(box => {
            box.style.backgroundColor = "var(--bg-color-03)";
        });

        footer.style.color = "var(--bg-color-03)";

    } else {
        document.body.classList.remove("dark");
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        toggle_btn.classList.replace("uil-sun", "uil-moon");

        // Reseta o background de todas as services-box
        servicesBoxes.forEach(box => {
            box.style.backgroundColor = "";
        });

        portfolio.forEach(box => {
            box.style.backgroundColor = "";
        });

        portfolioLayer.forEach(box => {
            box.style.backgroundColor = "";
        });
        
        about.forEach(box => {
            box.style.backgroundColor = "";
        });

        footer.style.color = "";
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});
