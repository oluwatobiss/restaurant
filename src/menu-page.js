import {shared} from "./aggregator.js";

const menuPageContent = (() => {
    const menuDummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";
    function createMenuPriceArticle(menu, price, descrip) {
        const menuSpan = shared.createElement("span", [menu]);
        const dashSpan = document.createElement("span");
        const priceSpan = shared.createElement("span", [price]);
        const menuPriceDiv = shared.createElement("div", [menuSpan, dashSpan, priceSpan], {class: "menu-and-price"});
        const menuDescripPara = shared.createElement("p", [descrip], {class: "menu-description"});
        const menuPriceArticle = shared.createElement("article", [menuPriceDiv, menuDescripPara]);
        return menuPriceArticle;
    }
    /*======= Main Menu =======*/
    const mainMenuHeader = shared.createElement("h2", ["Main Menu"]);
    const specialFriedRice = createMenuPriceArticle("Special Fried Rice", "$15", menuDummyText);
    const sweetSourChicMixVeg = createMenuPriceArticle("Sweet and Sour Chicken with Mix Vegetables", "$18.50", menuDummyText);
    const spagBeefCurry = createMenuPriceArticle("Spaghetti with Beef Curry", "$7.55", menuDummyText);
    const mainMenusArticle = shared.createElement("article", [mainMenuHeader, specialFriedRice, sweetSourChicMixVeg, spagBeefCurry], {class: "menus"});
    /*======= Dessert Menu =======*/
    const dessertMenuHeader = shared.createElement("h2", ["Dessert"]);
    const friPlaBaIceCr = createMenuPriceArticle("Fried Plantain with Banana Ice Cream", "$7.15", menuDummyText);
    const coIceCr = createMenuPriceArticle("Coconut Ice Cream", "$4.50", menuDummyText);
    const choIceCrTop = createMenuPriceArticle("Chocolate Ice Cream with Toppings", "$5.99", menuDummyText);
    const dessertMenusArticle = shared.createElement("article", [dessertMenuHeader, friPlaBaIceCr, coIceCr, choIceCrTop], {class: "menus"});
    /*======= Soups Menu =======*/
    const soupsMenuHeader = shared.createElement("h2", ["Soups"]);
    const chicNooSoup = createMenuPriceArticle("Chicken Noodles Soup", "$3.35", menuDummyText);
    const sweFiPepSoup = createMenuPriceArticle("Sweet Fish Pepper Soup", "$5", menuDummyText);
    const specialSoup = createMenuPriceArticle("Special Soup", "$10.50", menuDummyText);
    const soupsMenusArticle = shared.createElement("article", [soupsMenuHeader, chicNooSoup, sweFiPepSoup, specialSoup], {class: "menus"});
    /*==========================*/
    const hr = () => document.createElement("hr");
    const menuSection = shared.createElement("section", [mainMenusArticle, hr(), dessertMenusArticle, hr(), soupsMenusArticle], {id: "menu-page"});
    return menuSection;
})();

export default menuPageContent;