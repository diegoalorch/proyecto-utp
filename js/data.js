function inicializar_preguntas() {
    iniciarPuntaje()
    localStorage.setItem('mapa', JSON.stringify([{
        nombre: "Nivel 1",
        unlook: true
    }, {
        nombre: "Nivel 2",
        unlook: false
    }, {
        nombre: "Nivel 3",
        unlook: false
    }, ]));
    localStorage.setItem(
        'preguntas', JSON.stringify(
            [{
                nivel: 1,
                look: true,
                preguntas: [{
                    nro: 1,
                    imagen: '',
                    pregunta: "Las magnitudes físicas, según su naturaleza se clasifican en fundamentales y derivadas.",
                    respuesta: [
                        { respuesta: "Verdadero", correct: false },
                        { respuesta: "Falso", correct: true },
                    ],
                    unlook: true,
                    good: false,
                }, {
                    nro: 2,
                    imagen: '',
                    pregunta: "La dirección de un vector está determinada por:",
                    respuesta: [
                        { respuesta: "El ángulo de inclinación con respecto al eje “x”", correct: true },
                        { respuesta: "El módulo del vector", correct: false },
                        { respuesta: "El origen y modulo del vector", correct: false },
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 3,
                    imagen: '',
                    pregunta: "El peso y la masa tiene la misma fórmula dimensional",
                    respuesta: [
                        { respuesta: "Verdadero", correct: false },
                        { respuesta: "Falso", correct: true },
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 4,
                    imagen: '',
                    pregunta: "Dada la condición: “El producto de dos prefijos equivale a la unidad”. Identificar la respuesta correcta:",
                    respuesta: [
                        { respuesta: "(Mega)x(micro)", correct: true },
                        { respuesta: "(Peta)x(micro)", correct: false },
                        { respuesta: "(atto)x(Mega)", correct: false },
                        { respuesta: "(Giga)x(micro)", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 5,
                    imagen: '',
                    pregunta: "¿Cuales de las siguientes opciones tienen la misma fórmula dimensional?",
                    respuesta: [
                        { respuesta: "Trabajo-Energía", correct: true },
                        { respuesta: "Aceleración-Velocidad", correct: false },
                        { respuesta: "Fuerza-Volumen", correct: false },
                        { respuesta: "Densidad-Presión", correct: false }
                    ],
                    unlook: false,
                }, {
                    nro: 6,
                    imagen: '',
                    pregunta: "Identifique que pareja de magnitudes son vectoriales",
                    respuesta: [
                        { respuesta: "Desplazamiento, Velocidad", correct: true },
                        { respuesta: "Posición, Distancia", correct: false },
                        { respuesta: "Fuerza, Densidad", correct: false },
                        { respuesta: "Fuerza, Temperatura", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 7,
                    imagen: '',
                    pregunta: "Se dan las siguientes afirmaciones: Identificar cual es la correcta",
                    respuesta: [
                        { respuesta: "La temperatura es una magnitud vectorial", correct: true },
                        { respuesta: "Magnitudes derivadas son aquellos que se expresan en función de las magnitudes fundamentales", correct: false },
                        { respuesta: "La cantidad de sustancia es una magnitud física derivada", correct: false },
                        { respuesta: "La intensidad luminosa es una magnitud Derivada", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }]
            }, {
                nivel: 2,
                look: false,
                preguntas: [{
                    nro: 8,
                    imagen: '',
                    pregunta: "Sean los vectores: A= 2i+4j  :   B= 3i-5j  Indique el vector resultante",
                    respuesta: [
                        { respuesta: "5i-1j", correct: true },
                        { respuesta: "5i+9j", correct: false },
                        { respuesta: "5i+1j", correct: false },
                        { respuesta: "5i-2j", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 9,
                    imagen: '',
                    pregunta: "Sean los vectores: V= 30i+40j   Indique el vector resultante",
                    respuesta: [
                        { respuesta: "50", correct: true },
                        { respuesta: "70", correct: false },
                        { respuesta: "10", correct: false },
                        { respuesta: "120", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 10,
                    imagen: '../img/ejercicio/ejercicio10.jpeg',
                    pregunta: "Determina el módulo de la tensión en la cuerda que une a los bloques.",
                    respuesta: [
                        { respuesta: "18", correct: false },
                        { respuesta: "22", correct: false },
                        { respuesta: "20", correct: false },
                        { respuesta: "15", correct: true }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 11,
                    imagen: '../img/ejercicio/ejercicio11.jpeg',
                    pregunta: "Un balón de básquetbol se lanza a una altura de 7,5ft m con una rapidez inicial de 12m/s dirigida con un ángulo de 35° sobre la horizontal. Determine a que distancia horizontal de la canasta está el jugador (ft=0,3048m)",
                    respuesta: [
                        { respuesta: "1,5", correct: false },
                        { respuesta: "1,05", correct: true },
                        { respuesta: "1,06", correct: false },
                        { respuesta: "2", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 12,
                    imagen: '',
                    pregunta: "Se ha determinado que la magnitud F de una fuerza que actúa sobre un satélite que orbita la Tierra depende de la rapidez V del satélite, de la distancia media del satélite al centro de la Tierra R y de la masa m del satélite según la relación:\nF = kmα VβRy\nSiendo k una constante adimensional, determine α+β+y.",
                    respuesta: [
                        { respuesta: "-2", correct: false },
                        { respuesta: "-1", correct: false },
                        { respuesta: "1", correct: false },
                        { respuesta: "2", correct: true }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 13,
                    imagen: '../img/ejercicio/ejercicio13.jpeg',
                    pregunta: "La grafica muestra la posición versus el tiempo de dos móviles A y B. Si la rapidez de B es 2m/s determine en que instante se encuentran.",
                    respuesta: [
                        { respuesta: "18", correct: false },
                        { respuesta: "22", correct: false },
                        { respuesta: "20", correct: true },
                        { respuesta: "24", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 14,
                    imagen: '../img/ejercicio/ejercicio14.jpeg',
                    pregunta: "Dos gráficos (distancia x tiempo) y (velocidad x tiempo) incluidos a continuación, son los que representan un mismo movimiento rectilínea",
                    respuesta: [
                        { respuesta: "1 y 4", correct: true },
                        { respuesta: "3 y 4", correct: false },
                        { respuesta: "3 y 2", correct: false },
                        { respuesta: "1 y 3", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }]
            }, {
                nivel: 3,
                look: false,
                preguntas: [{
                    nro: 15,
                    imagen: '../img/ejercicio/ejercicio15.jpeg',
                    pregunta: "En el instante mostrado la tensión de la cuerda y la fuerza de gravedad presentan igual modulo. Determinar la rapidez de la esfera de 1kg que describe un movimiento circunferencial de radio 0.5m en el plano vertical",
                    respuesta: [
                        { respuesta: "0.97 m/s", correct: false },
                        { respuesta: "1.89 m/s", correct: false },
                        { respuesta: "1.99 m/s", correct: false },
                        { respuesta: "0.99 m/s", correct: true }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 16,
                    imagen: '../img/ejercicio/ejercicio16.jpeg',
                    pregunta: "La esfera de 0.5 Kg se abandona del punto A  y pasa por B con un rapidez de 2m/s . Si la cuerda tiene una longitud de 20cm, determine el módulo de la tensión de cuerda",
                    respuesta: [
                        { respuesta: "20.51 N", correct: false },
                        { respuesta: "21.00 N", correct: false },
                        { respuesta: "20.00 N", correct: false },
                        { respuesta: "20.31 N", correct: true }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 17,
                    imagen: '../img/ejercicio/ejercicio17.jpeg',
                    pregunta: "Determina el módulo de la aceleración del sistema",
                    respuesta: [
                        { respuesta: "5,62 m/s²", correct: false },
                        { respuesta: "5,89 m/s²", correct: true },
                        { respuesta: "4,97 m/s²", correct: false },
                        { respuesta: "6,03 m/s²", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 18,
                    imagen: '../img/ejercicio/ejercicio18.jpeg',
                    pregunta: "18.	La fuerza F actúa sobre el bloque de 2 kg de la figura que se encuentra en un piso horizontal rugoso (μₖ = 0,1). La gráfica muestra la variación de la fuerza en función de la posición. Determine el trabajo neto realizado sobre el bloque, en J, desde X₁ = 0 hasta X₂ = 10m",
                    respuesta: [
                        { respuesta: "400", correct: false },
                        { respuesta: "35", correct: true },
                        { respuesta: "25", correct: false },
                        { respuesta: "20", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 19,
                    imagen: '../img/ejercicio/ejercicio19.jpeg',
                    pregunta: "El grafico muestra la velocidad versus la posición x de una partícula que parte del origen de coordenadas en el instante t= 0s con una aceleración constante. Dadas las siguientes proposiciones:" +
                        "\nI.	La aceleración de partícula es de 7 m/s2" +
                        "\nII.	La partícula pasa por x= 4m en el instante t=5s es de 20 m/s" +
                        "\nIII.	La velocidad de la partícula en el instante t=5s es de 20 m/" +
                        "\nSeñale la alternativa que presenta la secuencia correcta después de determinar si la proposición es verdad(V) o falsa(F).",
                    respuesta: [
                        { respuesta: "FFF", correct: false },
                        { respuesta: "FVF", correct: true },
                        { respuesta: "FFV", correct: false },
                        { respuesta: "VVV", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 20,
                    imagen: '../img/ejercicio/ejercicio20.jpeg',
                    pregunta: "Se dispara un proyectil con una rapidez inicial de 20 m/s desde la parte superior del plano inclinado que hace un ángulo de 37°con la horizontal. Encuentre el tiempo de vuelo del proyectil, en s, al impactar sobre el plano como se indica en la figura, si su velocidad inicial es perpendicular al plano inclinado.",
                    respuesta: [
                        { respuesta: "2,733", correct: false },
                        { respuesta: "1,992", correct: false },
                        { respuesta: "2,668", correct: true },
                        { respuesta: "2,563", correct: false }
                    ],
                    unlook: false,
                    good: false,
                }, {
                    nro: 21,
                    imagen: '../img/ejercicio/ejercicio21.jpeg',
                    pregunta: "Una partícula se mueve por el eje X, cambia su posición ( x ) en función de su rapidez (v): según la gráfica adjunta, ¿en qué instante de tiempo su rapidez es 1 m/s?",
                    respuesta: [
                        { respuesta: "3", correct: false },
                        { respuesta: "4", correct: false },
                        { respuesta: "5", correct: false },
                        { respuesta: "2", correct: true }
                    ],
                    unlook: false,
                    good: false,
                }]
            }]
        )
    );
}

function iniciarPuntaje() {
    localStorage.setItem('puntuacion', '0')
}

function getPregunta(preguntaEspecifica) {
    const niveles = JSON.parse(localStorage.getItem('preguntas'))
    for (let i = 0; i < niveles.length; i++) {
        const nivel = niveles[i];
        for (let j = 0; j < nivel.preguntas.length; j++) {
            const pregunta = nivel.preguntas[j];
            if (pregunta.nro == preguntaEspecifica) {
                return pregunta
            }
        }
    }
}

function getPreguntas() {
    console.log(JSON.parse(localStorage.getItem('preguntas')))
    return JSON.parse(localStorage.getItem('preguntas'))
}