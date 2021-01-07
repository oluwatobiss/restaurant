import {header, homepage, menuPage, aboutPage, contactPage, footer} from "./aggregator.js";

const contentDiv = document.getElementById("content");
contentDiv.append(header, homepage, footer);

/*======= Listeners =======*/
const logoLink = Array.from(document.querySelector("#logo").children);
logoLink.forEach(i => i.addEventListener("click", showHomePage));

const navLinks = Array.from(document.querySelector("#nav-links").children);
navLinks.forEach(i => i.addEventListener("click", showThisPage));

const orderNowBtn = document.querySelector("button");
orderNowBtn.addEventListener("click", showMenuPage);

function showHomePage() {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-page")
    });
    navLinks[0].children[0].classList.add("active-page");
    contentDiv.children[1].replaceWith(homepage);
}
function showThisPage() {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-page")
    });

    switch (this.innerText) {
        case "HOME":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(homepage);
            break;
        case "MENU":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(menuPage);
            break;
        case "ABOUT":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(aboutPage);
            break;
        case "CONTACT":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(contactPage);
    }
}
function showMenuPage() {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-page")
    });
    navLinks[1].children[0].classList.add("active-page");
    contentDiv.children[1].replaceWith(menuPage);
}