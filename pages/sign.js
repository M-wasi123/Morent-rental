
// var password2 = document.getElementById('inputPassword').addEventListener('click', function (){
//     if(password2.type === "password"){
// password2.type = "text"
// chek.textcontent = "hide"
//     }else{
//         password2.type = "password"
//         chek.textcontent = "show"
//     }
// })
function TogglePasswordShow(){
    var password2 = document.getElementById('inputPassword');
    var passwordShow = document.getElementById('check');

    if(password2.type === 'password'){
password2.type = "text";
passwordShow.type = 'hide'
    }else{
        password2.type = 'password'
        passwordShow.type = 'show'
    }
}