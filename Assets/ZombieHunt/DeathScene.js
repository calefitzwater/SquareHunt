#pragma strict

var customSkin : GUISkin;
var timeAlive : float;

function Update(){
	timeAlive = Timer1.time;
}

function OnGUI () {
	var buttonWidth : int = 400;
	var buttonHeight : int =  150;
	
	var halfScreenWidth : float = Screen.width / 2;
	var halfButtonWidth : float = buttonWidth / 2;
	
	GUI.skin = customSkin;

	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 150, buttonWidth, buttonHeight), "Try Again")){
		Application.LoadLevel("ZombieHunt");
	}
	
	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 450, buttonWidth, buttonHeight), "Title Screen")){
		Application.LoadLevel("TitleZombie");
	}
	
	GUI.Label(Rect(halfScreenWidth - 250, 45, 500, buttonHeight), "You Survived for "+timeAlive+" seconds");
}