// Mapeos de encriptación y desencriptación
const encriptarMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptarMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

/**
 * Función para encriptar el texto.
 * @param {string} texto - El texto a encriptar.
 * @returns {string} - El texto encriptado.
 */
function encriptar(texto) {
    return texto.split('').map(char => encriptarMap[char] || char).join('');
}

/**
 * Función para desencriptar el texto.
 * @param {string} texto - El texto a desencriptar.
 * @returns {string} - El texto desencriptado.
 */
function desencriptar(texto) {
    let resultado = texto;
    // Asegurarse de reemplazar en el orden correcto para evitar problemas
    const clavesOrdenadas = Object.keys(desencriptarMap).sort((a, b) => b.length - a.length);
    clavesOrdenadas.forEach(clave => {
        const valor = desencriptarMap[clave];
        resultado = resultado.split(clave).join(valor);
    });
    return resultado;
}

/**
 * Función para procesar el texto según la acción seleccionada.
 */
function procesarTexto() {
    const texto = document.getElementById('texto').value;
    const accion = document.getElementById('accion').value;
    let resultado;

    if (accion === 'encriptar') {
        resultado = encriptar(texto);
    } else {
        resultado = desencriptar(texto);
    }

    document.getElementById('resultado').value = resultado;
}

/**
 * Función para copiar el texto al portapapeles.
 */
function copiarTexto() {
    const resultadoTextarea = document.getElementById('resultado');
    resultadoTextarea.select();
    document.execCommand('copy');
}

/**
 * Función para resetear el resultado.
 */
function resetResult() {
    document.getElementById('resultado').value = '';
}
