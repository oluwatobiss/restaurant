import {createElement, appendObjects} from "./aggregator.js";

const header = createElement("h2");
appendObjects(header, 1, "Welcome!");

const paragraph = createElement("p");
appendObjects(paragraph, 1, "Here at yummyFoods, you will find varieties of deliciously made foods to satisfy your appetite.");

const button = createElement("button", {type: "button"});
appendObjects(button, 1, "Order Now");

const homeSection = createElement("section", {id: "homepage"});
appendObjects(homeSection, 3, header, paragraph, button);

export default homeSection;