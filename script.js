function mostrarPantallaBienvenida() {
    alert("Bienvenido a HealthVersity: Aprende a incorporar hábitos saludables en tu vida y mejora tu bienestar físico y mental.");
}

function seleccionarTema() {
    const opciones = `
    Selecciona un tema:
    1. Importancia de los Hábitos Saludables
    2. Análisis de Rutinas Actuales
    3. Consejos para Crear Hábitos
    4. Salir
    `;
    return prompt(opciones);
}

function moduloImportanciaHabitos() {
    alert(`
    Los hábitos saludables son esenciales para una vida plena. Algunos ejemplos incluyen:
    - Ejercicio físico regular: Reduce el riesgo de enfermedades cardiovasculares en un 25%.
    - Alimentación equilibrada: Mejora tu energía y sistema inmunológico.
    - Dormir 7-8 horas al día: Es clave para tu recuperación física y mental.
    ¡Empieza a construir tu camino hacia un bienestar integral!
    `);
}

function moduloAnalisisRutinas() {
    let puntaje = 0;

    if (confirm("¿Haces ejercicio al menos tres veces a la semana?")) {
        puntaje++;
    }
    if (confirm("¿Consumes al menos 5 porciones de frutas y verduras al día?")) {
        puntaje++;
    }
    if (confirm("¿Duermes entre 7 y 8 horas cada noche?")) {
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

function moduloConsejos(puntaje) {
    let consejos = "Consejos para mejorar tus hábitos:\n";

    if (puntaje < 3) {
        consejos += "- Comienza con pequeños cambios, como caminar 15 minutos al día.\n";
        consejos += "- Aumenta gradualmente tu consumo de frutas y verduras.\n";
        consejos += "- Establece un horario regular para dormir.\n";
    } else {
        consejos += "- Mantén tu rutina y busca desafíos nuevos, como probar ejercicios diferentes o mejorar tu hidratación.\n";
    }

    alert(consejos);
}

function iniciarTaller() {
    mostrarPantallaBienvenida();

    let continuar = true;
    while (continuar) {
        const opcion = seleccionarTema();
        switch (opcion) {
            case "1":
                moduloImportanciaHabitos();
                break;
            case "2":
                const puntaje = moduloAnalisisRutinas();
                break;
            case "3":
                moduloConsejos(puntaje || 0);
                break;
            case "4":
                alert("¡Gracias por usar HealthyHabits! Recuerda: pequeños cambios hacen grandes diferencias.");
                continuar = false;
                break;
            default:
                alert("Por favor, selecciona una opción válida.");
        }
    }
}

iniciarTaller();
