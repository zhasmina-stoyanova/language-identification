import './styles/base.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/header.css';
import './styles/resets.css';
import { handleSubmit } from './js/formHandler.js';
import { checkForName } from './js/nameChecker.js';
import Logo from './img/diff_langs_logo.png';


//get the element to which the image will be attached
const parentLogoElement = document.querySelector('header');
const logo = document.createElement('img');
logo.src = Logo;
parentLogoElement.appendChild(logo);


export { handleSubmit };
export { checkForName };