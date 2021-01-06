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

export {createElement, appendObjects};