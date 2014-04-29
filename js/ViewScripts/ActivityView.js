$(document).ready(function () 
{	
	//var pnlFilterControl = $("#pnlFilterControl"); 
	//pnlFilterControl.FilterControl({}); 
	
	
	var ctrlActivitySummaryView = $("#ctrlActivitySummaryView"); 
	ctrlActivitySummaryView.ActivityListViewControl({}); 
	
	var moodValue = -1; 
	
	if(userMood == 'afraid')
	{
		moodValue = Mood.Afraid; 
	}
	else if(userMood == 'lonely')
	{
		moodValue = Mood.Lonely; 
	}
	else if(userMood == 'sad')
	{
		moodValue = Mood.Sad; 
	}
	else if(userMood == 'regret')
	{
		moodValue = Mood.Regret; 
	}	
	else if(userMood == 'dread')
	{
		moodValue = Mood.Dread; 
	}	
	else if(userMood == 'angry')
	{
		moodValue = Mood.Angry; 
	}	
	else if(userMood == 'confident')
	{
		moodValue = Mood.Confident; 
	}	
	else if(userMood == 'happy')
	{
		moodValue = Mood.Happy; 
	}	
	else 
	{
		moodValue = Mood.Anxious; 
	}
	
	ctrlActivitySummaryView.ActivityListViewControl("SetMoodContext", moodValue); 
	ctrlActivitySummaryView.ActivityListViewControl("LoadAsync");
}); 