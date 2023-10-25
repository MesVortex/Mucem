function ShowMenu(){
  var x = document.getElementById('phone-nav')
  if(x.style.display == "none"){
    x.style.display = "flex";
  }else{
    x.style.display = "none";
  }
}

// -----------------form validation script-----------------

var nom = document.getElementById('name')
var email = document.getElementById('email')
var cin = document.getElementById('cin')
var phoneNum = document.getElementById('phoneNum')

var NameErrorMessage = document.getElementById('name-err')
var EmailErrorMessage = document.getElementById('email-err')
var cinErrorMessage = document.getElementById('cin-err')
var PhoneNumErrorMessage = document.getElementById('phone-num-err')

var form = document.getElementById('form');


form.addEventListener('submit', e => { 
  e.preventDefault();
  const NameCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const cinCheck = /^[A-Za-z]{1,2}\d{5,6}$/;
  const phoneNumCheck = /^0\d{9}$/;
if(NameCheck.test(nom.value) && EmailCheck.test(email.value) && cinCheck.test(cin.value) && phoneNumCheck.test(phoneNum.value)){
  form.submit();
}
})

var validateForm = 1;

nom.addEventListener('input', function(e) {
  const NameCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  var currentValue = e.target.value;
  var valid = NameCheck.test(currentValue);
  if(!valid){
    NameErrorMessage.style.display = 'block'
    validateForm = 0;
  } else {
    NameErrorMessage.style.display = 'none'
  }
})

// email error message 

email.addEventListener('input', function(e) {
  const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var currentValue = e.target.value;
  var valid = EmailCheck.test(currentValue);

  if(!valid){
    EmailErrorMessage.style.display = 'block'
  } else {
    EmailErrorMessage.style.display = 'none'
 
  }
})


// cin error message 

cin.addEventListener('input', function(e) {
  const cinCheck = /^[A-Za-z]{1,2}\d{5,6}$/;
  var currentValue = e.target.value;
  var valid = cinCheck.test(currentValue);

  if(!valid){
    cinErrorMessage.style.display = 'block'
  } else {
    cinErrorMessage.style.display = 'none'
  }
})


// phone num error message 

phoneNum.addEventListener('input', function(e) {
  const phoneNumCheck = /^0\d{9}$/;
  var currentValue = e.target.value;
  var valid = phoneNumCheck.test(currentValue);

  if(!valid){
    PhoneNumErrorMessage.style.display = 'block'
  } else {
    PhoneNumErrorMessage.style.display = 'none'
  } 
})

