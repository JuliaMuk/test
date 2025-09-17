import './a.js';
import './assets/style.css';
import './assets/style1.sass';

const images = import.meta.glob('./assets/images/*.*', {eager:true});

let img = document.createElement('img');
img.src = images['./assets/images/1.jpg'].default;
container.append(img);
img = document.createElement('img');
img.src = images['./assets/images/2.jpg'].default;
container.append(img);
img = document.createElement('img');
img.src = images['./assets/images/3.jpg'].default;
container.append(img);