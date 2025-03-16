import { pageCreator } from "../pageCreator.js";
import olives from '../images/olives.jpeg';

const createMainPage = (div) => {
    pageCreator.clearContainer(div);
    pageCreator.createNewText('h1', 'Just Olives', div)
    pageCreator.createNewImage(olives, div)
    pageCreator.createNewText('p', "Why give you a bunch of other boring and plain dishes when you could just have the best part from the get-go? Sure, there's less variety, but there's more olives!", div)
    pageCreator.createNewText('h2', 'Testimonials', div)
    pageCreator.createNewText('p', 'They gave me cancer', div)
}

export {createMainPage}