var DooDah = window.DooDah || {}; 

DooDah.Services = DooDah.Services || {}; 

DooDah.Services.LoginService = (function (dd, $)
{

	var _createUserUrl = null; 
	var _validateUserUrl = null; 
	var _deleteUserUrl = null; 
	
	var SetUrls = function (urls)
	{
		_createUserUrl = urls.CreateUserUrl;
		_validateUserUrl = urls.ValidateUserUrl; 
		_deleteUserUrl = urls.DeleteUserUrl; 
	}
	
	var ValidateUser = function (credentials)
	{
		return $.ajax({
			type: "POST", 
			url: _validateUserUrl,
			async: true, 
			data: credentials,
			accept: "application/json", 
			contentType: "application/x-www-form-urlencoded",
			dataType: "json"
		}); 
	}


	var CreateUser = function (details)
	{
		return $.ajax({
			type: "POST",
			url: _createUserUrl, 
			data: details, 
			async: true, 
			accept: "application/x-www-form-urlencoded"
		}); 
	}

	return {
		SetUrls: SetUrls,
		ValidateUser: ValidateUser, 
		CreateUser: CreateUser
	}; 

})(DooDah, jQuery);  