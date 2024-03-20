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
var inputPassword = document.getElementById('password');
var eyePassword = document.getElementById('eye')
var eyePasswordSlash = document.getElementById('eyeSlash')

inputPassword.addEventListener('click', function() {
    if (inputPassword) {
        eyePasswordSlash.style.display = 'block'
    }
})
inputPassword.addEventListener('click', function() {
    if (inputPassword.type === 'text') {
        eyePassword.style.display = 'block'
    }
})
eyePasswordSlash.addEventListener('click', function () {
    if (inputPassword.type === 'text') {
        eyePassword.style.display = 'block'
        eyePasswordSlash.style.display= 'none'
    }
})
eyePassword.addEventListener('click', function () {
    if (inputPassword.type === 'password') {
        eyePassword.style.display = 'none'
        eyePasswordSlash.style.display= 'block'
    }
})

function TogglePasswordShow(){
    var pasword = document.getElementById('password');
    var passwordShow = document.getElementById('eye');

    if(pasword.type === 'text'){
pasword.type = "password";
passwordShow.type = 'show'
    }
}
function TogglePasswordShow2(){
    var pasword = document.getElementById('password');
    var passwordShow = document.getElementById('eyeSlash');

    if(pasword.type === 'password'){
pasword.type = "text";
passwordShow.type = 'hide'
    }
}


