window.onload = function(){
    var loginForm = document.getElementById('login-form');
    var inputEmail = document.querySelector('#email');
    var inputPwd = document.querySelector('#pwd');
    var expressions = {
        email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    }
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
    var validateEmail = function(){
        return !!inputEmail.value.match(expressions.email);
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
    var cleanError = function(e){
        switch (e.target.name){
            case "email":
                document.getElementById('error-email-hide').classList.remove('error-text');
                document.getElementById('error-email-hide').classList.add('error-text-hident');
            break;
            case "pwd":
                document.getElementById('error-pwd-hide').classList.remove('error-text');
                document.getElementById('error-pwd-hide').classList.add('error-text-hident');
            break;
        }
        return cleanError;
    }
    var validateForm = function(e){
        switch (e.target.name){
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
                if(validatePwd()){
                    document.getElementById('pwd').classList.remove('incorrect-input');
                }else{
                    document.getElementById('pwd').classList.add('incorrect-input');
                    document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
                    document.getElementById('error-pwd-hide').classList.add('error-text');
                }
            break;
        }
        return validateForm;
    }
    var finalCheck = function(e){ //modificación de la semana 07
        e.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
        var queryParams = `email=${inputEmail.value}&password=${inputPwd.value}`;
        if(validateEmail() && validatePwd()){
            validateForm(e);
            fetch(`${url}${queryParams}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.msg);
                alert(res.msg);
            })
            .catch((error) => {
                console.log(error.errors[0].msg);
                alert(error.errors[0].msg);
            })
            document.getElementById('error-div').classList.add('error-div-hident');
            document.getElementById('error-div').classList.remove('error-div');
        }else{
            if(!validateEmail()){
                document.getElementById('email').classList.add('incorrect-input');
                document.getElementById('error-email-hide').classList.remove('error-text-hident');
                document.getElementById('error-email-hide').classList.add('error-text');
                document.getElementById('error-div').classList.remove('error-div-hident');
                document.getElementById('error-div').classList.add('error-div');
                alert('Error: check the following fields');
            }
            if(!validatePwd()){
                document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
                document.getElementById('error-pwd-hide').classList.add('error-text');
                document.getElementById('pwd').classList.add('incorrect-input');
                document.getElementById('error-div').classList.remove('error-div-hident');
                document.getElementById('error-div').classList.add('error-div');
                alert('Error: check the following fields');
            }
            
        }
    }
    inputEmail.addEventListener('blur', validateForm);
    inputEmail.addEventListener('focus', cleanError);
    inputPwd.addEventListener('blur', validateForm);
    inputPwd.addEventListener('focus', cleanError);
    loginForm.addEventListener('submit', finalCheck);
}