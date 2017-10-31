#pragma strict

var customSkin : GUISkin;

function OnGUI () {
	var buttonWidth : int = 200;
	var buttonHeight : int =  100;
	
	GUI.skin = customSkin;

	if(GUI.Button(Rect(650, 600, buttonWidth, buttonHeight), "Back")){
		Application.LoadLevel("TitleZombie");
	}
}