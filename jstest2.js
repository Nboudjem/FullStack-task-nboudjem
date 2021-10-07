function mysayhello(firstname, lastname, sex) {
    let man = "Mr", woman = "Ms"; //this is local variable
    let honorific;

    if (sex === "man"){
        honorific = man;
    }    else {
            honorific = woman;
        }
    

    console.log("Hello" + honorific + " " + firstname + " " + lastname);
}