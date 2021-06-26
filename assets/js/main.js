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

jQuery.validator.addMethod("validPancardNumber", function(value, element) {
    return this.optional(element) || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
}, "enter valid Pancard number!");

jQuery.validator.addMethod("filesize", function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');

jQuery.validator.addMethod("requiredIfCheckedPan", function (val, ele, arg) {
    if ($("#show_pan").is(":checked") && ($.trim(val) == '')) { return false; }
    return true;
}, "This field is required if is checked...");

jQuery.validator.addMethod("requiredIfCheckedROICurrent", function (val, ele, arg) {
    if ($("#show_ROI_current").is(":checked") && ($.trim(val) == '')) { return false; }
    return true;
}, "This field is required if is checked...");

jQuery.validator.addMethod("requiredIfCheckedROIPrevious", function (val, ele, arg) {
    if ($("#show_ROI_previous").is(":checked") && ($.trim(val) == '')) { return false; }
    return true;
}, "This field is required if is checked...");


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
        user_organization_name:{
            required:true,
            validString:true,
            minlength: 5,
            maxlength:150
        },
        user_type:{
            required : true
        },
        user_valid_pan:{
            required : true
        },
        user_pan:{
            required: {requiredIfCheckedPan: true},
            validPancardNumber:true,
            minlength:10,
            maxlength:10
        },
        user_20_21_turnover:{
            required: true
        },
        ROI_20_21:{
            required: true
        },
        ack_number_current20_21:{
            required:{requiredIfCheckedROICurrent: true},
            validString: true
        },
        proof_file_current20_21:{
            required:{requiredIfCheckedROICurrent: true},
            extension:"jpg|jpeg|png|docx|rtf|doc|pdf",
            filesize: "5,242,880"
        },
        user_19_20_turnover:{
            required: true
        },
        ROI_19_20:{
            required: true
        },
        ack_number_previous19_20:{
            required:{requiredIfCheckedROIPrevious: true},
            validString: true
        },
        proof_file_previous19_20:{
            required:{requiredIfCheckedROIPrevious: true},
            extension:"jpg|jpeg|png|docx|rtf|doc|pdf",
            filesize: "5,242,880"
        },
        tdstcs_20_21:{
            required: true
        },
        tdstcs_19_20:{
            required: true
        },
        contact_user_name:{
            required: true,
            lettersonlys: true,
            minlength: 2,
            maxlength: 50
        },
        contact_user_designation:{
            required: true,
            validString: true,
            minlength: 2,
            maxlength: 50
        },
        contact_user_address:{
            required: true,
            validString: true,
            minlength: 10,
            maxlength: 150
        },
        contact_user_city:{
            required: true,
            validString: true,
            minlength: 2,
            maxlength: 100
        },
        contact_user_state:{
            required: true,
            validString: true,
            minlength: 2,
            maxlength: 100
        },
        contact_user_pincode:{
            required: true,
            digits: true,
            minlength: 6,
            maxlength: 6
        },
        contact_user_email:{
            required: true,
            email: true
        },
        contact_user_phone_number:{
            required: true,
            validPhoneNumber: true,
            minlength: 10,
            maxlength:10
        },
        accept_pp:{
            required: true
        }
        
    },
    messages: {
        user_organization_name:{
            required: "Please enter your Orgainization full name",
            validString:"can contain alphabets, number and special characters(#$@!%&*?_)",
            minlength:"Enter more than 5 characters",
            maxlength:"less than 150 characters are allowed"
        },
         user_type:{
            required:"please select option"
        }, 
        user_valid_pan:{
            required:"please select option"
        },
        user_pan: {
            required: "Enter Pancard Number",
            validPancardNumber: "Enter Valid Pancard Number",
            minlength: "10 characters are required",
            maxlength:"10 characters are required"
        },
        user_20_21_turnover:{
            required:"Select valid option for 2020 - 2021 Turnover!"
        },
        ROI_20_21:{
            required: "Select valid option for 2020 - 2021 ROI"
        },
        ack_number_current20_21:{
            required: "Please enter Acknowledgement Number",
            validString: "Enter valid Acknowledgement number with alphabets, number and special characters(#$@!%&*?_)"
        },
        proof_file_current20_21:{
            required: "Please upload proof",
            extension: "Only jpg, jpeg, png images or PDF, doc, docx file types are allowed",
            filesize: "upto 5MB file size is allowed"
        },
        user_19_20_turnover:{
            required:"Select valid option for 2019 - 2020 Turnover!"
        },
        ROI_19_20:{
            required: "Select valid option for 2019 - 2020 ROI"
        },
        ack_number_previous19_20:{
            required: "Please enter Acknowledgement Number",
            validString: "Enter valid Acknowledgement number with alphabets, number and special characters(#$@!%&*?_)"
        },
        proof_file_previous19_20:{
            required: "Please upload proof",
            extension: "Only jpg, jpeg, png images or PDF, doc, docx file types are allowed",
            filesize: "upto 5MB file size is allowed"
        },
        tdstcs_20_21:{
            required: "Please select the right option for TDS + TCS 2020 - 2021"
        },
        tdstcs_19_20:{
            required: "Please select the right option for TDS + TCS 2019 - 2020"
        },
        contact_user_name:{
            required: "User name is required",
            lettersonlys: "Only alphabets are allowed",
            minlength: "minimum 2 characters are required!",
            maxlength: "maximum 50 characters are allowed!"
        },
        contact_user_designation:{
            required: "User designation is required",
            validString: "Enter valid designation with alphabets, number and special characters(#$@!%&*?_)",
            minlength: "minimum 2 characters are required!",
            maxlength: "maximum 50 characters are allowed!"
        },
        contact_user_address:{
            required: "Address is required",
            validString: "Enter valid Address with alphabets, number and special characters(#$@!%&*?_)",
            minlength: "minimum 10 characters are required!",
            maxlength: "maximum 150 characters are allowed!"
        },
        contact_user_city:{
            required: "City name is required",
            validString: "Enter valid City name with alphabets, number and special characters(#$@!%&*?_)",
            minlength: "minimum 2 characters are required!",
            maxlength: "maximum 50 characters are allowed!"
        },
        contact_user_state:{
            required: "State name is required",
            validString: "Enter valid State name with alphabets, number and special characters(#$@!%&*?_)",
            minlength: "minimum 2 characters are required!",
            maxlength: "maximum 50 characters are allowed!"
        },
        contact_user_pincode:{
            required: "pincode is required",
            digits: "Only numbers are allowed",
            minlength:"6 characters are required",
            minlength:"6 characters are required"
        },
        contact_user_email:{
            required: "User email is required",
            email: "enter valid email address"
        },
        contact_user_phone_number:{
            required: "Phone number is required",
            validPhoneNumber: "Enter 10 digits phone number only. Do not include + or +91 in start",
            minlength: "10 characters are required",
            maxlength: "10 characters are required"
        },
        accept_pp: {
            required: "Please accept Terms & condition"
        }
    },
    errorPlacement: function(error, element) {
        if (element.attr("name") == "user_type") {
            error.insertAfter(".error-placement-user-type");
        }else if(element.attr("name") == "user_valid_pan"){
            error.insertAfter(".error-placement-user-pan");
        }else if(element.attr("name") == "user_20_21_turnover"){
            error.insertAfter(".error-placement-turnover-2021");
        }else if(element.attr("name") == "ROI_20_21"){
            error.insertAfter(".error-placement-ROI-2021");
        }else if(element.attr("name") == "user_19_20_turnover"){
            error.insertAfter(".error-placement-turnover-1920");
        }else if(element.attr("name") == "ROI_19_20"){
            error.insertAfter(".error-placement-ROI-1920");
        }else if(element.attr("name") == "tdstcs_20_21"){
            error.insertAfter(".error-placement-tdstcs-2021");
        }else if(element.attr("name") == "tdstcs_19_20"){
            error.insertAfter(".error-placement-tdstcs-1920");
        }else if(element.attr("name") == "accept_pp"){
            error.insertAfter(".error-placement-accept");
        }else{
            error.insertAfter(element);
        }
    }
    });
});

