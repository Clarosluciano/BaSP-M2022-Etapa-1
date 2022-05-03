window.onload = function(){
    //-------------Variables section
    var loginForm = document.getElementById('login-form');
    var inputs = document.querySelectorAll('#login-form input')
    var inputEmail = document.querySelector('#email');
    var inputPwd = document.querySelector('#pwd');
    var close = document.querySelectorAll('.close')[0];
    var modal = document.querySelectorAll('.modal')[0];
    var modalContainer = document.querySelectorAll('.modal-container')[0];
    var expressions = {
        email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    }
    //-------------Validate functions section
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
    //-------------Function that operates with the focus and blur event
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
    //-------------Function associated with the fetch method
    var finalCheck = function(e){ 
        e.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
        var queryParams = `email=${inputEmail.value}&password=${inputPwd.value}`;
        if(validateEmail() && validatePwd()){
            validateForm(e);
            fetch(`${url}${queryParams}`)
            .then((response) => response.json())
            .then((json) => {
                localSetUser();
                showModal(`Success!`, 'modal-success', `${json.msg}`);
                console.log(json.msg);
            })
            .catch((error) => {
                showModal(`Error!`, 'modal-error', `${error.msg}`);
                console.log(error);
            })
        }else{
            if(!validateEmail()){
                document.getElementById('email').classList.add('incorrect-input');
                document.getElementById('error-email-hide').classList.remove('error-text-hident');
                document.getElementById('error-email-hide').classList.add('error-text');
                showModal('Something went wrong, check the fields', 'modal-error', 'Email or password invalid');
            }
            if(!validatePwd()){
                document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
                document.getElementById('error-pwd-hide').classList.add('error-text');
                document.getElementById('pwd').classList.add('incorrect-input');
                showModal('Something went wrong, check the fields', 'modal-error', 'Email or password invalid');
            }
            
        }
    }
    //-------------Modal function
    function showModal(titleTextModal, status, textData){
        modalContainer.style.opacity = '1';
        modalContainer.style.visibility = 'visible';
        modal.classList.toggle('modal-close');
        var titleModal = document.getElementById('title-modal').innerHTML = titleTextModal;
        var modalText = document.getElementById('text-modal').innerHTML = textData;
        document.getElementById('modal-content').classList.add(`${status}`);
    }
    //-------------Functions for save data in the local storage
    function localSetUser() {
		for (var i = 0; i < inputs.length; i++) {
			localStorage.setItem(inputs[i].name, inputs[i].value);
		}
	}
	function localGetUser() {
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = localStorage.getItem(inputs[i].name);
			if (inputs[i].value) {
				console.log(inputs[i].name + ': ' + inputs[i].value);
			}else{
                console.log('No entries in local storage');
            }
		}
	}
    localGetUser();
    //-------------Event listener section
    inputEmail.addEventListener('blur', validateForm);
    inputEmail.addEventListener('focus', cleanError);
    inputPwd.addEventListener('blur', validateForm);
    inputPwd.addEventListener('focus', cleanError);
    close.addEventListener('click', function(){
        modal.classList.toggle('modal-close');
        setTimeout(function(){
            modalContainer.style.opacity = '0';
            modalContainer.style.visibility = 'hidden';
        }, 800)
    });
    loginForm.addEventListener('submit', finalCheck);
}