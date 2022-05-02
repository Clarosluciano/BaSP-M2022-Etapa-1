window.onload = function(){
    //-------------Variables section
    var expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    var form = document.getElementById('form-sign-up');
    var inputs = document.querySelectorAll('#form-sign-up input')
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
        if(inputFirstName.value.length > 3 && (onlyLetters(inputFirstName.value))){
            return true;
        }else{
            document.getElementById('firstName').classList.add('incorrect-input');
            document.getElementById('error-first-name-hide').classList.add('error-text');
            document.getElementById('error-first-name-hide').classList.remove('error-text-hident');
            return false;
        }
    }
    var validateLastName = function(){
        if(inputLastName.value.length > 3 && (onlyLetters(inputLastName.value))){
            return true;
        }else{
            document.getElementById('lastName').classList.add('incorrect-input');
            document.getElementById('error-last-name-hide').classList.add('error-text');
            document.getElementById('error-last-name-hide').classList.remove('error-text-hident');
            return false;
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
    function formatDate(date) {
        let dateArray = date.split('-');
        return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
      }
    var validateDni = function(){
        if(inputDni.value.length >= 7 && (onlyNums(inputDni.value))){
            return true;
        }else{
            document.getElementById('dni').classList.add('incorrect-input');
            document.getElementById('error-dni-hide').classList.add('error-text');
            document.getElementById('error-dni-hide').classList.remove('error-text-hident');
            return false;
        }
    }
    var validatePhone = function(){
        if(inputPhone.value.length >= 10 && (onlyNums(inputPhone.value))){
            return true;
        }else{
            document.getElementById('phone').classList.add('incorrect-input');
            document.getElementById('error-phone-hide').classList.add('error-text');
            document.getElementById('error-phone-hide').classList.remove('error-text-hident');
            return false;
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
        if(inputLocality.value.length > 3 && (onlyLetters(inputLocality.value))){
            return true;
        }else{
            document.getElementById('locality').classList.add('incorrect-input');
            document.getElementById('error-locality-hide').classList.add('error-text');
            document.getElementById('error-locality-hide').classList.remove('error-text-hident');
            return false;
        }
    }
    var validatePostalCode = function(){
        if(inputPostalCode.value.length >= 4 && inputPostalCode.value.length <= 5 && (onlyNums(inputPostalCode.value))){
            return true;
        }else{
            document.getElementById('postalCode').classList.add('incorrect-input');
            document.getElementById('error-postal-code-hide').classList.add('error-text');
            document.getElementById('error-postal-code-hide').classList.remove('error-text-hident');
            return false;
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
        if(inputPwd.value.length > 8 && (lettersAndNums(inputPwd.value))){
            return true;
        }else{
            document.getElementById('pwd').classList.add('incorrect-input');
            document.getElementById('error-pwd-hide').classList.add('error-text');
            document.getElementById('error-pwd-hide').classList.remove('error-text-hident');
            return false;
        }
    }
    var validateRePwd = function(){
        var inputPass1 = document.getElementById('pwd');
        var inputPass2 = document.getElementById('rePwd');
        if(!(inputPass1.value !== inputPass2.value)){
            return true;
        }else{
            document.getElementById('rePwd').classList.add('incorrect-input');
            document.getElementById('error-re-pwd-hide').classList.add('error-text');
            document.getElementById('error-re-pwd-hide').classList.remove('error-text-hident');
            return false;
        }
    }
    //-------------Function that operates with the focus event
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
    //-------------Functions associated whit the fetch method
    var finalCheck = function(e){
        e.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
        var queryParams = `name=${inputFirstName.value}&lastName=${inputLastName.value}&dob=${formatDate(inputBirthday.value)}&dni=${inputDni.value}&phone=${inputPhone.value}&address=${inputAddress.value}&city=${inputLocality.value}&zip=${inputPostalCode.value}&email=${inputEmail.value}&password=${inputPwd.value}`;
        if(validateFirstName(e) && validateLastName(e) && validateBirthday(e) && validateDni(e) && validatePhone(e)
         && validateAddress(e) && validateLocality(e) && validatePostalCode(e) && validateEmail(e) && validatePwd(e) && validateRePwd()){
            fetch(`${url}${queryParams}`)
            .then((response) => response.json())
            .then((json) => {
                if(json.success){
                    localSetUser();
                    alert('Success! ' + json.msg +  responseData(json));
                    console.log(responseData(json));
                }
            })
            .catch((reject) => alert(reject))
        }else{
            if(!validateRePwd()){
                alert('Error: passwords do not match')
            }else{
                fetch(`${url}${queryParams}`)
                .then((response) => response.json())
                .then((json) => {
                    if(!json.success){
                        alert('Error: check the following fields:\n' + errorData(json))
                    }
                })
                .catch((reject) => alert(reject))
            }
        }
    }
    function responseData(json) {
        var successMsg = '';
        var successData = Object.entries(json.data);
        for (var i = 1; i < successData.length; i++) {
            successMsg += '\n' + successData[i][0] + ': ' + successData[i][1];
        }
        return successMsg;
    }
    function errorData(json) {
        var errorMsg = '';
        var errorData = Object.entries(json.errors);
        for (var i = 1; i < errorData.length; i++) {
            errorMsg += '\n' + JSON.stringify(errorData[i][1].msg);
        }
        return errorMsg;
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