let btn = document.querySelector(".buttom");
let em2 = document.querySelector(".email-error");
let btn2 = document.querySelector(".btn-error2");


/*
btn.addEventListener("click", function(e){
    e=em1;
    validateEmail2(e);
    if(e == true){
        btn.classList.add('efc');
    }
});*/

/*
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
*/


function validateEmail3(e){
var mailRegex = /\S+@\S+\.\S+/;

  em2.classList.remove("block");
  btn2.classList.remove("block");
  btn.classList.remove('efc');
  em2.classList.remove("efc2");

  if(e.value.match(mailRegex)) {
    btn.classList.add('efc');
    em2.innerHTML = 'Valid email';
    em2.classList.add("efc");
    em2.classList.add("block");
      return true;
  } else{
    em2.innerHTML = 'Please provide a valid email';
    em2.classList.add("efc2");
    em2.classList.add("block");
    btn2.classList.add("block");
    return false;
  }
}
