/*

\brief This is a jQuery widget written in JavaScript for Registration Control
\author Chris Forehand
\date 3/20/14
\verbatim
	Test Cases: 
	
\endverbatim

*/

var DooDah = window.DooDah || {}; 

(function ($, dd, undefined)
{
    //  ------------------------------------------------------------------------------------------------
    // Options for the widget
    //  ------------------------------------------------------------------------------------------------
    
    var _options = {
        DataManager: null,
        IsLoginControl: false,
        LinkRegistration: null, 
        LinkForgotPassword: null
    };

    //  ------------------------------------------------------------------------------------------------
    // This function is called by the jQuery widget engine to create the widget.
    //  ------------------------------------------------------------------------------------------------
    var create = function ()
    {
        var self = this;
        var elm = self.element;
        
        var _strings = {
        	LabelFirstName: "First Name:",
        	LabelLastName: "Last Name:",
        	LabelEmail: "Email:",
        	LabelUserName: "Username:",
        	LabelPassword: "Password:",
        	ButtonRegister: "Register", 
        	ButtonCancel: "Cancel",
        	ButtonLogin: "Login"
        }; 

        //  ------------------------------------------------------------------------------------------------
        // Instance (global) variables.
        //  ------------------------------------------------------------------------------------------------
 
        var _isLoginControl = self.options.IsLoginControl; 
        var _dataManager = self.options.DataManager; 
        var _lnkRegistration = self.options.LinkRegistration != null ? self.options.LinkRegistration : '#'; 
        var _lnkForgotPassword = self.options.LinkForgotPassword != null ? self.options.LinkForgotPassword : '#'; 
      
        /*if(_dataManager == null)
    	{
    		throw new Error ("Data manager is required"); 
    	}*/
        
        //  ------------------------------------------------------------------------------------------------
        // UI elements.
        //  ------------------------------------------------------------------------------------------------        
        var pnlContainer = null;
        var pnlErrorContainer = null; 
        var txtFirstName = null; 
        var lblFirstName = null; 
        var txtLastName = null; 
        var lblLastName = null; 
        var txtEmail = null; 
        var lblEmail = null; 
        var txtUserName = null;
        var lblUserName = null; 
        var txtPassword = null; 
        var lblPassword = null; 
        var pnlButtonContainer = null; 
        var btnSubmit = null; 
        var btnCancel = null; 
        var pnlForgotPassword = null; 
        var lnkForgotPassword = null; 
        var lnkRegisterAccount = null; 
        
        //  ------------------------------------------------------------------------------------------------
        // Initialization code.
        //  ------------------------------------------------------------------------------------------------
        var Init = function ()
        {
            /// <summary>Initialize the widget's DOM elements.</summary>
			elm.addClass("emotion-registration-control"); 
			
            pnlContainer = $("<div />")
                .addClass("pnl-container")
                .appendTo(elm);
                
            pnlErrorContainer = $("<div />")
            	.addClass("pnl-error-container")
            	.addClass("error")
            	.appendTo(pnlContainer); 
                
            txtFirstName =$("<input type='text' />")
                .addClass("reg-form-input")
                .appendTo(pnlContainer);
                
            lblFirstName = $("<label class='reg-form-label' />")
            	.addClass("reg-form-label")
            	.html(_strings.LabelFirstName)
            	.appendTo(pnlContainer)
            	.append(txtFirstName);  
            	
            txtLastName =$("<input type='text' />")
                .addClass("reg-form-input")
                .appendTo(pnlContainer);
                
            lblLastName = $("<label class='reg-form-label' />")
            	.addClass("reg-form-label")
            	.html(_strings.LabelLastName)
            	.appendTo(pnlContainer)
            	.append(txtLastName);  
            
            txtEmail =$("<input type='text' />")
                .addClass("reg-form-input")
                .appendTo(pnlContainer);
                
            lblEmail = $("<label class='reg-form-label' />")
            	.addClass("reg-form-label")
            	.html(_strings.LabelEmail)
            	.appendTo(pnlContainer)
            	.append(txtEmail);  
            	
            txtUserName =$("<input type='text' />")
                .addClass("reg-form-input")
                .appendTo(pnlContainer);
                
            lblUserName = $("<label class='reg-form-label' />")
            	.addClass("reg-form-label")
            	.html(_strings.LabelUserName)
            	.appendTo(pnlContainer)
            	.append(txtUserName);      
            	
            txtPassword =$("<input type='password' />")
                .addClass("reg-form-input")
                .appendTo(pnlContainer);
                
            lblPassword = $("<label class='reg-form-label' />")
            	.addClass("reg-form-label")
            	.html(_strings.LabelPassword)
            	.appendTo(pnlContainer)
            	.append(txtPassword);        
            	
            pnlButtonContainer = $("<div />")
            	.addClass("pnl-button-container")
            	.appendTo(pnlContainer); 	
            
            btnSubmit = $("<button id ='btnSubmit' type='button' />")
            	.addClass("btn-form")
            	.click(btnSubmit_click)
            	.appendTo(pnlButtonContainer); 
            	
            btnCancel = $("<button id='btnCancel' type='button' />")
            	.addClass("btn-form")
            	.html(_strings.ButtonCancel)
            	.click(btnCancel_click)
            	.appendTo(pnlButtonContainer);  
            
            pnlForgotPassword = $("<div />")
            	.addClass("pnl-forgot-password")
            	.appendTo(pnlContainer); 
            
            lnkRegisterAccount = $("<a href='" + _lnkRegistration + "'>Register Account</a>")
        	.addClass("lnk-register-account")
        	.appendTo(pnlForgotPassword)
        	.hide(); 
            
            lnkForgotPassword = $("<a href='#'>Forgot Password?</a>")
            	.addClass("lnk-forgot-password")
            	.appendTo(pnlForgotPassword)
            	.hide(); 
            
            if(_isLoginControl)
        	{
            	lblFirstName.hide();
            	lblLastName.hide(); 
            	lblEmail.hide(); 
            	lnkForgotPassword.show();
            	lnkRegisterAccount.show();
        	}
            
        	SetSubmitLabel(); 
        };

        var SetSubmitLabel = function ()
        {
        	if(_isLoginControl)
        	{
        		btnSubmit.html(_strings.ButtonLogin); 
        	}
        	else
        	{
        		btnSubmit.html(_strings.ButtonRegister); 
        	}
        }; 
        
        var ValidateInputs = function (credentials)
        {
        	if(!_isLoginControl)
        	{
        		var firstName = credentials.FirstName;
        		var lastName = credentials.LastName;
        		var email = credentials.Email;
        		var newUser = credentials.UserName;
        		var newPassword = credentials.Password;
        		
        		if(firstName == null || firstName === "")
				{
					pnlErrorContainer.html("Please provide your first name"); 
					return false; 
				}
				
				if(lastName == null || lastName === "")
				{
					pnlErrorContainer.html("Please provide your last name"); 
					return false; 
				}				
				
				if(email == null || email === "")
				{
					pnlErrorContainer.html("Please provide your email address"); 
					return false; 
				}       		
        		
        		if(newUser == null || newUser === "")
				{
					pnlErrorContainer.html("Please enter a username!"); 
					return false; 
				}
				
				if(newPassword == null || newPassword == "")
				{
					pnlErrorContainer.html("Please enter a password!"); 
					return false;
				}
				
				return true; 
        	}
        	else
        	{
				var username = credentials.UserName; 
				var password = credentials.Password; 
			
				if(username == null || username === "")
				{
					pnlErrorContainer.html("Please enter a valid username!"); 
					return false; 
				}
			
				if(password == null || password == "")
				{
					pnlErrorContainer.html("Please enter a valid password!"); 
					return false;
				}
			
				return true; 	
        	}
        }
        
        var btnCancel_click = function ()
        {	
        	window.location.href = "HomeView.php"; 
        }
                
        var ClearValidationPanel = function ()
        {
            pnlErrorContainer.html(""); 
        }
        
        var btnSubmit_click = function ()
        {
            var credentials = Value(); 
            ClearValidationPanel(); 
                        
            if(ValidateInputs(credentials))
            {
				if(!_isLoginControl)
				{
					return DooDah.Services.LoginService.CreateUser(credentials)
						.done(function (data, status, jqxhr) 
						{
							Clear(); 
							pnlErrorContainer.removeClass("error").addClass("success");
							pnlErrorContainer.html("Account created! Click <b><a href='./HomeView.php'>here</a></b> to Login"); 
						})
						.error(function (data, status, jqxhr)
						{
							console.log("Error" + status); 
						}); 
				}
				else
				{
					var onSuccess = function (data, status, jqxhr)
					{
						window.location.href = data; 
					}
			
					var onError = function (data, status, jqxhr)
					{
						console.log(data); 
					}
			
					return $.ajax({
						type: "POST", 
						url: "./Login.php",
						accepts: "text/html", 
						async: true, 
						data: credentials,
						contentType: "application/x-www-form-urlencoded",
						success: onSuccess, 
						error: onError
					});
				}
            }
        };

        var Value = function ()
        {			
			if(!_isLoginControl)
			{	
				return {
					FirstName: $.trim(txtFirstName.val()),
					LastName: $.trim(txtLastName.val()),
					Email: $.trim(txtEmail.val()),
					UserName: $.trim(txtUserName.val()),
					Password: $.trim(txtPassword.val())
				};
			}
			else
			{
				return {
					UserName: $.trim(txtUserName.val()),
					Password: $.trim(txtPassword.val())
				};	
			}
        };
        
        var Clear = function ()
        {
            if(!_isLoginControl)
            {
            	txtFirstName.val(""); 
            	txtLastName.val(""); 
            	txtEmail.val(""); 
            }
			
			txtUserName.val(""); 
			txtPassword.val(""); 
        };

        //  ------------------------------------------------------------------------------------------------
        // Public methods
        //  ------------------------------------------------------------------------------------------------
        self.Value = Value;
        self.Clear = Clear;
        
        Init();
    };

    //  ------------------------------------------------------------------------------------------------
    // This function is called by the jQuery widget engine to destroy the widget.
    //  ------------------------------------------------------------------------------------------------
    var destroy = function ()
    {
        /// <summary> Use the destroy method to clean up any modifications your widget has made to the DOM </summary>

        // clear things created by us
        this.element.children().remove();
        // invoke the destroy method from the base widget
        this.element.removeData(this.widgetName);
        $.Widget.prototype.destroy.call(this);
    };

    //  ------------------------------------------------------------------------------------------------
    // Create the jQuery widget class
    //  ------------------------------------------------------------------------------------------------
    $.widget("DooDah.RegistrationControl", {
        options: _options,
        _create: create,
        destroy: destroy
    });
})(jQuery, DooDah);