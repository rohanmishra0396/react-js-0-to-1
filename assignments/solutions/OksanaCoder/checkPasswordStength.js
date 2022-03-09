
function checkPasswordStength(password) {
   if (password <= 5) {
     return 'weak'
   } else if (password <= 10) {
     return 'medium'
   } else if (password <= 20) {
      return 'strong'
   } else if (password > 20) {
      return 'very strong'
    }
        
}

console.log(checkPasswordStength(10))