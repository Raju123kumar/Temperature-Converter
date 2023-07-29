function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit1 = document.getElementById('inputUnit1').value;
    const inputUnit2 = document.getElementById('inputUnit2').value;
    let result = 0;
  
    if (inputUnit1 === 'celsius') {
      if(inputUnit2 === 'celsius'){
        result = inputTemperature;
        document.getElementById('result').innerText = `${inputTemperature} °C is equal to ${result.toFixed(2)} °C`;
      }
      else if(inputUnit2 === 'fahrenheit'){
        result = (inputTemperature * 9/5) + 32;
        document.getElementById('result').innerText = `${inputTemperature} °C is equal to ${result.toFixed(2)} °F`;
      }
      else if(inputUnit2 === 'kelvin'){
        result = inputTemperature + 273.15;
        document.getElementById('result').innerText = `${inputTemperature} °C is equal to ${result.toFixed(2)} K`;
      }

    } 
    else if (inputUnit1 === 'fahrenheit') {
      if(inputUnit2 === 'fahrenheit'){
        result = inputTemperature;
        document.getElementById('result').innerText = `${inputTemperature} °F is equal to ${result.toFixed(2)} °F`;
      }
      else if(inputUnit2 === 'celsius'){
        result = (inputTemperature - 32) * 5/9;
        document.getElementById('result').innerText = `${inputTemperature} °F is equal to ${result.toFixed(2)} °C`;
      }
      else if(inputUnit2 === 'kelvin'){
        result = (inputTemperature + 459.67) * 5/9;
        document.getElementById('result').innerText = `${inputTemperature} °F is equal to ${result.toFixed(2)} K`;
      }

    } 
    else if (inputUnit1 === 'kelvin') {
      if(inputUnit2 === 'kelvin'){
        result = inputTemperature;
        document.getElementById('result').innerText = `${inputTemperature} °K is equal to ${result.toFixed(2)} °K`;
      }
      else if(inputUnit2 === 'fahrenheit'){
        result = (inputTemperature * 9/5) - 459.67;
        document.getElementById('result').innerText = `${inputTemperature} °K is equal to ${result.toFixed(2)} °F`;
      }
      else if(inputUnit2 === 'celsius'){
        result = inputTemperature - 273.15;
        document.getElementById('result').innerText = `${inputTemperature} °K is equal to ${result.toFixed(2)} °C`;
      }

    } 
    else if(inputUnit2 === 'to' && inputUnit1 === 'from'){
        document.getElementById('result').innerText = `please select intial & final unit`
    }
    else if(inputUnit2 === 'to'){
        document.getElementById('result').innerText = `please select final unit`
    }
    else if(inputUnit1 === 'from'){
        document.getElementById('result').innerText = `please select intial unit`
    }
  }
  