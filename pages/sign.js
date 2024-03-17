document.getElementById('inputPassword').addEventListener('input', function() {
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
var password2 = document.getElementById('check').addEventListener('click', function (){
    if(password2.type === "password"){
password2.type = "text"
password2.textcontent = "hide"
    }else{}
})