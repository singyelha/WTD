function validateForm(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var age = document.getElementById('age').value;

    var usernamrPattern = /^[a-zA-Z0-9_]{5,20}$/;
    var emailPattern = /^[a-zA-Z0-9._*-+]+.jnec@rub.edu.bt$/;

    if(!usernamePattern.test(username)){
        return true;
    }else{
        alert('wrong username pattern');
    }
}