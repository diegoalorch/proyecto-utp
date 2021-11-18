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
                preguntas: [{
                    nro: 1,
                    pregunta: "Las magnitudes físicas, según su naturaleza se clasifican en fundamentales y derivadas.",
                    respuesta: [
                        { respuesta: "Verdadero", correct: false },
                        { respuesta: "Falso", correct: true },
                    ],
                    unlook: true,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 2,
                    pregunta: "La dirección de un vector está determinada por:",
                    respuesta: [
                        { respuesta: "El ángulo de inclinación con respecto al eje “x”", correct: true },
                        { respuesta: "El módulo del vector", correct: false },
                        { respuesta: "El origen y modulo del vector", correct: false },
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 3,
                    pregunta: "¿Por que teee fuiste?",
                    respuesta: [
                        { respuesta: "Verdadero", correct: false },
                        { respuesta: "Falso", correct: true },
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 4,
                    pregunta: "Dada la condición: “El producto de dos prefijos equivale a la unidad”. Identificar la respuesta correcta:",
                    respuesta: [
                        { respuesta: "(Mega)x(micro)", correct: true },
                        { respuesta: "(Peta)x(micro)", correct: false },
                        { respuesta: "(atto)x(Mega)", correct: false },
                        { respuesta: "(Giga)x(micro)", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 5,
                    pregunta: "¿Cuales de las siguientes opciones tienen la misma fórmula dimensional?",
                    respuesta: [
                        { respuesta: "Trabajo-Energía", correct: true },
                        { respuesta: "Aceleración-Velocidad", correct: false },
                        { respuesta: "Fuerza-Volumen", correct: false },
                        { respuesta: "Densidad-Presión", correct: false }
                    ],
                    unlook: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 6,
                    pregunta: "Identifique que pareja de magnitudes son vectoriales",
                    respuesta: [
                        { respuesta: "Desplazamiento, Velocidad", correct: true },
                        { respuesta: "Posición, Distancia", correct: false },
                        { respuesta: "Fuerza, Densidad", correct: false },
                        { respuesta: "Fuerza, Temperatura", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 7,
                    pregunta: "Se dan las siguientes afirmaciones: Identificar cual es la correcta",
                    respuesta: [
                        { respuesta: "La temperatura es una magnitud vectorial", correct: true },
                        { respuesta: "Magnitudes derivadas son aquellos que se expresan en función de las magnitudes fundamentales", correct: false },
                        { respuesta: "La cantidad de sustancia es una magnitud física derivada", correct: false },
                        { respuesta: "La intensidad luminosa es una magnitud Derivada", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }]
            }, {
                nivel: 2,
                preguntas: [{
                    nro: 8,
                    pregunta: "Sean los vectores: A= 2i+4j  :   B= 3i-5j",
                    respuesta: [
                        { respuesta: "5i-1j", correct: true },
                        { respuesta: "5i+9j", correct: false },
                        { respuesta: "5i+1j", correct: false },
                        { respuesta: "5i-2j", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 9,
                    pregunta: "V= 30i+40j",
                    respuesta: [
                        { respuesta: "50", correct: true },
                        { respuesta: "70", correct: false },
                        { respuesta: "10", correct: false },
                        { respuesta: "120", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 10,
                    pregunta: "Determina el módulo de la tensión en la cuerda que une a los bloques.",
                    respuesta: [
                        { respuesta: "18", correct: false },
                        { respuesta: "22", correct: false },
                        { respuesta: "20", correct: false },
                        { respuesta: "15", correct: true }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 11,
                    pregunta: "Un balón de básquetbol se lanza a una altura de 7,5ft m con una rapidez inicial de 12m/s dirigida con un ángulo de 35° sobre la horizontal. Determine a que distancia horizontal de la canasta está el jugador (ft=0,3048m)",
                    respuesta: [
                        { respuesta: "1,5", correct: false },
                        { respuesta: "1,05", correct: true },
                        { respuesta: "1,06", correct: false },
                        { respuesta: "2", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 12,
                    pregunta: "Se ha determinado que la magnitud F de una fuerza que actúa sobre un satélite que orbita la Tierra depende de la rapidez V del satélite, de la distancia media del satélite al centro de la Tierra R y de la masa m del satélite según la relación:\nF = kmα VβRy\nSiendo k una constante adimensional, determine α+β+y.",
                    respuesta: [
                        { respuesta: "-2", correct: false },
                        { respuesta: "-1", correct: false },
                        { respuesta: "1", correct: false },
                        { respuesta: "2", correct: true }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
                }, {
                    nro: 13,
                    pregunta: "La grafica muestra la posición versus el tiempo de dos móviles A y B. Si la rapidez de B es 2m/s determine en que instante se encuentran.",
                    respuesta: [
                        { respuesta: "18", correct: false },
                        { respuesta: "22", correct: false },
                        { respuesta: "20", correct: true },
                        { respuesta: "24", correct: false }
                    ],
                    unlook: false,
                    good: false,
                    posicion: ["12px", "30px"]
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