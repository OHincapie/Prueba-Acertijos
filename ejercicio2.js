let cabezasIngresadas = 35;
let patasIngresadas = 94;

document.addEventListener('DOMContentLoaded', function () {
    acertijo();
})

function acertijo() {
    operacion();
    cabezasFuncion();
    patasFuncion();
    validar();
}

function cabezasFuncion() {
    console.log('Hola mundo')
    const cabezasInput = document.querySelector('#cabezas');
    cabezasInput.addEventListener('input', e => {
        const cabezas = parseInt(e.target.value.trim());
        if (cabezas === 0) {
            console.log('No');
            mostrarAlerta('Las cabezas no pueden ser 0');
            cabezasInput.value = '';
        } else {
            cabezasIngresadas = cabezas;
            console.log(cabezasIngresadas);
        }
    })
}

function patasFuncion() {
    console.log('Hola patas');
    const patasInput = document.querySelector('#patas');
    patasInput.addEventListener('input', e => {
        const patas = parseInt(e.target.value.trim());
        let validador = cabezasIngresadas * 2;
        let validadorPor4 = cabezasIngresadas * 4;
        if (patas === 0) {
            mostrarAlerta('El numero de patas no puede ser 0');
            patasInput.value = ''
        } else if (patas < validador) {
            mostrarAlerta('El numero de patas no puede ser menor al doble de cabezas, valida tus datos');

        } else if (patas > validadorPor4) {
            console.log(validadorPor4);
            mostrarAlerta('El número ingresado supera 4 veces la cantidad de cabezas por lo cual no es posible calcular cuantos animales hay')
        } else if (patas % 2 === 1) {
            console.log('Impar');
            mostrarAlerta('Un numero impar quiere decir que hay algun animal sin una pata, no pareces mala persona, ingresa un numero PAR')
        } else {
            mostrarAlerta('');
            patasIngresadas = patas;
            console.log(patasIngresadas);
        }
    })
}


function mostrarAlerta(mensaje) {

    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
        alertaPrevia.remove();

    }


    const alert = document.createElement('DIV');
    alert.textContent = mensaje;
    alert.classList.add('alerta');



    const formulario = document.querySelector('.datos');
    formulario.appendChild(alert);

    if(mensaje == ''){
        alert.remove();
    }

}

function operacion() {
    const contenedor = document.querySelector('.contenedor');
    const div = document.querySelector('.resultado');

    if (div) {
        div.remove();
    }

    const animalAux= document.querySelector('.animales');
    if(animalAux){
        animalAux.remove();
    }


    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('resultado');
    contenedor.appendChild(resultadoDiv);

    let totalConejos = patasIngresadas + (-2 * cabezasIngresadas);

    totalConejos = totalConejos / 2;

    let totalGallinas = cabezasIngresadas - totalConejos;

    const resultadoGallinas = document.createElement('P');
    resultadoGallinas.innerHTML = `El numero total de gallinas es de:&nbsp <span>${totalGallinas}</span> `;

    const resultadoConejos = document.createElement('P');
    resultadoConejos.innerHTML = `El número total de conejos es de:&nbsp <span>${totalConejos}</span>`;

    resultadoDiv.appendChild(resultadoGallinas);
    resultadoDiv.appendChild(resultadoConejos);
    console.log(totalConejos);

    const animalesDiv = document.createElement('DIV');
    animalesDiv.classList.add('animales')

    const gallinasDiv = document.createElement('DIV');
    gallinasDiv.classList.add('animalDiv')
    const gallinasImg = document.createElement('IMG');
    gallinasImg.classList.add('animalImg');
    const gallinasP = document.createElement('P');

    gallinasImg.src = `img/gallina.png`;
    gallinasP.textContent = `X ${totalGallinas}`;

    gallinasDiv.appendChild(gallinasImg);
    gallinasDiv.appendChild(gallinasP);
    animalesDiv.appendChild(gallinasDiv);

    const conejosDiv = document.createElement('DIV');
    conejosDiv.classList.add('animalDiv')
    const conejosImg = document.createElement('IMG');
    conejosImg.classList.add('animalImg');
    const conejosP = document.createElement('P');

    conejosImg.src = `img/conejo.png`;
    conejosP.textContent = `X ${totalConejos}`;

    conejosDiv.appendChild(conejosImg);
    conejosDiv.appendChild(conejosP);
    animalesDiv.appendChild(conejosDiv);
    contenedor.appendChild(animalesDiv);




}

function validar() {
    const boton = document.querySelector('#validar');
    boton.addEventListener('click', function () {
        operacion();
        patasFuncion();
    })

}


