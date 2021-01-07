import {shared} from "./aggregator.js";

const contactPageContent = (() => {
    const contactHeader = shared.createElement("h2", ["Contact Us"]);
    const mapImage = shared.createElement("div", null, {id: "map-image"});
    
    function createContactInfoPara(HTMLCode, contactText) {
        const contactInfoSymbolSpan = shared.createElement("span", [HTMLCode], {class: "contact-symbol"});
        const contactInfoPara = shared.createElement("p", [contactInfoSymbolSpan, contactText], {class: "contact-info"});
        return contactInfoPara;
    }
    const address = createContactInfoPara("\u{1F588}", " Nile River, River, Northeastern Africa");
    const email = createContactInfoPara("\u{1F582}", " contact@yummyfoods.com");
    const phone = createContactInfoPara("\u{260F}", " +012 34 5678 9012");
    
    const contactInfoDiv = shared.createElement("div", [address, email, phone]);
    const contactDetailsArticle = shared.createElement("article", [mapImage, contactInfoDiv], {id: "contact-details"});
    const contactSection = shared.createElement("section", [contactHeader, contactDetailsArticle], {id: "contact"});
    return contactSection;
})();

export default contactPageContent;