import {shared} from "./aggregator.js";

const homePageContent = (() => {
    const header = shared.createElement("h2", ["Welcome!"]);
    const introText = "Here at yummyFoods, you will find varieties of deliciously made foods to satisfy your appetite.";
    const paragraph = shared.createElement("p", [introText]);
    const button = shared.createElement("button", ["Order Now"], {type: "button"});
    const homeSection = shared.createElement("section", [header, paragraph, button], {id: "homepage"});
    return homeSection;
})()

export default homePageContent;