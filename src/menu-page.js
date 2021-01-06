import {createElement, appendObjects} from "./aggregator.js";

function createMenuPriceArticle(menu, price, descrip) {
    const menuSpan = createElement("span");
    appendObjects(menuSpan, 1, menu);
    
    const dashSpan = createElement("span");
    
    const priceSpan = createElement("span");
    appendObjects(priceSpan, 1, price);
    
    const menuPriceDiv = createElement("div", {class: "menu-and-price"});
    appendObjects(menuPriceDiv, 3, menuSpan, dashSpan, priceSpan);
    
    const menuDescripPara = createElement("p", {class: "menu-description"});
    appendObjects(menuDescripPara, 1, descrip);
    
    const menuPriceArticle = createElement("article");
    appendObjects(menuPriceArticle, 2, menuPriceDiv, menuDescripPara);

    return menuPriceArticle;
}

const menuDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";

/*======= Main Menu =======*/
const mainMenuHeader = createElement("h2");
appendObjects(mainMenuHeader, 1, "Main Menu");

const specialFriedRice = createMenuPriceArticle("Special Fried Rice", "$15", menuDummyText);
const sweetSourChicMixVeg = createMenuPriceArticle("Sweet and Sour Chicken with Mix Vegetables", "$18.50", menuDummyText);
const spagBeefCurry = createMenuPriceArticle("Spaghetti with Beef Curry", "$7.55", menuDummyText);

const mainMenusArticle = createElement("article", {class: "menus"});
appendObjects(mainMenusArticle, 4, mainMenuHeader, specialFriedRice, sweetSourChicMixVeg, spagBeefCurry);

/*======= Dessert Menu =======*/
const dessertMenuHeader = createElement("h2");
appendObjects(dessertMenuHeader, 1, "Dessert");

const friPlaBaIceCr = createMenuPriceArticle("Fried Plantain with Banana Ice Cream", "$7.15", menuDummyText);
const coIceCr = createMenuPriceArticle("Coconut Ice Cream", "$4.50", menuDummyText);
const choIceCrTop = createMenuPriceArticle("Chocolate Ice Cream with Toppings", "$5.99", menuDummyText);

const dessertMenusArticle = createElement("article", {class: "menus"});
appendObjects(dessertMenusArticle, 4, dessertMenuHeader, friPlaBaIceCr, coIceCr, choIceCrTop);

/*======= Soups Menu =======*/
const soupsMenuHeader = createElement("h2");
appendObjects(soupsMenuHeader, 1, "Soups");

const chicNooSoup = createMenuPriceArticle("Chicken Noodles Soup", "$3.35", menuDummyText);
const sweFiPepSoup = createMenuPriceArticle("Sweet Fish Pepper Soup", "$5", menuDummyText);
const specialSoup = createMenuPriceArticle("Special Soup", "$10.50", menuDummyText);

const soupsMenusArticle = createElement("article", {class: "menus"});
appendObjects(soupsMenusArticle, 4, soupsMenuHeader, chicNooSoup, sweFiPepSoup, specialSoup);

/*==========================*/
const hr1 = createElement("hr");
const hr2 = createElement("hr");

const menuSection = createElement("section", {id: "menu-page"});
appendObjects(menuSection, 5, mainMenusArticle, hr1, dessertMenusArticle, hr2, soupsMenusArticle);

export default menuSection;