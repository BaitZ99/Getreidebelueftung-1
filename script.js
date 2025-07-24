
function checkConditions() {
    const grainTemp = parseFloat(document.getElementById('grainTemp').value);
    const airTemp = parseFloat(document.getElementById('airTemp').value);
    const rh = parseFloat(document.getElementById('rh').value);
    const deltaT = grainTemp - airTemp;
    let result = '';

    if (isNaN(grainTemp) || isNaN(airTemp) || isNaN(rh)) {
        result = 'Bitte alle Felder korrekt ausfüllen.';
    } else if (deltaT >= 5) {
        result = 'Belüftung nach Faustregel erlaubt – auch bei 100 % rF.';
    } else if (rh <= 75 && deltaT >= 0) {
        result = 'Belüftung zulässig gemäß Theimer-Tabelle.';
    } else {
        result = 'Belüftung derzeit nicht empfohlen.';
    }
    document.getElementById('result').textContent = result;
}
