#pragma strict

var customSkin : GUISkin;

function OnGUI () {
	var buttonWidth : int = 400;
	var buttonHeight : int =  150;
	
	var halfScreenWidth : float = Screen.width / 2;
	var halfButtonWidth : float = buttonWidth / 2;
	
	GUI.skin = customSkin;

	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 150, buttonWidth, buttonHeight), "Play Game")){
		Application.LoadLevel("ZombieHunt");
	}
	
	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 450, buttonWidth, buttonHeight), "Instructions")){
		Application.LoadLevel("Instructions");
	}
	GUI.Label(Rect(800,700, 300, 200),"Made by Cale");
}