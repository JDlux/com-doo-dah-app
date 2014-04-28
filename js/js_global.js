var DooDah = window.DooDah || {}; 

(function ($, DooDah){

DooDah.Services.ActivityService.SetUrls({
	GetActivitiesUrl: "GetAllActivities.php",
	GetActivitiesForMoodUrl: "GetActivitiesForMood.php"
}); 

DooDah.Services.LoginService.SetUrls({
	CreateUserUrl: "AddUser.php"
}); 


})(jQuery, DooDah); 