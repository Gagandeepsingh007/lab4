function createCounter() {
    let count = 0;
    // Inner function - variable count (closure) 
    function counter(action) {
        if (action == "increment") {
            count++;
        } else if (action == "decrement") {
            count--;
        }
        document.getElementById("display").innerHTML
            = `<h1>${count}</h1>`;
    }
    return counter;
}
const counter = createCounter();
