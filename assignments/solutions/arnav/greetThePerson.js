function greetThePerson(name) {
    if(!name)
        name = 'World';
    console.log('Hello '+name+'! How are you');
}

greetThePerson("Mark");
greetThePerson(undefined);
greetThePerson(null);
greetThePerson(false);

