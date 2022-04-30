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
                if(expressions.pwd.test(e.target.value)){
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
        console.log(e.target);
        e.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
        var queryParams = `email=${inputEmail.value}&password=${inputPwd.value}`;
        if(validateEmail() && validatePwd()){
            validateForm(e);
            fetch(`${url}${queryParams}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert(`Login success! \n${json.msg}`);
            })
            .catch((error) => {
                console.log(error);
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