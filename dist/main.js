/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const aboutPageContent = (() => {
    const aboutDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.";
    const aboutHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["About Us"]);
    const aboutPara = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("p", [aboutDummyText]);
    const aboutSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [aboutHeader, aboutPara], {id: "about"});
    return aboutSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPageContent);

/***/ }),

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* reexport safe */ _shared_js__WEBPACK_IMPORTED_MODULE_0__.shared,
/* harmony export */   "header": () => /* reexport safe */ _header_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "homepage": () => /* reexport safe */ _homepage__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "menuPage": () => /* reexport safe */ _menu_page__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "aboutPage": () => /* reexport safe */ _about_page__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "contactPage": () => /* reexport safe */ _contact_page__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "footer": () => /* reexport safe */ _footer_js__WEBPACK_IMPORTED_MODULE_6__.default
/* harmony export */ });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "./src/shared.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page */ "./src/about-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");








/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const contactPageContent = (() => {
    const contactHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["Contact Us"]);
    const mapImage = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "map-image"});
    
    function createContactInfoPara(HTMLCode, contactText) {
        const contactInfoSymbolSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [HTMLCode], {class: "contact-symbol"});
        const contactInfoPara = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("p", [contactInfoSymbolSpan, contactText], {class: "contact-info"});
        return contactInfoPara;
    }
    const address = createContactInfoPara("\u{1F588}", " Nile River, River, Northeastern Africa");
    const email = createContactInfoPara("\u{1F582}", " contact@yummyfoods.com");
    const phone = createContactInfoPara("\u{260F}", " +012 34 5678 9012");
    
    const contactInfoDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [address, email, phone]);
    const contactDetailsArticle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("article", [mapImage, contactInfoDiv], {id: "contact-details"});
    const contactSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [contactHeader, contactDetailsArticle], {id: "contact"});
    return contactSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageContent);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const footerAreaContent = (() => {
    const anchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", ["Created by Oluwatobi Sofela"], {href: "https://www.codesweetly.com/"});
    const footerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("footer", [anchorEle]);
    return footerEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerAreaContent);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const headerAreaContent = (() => {
    const yummySpanEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["yummy"]);
    const foodsSpanEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["Foods"]);
    const logoAnchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [yummySpanEle, foodsSpanEle], {href: "#", id: "logo"});
    const ulEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("ul", null, {id: "nav-links"});

    const menus = ["HOME", "MENU", "ABOUT", "CONTACT"];
    menus.forEach(createMenuLink);

    function createMenuLink(i) {
        const liEle = document.createElement("li");
        const anchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [i], {href: "#"});
        if (i === "HOME") {anchorEle.classList.add("active-page")};
        liEle.append(anchorEle);
        ulEle.append(liEle);
    }
    const navEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("nav", [ulEle]);
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [logoAnchorEle, navEle], {id: "nav-header"});
    return headerEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerAreaContent);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const homePageContent = (() => {
    const header = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["Welcome!"]);
    const introText = "Here at yummyFoods, you will find varieties of deliciously made foods to satisfy your appetite.";
    const paragraph = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("p", [introText]);
    const button = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Order Now"], {type: "button"});
    const homeSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [header, paragraph, button], {id: "homepage"});
    return homeSection;
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageContent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const contentDiv = document.getElementById("content");
contentDiv.append(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.header, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.homepage, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.footer);

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
    contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.homepage);
}
function showThisPage() {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-page")
    });

    switch (this.innerText) {
        case "HOME":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.homepage);
            break;
        case "MENU":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.menuPage);
            break;
        case "ABOUT":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage);
            break;
        case "CONTACT":
            this.children[0].classList.add("active-page");
            contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.contactPage);
    }
}
function showMenuPage() {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-page")
    });
    navLinks[1].children[0].classList.add("active-page");
    contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.menuPage);
}

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const menuPageContent = (() => {
    const menuDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";
    function createMenuPriceArticle(menu, price, descrip) {
        const menuSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [menu]);
        const dashSpan = document.createElement("span");
        const priceSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [price]);
        const menuPriceDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [menuSpan, dashSpan, priceSpan], {class: "menu-and-price"});
        const menuDescripPara = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("p", [descrip], {class: "menu-description"});
        const menuPriceArticle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("article", [menuPriceDiv, menuDescripPara]);
        return menuPriceArticle;
    }
    /*======= Main Menu =======*/
    const mainMenuHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["Main Menu"]);
    const specialFriedRice = createMenuPriceArticle("Special Fried Rice", "$15", menuDummyText);
    const sweetSourChicMixVeg = createMenuPriceArticle("Sweet and Sour Chicken with Mix Vegetables", "$18.50", menuDummyText);
    const spagBeefCurry = createMenuPriceArticle("Spaghetti with Beef Curry", "$7.55", menuDummyText);
    const mainMenusArticle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("article", [mainMenuHeader, specialFriedRice, sweetSourChicMixVeg, spagBeefCurry], {class: "menus"});
    /*======= Dessert Menu =======*/
    const dessertMenuHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["Dessert"]);
    const friPlaBaIceCr = createMenuPriceArticle("Fried Plantain with Banana Ice Cream", "$7.15", menuDummyText);
    const coIceCr = createMenuPriceArticle("Coconut Ice Cream", "$4.50", menuDummyText);
    const choIceCrTop = createMenuPriceArticle("Chocolate Ice Cream with Toppings", "$5.99", menuDummyText);
    const dessertMenusArticle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("article", [dessertMenuHeader, friPlaBaIceCr, coIceCr, choIceCrTop], {class: "menus"});
    /*======= Soups Menu =======*/
    const soupsMenuHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("h2", ["Soups"]);
    const chicNooSoup = createMenuPriceArticle("Chicken Noodles Soup", "$3.35", menuDummyText);
    const sweFiPepSoup = createMenuPriceArticle("Sweet Fish Pepper Soup", "$5", menuDummyText);
    const specialSoup = createMenuPriceArticle("Special Soup", "$10.50", menuDummyText);
    const soupsMenusArticle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("article", [soupsMenuHeader, chicNooSoup, sweFiPepSoup, specialSoup], {class: "menus"});
    /*==========================*/
    const hr = () => document.createElement("hr");
    const menuSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [mainMenusArticle, hr(), dessertMenusArticle, hr(), soupsMenusArticle], {id: "menu-page"});
    return menuSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageContent);

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* binding */ shared
/* harmony export */ });
const shared = (() => {
    return {
        createElement: (eleType, node, attr) => {
            const element = document.createElement(eleType);
            if (node) {node.forEach(i => element.append(i));}
            if (attr) {
                for (let key in attr) {element.setAttribute(key, attr[key]);}
            }
            return element;
        }
    }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map