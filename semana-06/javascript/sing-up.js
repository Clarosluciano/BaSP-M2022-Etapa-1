window.onload = function(){
    var expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    var form = document.getElementById('form-sing-up');
    var inputs = document.querySelectorAll('#form-sing-up input');
    function onlyLetters(string) {
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ')) {
                return false;
            }
        }
        return true;
    }
    var onlyNums = function(num){
        for (var i = 0; i < num.length; i++){
            var n = num.charAt(i);
            if(isNaN(n)){
                return false;
            }
        }
        return true;
    }
    var lettersAndNums = function(ln){
        for (var i = 0; i < ln.length; i++){
            if(!((ln >= 'a' && ln <= 'z') || (ln >= 'A' && ln <= 'Z') || ln == '') && isNaN(ln)){
                return false
            }
        }
        return true
    }
    var validateForm = function(e){
        console.log(e.target);
        switch (e.target.name){
            case "firstName":
                if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
                    document.getElementById('firstName').classList.remove('incorrect-input');
                    document.getElementById('error-first-name-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-first-name-hide').classList.add('error-text');
                    document.getElementById('error-first-name-hide').classList.remove('error-text-hident');
                    document.getElementById('firstName').classList.add('incorrect-input');
                }
            break;
            case "lastName":
                if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
                    document.getElementById('lastName').classList.remove('incorrect-input');
                    document.getElementById('error-last-name-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-last-name-hide').classList.add('error-text');
                    document.getElementById('error-last-name-hide').classList.remove('error-text-hident');
                    document.getElementById('lastName').classList.add('incorrect-input');
                }
            break;
            case "dni":
                if (e.target.value.length >= 7 && onlyNums(e.target.value)) {
                    document.getElementById('dni').classList.remove('incorrect-input');
                    document.getElementById('error-dni-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-dni-hide').classList.add('error-text');
                    document.getElementById('error-dni-hide').classList.remove('error-text-hident');
                    document.getElementById('dni').classList.add('incorrect-input');
                }
            break;
            case "phone":
                if (e.target.value.length == 10 && onlyNums(e.target.value)) {
                    document.getElementById('phone').classList.remove('incorrect-input');
                    document.getElementById('error-phone-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-phone-hide').classList.add('error-text');
                    document.getElementById('error-phone-hide').classList.remove('error-text-hident');
                    document.getElementById('phone').classList.add('incorrect-input');
                }
            break;
            case "address":
                if (e.target.value.length >= 5 && lettersAndNums(e.target.value)) {
                    document.getElementById('address').classList.remove('incorrect-input');
                    document.getElementById('error-address-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-address-hide').classList.add('error-text');
                    document.getElementById('error-address-hide').classList.remove('error-text-hident');
                    document.getElementById('address').classList.add('incorrect-input');
                }
            break;
            case "locality":
                if (e.target.value.length > 3 && lettersAndNums(e.target.value)) {
                    document.getElementById('locality').classList.remove('incorrect-input');
                    document.getElementById('error-locality-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-locality-hide').classList.add('error-text');
                    document.getElementById('error-locality-hide').classList.remove('error-text-hident');
                    document.getElementById('locality').classList.add('incorrect-input');
                }
            break;
            case "postalCode":
                if (e.target.value.length >= 4 && e.target.value.length <= 5 && onlyNums(e.target.value)) {
                    document.getElementById('postalCode').classList.remove('incorrect-input');
                    document.getElementById('error-postal-code-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-postal-code-hide').classList.add('error-text');
                    document.getElementById('error-postal-code-hide').classList.remove('error-text-hident');
                    document.getElementById('postalCode').classList.add('incorrect-input');
                }
            break;
            case "email":
                if (expressions.email.test(e.target.value)) {
                    document.getElementById('email').classList.remove('incorrect-input');
                    document.getElementById('error-email-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-email-hide').classList.add('error-text');
                    document.getElementById('error-email-hide').classList.remove('error-text-hident');
                    document.getElementById('email').classList.add('incorrect-input');
                }
            break;
            case "pwd":
                if (e.target.value.length >= 8 && lettersAndNums(e.target.value)) {
                    document.getElementById('pwd').classList.remove('incorrect-input');
                    document.getElementById('error-pwd-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-pwd-hide').classList.add('error-text');
                    document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
                    document.getElementById('pwd').classList.add('incorrect-input');
                }
            break;
            case "rePwd":
                if (e.target.value.length >= 8 && lettersAndNums(e.target.value)) {
                    document.getElementById('rePwd').classList.remove('incorrect-input');
                    document.getElementById('error-re-pwd-hide').classList.remove('error-text');
                } else {
                    document.getElementById('error-re-pwd-hide').classList.add('error-text');
                    document.getElementById('error-re-pwd-hide').classList.remove('error-text-hident');
                    document.getElementById('rePwd').classList.add('incorrect-input');
                }
            break;
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
        if(fields[phone] == true){
            alert('Sign Up success!');
        }else{
            document.getElementById('error-div').classList.remove('error-div-hident');
            document.getElementById('error-div').classList.add('error-div');
            alert('Error: check the fields');
        }
        //no pude hacer funcionar el botón, no sé como guardar valores de un switch y luego
        //reutilizarlos para la validación final.
    }
    inputs.forEach((input) => {
        input.addEventListener('blur', validateForm);
        input.addEventListener('focus', cleanError);
    });
    form.addEventListener('submit', finalCheck);
}