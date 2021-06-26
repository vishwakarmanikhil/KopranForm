$(function() {
   $("input[name='ROI_20_21']").click(function() {
     if ($("#show_ROI_current").is(":checked")) {
       $(".ROI_div_current").show();
     } else {
       $(".ROI_div_current").hide();
     }
   });
});

$(function() {
   $("input[name='ROI_19_20']").click(function() {
     if ($("#show_ROI_previous").is(":checked")) {
       $(".ROI_div_previous").show();
     } else {
       $(".ROI_div_previous").hide();
     }
   });
});

$(function() {
   $("input[name='user_valid_pan']").click(function() {
     if ($("#show_pan").is(":checked")) {
       $(".user_pan_upload_div").show();
     } else {
       $(".user_pan_upload_div").hide();
     }
   });
});


jQuery.validator.addMethod("blankNotAllowed", function(value, element) {
    return this.optional(element) || /^\S*$/.test(value);
}, "blank spaces are not allowed");

jQuery.validator.addMethod("validString", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9 !@#$&*()\-_.,?]+$/.test(value);
}, "Enter valid string");

jQuery.validator.addMethod("lettersonlys", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Letters only please");

jQuery.validator.addMethod("validPhoneNumber", function(value, element) {
    return this.optional(element) || /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(value);
}, "enter valid phone number!");


//for adding validation css to input field
jQuery.validator.setDefaults({
    highlight: function(element) {
        jQuery(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function(element) {
        jQuery(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
    },
    errorElement: 'span',
    errorClass: 'label label-danger',
    errorPlacement: function(error, element) {
        if(element.parent('.form-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});


//start of jquery validation for Signup form
$( document ).ready( function () {
    $( "#tds_tcs_form" ).validate( {
    normalizer: function( value ) {
        return $.trim( value );
    },
    rules: {
        user_full_name:{
            required:true,
            validString:true,
            minlength: 5,
            maxlength:25
        },
        user_username:{
            required : true,
            minlength: 8,
            maxlength : 16,
            usernameValidation: true
        },
        user_email:{
            required : true,
            email: true
        },
        user_password:{
            required: true,
            strongPassword:true,
            minlength:8,
            maxlength:16
        },
        user_confirm_password:{
            required:true,
            equalTo:"#inputPassword"
        }
    },
    messages: {
        user_full_name:{
            required: "please enter full name",
            validString:"Only alphabets and spaces are allowed",
            minlength:"Enter more than 5 characters",
            maxlength:"less than 26 characters are allowed"
        },
         user_username:{
            required:"please enter username",
            minlength:"Too short > 7",
            maxlength:"Too long < 17",
            usernameValidation: "Your Username must contain 1 alphabets, 1 number with special characters(#$@!%&*?_)"
        }, 
        user_email:{
            required:"please enter E-mail address",
            email:"Enter valid email address!"
        },
        user_password: {
            required: "please enter password",
            strongPassword:"Your password must be at least 8 characters. atleast 1 uppercase and 1 lowercase alphabets, 1 special character(#$@!%&*?_) and 1 number.",
            minlength: "password more than 7 characters",
            maxlength:"password less than 17 characters"
        },
        user_confirm_password:{
            required: "please enter confirm password",
            equalTo:"password and confirm password mismatch"
        }
    }
    });
});

