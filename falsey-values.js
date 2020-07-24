function logTruthiness(val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}


logTruthiness(0);
logTruthiness(false);
logTruthiness(undefined);
logTruthiness(null);
logTruthiness(NaN);
logTruthiness("");