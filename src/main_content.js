const pageCreator = (function(){
    const createNewText = (type, text, body) => {
        let element = document.createElement(type);
        element.textContent = text
        body.append(element)
    }

    const createNewImage = (url, body) => {
        let img = document.createElement('img')
        img.src = url
        body.append(img)
    }

    const createMainPage = (div) => {
        createNewText('h1', 'Just Olives', div)
        createNewImage('images/olives.jpeg', div)
        createNewText('p', "Why give you a bunch of other boring and plain dishes when you could just have the best part from the get-go? Sure, there's less variety, but there's more olives!", div)
        createNewText('h2', 'Testimonials', div)
        createNewText('p', 'They gave me cancer', div)
        console.log(div)
    }

    return {createMainPage};
})();

export {pageCreator};