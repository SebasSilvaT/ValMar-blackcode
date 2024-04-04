
const mar = document.querySelector("#mar");
const val = document.querySelector("#val");
const dosMeses = document.querySelector("#dosMeses");
const tresMeses = document.querySelector("#tresMeses");
const cuatroMeses = document.querySelector("#cuatroMeses");
const video = document.querySelector("#video");
const cincoMeses = document.querySelector("#cincoMeses");
const video2 = document.querySelector("#video2");

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

/* Menu 4 Meses */
cuatroMeses.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".cuatroMeses");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* SAN VALENTIN */
video.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".video");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* Menu 5 Meses */
cincoMeses.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".cincoMeses");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* 6 meses */
video2.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".video2");
    sectionS.scrollIntoView({behavior: "smooth"});
})