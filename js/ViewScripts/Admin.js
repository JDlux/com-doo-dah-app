$(document).ready(function () 
{
	var lnkAddUser = $("#addUser"); 
	var lnkDeleteUser = $("#deleteUser"); 
	var lnkAddActivity = $("deleteUser"); 
	var pnlAddUser = null; 
	var pnlDeleteUser = null;
	var pnlAddActivity = null; 
	var txtFirstName = null; 
	var txtLastName = null;
	var txtEmail = null;
	var txtUsername = null; 
	var txtPassword = null; 
	var txtDeleteUser = null; 
	
	var SetupAddUserPanel = function ()
	{
		lnkAddUser.click(lnkAddUser_click); 
				
		pnlAddUser = $("<div id='addUserPanel'></div>")
			.addClass("pnl-add-user")
			.appendTo("body")
			.hide();
		
		var title = $("<h3 style='color:red;'>Add User Account</h3>")
			.appendTo(pnlAddUser); 
		
		var pnlAddUserForm = $("<form name='input' action='AddUser.php' method='post'></form>")
			.appendTo(pnlAddUser);  
			
		txtFirstName = $("<input type='text'/>")
			.addClass("admin-reg-form-input")
			.appendTo(pnlAddUserForm);
			
		var lblFirstName = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("First Name:")
			.appendTo(pnlAddUserForm)
			.append(txtFirstName); 
			
		txtLastName = $("<input type='text'/>")
			.addClass("admin-reg-form-input")
			.appendTo(pnlAddUserForm); 
			
		var lblLastName = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("Last Name:")
			.appendTo(pnlAddUserForm)
			.append(txtLastName); 
			
		txtEmail = $("<input type='text'/>")
			.addClass("admin-reg-form-input")
			.appendTo(pnlAddUserForm); 
			
		var lblEmail = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("Email:")
			.appendTo(pnlAddUserForm)
			.append(txtEmail); 
			
		txtUsername = $("<input type='text'/>")
			.addClass("admin-reg-form-input")
			.appendTo(pnlAddUserForm); 
			
		var lblUsername = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("Username:")
			.appendTo(pnlAddUserForm)
			.append(txtUsername); 

		txtPassword = $("<input type='password'/>")
			.addClass("admin-reg-form-input")
			.appendTo(pnlAddUserForm); 
			
		var lblPassword = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("Password:")
			.appendTo(pnlAddUserForm)
			.append(txtPassword); 
			
		var submit = $("<input type='submit' value='Create User'>")
			.appendTo(pnlAddUserForm); 
			
		pnlAddUserForm.submit(Validate); 

		var btnClose = $("<button name='Close'>Close</button>")
			.appendTo(pnlAddUser)
			.click(btnClose_click);
	}; 
	
	var SetupDeleteUserPanel = function ()
	{
		lnkDeleteUser.click(lnkDeleteUser_click); 
		
		pnlDeleteUser = $('<div></div>')
			.addClass("pnl-delete-user")
			.appendTo("body")
			.hide(); 
		
		var title = $("<h3 style='color:red;'>Delete User Account</h3>")
			.appendTo(pnlDeleteUser); 
			
		var pnlDeleteUserForm = $("<form name='input' action='DeleteUser.php' method='post'></form>")
			.appendTo(pnlDeleteUser);  
			
		txtDeleteUser = $("<input type='text' />")
			.addClass("admin-reg-form-input")
			.appendTo(); 
			
		var lblDeleteUser = $("<label/>")
			.addClass("admin-reg-form-label")
			.html("Delete Username:")
			.appendTo(pnlDeleteUserForm)
			.append(txtFirstName); 
		
		var submit = $("<input type='submit' value='Delete User'>")
			.appendTo(pnlDeleteUserForm); 
			
		pnlDeleteUserForm.submit(ValidateDeleteUser); 

		var btnClose = $("<button name='Close'>Close</button>")
			.appendTo(pnlDeleteUser)
			.click(btnClose_click);
		
	}; 
	
	var Validate = function()
	{
		var firstName = txtFirstName.val();
		var lastName = txtLastName.val();
		var email = txtEmail.val();
		var username = txtUsername.val();
		var password = txtPassword.val();

		if(firstName == null || firstName == "")
		{
			alert("First name is required");
			return false;  
		}
		
		if(lastName == null || lastName == "")
		{
			alert("Last name is required");
			return false;  
		}	
		
		if(email == null || email == "")
		{
			alert("Email is required");
			return false;  
		}
		
		if(username == null || username == "")
		{
			alert("Username is required");
			return false;  
		}
		
		if(password == null || password == "")
		{
			alert("Password is required");
			return false;  
		}		
		
		return true; 
	}; 
	
	var ValidateDeleteUser = function ()
	{
		var userToDelete = txtDeleteUser.val(); 
		
		if(userToDelete == null || userToDelete == "")
		{
			alert("Provide a username to delete a user");
			return false; 
		}
		
		return true; 
	}
	
	var lnkAddUser_click = function ()
	{
		if(pnlDeleteUser.is(":visible"))
		{
			pnlDeleteUser.hide(); 
		}
		
		pnlAddUser.show(); 
	}; 
	
	var lnkDeleteUser_click = function ()
	{
		if(pnlAddUser.is(":visible"))
		{
			pnlAddUser.hide(); 	
		}
	
		pnlDeleteUser.show(); 
	}; 
	
	var Clear = function ()
	{
		txtFirstName.val(""); 
		txtLastName.val(""); 
		txtEmail.val(""); 
		txtUsername.val(""); 
		txtPassword.val(""); 
		txtDeleteUser.val(""); 
	}; 
	
	var btnClose_click = function ()
	{		
		Clear(); 
		
		if(pnlAddUser.is(":visible"))
		{
			pnlAddUser.hide(); 
		}
		
		if(pnlDeleteUser.is(":visible"))
		{
			pnlDeleteUser.hide(); 
		}
	}; 
	
	
	SetupAddUserPanel(); 
	SetupDeleteUserPanel(); 


}); 