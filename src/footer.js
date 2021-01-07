import {shared} from "./aggregator.js";

const footerAreaContent = (() => {
    const anchorEle = shared.createElement("a", ["Created by Oluwatobi Sofela"], {href: "https://www.codesweetly.com/"});
    const footerEle = shared.createElement("footer", [anchorEle]);
    return footerEle;
})();

export default footerAreaContent;