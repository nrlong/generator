const megaNumbers = () => {
    const megaArray = [];
    const megaOutput = document.querySelector('.mega-output');
    while (megaArray.length < 5) {
        const numbers = Math.floor(Math.random() * 70) + 1;
        if (megaArray.indexOf(numbers) === -1) megaArray.push(numbers);
    }

    while (megaArray.length === 5 && megaArray.length < 6) {
        const megaNumber = Math.floor(Math.random() * 25) + 1;
        megaArray.push("Mega Ball: " + megaNumber);
    }
    
    megaOutput.innerHTML = megaArray;
}

const clear = () => {
    const output = document.querySelector('p');
    output.innerHTML = '';

}

const powerNumbers = () => {
    const powerArray = [];
    const powerOutput = document.querySelector('.power-output');
    while (powerArray.length < 5) {
        const numbers = Math.floor(Math.random() * 69) + 1;
        if (powerArray.indexOf(numbers) === -1) powerArray.push(numbers);
    }
    while (powerArray.length === 5 && powerArray.length < 6) {
        const powerNumber = Math.floor(Math.random() * 26) + 1;
        powerArray.push("PowerPlay: " + powerNumber);
    }
    powerOutput.innerHTML = powerArray;

    console.log(powerArray)
}

const click = (e) => {
    const megaClick = document.querySelector('.mega-button');
    megaClick.addEventListener('click', megaNumbers, clear);

    const powerClick = document.querySelector('.power-button');
    powerClick.addEventListener('click', powerNumbers, clear);
}

click();