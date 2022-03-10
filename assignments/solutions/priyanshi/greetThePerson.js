function greetThePerson(name) {

    if (typeof name == "string") {
        console.log("Hello " + name + "! How are you?");
    }
    else {
        console.log("Hello World! How are you?");
    }
}

greetThePerson(undefined);
greetThePerson(false);
greetThePerson("Wendy");