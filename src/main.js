/**
 * Create an element based on the tag name and classes given.
 *  
 * @param {string} tabName The tag name of the element (i.e. 'div', 'img', etc.)
 * @param {string} classes Set the class attribute Multiple seperated by a space
 */

function createElementWithclass(tabName, classes) {
    const el = document.createElement(tabName);

    el.setAttribute('class', classes);

    return el;
}

/**
 * 
 * @param {string} color The value of the color 
 * @param {string} desc The description/name/use of the color
 * 
 * @returns {HTMLElement}
 */
function createItem(color, desc) {
    const elmItem = createElementWithclass('div', 'palette__item');
    const elmColor = createElementWithclass('div', 'palette__color');
    const elmDesc = createElementWithclass('div', 'palette__desc');
    const elmInput = createElementWithclass('input', 'palette__input');

    elmColor.style.backgroundColor = color;
     elmInput.setAttribute('value', color);
    elmDesc.textContent = desc;


    elmItem.appendChild(elmColor);
    elmItem.appendChild(elmInput);
    elmColor.appendChild(elmDesc);

    elmInput.onfocus = () => elmInput.select();

    return elmItem;
}

const paletteContainer = document.querySelector('.palette');

// fetch and data append into palette Element
fetch('data/colors.json').then(response => {
    return response.json();
}).then(colorList => {
    for(const {desc, color} of colorList) {
        paletteContainer.appendChild(createItem(color, desc))
    }
}).catch(err => {
    console.log(err);
});