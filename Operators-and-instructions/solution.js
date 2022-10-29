let divide = (a, b) => {
    if(b === 0) {
        console.log("Operacja niedozwolona");
    } else {
        console.log(a / b);
    }
}

divide(10,2);
divide(15,4);
divide(10,0);
