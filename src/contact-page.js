import {createElement, appendObjects} from "./aggregator.js";

const contactHeader = createElement("h2");
appendObjects(contactHeader, 1, "Contact Us");

const mapImage = createElement("div", {id: "map-image"});

function createContactInfo(HTMLCode, contactText) {
    const contactInfoSymbolSpan = createElement("span", {class: "contact-symbol"});
    appendObjects(contactInfoSymbolSpan, 1, HTMLCode);
    
    const contactInfoPara = createElement("p", {class: "contact-info"});
    appendObjects(contactInfoPara, 2, contactInfoSymbolSpan, contactText)

    return contactInfoPara;
}

const address = createContactInfo("\u{1F588}", " Nile River, River, Northeastern Africa");
const email = createContactInfo("\u{1F582}", " contact@yummyfoods.com");
const phone = createContactInfo("\u{260F}", " +012 34 5678 9012");

const contactInfoDiv = createElement("div");
appendObjects(contactInfoDiv, 3, address, email, phone);

const contactDetailsArticle = createElement("article", {id: "contact-details"});
appendObjects(contactDetailsArticle, 2, mapImage, contactInfoDiv);

const contactSection = createElement("section", {id: "contact"});
appendObjects(contactSection, 2, contactHeader, contactDetailsArticle);

export default contactSection;