export const validateDataSignUp = (email, password, name) => {
    const isEmailPatternValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassPatternValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password)
    const isNameValid = /^[a-zA-Z]/.test(name)

    if (!isNameValid) return 'Name is not valid';
    if (!isEmailPatternValid) return 'Email not valid';
    if (!isPassPatternValid) return 'Password not valid';


    return null;
}

export const validateDataSignIn = (email, password) => {
    const isEmailPatternValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassPatternValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password)

    if (!isEmailPatternValid) return 'Email not valid';
    if (!isPassPatternValid) return 'Password not valid';


    return null;
}


