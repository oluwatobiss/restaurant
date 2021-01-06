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


const aboutDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.";

const aboutHeader = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(aboutHeader, 1, "About Us");

const aboutPara = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(aboutPara, 1, aboutDummyText);

const aboutSection = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {id: "about"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(aboutSection, 2, aboutHeader, aboutPara);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutSection);

/***/ }),

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* reexport safe */ _shared_js__WEBPACK_IMPORTED_MODULE_0__.createElement,
/* harmony export */   "appendObjects": () => /* reexport safe */ _shared_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects,
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


const contactHeader = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactHeader, 1, "Contact Us");

const mapImage = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {id: "map-image"});

function createContactInfo(HTMLCode, contactText) {
    const contactInfoSymbolSpan = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {class: "contact-symbol"});
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactInfoSymbolSpan, 1, HTMLCode);
    
    const contactInfoPara = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {class: "contact-info"});
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactInfoPara, 2, contactInfoSymbolSpan, contactText)

    return contactInfoPara;
}

const address = createContactInfo("\u{1F588}", " Nile River, River, Northeastern Africa");
const email = createContactInfo("\u{1F582}", " contact@yummyfoods.com");
const phone = createContactInfo("\u{260F}", " +012 34 5678 9012");

const contactInfoDiv = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactInfoDiv, 3, address, email, phone);

const contactDetailsArticle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {id: "contact-details"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactDetailsArticle, 2, mapImage, contactInfoDiv);

const contactSection = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {id: "contact"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactSection, 2, contactHeader, contactDetailsArticle);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSection);

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
const footerEle = document.createElement("footer");
const anchorEle = document.createElement("a");

anchorEle.setAttribute("href", "https://www.codesweetly.com/");
anchorEle.append("Created by Oluwatobi Sofela");

footerEle.appendChild(anchorEle);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerEle);

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


const yummySpanEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(yummySpanEle, 1, "yummy");

const foodsSpanEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(foodsSpanEle, 1, "Foods");

const logoAnchorEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {href: "#", id: "logo"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(logoAnchorEle, 2, yummySpanEle, foodsSpanEle);

const navEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav");
const ulEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {id: "nav-links"});

const homeLiEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li");
const homeAnchorEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {href: "#", class: "active-page"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(homeAnchorEle, 1, "HOME");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(homeLiEle, 1, homeAnchorEle);

const menuLiEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li");
const menuAnchorEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {href: "#"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuAnchorEle, 1, "MENU");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuLiEle, 1, menuAnchorEle);

const aboutLiEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li");
const aboutAnchorEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {href: "#"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(aboutAnchorEle, 1, "ABOUT");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(aboutLiEle, 1, aboutAnchorEle);

const contactLiEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li");
const contactAnchorEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {href: "#"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactAnchorEle, 1, "CONTACT");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(contactLiEle, 1, contactAnchorEle);

(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(ulEle, 4, homeLiEle, menuLiEle, aboutLiEle, contactLiEle);
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(navEle, 1, ulEle);

const headerEle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {id: "nav-header"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(headerEle, 2, logoAnchorEle, navEle);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerEle);

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


const header = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(header, 1, "Welcome!");

const paragraph = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(paragraph, 1, "Here at yummyFoods, you will find varieties of deliciously made foods to satisfy your appetite.");

const button = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {type: "button"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(button, 1, "Order Now");

const homeSection = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {id: "homepage"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(homeSection, 3, header, paragraph, button);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeSection);

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

    if (this.innerText === "HOME") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.homepage);
    } else if (this.innerText === "MENU") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.menuPage);
    } else if (this.innerText === "ABOUT") {
        this.children[0].classList.add("active-page");
        contentDiv.children[1].replaceWith(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage);
    } else if (this.innerText === "CONTACT") {
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


function createMenuPriceArticle(menu, price, descrip) {
    const menuSpan = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span");
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuSpan, 1, menu);
    
    const dashSpan = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span");
    
    const priceSpan = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span");
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(priceSpan, 1, price);
    
    const menuPriceDiv = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {class: "menu-and-price"});
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuPriceDiv, 3, menuSpan, dashSpan, priceSpan);
    
    const menuDescripPara = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {class: "menu-description"});
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuDescripPara, 1, descrip);
    
    const menuPriceArticle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("article");
    (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuPriceArticle, 2, menuPriceDiv, menuDescripPara);

    return menuPriceArticle;
}

const menuDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";

/*======= Main Menu =======*/
const mainMenuHeader = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(mainMenuHeader, 1, "Main Menu");

const specialFriedRice = createMenuPriceArticle("Special Fried Rice", "$15", menuDummyText);
const sweetSourChicMixVeg = createMenuPriceArticle("Sweet and Sour Chicken with Mix Vegetables", "$18.50", menuDummyText);
const spagBeefCurry = createMenuPriceArticle("Spaghetti with Beef Curry", "$7.55", menuDummyText);

const mainMenusArticle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {class: "menus"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(mainMenusArticle, 4, mainMenuHeader, specialFriedRice, sweetSourChicMixVeg, spagBeefCurry);

/*======= Dessert Menu =======*/
const dessertMenuHeader = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(dessertMenuHeader, 1, "Dessert");

const friPlaBaIceCr = createMenuPriceArticle("Fried Plantain with Banana Ice Cream", "$7.15", menuDummyText);
const coIceCr = createMenuPriceArticle("Coconut Ice Cream", "$4.50", menuDummyText);
const choIceCrTop = createMenuPriceArticle("Chocolate Ice Cream with Toppings", "$5.99", menuDummyText);

const dessertMenusArticle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {class: "menus"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(dessertMenusArticle, 4, dessertMenuHeader, friPlaBaIceCr, coIceCr, choIceCrTop);

/*======= Soups Menu =======*/
const soupsMenuHeader = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(soupsMenuHeader, 1, "Soups");

const chicNooSoup = createMenuPriceArticle("Chicken Noodles Soup", "$3.35", menuDummyText);
const sweFiPepSoup = createMenuPriceArticle("Sweet Fish Pepper Soup", "$5", menuDummyText);
const specialSoup = createMenuPriceArticle("Special Soup", "$10.50", menuDummyText);

const soupsMenusArticle = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {class: "menus"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(soupsMenusArticle, 4, soupsMenuHeader, chicNooSoup, sweFiPepSoup, specialSoup);

/*==========================*/
const hr1 = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr");
const hr2 = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr");

const menuSection = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {id: "menu-page"});
(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.appendObjects)(menuSection, 5, mainMenusArticle, hr1, dessertMenusArticle, hr2, soupsMenusArticle);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "appendObjects": () => /* binding */ appendObjects
/* harmony export */ });
function createElement(eleType, attributes) {
    const element = document.createElement(eleType);

    if (attributes) {
        for(let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    return element;
}

function appendObjects(parentObj, amtOfChildrenObjs, ...childrenObjs) {
    const objsToAppend = childrenObjs;
    for (let i = 0; i < amtOfChildrenObjs; i++) {
        parentObj.append(objsToAppend[i]);
    }
}



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