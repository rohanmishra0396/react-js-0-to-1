function checkPasswordStength(password) {
    let strength;

    if (password) {
        if (password.length <= 5)
            strength = "weak";
        else if (password.length <= 10)
            strength = "medium";
        else if (password.length <= 20)
            strength = "strong";
        else
            strength = "very strong";
    }
    else {
        strength = "weak";
    }

    console.log(strength);
}

checkPasswordStength(null);
checkPasswordStength("12345");
checkPasswordStength("123djvglisjflsijfc45");
checkPasswordStength("123abdhk");