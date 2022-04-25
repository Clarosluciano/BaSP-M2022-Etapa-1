window.onload = function(){
    var loginForm = document.getElementById('login-form');
    var inputEmail = document.querySelector('#email');
    var inputPwd = document.querySelector('#pwd');
    var expressions = {
        email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        pwd: /^[a-zA-Z0-9]{4,16}$/
    }
    var validateEmail = function(){
        return !!inputEmail.value.match(expressions.email);
    }
    var validatePwd = function(){
        return !!inputPwd.value.match(expressions.pwd);
    }
    var cleanError = function(e){
        switch (e.target.name){
            case "email":
                document.getElementById('error-email-hide').classList.remove('error-email');
                document.getElementById('error-email-hide').classList.add('error-email-hident');
            break;
            case "pwd":
                document.getElementById('error-pwd-hide').classList.remove('error-pwd');
                document.getElementById('error-pwd-hide').classList.add('error-pwd-hident');
            break;
        }
        return cleanError;
    }
    var validateForm = function(e){
        console.log(e.target);
        switch (e.target.name){
            case "email":
                if(expressions.email.test(e.target.value)){
                    document.getElementById('email').classList.remove('incorrect-input');
                }else{
                    document.getElementById('email').classList.add('incorrect-input');
                    document.getElementById('error-email-hide').classList.remove('error-email-hident');
                    document.getElementById('error-email-hide').classList.add('error-email');
                }
            break;
            case "pwd":
                if(expressions.pwd.test(e.target.value)){
                    document.getElementById('pwd').classList.remove('incorrect-input');
                }else{
                    document.getElementById('pwd').classList.add('incorrect-input');
                    document.getElementById('error-pwd-hide').classList.remove('error-pwd-hident');
                    document.getElementById('error-pwd-hide').classList.add('error-pwd');
                }
            break;
        }
        return validateForm;
    }
    var finalCheck = function(e){
        console.log(e.target);
        e.preventDefault();
        if(validateEmail() && validatePwd()){
            validateForm();
        }else{
            document.getElementById('email').classList.add('incorrect-input');
            document.getElementById('pwd').classList.add('incorrect-input');
            document.getElementById('error-div').classList.remove('error-div-hident');
            document.getElementById('error-div').classList.add('error-div');
        }
        return finalCheck;
    }
    inputEmail.addEventListener('blur', validateForm);
    inputEmail.addEventListener('focus', cleanError);
    inputPwd.addEventListener('blur', validateForm);
    inputPwd.addEventListener('focus', cleanError);
    loginForm.addEventListener('submit', finalCheck);
}