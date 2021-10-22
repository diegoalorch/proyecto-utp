var nivel = 0;

function inicializar_preguntas() {
    localStorage.setItem('mapa', JSON.stringify([{
        nombre: "Nivel 1",
        lock: false
    }, {
        nombre: "Nivel 2",
        lock: true
    }, {
        nombre: "Nivel 2",
        lock: true
    }, ]));
    localStorage.setItem(
        'preguntas', JSON.stringify(
            [{
                nro: 1,
                pregunta: "¿Por que te fuiste?",
                respuesta: [
                    { respuesta: "por que si mano", correct: true },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false }
                ],
                nivel: 1,
                lock: true,
                posicion: ["12px", "30px"]
            }, {
                nro: 2,
                pregunta: "¿Por que tee fuiste?",
                respuesta: [
                    { respuesta: "por que si mano", correct: true },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false }
                ],
                nivel: 1,
                lock: false,
                posicion: ["12px", "30px"]
            }, {
                nro: 3,
                pregunta: "¿Por que teee fuiste?",
                respuesta: [
                    { respuesta: "por que si mano", correct: true },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false },
                    { respuesta: "por que nose mano", correct: false }
                ],
                nivel: 1,
                lock: false,
                posicion: ["12px", "30px"]
            }]
        )
    );
}

function getPreguntas() {
    console.log(JSON.parse(localStorage.getItem('preguntas')))
}

function next() {
    nivel++
    if (nivel > 3) {
        nivel = 1
    }
    console.log(nivel)
}

function prev() {
    nivel--
    if (nivel < 1) {
        nivel = 3
    }
    console.log(nivel)
}