let lengthEl = document.getElementById('length-el')
let volumeEl = document.getElementById('volume-el')
let massEl = document.getElementById('mass-el')

function calculate() {
    let inputEl = document.getElementById('input-el').value
    
    let meterFeet = inputEl * 3.280
    let roundMeterFeet = meterFeet.toFixed(3)
    let feetMeter = inputEl * 0.304
    let roundFeetMeter = feetMeter.toFixed(3)

    let literGallon = inputEl * 0.264
    let roundLiterGallon = literGallon.toFixed(3)
    let gallonLiter = inputEl * 3.785
    let roundGallonLiter = gallonLiter.toFixed(3)

    let kiloPound = inputEl * 2.204
    let roundKiloPound = kiloPound.toFixed(3)
    let poundKilo = inputEl * 0.453
    let roundPoundKilo = poundKilo.toFixed(3)
    
    lengthEl.innerHTML = inputEl + " " + "meters" + " = " + roundMeterFeet + " feet " + "| " + inputEl + " feet" + " = " + roundFeetMeter + " meters"
    
    volumeEl.innerHTML = inputEl + " " + "liters" + " = " + roundLiterGallon + " gallons " + "| " + inputEl + " gallons" + " = " + roundGallonLiter + " liters"
    
    massEl.innerHTML = inputEl + " " + "kilos" + " = " + roundKiloPound + " pounds " + "| " + inputEl + " pounds" + " = " + roundPoundKilo + " kilos"
    
}