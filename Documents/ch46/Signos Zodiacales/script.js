function getZodiacSign() {
    const birthdate = document.getElementById('birthdate').value;

    // Verifica si se seleccionó una fecha
    if (!birthdate) {
        alert("Por favor selecciona una fecha válida.");
        return;
    }

    // Muestra la fecha seleccionada en la consola para verificar
    console.log("Fecha seleccionada: ", birthdate);

    const zodiacSign = calculateZodiacSign(birthdate);

    // Verifica si se ha calculado correctamente el signo
    if (zodiacSign) {
        const resultSection = document.getElementById('zodiac-result');
        const signElement = document.getElementById('zodiac-sign');
        const descriptionElement = document.getElementById('zodiac-description');

        // Actualiza el contenido de la página con el signo y la descripción
        signElement.textContent = zodiacSign.sign;
        descriptionElement.textContent = zodiacSign.description;

        // Mostrar alerta emergente con el signo y la descripción
        alert(`Tu signo es ${zodiacSign.sign}. ${zodiacSign.description}`);

        // Muestra los resultados en la página
        resultSection.classList.remove('hidden');
    } else {
        alert('No se pudo calcular el signo zodiacal. Por favor selecciona una fecha válida.');
    }
}

function calculateZodiacSign(birthdate) {
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses comienzan en 0

    // Muestra la fecha procesada para depuración
    console.log("Día: ", day, "Mes: ", month);

    const zodiacSigns = [
        { sign: "Aries", start: [3, 21], end: [4, 19], description: "Valiente, entusiasta y lleno de energía." },
        { sign: "Tauro", start: [4, 20], end: [5, 20], description: "Fuerte, confiable y paciente." },
        { sign: "Géminis", start: [5, 21], end: [6, 20], description: "Curioso, adaptable y comunicativo." },
        { sign: "Cáncer", start: [6, 21], end: [7, 22], description: "Emocional, protector y compasivo." },
        { sign: "Leo", start: [7, 23], end: [8, 22], description: "Generoso, creativo y apasionado." },
        { sign: "Virgo", start: [8, 23], end: [9, 22], description: "Analítico, detallista y práctico." },
        { sign: "Libra", start: [9, 23], end: [10, 22], description: "Diplomático, encantador y justo." },
        { sign: "Escorpio", start: [10, 23], end: [11, 21], description: "Intenso, decidido y apasionado." },
        { sign: "Sagitario", start: [11, 22], end: [12, 21], description: "Optimista, aventurero y sincero." },
        { sign: "Capricornio", start: [12, 22], end: [1, 19], description: "Ambicioso, disciplinado y práctico." },
        { sign: "Acuario", start: [1, 20], end: [2, 18], description: "Independiente, innovador y humanitario." },
        { sign: "Piscis", start: [2, 19], end: [3, 20], description: "Compasivo, artístico y sensible." }
    ];

    // Recorre los signos y verifica cuál corresponde
    for (let i = 0; i < zodiacSigns.length; i++) {
        const { sign, start, end } = zodiacSigns[i];

        if (
            (month === start[0] && day >= start[1]) ||
            (month === end[0] && day <= end[1]) ||
            (month > start[0] && month < end[0])
        ) {
            return zodiacSigns[i];
        }
    }
    return null;
}

