/**
 *
 * @param {String} className
 */

const mouseOverEvent = className => {
    document.querySelectorAll(className).forEach((places) => {
        places.style.backgroundColor = 'indianred';
        places.style.color = 'white';
        places.style.border = 'none';
    });
};

const mouseOutEvent = className => {
    document.querySelectorAll(className).forEach((places) => {
        places.style.backgroundColor = 'white';
        places.style.color = 'black';
        places.style.border = '1px solid black';
    });
}
