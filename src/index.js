import {header, homepage, menuPage, aboutPage, contactPage, footer} from "./aggregator.js";

const contentDiv = document.getElementById("content");
contentDiv.append(header, homepage, footer);

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

    if (this.innerText === "HOME") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(homepage);
    } else if (this.innerText === "MENU") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(menuPage);
    } else if (this.innerText === "ABOUT") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(aboutPage);
    } else if (this.innerText === "CONTACT") {
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