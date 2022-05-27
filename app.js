// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

const mostrarDiv = document.querySelector('.mostrar');
const btnBuscar = document.querySelector('#pizza');

document.addEventListener('DOMContentLoaded', () =>{
    const url = 'pizzas.json';

    fetch(url) 
        .then( resp => {
            return resp.json();
        })
        .then( resp => {
            limpiarHTML()
            mostrarHTML(resp);
        })
});

function mostrarHTML(pizza) {

    btnBuscar.addEventListener('keyup', (e) =>{
        limpiarHTML();

        const buscar = parseInt(e.target.value);
        validarNumero(buscar);

        pizza.map( piz => {
            const {id, nombre, ingredientes, precio, image} = piz;
            if (buscar === id) {
                const idP = document.createElement('p');
                const title = document.createElement('h1');
                const titlePrice = document.createElement('h4');
                const contDiv = document.createElement ('div')
                const img = document.createElement('img');
                contDiv.classList.add('nombres-pizzas');
                idP.classList.add('idp');

                idP.textContent = `ID: ${id}`
                title.textContent = nombre;
                titlePrice.textContent = `Precio: $${precio}`;
                img.classList.add('img-pizza')
                img.src = image;

                contDiv.appendChild(idP);
                contDiv.appendChild(title)
                contDiv.appendChild(titlePrice)
                contDiv.appendChild(img);
                mostrarDiv.appendChild(contDiv)
            }
            
        })
    });
}

function limpiarHTML() {
    while(mostrarDiv.firstChild) {
        mostrarDiv.removeChild(mostrarDiv.firstChild);
    }
}

function validarNumero(numb) {

    if(numb > 0 && numb <= 6) {
        return numb;
    } else {
        mostrarError('Debe ingrese un numero del 1 al 6')
    }
}

function mostrarError(msj) {

    const erorrP = document.createElement('p');
    const contError = document.createElement('div');
    erorrP.textContent = msj;
    contError.classList.add('erorr');

    contError.appendChild(erorrP)
    mostrarDiv.appendChild(contError);

    setTimeout(() => {
        contError.remove();
    }, 1600);


}