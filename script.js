function mostrarBienvenida() {
    alert("Bienvenido a HealthyHabits: Aprende a incorporar hábitos saludables en tu vida y mejora tu bienestar físico y mental.");
}

function mostrarMenu() {
    return prompt(`
        Selecciona un tema:
        1. Importancia de los Hábitos Saludables
        2. Análisis de Rutinas Actuales
        3. Consejos para Crear Hábitos
        4. Salir
    `);
}

function mostrarImportanciaHabitos() {
    alert(`
        Los hábitos saludables impactan directamente tu bienestar:
        - Hacer ejercicio al menos 30 minutos al día reduce el riesgo de enfermedades cardiovasculares en un 25%.
        - Comer una dieta equilibrada mejora tu energía y fortalece tu sistema inmunológico.
        - Dormir de 7 a 8 horas por noche es clave para la recuperación física y mental.
    `);
}

function analizarRutinas() {
    let puntaje = 0;

    if (confirm("¿Haces ejercicio al menos tres veces a la semana?")) {
        puntaje++;
    }
    if (confirm("¿Consumes al menos 5 porciones de frutas y verduras al día?")) {
        puntaje++;
    }
    if (confirm("¿Duermes entre 7 y 8 horas al día?")) {
        puntaje++;
    }
    if (confirm("¿Bebes al menos 2 litros de agua al día?")) {
        puntaje++;
    }
    if (confirm("¿Evitas fumar y consumir alcohol en exceso?")) {
        puntaje++;
    }

    alert(`Tu puntuación de hábitos saludables es: ${puntaje}/5. ${puntaje < 3 ? "Hay espacio para mejorar." : "¡Vas por buen camino!"}`);
    return puntaje;
}

function mostrarConsejos(puntaje) {
    let mensaje = "Consejos para mejorar tus hábitos:\n";

    if (puntaje < 3) {
        mensaje += "- Comienza con pequeños cambios, como caminar 15 minutos al día.\n";
        mensaje += "- Añade una fruta en cada comida para mejorar tu alimentación.\n";
        mensaje += "- Establece una hora fija para acostarte cada noche.\n";
    } else {
        mensaje += "- Mantén tus hábitos actuales y busca nuevos desafíos, como ejercicios más intensos o incluir más alimentos integrales.\n";
    }

    alert(mensaje);
}

function mostrarReporte(puntaje) {
    let recomendaciones = `
        Resumen Final:
        Puntuación de Hábitos: ${puntaje}/5
        Recomendaciones:
        ${puntaje < 3 ? "1. Incorpora ejercicio regular y una dieta más balanceada.\n2. Mejora tu rutina de sueño.\n" : "1. Sigue fortaleciendo tus hábitos saludables.\n"}
        ¡Empieza hoy mismo a transformar tu vida!
    `;
    alert(recomendaciones);
}

function iniciarTaller() {
    mostrarBienvenida();
    let continuar = true;
    let puntaje = 0;

    while (continuar) {
        const opcion = mostrarMenu();
        switch (opcion) {
            case "1":
                mostrarImportanciaHabitos();
                break;
            case "2":
                puntaje = analizarRutinas();
                break;
            case "3":
                mostrarConsejos(puntaje);
                break;
            case "4":
                mostrarReporte(puntaje);
                continuar = false;
                break;
            default:
                alert("Por favor, selecciona una opción válida.");
        }
    }
}

iniciarTaller();
