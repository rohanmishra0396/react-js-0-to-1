function greetThePerson(person_name) {
    if (typeof person_name == 'string' && person_name != ""){
        console.log("Hello",person_name, "! How are you?");
    }
    else{
        console.log("Hello World! How are you?");
    }
}

greetThePerson("Mark")
greetThePerson()
greetThePerson(null)
greetThePerson(false)
greetThePerson("")
greetThePerson(100)
greetThePerson("007")
greetThePerson("1234")