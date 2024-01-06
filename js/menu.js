
const mar = document.querySelector("#mar");
const val = document.querySelector("#val");
const dosMeses = document.querySelector("#dosMeses");
const tresMeses = document.querySelector("#tresMeses");

/* Menu Portafolio */
mar.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".mar");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/* Menu Services */
val.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".val");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* Menu 2 Meses */
dosMeses.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".dosMeses");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* Menu 3 Meses */
tresMeses.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".tresMeses");
    sectionS.scrollIntoView({behavior: "smooth"});
})