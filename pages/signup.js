document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    var strength = 0;

if (password.length >= 8){
    strength++;
}
if(/\d/.test(password)){
    strength++;
}
if(/[A-Z]/.test(password)){
    strength++;
}
if(/[$-/:-?{-~!"^_`\[\]]/.test(password)){
    strength++;}
var strengthText = '';
switch (strength){
    case 0:
      strengthText = 'Weak'
      break;
      case 1:
        strengthText = 'Weak'
      break;
      case 2:
        strengthText = 'medium';
        break;
      case 3:
      case 4:
                strengthText = 'strong'
                break;

}
document.getElementById('passwordStrength').innerHTML = 'Password Strength: ' +  strengthText;
});
var 

function TogglePasswordShow(){
    var pasword = document.getElementById('password');
    var passwordShow = document.getElementById('eye');

    if(pasword.type === 'password'){
pasword.type = "hide";
passwordShow.type = 'show'
    }else{
        pasword.type = 'show'
        passwordShow.type = 'hide'
    }
}
function TogglePasswordShow2(){
    var pasword = document.getElementById('password');
    var passwordShow = document.getElementById('eyeSlash');

    if(pasword.type === 'password'){
pasword.type = "password";
passwordShow.type = 'hide'
    }else{
        pasword.type = 'password'
        passwordShow.type = 'show'
    }
}


