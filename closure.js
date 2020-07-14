// Closures are a way of privatizing data in javascript.

// There is no way of any outside entity to change the value of y, since the scope is inside that function.
// Only the outer function and inner functions have access to it.

function outer(x) {
    let y = 10;

    function inner() {
        return x + y;
    }
    return inner();
}
console.log(outer(120))