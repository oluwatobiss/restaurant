import {createElement, appendObjects} from "./aggregator.js";

const yummySpanEle = createElement("span");
appendObjects(yummySpanEle, 1, "yummy");

const foodsSpanEle = createElement("span");
appendObjects(foodsSpanEle, 1, "Foods");

const logoAnchorEle = createElement("a", {href: "#", id: "logo"});
appendObjects(logoAnchorEle, 2, yummySpanEle, foodsSpanEle);

const navEle = createElement("nav");
const ulEle = createElement("ul", {id: "nav-links"});

const homeLiEle = createElement("li");
const homeAnchorEle = createElement("a", {href: "#", class: "active-page"});
appendObjects(homeAnchorEle, 1, "HOME");
appendObjects(homeLiEle, 1, homeAnchorEle);

const menuLiEle = createElement("li");
const menuAnchorEle = createElement("a", {href: "#"});
appendObjects(menuAnchorEle, 1, "MENU");
appendObjects(menuLiEle, 1, menuAnchorEle);

const aboutLiEle = createElement("li");
const aboutAnchorEle = createElement("a", {href: "#"});
appendObjects(aboutAnchorEle, 1, "ABOUT");
appendObjects(aboutLiEle, 1, aboutAnchorEle);

const contactLiEle = createElement("li");
const contactAnchorEle = createElement("a", {href: "#"});
appendObjects(contactAnchorEle, 1, "CONTACT");
appendObjects(contactLiEle, 1, contactAnchorEle);

appendObjects(ulEle, 4, homeLiEle, menuLiEle, aboutLiEle, contactLiEle);
appendObjects(navEle, 1, ulEle);

const headerEle = createElement("header", {id: "nav-header"});
appendObjects(headerEle, 2, logoAnchorEle, navEle);

export default headerEle;