const pageCreator = (function(){
    const createNewText = (type, text, body) => {
        let element = document.createElement(type);
        element.textContent = text
        body.appendChild(element)
    }

    const createNewImage = (url, body) => {
        let img = document.createElement('img')
        img.src = url
        body.appendChild(img)
    }

    const clearContainer = (body) => {
        body.innerHTML = '';
    }

    return {createNewText, createNewImage, clearContainer};
})();

export {pageCreator};