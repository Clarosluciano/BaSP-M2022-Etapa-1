window.onload = function(){
    var form = document.getElementById('form-sing-up');
    var inputs = document.querySelectorAll('#form-sing-up input');
    var inputEmail = document.getElementById('email');
    var expressions = {
        email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    };
    var validateEmail = function(){
        return !!inputEmail.value.match(expressions.email);
    }
    var onlyLetters = function(string){
        var tooShort = false
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c == ''))) {
                return false;
            }else{
                if(c < 3){
                    tooShort = true;
                }
            }
        }
        return tooShort;
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
    var lettersAndNums = function(letnum){
        var space = false;
        for (var i = 0; i < letnum.length; i++){
            var ln = letnum.charAt(i);
            if(!((ln >= 'a' && ln <= 'z') || (ln >= 'A' && ln <= 'Z') || (ln == ' ') && isNaN(ln))){
                return false;
            }else{
                if(ln == ' '){
                    space = true;
                }
            }
        }
        return space;
    }
    var validateFieldText = function(onlyLetters, input, field){
        if(onlyLetters(input.value)){
            document.getElementById(`${field}`).classList.remove('incorrect-input');
        }else{
            document.getElementById(`${field}`).classList.add('incorrect-input');
            document.getElementById(`error-${field}-hide`).classList.remove('error-text-hident');
            document.getElementById(`error-${field}-hide`).classList.add('error-text');
        }
    }
    var validateFieldNum = function(onlyNums, input, field){
        if(onlyNums(input.value)){
            document.getElementById(`${field}`).classList.remove('incorrect-input');
        }else{
            document.getElementById(`${field}`).classList.add('incorrect-input');
            document.getElementById(`error-${field}-hide`).classList.remove('error-text-hident');
            document.getElementById(`error-${field}-hide`).classList.add('error-text');
        }
    }
    var validateFieldTextNum = function(lettersAndNums, input, field){
        if(lettersAndNums(input.value)){
            document.getElementById(`${field}`).classList.remove('incorrect-input');
        }else{
            document.getElementById(`${field}`).classList.add('incorrect-input');
            document.getElementById(`error-${field}-hide`).classList.remove('error-text-hident');
            document.getElementById(`error-${field}-hide`).classList.add('error-text');
        }
    }
    var errorArrayCollector = function(){
        var errorArray = [];
        for(var i = 0; i == false; i++){
            errorArray[i] = i;
        }
    }
    var validateForm = function(e){
        console.log(e.target);
        switch (e.target.name){
            case "first-name":
                if(e.target.value.length < 3){
                    validateFieldText(onlyLetters, e.target, 'first-name');
                }
            break;
            case "last-name":
                if(e.target.value.length < 3){
                    validateFieldText(onlyLetters, e.target, 'last-name');
                }
            break;
            /*case "birthday":
                validateField(e.target, 'birthday');
            break;*/
            case "dni":
                if(e.target.value.length < 7){
                    validateFieldNum(onlyNums, e.target, 'dni');
                }
            break;
            case "phone":
                if(e.target.value.length < 10){
                    validateFieldNum(onlyNums, e.target, 'phone');
                }
            break;
            case "address":
                if(e.target.value.length < 5){
                    validateFieldTextNum(lettersAndNums, e.target, 'address');
                }
            break;
            case "locality":
                if(e.target.value.length < 3){
                    validateFieldTextNum(lettersAndNums, e.target, 'locality');
                }
            break;
            case "postal-code":
                if(e.target.value.length < 5){
                    validateFieldNum(onlyNums, e.target, 'postal-code');
                }
            break;
            case "email":
                if(expressions.email.test(e.target.value)){
                    document.getElementById('email').classList.remove('incorrect-input');
                }else{
                    document.getElementById('email').classList.add('incorrect-input');
                    document.getElementById('error-email-hide').classList.remove('error-text-hident');
                    document.getElementById('error-email-hide').classList.add('error-text');
                }
            break;
            case "pwd":
                if(e.target.value.length < 8){
                    validateFieldTextNum(lettersAndNums, e.target, 'pwd');
                }
            break;
            case "re-pwd":
                if(e.target.value.length < 8){
                    validateFieldTextNum(lettersAndNums, e.target, 're-pwd');
                }
            break;
        }
        return true;
    }  
    var cleanError = function(e){
        switch (e.target.name){
            case "first-name":
                document.getElementById('first-name').classList.remove('incorrect-input');
                document.getElementById('error-first-name-hide').classList.remove('error-text');
                document.getElementById('error-first-name-hide').classList.add('error-text-hident');
            break;
            case "last-name":
                document.getElementById('last-name').classList.remove('incorrect-input');
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
            case "postal-code":
                document.getElementById('postal-code').classList.remove('incorrect-input');
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
            case "re-pwd":
                document.getElementById('re-pwd').classList.remove('incorrect-input');
                document.getElementById('error-re-pwd-hide').classList.remove('error-text');
                document.getElementById('error-re-pwd-hide').classList.add('error-text-hident');
            break;
        }
        return cleanError;
    }
    var finalCheck = function(e){
        console.log(e.target);
        e.preventDefault();
        if(validateEmail() && validateForm(e)){
            validateForm(e);
            alert('Sign Up success!')
        }else{
            document.getElementById('email').classList.add('incorrect-input');
            document.getElementById('pwd').classList.add('incorrect-input');
            document.getElementById('error-div').classList.remove('error-div-hident');
            document.getElementById('error-div').classList.add('error-div');
            alert('Error: check the following fields');
        }
        
    }
    inputs.forEach(function (input) {
        input.addEventListener('blur', validateForm);
        input.addEventListener("focus", cleanError);
    });
    form.addEventListener('submit', finalCheck);
}