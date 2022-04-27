//------no pude hacer funcionar el botón, no sé como guardar valores de un switch y luego
//------reutilizarlos para la validación final. Así que empecé el código de cero.
window.onload = function(){
    var expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    var inputs = document.querySelectorAll('#form-sign-up input')
    var form = document.getElementById('form-sign-up');
    var inputFirstName = document.getElementById('firstName');
    var inputLastName = document.getElementById('lastName');
    var inputBirthday = document.getElementById('birthday');
    var inputDni = document.getElementById('dni');
    var inputPhone = document.getElementById('phone');
    var inputAddress = document.getElementById('address');
    var inputLocality = document.getElementById('locality');
    var inputPostalCode = document.getElementById('postalCode');
    var inputEmail = document.getElementById('email');
    var inputPwd = document.getElementById('pwd');
    var inputRePwd = document.getElementById('rePwd');
    function onlyLetters(string) {
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ')){
                var error = false;
            }else if (c == ''){
                var noEmpty = false;
            }else{
                return true
            }
        }
        return error && noEmpty;
    }
    var onlyNums = function(letnum){
        var includedNumbers = ['0','1','2','3','4','5','6','7','8','9'];
        for (var i = 0; i < letnum.length; i++){
            if(!includedNumbers.includes(letnum[i])){
                var error = false;
            }else if(letnum == ''){
                var noEmpty = false;
            }else{
                return true
            }
        }
        return error && noEmpty;
    }
    var lettersAndNums = function(letnum){
        var letter = false;
        var number = false;
        for (var i = 0; i < letnum.length; i++){
            if(onlyLetters(letnum[i])){
                letter = true;
            }else if(onlyNums(letnum[i])){
                number = true;
            }else{
                return false;
            }
        }
        return letter && number;
    }
    var lettersAndNumsAndSpace = function(letnum){
        for (var i = 0; i < letnum.length; i++){
            var ln = letnum.charAt(i);
            if(!((ln >= 'a' && ln <= 'z') || (ln >= 'A' && ln <= 'Z') || ln == ' ')){
                var letter = false;
            }else if(isNaN(ln)){
                var number = false;
            }else{
                return true;
            }
        }
        return letter && number
    }
    var validateFirstName = function(){
        if(!onlyLetters(inputFirstName.value)){
            document.getElementById('firstName').classList.add('incorrect-input');
            document.getElementById('error-first-name-hide').classList.add('error-text');
            document.getElementById('error-first-name-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateLastName = function(){
        if(!onlyLetters(inputLastName.value)){
            document.getElementById('lastName').classList.add('incorrect-input');
            document.getElementById('error-last-name-hide').classList.add('error-text');
            document.getElementById('error-last-name-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateBirthday = function(){
        var today = new Date();
        var inputDate = new Date(inputBirthday.value)
        if(inputDate > today){
            document.getElementById('birthday').classList.add('incorrect-input');
            document.getElementById('error-birthday-hide').classList.add('error-text');
            document.getElementById('error-birthday-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateDni = function(){
        if(!onlyNums(inputDni.value)){
            document.getElementById('dni').classList.add('incorrect-input');
            document.getElementById('error-dni-hide').classList.add('error-text');
            document.getElementById('error-dni-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validatePhone = function(){
        if(!onlyNums(inputPhone.value)){
            document.getElementById('phone').classList.add('incorrect-input');
            document.getElementById('error-phone-hide').classList.add('error-text');
            document.getElementById('error-phone-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateAddress = function(){
        if(!lettersAndNumsAndSpace(inputAddress.value)){
            document.getElementById('address').classList.add('incorrect-input');
            document.getElementById('error-address-hide').classList.add('error-text');
            document.getElementById('error-address-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateLocality = function(){
        if(!onlyLetters(inputLocality.value)){
            document.getElementById('locality').classList.add('incorrect-input');
            document.getElementById('error-locality-hide').classList.add('error-text');
            document.getElementById('error-locality-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validatePostalCode = function(){
        if(!onlyNums(inputPostalCode.value)){
            document.getElementById('postalCode').classList.add('incorrect-input');
            document.getElementById('error-postal-code-hide').classList.add('error-text');
            document.getElementById('error-postal-code-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateEmail = function(){
        if(!inputEmail.value.match(expressions.email)){
            document.getElementById('email').classList.add('incorrect-input');
            document.getElementById('error-email-hide').classList.add('error-text');
            document.getElementById('error-email-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validatePwd = function(){
        if(!lettersAndNums(inputPwd.value)){
            document.getElementById('pwd').classList.add('incorrect-input');
            document.getElementById('error-pwd-hide').classList.add('error-text');
            document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var validateRePwd = function(){
        if(!lettersAndNums(inputRePwd.value)){
            document.getElementById('rePwd').classList.add('incorrect-input');
            document.getElementById('error-re-pwd-hide').classList.add('error-text');
            document.getElementById('error-re-pwd-hide').classList.remove('error-text-hident');
            return false;
        }else{
            return true;
        }
    }
    var cleanError = function(e){
        switch (e.target.name){
            case "firstName":
                document.getElementById('firstName').classList.remove('incorrect-input');
                document.getElementById('error-first-name-hide').classList.remove('error-text');
                document.getElementById('error-first-name-hide').classList.add('error-text-hident');
            break;
            case "lastName":
                document.getElementById('lastName').classList.remove('incorrect-input');
                document.getElementById('error-last-name-hide').classList.remove('error-text');
                document.getElementById('error-last-name-hide').classList.add('error-text-hident');
            break;
            case "birthday":
                document.getElementById('birthday').classList.remove('incorrect-input');
                document.getElementById('error-birthday-hide').classList.remove('error-text');
                document.getElementById('error-birthday-hide').classList.add('error-text-hident');
            break;
            case "dni":
                document.getElementById('dni').classList.remove('incorrect-input');
                document.getElementById('error-dni-hide').classList.remove('error-text');
                document.getElementById('error-dni-hide').classList.add('error-text-hident');
            break;
            case "phone":
                document.getElementById('phone').classList.remove('incorrect-input');
                document.getElementById('error-phone-hide').classList.remove('error-text');
                document.getElementById('error-phone-hide').classList.add('error-text-hident');
            break;
            case "address":
                document.getElementById('address').classList.remove('incorrect-input');
                document.getElementById('error-address-hide').classList.remove('error-text');
                document.getElementById('error-address-hide').classList.add('error-text-hident');
            break;
            case "locality":
                document.getElementById('locality').classList.remove('incorrect-input');
                document.getElementById('error-locality-hide').classList.remove('error-text');
                document.getElementById('error-locality-hide').classList.add('error-text-hident');
            break;
            case "postalCode":
                document.getElementById('postalCode').classList.remove('incorrect-input');
                document.getElementById('error-postal-code-hide').classList.remove('error-text');
                document.getElementById('error-postal-code-hide').classList.add('error-text-hident');
            break;
            case "email":
                document.getElementById('email').classList.remove('incorrect-input');
                document.getElementById('error-email-hide').classList.remove('error-text');
                document.getElementById('error-email-hide').classList.add('error-text-hident');
            break;
            case "pwd":
                document.getElementById('pwd').classList.remove('incorrect-input');
                document.getElementById('error-pwd-hide').classList.remove('error-text');
                document.getElementById('error-pwd-hide').classList.add('error-text-hident');
            break;
            case "rePwd":
                document.getElementById('rePwd').classList.remove('incorrect-input');
                document.getElementById('error-re-pwd-hide').classList.remove('error-text');
                document.getElementById('error-re-pwd-hide').classList.add('error-text-hident');
            break;
        }
        return cleanError;
    }
    var finalCheck = function(e){
        e.preventDefault();
        if(validateFirstName(e) && validateLastName(e) && validateBirthday(e) && validateDni(e) && validatePhone(e)
         && validateAddress(e) && validateLocality(e) && validatePostalCode(e) && validateEmail(e) && validatePwd(e) && validateRePwd(e)){
            alert('Sign Up success!');
            document.getElementById('error-div').classList.add('error-div-hident');
            document.getElementById('error-div').classList.remove('error-div');
        }else{
            document.getElementById('error-div').classList.remove('error-div-hident');
            document.getElementById('error-div').classList.add('error-div');
            alert('Error: check the fields');
        }
    }
    inputFirstName.addEventListener('blur', validateFirstName);
    inputLastName.addEventListener('blur', validateLastName);
    inputBirthday.addEventListener('blur', validateBirthday);
    inputDni.addEventListener('blur', validateDni);
    inputPhone.addEventListener('blur', validatePhone);
    inputAddress.addEventListener('blur', validateAddress);
    inputLocality.addEventListener('blur', validateLocality);
    inputPostalCode.addEventListener('blur', validatePostalCode);
    inputEmail.addEventListener('blur', validateEmail);
    inputPwd.addEventListener('blur', validatePwd);
    inputRePwd.addEventListener('blur', validateRePwd);
    inputs.forEach((input) => {
        input.addEventListener ('focus', cleanError)
    })
    form.addEventListener('submit', finalCheck);
}