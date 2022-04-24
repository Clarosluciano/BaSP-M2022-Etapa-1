window.onload = function(){
    var loginForm = document.getElementById('login-form');
    var inputs = document.querySelectorAll('#login-form input');
    var expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        pwd: /^[a-zA-Z0-9]{4,16}$/
    }
    var fields = {
        email: false,
        pwd: false
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
    inputs.forEach(function(input){
        input.addEventListener('focus', cleanError);
        input.addEventListener('blur', validateForm);
        return input;
    })
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        if(fields.email && fields.pwd){
            loginForm.reset();
        }
        return e;
    })
}