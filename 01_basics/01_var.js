const accountId = 654411
var accountEmail = "izhar@gmail.com"
let accountPassword = "qwerty"
accountCity = "Mumbai"

// const cannot be changed // accountId = 677678

accountEmail = "abc@xyz.com"
accountPassword = "asdfgh"
accountCity = "Delhi"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])
/*
    Prefer use var 
    because of issue in block
    scope and functional scope.
*/