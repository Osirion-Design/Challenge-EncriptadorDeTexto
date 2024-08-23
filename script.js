// Funciones de encriptación y desencriptación
function encrypt(text) {
    const replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => replacements[match]);
}

function decrypt(text) {
    const replacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => replacements[match]);
}

// Validar el texto
function validateText(text) {
    const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios permitidos
    return regex.test(text);
}

// Manejo de eventos
document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const warningMessage = document.getElementById('warningMessage');

    if (!validateText(inputText)) {
        warningMessage.style.display = 'block'; // Mostrar mensaje de advertencia
        document.getElementById('outputText').value = ''; // Limpiar el área de resultado
        return;
    } else {
        warningMessage.style.display = 'none'; // Ocultar mensaje de advertencia
    }

    const encryptedText = encrypt(inputText);
    const outputText = document.getElementById('outputText');
    outputText.value = encryptedText;

    // Cambiar el estilo cuando se muestra el texto encriptado
    outputText.style.backgroundColor = '#e0f7fa'; // Color de fondo
    outputText.style.color = '#00796b'; // Color del texto
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const warningMessage = document.getElementById('warningMessage');

    if (!validateText(inputText)) {
        warningMessage.style.display = 'block'; // Mostrar mensaje de advertencia
        document.getElementById('outputText').value = ''; // Limpiar el área de resultado
        return;
    } else {
        warningMessage.style.display = 'none'; // Ocultar mensaje de advertencia
    }

    const decryptedText = decrypt(inputText);
    const outputText = document.getElementById('outputText');
    outputText.value = decryptedText;

    // Restaurar el estilo original cuando se muestra el texto desencriptado
    outputText.style.backgroundColor = '#fff'; // Color de fondo
    outputText.style.color = '#000'; // Color del texto
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = ''; // Limpiar campo de entrada
    document.getElementById('outputText').value = ''; // Limpiar campo de salida
    document.getElementById('warningMessage').style.display = 'none'; // Ocultar mensaje de advertencia
});
