import 'fslightbox';

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');

/*import { suma,saludo } from './operaciones';
import Swal from 'sweetalert2'

document.write(`<h1>${suma(1,2)}</h1>`)
document.write(`<h1>${suma(10,13)}</h1>`)

console.log(suma(1,2));
console.log(saludo);
console.log(suma(10,13));

Swal.fire({
  title: 'IM BATMAN!',
  text: 'Hola, Soy David RUiz..',
  imageUrl: 'https://c.tenor.com/HtmXi6GVofMAAAAC/lego-batman-gasp.gif',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})

import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());*/