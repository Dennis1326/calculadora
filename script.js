const displayCalc = document.querySelector('#display-calc')
const displayHistory = document.querySelector('#display-history')

function insertToDisplay(data) {
    const fontSizes = {
        0: '36px',
        7: '22px',
        13: '18px',
        16: '16px'
    };
    
    const lengths = Object.keys(fontSizes).map(Number).sort((a, b) => b - a);
    const currentLength = displayCalc.value.length;
    const appropriateSize = lengths.find(len => currentLength >= len) || lengths[lengths.length - 1];
    displayCalc.style.fontSize = fontSizes[appropriateSize];
    
    return displayCalc.value += data;
}

function backSpace() {
    displayCalc.value = displayCalc.value.slice(0, -1)
}

function clearDisplay() {
    displayCalc.value = ''
    displayHistory.value = ''
}

function insertToDisplayHistory() {

    const fontSizes = {
        0: '20px',
        7: '18px',
        13: '16px'
    };
    
    const lengths = Object.keys(fontSizes).map(Number).sort((a, b) => b - a);
    const currentLength = displayHistory.value.length;
    const appropriateSize = lengths.find(len => currentLength >= len) || lengths[lengths.length - 1];
    displayHistory.style.fontSize = fontSizes[appropriateSize];

    if (displayCalc.value == 'Erro') {
        displayHistory.value = ''
    } else {
        displayHistory.value = displayCalc.value
    }
}

function result() {
    try {
        displayCalc.value = eval(displayCalc.value)
    } catch {
        displayCalc.value = 'Erro'
    }
}