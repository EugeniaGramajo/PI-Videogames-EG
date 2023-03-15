export const validateUsername = (username)=>{
    const regex = /^[a-z]{6,10}$/
   return regex.test(username)
}

export const validatePassword = (password)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$/
    return regex.test(password)
}
