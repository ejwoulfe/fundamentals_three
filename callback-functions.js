// Callbacks are functions passed into another function as an argument to be executed later.
// The useInformation function uses a callback to retrieve the data from the grabInfo function.
// It then uses the data given from the callback and makes a print statement from it.

function grabInfo() {
    let data = {
        firstName: "Ed",
        lastName: "Woulfe"
    }
    return data;
}


function useInformation(info) {

    return "Here is the data that was retrieved:" + "\n" + info.firstName + " " + info.lastName;

}

console.log(useInformation(grabInfo()))