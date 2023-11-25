
function validateForm() {
    // body...
    var first_name = document.myForm.first_name.value;
    var last_name = document.myForm.last_name.value;
    var user_name = document.myForm.user_name.value;
    var user_password = document.myForm.user_password.value;
    var confirm_password = document.myForm.confirm_password.value;
    var email = document.myForm.email.value;



    if (first_name=="" || first_name==null) 
    {
        document.getElementById('first_name').innerHTML = "Please Enter Your First Nmae !!!"
        return false;
    } 
    else
    {
        document.getElementById('first_name').innerHTML = ""
    }

    //last name
    if(last_name=="" || last_name==null)
    {
     document.getElementById('last_name').innerHTML = "Please Enter Your Last Nmae !!!"
     return false;
    }
    else
    {
        document.getElementById('last_name').innerHTML = ""
    }

    //user Name
    if(user_name=="" || user_name==null)
    {
     document.getElementById('user_name').innerHTML = "Please Enter Your Last Nmae !!!"
     return false;
    }
    else
    {
        document.getElementById('user_name').innerHTML = ""
    }

    //uer password
    if(user_password=="" || user_password==null)
    {
     document.getElementById('user_password').innerHTML = "Please Enter Your Password !!!"
     return false;
    }
    else
    {
        document.getElementById('user_password').innerHTML = ""
    }

     //confrom psword
    if(confirm_password=="" || confirm_password==null)
    {
     document.getElementById('confirm_password').innerHTML = "Please Enter Your confirm_password !!!"
     return false;
    }
    else
    {
        if(confirm_password!=user_password)
        {
            document.getElementById('confirm_password').innerHTML = "pasword must be same"
            return false;
        }
        else
        {
            document.getElementById('confirm_password').innerHTML = ""
        }
    }

    //email
    if(email=="" || email==null)
    {
     document.getElementById('email').innerHTML = "Please Enter Your Email !!!"
     return false;
    }
    else
    {
        document.getElementById('email').innerHTML = ""
        document.getElementById('success_message').style.display = "";
    }
}


/*
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your First Name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your Last Name'
                    }
                }
            },
			 user_name: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Username'
                    }
                }
            },
			 user_password: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },
			confirm_password: {

                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please confirm your Password'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
            contact_no: {
                validators: {
                  stringLength: {
                        min: 12, 
                        max: 12,
                    notEmpty: {
                        message: 'Please enter your Contact No.'
                     }
                }
            },
			 department: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Department/Office'
                    }
                }
            },
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

*/