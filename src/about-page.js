import {createElement, appendObjects} from "./aggregator.js";

const aboutDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.";

const aboutHeader = createElement("h2");
appendObjects(aboutHeader, 1, "About Us");

const aboutPara = createElement("p");
appendObjects(aboutPara, 1, aboutDummyText);

const aboutSection = createElement("section", {id: "about"});
appendObjects(aboutSection, 2, aboutHeader, aboutPara);

export default aboutSection;