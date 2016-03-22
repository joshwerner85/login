var email =$('.email');
var password =$('.password');
var button =$('button');
var passworderror=$('#passworderror');
var usererror=$('#usererror');
var userpasserror=$('#userpassworderror');
button.on('click', function() {
    if (email.val()=== 'aaron@theironyard.com' && password.val() === 'password123') {
        window.location = 'http://www.theironyard.com';
        userpasserror.hide();
    }
    if(email.val() === 'admin@google.com' && password.val() === 'pandas') {
        window.location = 'http://www.theironyard.com';
        userpasserror.hide();
    }
    if(email.val() !== 'aaron@theironyard.com' && password.val() === 'password123') {
        passworderror.html('Please enter a valid username');
        userpasserror.hide();
    }
    if(email.val() === 'aaron@theironyard.com' && password.val() !== 'password123') {
        usererror.html('Please enter a valid password');
        userpasserror.hide();
    }
    if(email.val() === 'admin@google.com' && password.val() !== 'pandas') {
        usererror.html('Please enter a valid password');
        userpasserror.hide();
    }
    if(email.val() !== 'admin@google.com' && password.val() === 'pandas') {
        passworderror.html('Please enter a valid username');
        userpasserror.hide();
    }
    if(email.val() !== 'admin@google.com' || email.val() !== 'aaron@theironyard.com'
        || password.val() !== 'pandas' || password.val() !== 'password123') {
            userpasserror.html('Please enter a valid username and password');
    }
});