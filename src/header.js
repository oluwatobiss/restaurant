import {shared} from "./aggregator.js";

const headerAreaContent = (() => {
    const yummySpanEle = shared.createElement("span", ["yummy"]);
    const foodsSpanEle = shared.createElement("span", ["Foods"]);
    const logoAnchorEle = shared.createElement("a", [yummySpanEle, foodsSpanEle], {href: "#", id: "logo"});
    const ulEle = shared.createElement("ul", null, {id: "nav-links"});

    const menus = ["HOME", "MENU", "ABOUT", "CONTACT"];
    menus.forEach(createMenuLink);

    function createMenuLink(i) {
        const liEle = document.createElement("li");
        const anchorEle = shared.createElement("a", [i], {href: "#"});
        if (i === "HOME") {anchorEle.classList.add("active-page")};
        liEle.append(anchorEle);
        ulEle.append(liEle);
    }
    const navEle = shared.createElement("nav", [ulEle]);
    const headerEle = shared.createElement("header", [logoAnchorEle, navEle], {id: "nav-header"});
    return headerEle;
})();

export default headerAreaContent;