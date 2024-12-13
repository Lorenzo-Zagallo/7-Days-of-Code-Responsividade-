// function trocaCor() {
//     if(document.body.style.background === "white") {
//         document.body.style.background = "radial-gradient(circle at bottom left, black, 5%, transparent)";
//     } else {
//         document.body.style.background = "white";
//     }
// }

const menuSuspenso = document.getElementById("menu-suspenso")

function moveComponent() {
    if(menuSuspenso.style.opacity == '0') {
        menuSuspenso.style.opacity = '1'
        menuSuspenso.style.transform = 'scale(1)'
    } else {
        menuSuspenso.style.opacity = '0'
        menuSuspenso.style.transform = 'scale(0)'
    }
}