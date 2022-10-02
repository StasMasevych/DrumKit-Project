

//Detecting Button Press

const numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click',function () {

        const buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });

}

//Detecting Keyboard Press

document.addEventListener('keydown', function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);

})

function makeSound (key) {
    switch (key) {
        case 'w':
            const tom1 = new Audio ('sounds/tom-1.mp3');
            tom1.play();
        break;
        
        case 'a':
            const tom2 = new Audio ('sounds/tom-2.mp3');
            tom2.play();
        break;

        case 's':
            const tom3 = new Audio ('sounds/tom-3.mp3');
            tom3.play();
        break;

        case 'd':
            const tom4 = new Audio ('sounds/tom-4.mp3');
            tom4.play();
        break;

        case 'j':
            const snare = new Audio ('sounds/snare.mp3');
            snare.play();
        break;

        case 'k':
            const crash = new Audio ('sounds/crash.mp3');
            crash.play();
        break;

        case 'l':
            const kick = new Audio ('sounds/kick-bass.mp3');
            kick.play();
        break;
    


        default: console.log(buttonInnerHTML)
          
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function() {
        activeButton.classList.remove('pressed');
    },100)

}




//calculator

/* function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1/num2
}

function calculator (num1, num2, operator) {
    return operator(num1, num2)
}

console.log(calculator (4,4,add));
console.log(calculator (4,4, multiply));
console.log(calculator (10,4, subtract));
console.log(calculator (10,2, divide)); */
