const calculateLine = (lineWidth, fillChar, textToPass = '') => {
    let errorMessage = undefined, result = undefined;
    const createError = (errorText) => 'ERROR: ' + errorText + ' !!!';

    if (!lineWidth || typeof lineWidth !== 'number') {
        errorMessage = createError('"lineWidth" must be a number');
    }
    else if (!fillChar || typeof fillChar !== 'string' || fillChar.length !== 1) {
        errorMessage = createError('"fillChar" must be a one character string filled the all result line');
    }
    else if (lineWidth < textToPass.length) {
        errorMessage = createError('"textToPass" is bigger then "lineWidth" length');
    }
    else {
        const paddingValue = parseInt((lineWidth - textToPass.length) / 2);
        const initialLine = new Array(lineWidth).fill(fillChar).join('');
        result = [
            initialLine.substring(0, paddingValue),
            textToPass,
            initialLine.substring(paddingValue + textToPass.length)
        ].join('');
    }

    if (errorMessage) {
        console.error(errorMessage);
    }
    return errorMessage || result;
};

export default calculateLine;