const closure = () => {
    let x = 0;

    function setX (arg) {
        x = arg;
    }

    return [x, setX];
}

const [counter, setCounter] = closure();

console.log(counter)
setCounter(5)
console.log(counter)