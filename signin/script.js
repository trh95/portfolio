// document.getElementById("button").addEventListener("click", function(){
//     var name = document.getElementById("name").value;
//     var name2 = document.getElementById("name2").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var password2 = document.getElementById("password2").value;
//     //var checkbox = document.getElementById("checkbox").value;

//     var nameRegex = /^.{3,}$/;
//     var name2Regex = /^.{3,}$/;
//     var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//     //pw min 6char
//     var passwordRegex = /^.{6,}$/;


//     if(name){
//         if (!nameRegex.test(name)) {
//             var name = document.getElementById("name");
//              name.className += " is-invalid ";
//              return true;
//         } else {
//             name.classList.remove(" is-valid ");
//             name.className += " is-valid ";
//             return false;
//         }
        
       
        
//     }
//     else if(!name2Regex.test(name2)){
//         alert("The format of last name is not correct!");
//     }
//     else if(!emailRegex.test(email)){
//         alert("The format of the e-mail address is not correct!");
//     }
//     else if(password != password2){
//         alert("Passwords do not match!");
//     }
//     else if(!passwordRegex.test(password)){
//         alert("Password must be at least 6 characters long");
//     }
//     // else if(checkbox.target.checked){
//     //     alert("check")
//     // }
//     else{
//         alert("Successful registration!");
//     }
// });

// document.getElementById("buttonLog").addEventListener("click", function(){
//     var emailLog = document.getElementById("emailLog").value;
//     var passwordLog = document.getElementById("passwordLog").value;

//     var emailLogRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//     //pw min 6char
//     var passwordLogRegex = /^.{6,}$/;

//     if(!emailLogRegex.test(emailLog)){
//         alert("The format of the e-mail address is not correct!");
//     }
//     else if(!passwordLogRegex.test(passwordLog)){
//         alert("Password must be at least 6 characters long");
//     }
//     // else if(checkbox.target.checked){
//     //     alert("check")
//     // }
//     else{
//         alert("Successful Sign In!");
//     }
// });


// document.getElementById("buttonLog").addEventListener("focusout", function(){
//     var emailLog = document.getElementById("emailLog").value;
//     var emailLogRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

//     if(!emailLogRegex.test(emailLog)){
//         alert("The format of the e-mail address is not correct!");
//     }
//     else if(!passwordLogRegex.test(passwordLog)){
//         alert("Password must be at least 6 characters long");
//     }
//     // else if(checkbox.target.checked){
//     //     alert("check")
//     // }
//     else{
//         alert("Successful Sign In!");
//     }
// });



const form = document.getElementById('form');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const emailLog = document.getElementById('emailLog');
const passwordLog = document.getElementById('passwordLog');

//blur 
form.addEventListener('focusout', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const name1Value = name1.value.trim();
    const name2Value = name2.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	
	if(name1Value === '') {
		setErrorFor(name1, 'First name cannot be blank');
	} else if(!isName1(name1Value)) {
		setErrorFor(name1, 'The format of first name is not correct!');
	} else {
		setSuccessFor(name1);
	}

    if(name2Value === '') {
		setErrorFor(name2, 'Last name cannot be blank');
	} else if(!isName2(name2Value)) {
		setErrorFor(name2, 'The format of last name is not correct!');
	} else {
		setSuccessFor(name2);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(!isPassword(passwordValue)) {
		setErrorFor(password, 'Password must be at least 6 characters long');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input;
	formControl.className = 'form-control form-control-lg is-invalid';
    
	error.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input;
	formControl.className = 'form-control form-control-lg is-valid';
}

function isName1(name1) {
	return /^.{3,}$/.test(name1);
}
function isName2(name2) {
	return /^.{3,}$/.test(name2);
}

function isEmail(email) {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}
function isPassword(password) {
	return /^.{6,}$/.test(password);
}




