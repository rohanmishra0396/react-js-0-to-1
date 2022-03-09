function checkPasswordStength(password) {
    if (password.length <= 5) return 'weak'
    else if (password.length <= 10) return 'medium'
    else if (password.length <= 20 ) return 'strong'
    return 'very strong'
}

console.log(checkPasswordStength('1234512345123451234512345'))